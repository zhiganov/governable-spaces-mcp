#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import crypto from 'node:crypto';
import express from 'express';
import { z } from 'zod';
import { searchAll } from './search.js';
import {
  CASES, FAILURE_MODES, GOVERNANCE_FORMS,
  POLICY_STRATEGIES, GLOSSARY, QUOTES,
} from './data/index.js';

function createServer(): McpServer {
  const server = new McpServer({
    name: 'governable-spaces',
    version: '0.1.0',
  });

  // === ROUTING TOOLS (2) ===

  server.registerTool('start_analysis', {
    title: 'Start Governable Spaces Analysis',
    description: 'Branching entry-point. Pick a situation type to get a scaffold of key questions plus recommended next tools, all grounded in Schneider\'s Governable Spaces.',
    inputSchema: {
      situation: z.enum([
        'diagnose_feudalism',
        'design_governable_space',
        'name_failure_mode',
        'exploring',
      ]).describe('The kind of analysis you need to run.'),
    },
  }, async ({ situation }) => {
    const scaffolds: Record<string, { questions: string[]; next_tools: string[]; framing: string }> = {
      diagnose_feudalism: {
        framing: 'A platform or online community shows signs of admin-fiat / unaccountable power. Goal: name the failure mode, surface countering governance forms, propose moves.',
        questions: [
          'Who has unilateral power, and what do they have power over (content, membership, rules, monetization)?',
          'Do members have meaningful voice (input that affects outcomes), exit (live alternatives), or ownership stake?',
          'What domain is this (online_community, federated_network, platform_cooperative, dao, public_infrastructure, workplace, movement, state)?',
          'Has the community pushed back? What happened?',
        ],
        next_tools: ['diagnose_implicit_feudalism', 'find_failure_mode', 'suggest_governance_forms', 'list_policy_strategies'],
      },
      design_governable_space: {
        framing: 'You want to build or strengthen democratic self-governance in an online space. Goal: assess against governable-space requirements, surface governance forms and precedents.',
        questions: [
          'What is the community? Who is in it, and what is the boundary?',
          'What domain (online_community, federated_network, platform_cooperative, dao, etc.)?',
          'What scale (small group, mid-size org, network of networks)?',
          'What governance forms have you considered (sortition, representational, plural-voting, federated, consensus)?',
          'What hard cases do you anticipate (moderation, financial control, exit-with-data)?',
        ],
        next_tools: ['assess_governable_space', 'find_precedent_case', 'suggest_governance_forms'],
      },
      name_failure_mode: {
        framing: 'Something in an online space feels broken in a counter-democratic way. Goal: match it to one of Schneider\'s named failure-mode patterns or instances.',
        questions: [
          'What is the visible symptom (admin overreach, lack of accountability, captured governance, extractive design)?',
          'Is this a one-off incident (instance) or a recurring pattern across spaces (pattern)?',
          'Who benefits from the current arrangement, and at whose expense?',
          'What domain?',
        ],
        next_tools: ['find_failure_mode', 'apply_democratic_mediation', 'find_quote'],
      },
      exploring: {
        framing: 'You want to learn or browse Schneider\'s framing without a specific case in mind.',
        questions: [
          'A theme to explore (implicit feudalism, governable stack, modular politics, metagovernance, democratic mediation)?',
          'A domain to anchor in (federated_network, dao, platform_cooperative, etc.)?',
          'A specific concept to define?',
        ],
        next_tools: ['get_glossary_term', 'find_quote', 'apply_democratic_mediation', 'find_precedent_case'],
      },
    };

    const scaffold = scaffolds[situation];
    return {
      content: [{ type: 'text' as const, text: JSON.stringify(scaffold, null, 2) }],
    };
  });

  server.registerTool('suggest_next_step', {
    title: 'Suggest Next Tool',
    description: 'Given a brief context summary and which tools have already been called, suggest the next tool with rationale.',
    inputSchema: {
      context_summary: z.string().describe('1-3 sentences describing the user\'s situation and what has been gathered so far.'),
      tools_used_so_far: z.array(z.string()).optional().describe('Tool names already called.'),
    },
  }, async ({ context_summary, tools_used_so_far }) => {
    const ctx = context_summary.toLowerCase();
    const used = new Set(tools_used_so_far ?? []);

    type Suggestion = { tool: string; rationale: string };
    const candidates: Suggestion[] = [];

    if (!used.has('diagnose_implicit_feudalism') && /(admin|owner|unaccountab|fiat|unilatera|ban|kick|moderat|feudal)/.test(ctx)) {
      candidates.push({ tool: 'diagnose_implicit_feudalism', rationale: 'Classify the situation against Schneider\'s feudalism / governable-space / open-access / democratically-mediated rubric.' });
    }
    if (!used.has('find_failure_mode') && /(pattern|recurring|happen.*again|same problem|implicit.*feudal|politics.*no.*politics|colonial|captured)/.test(ctx)) {
      candidates.push({ tool: 'find_failure_mode', rationale: 'Match the dynamics to a named failure-mode pattern with example.' });
    }
    if (!used.has('assess_governable_space') && /(design|build|govern.*better|democra|exit|voice|ownership)/.test(ctx)) {
      candidates.push({ tool: 'assess_governable_space', rationale: 'Walk through Schneider\'s exit/voice/ownership-stake requirements for a genuine governable space.' });
    }
    if (!used.has('find_precedent_case') && /(community|platform|cooperat|dao|federat|fediverse)/.test(ctx)) {
      candidates.push({ tool: 'find_precedent_case', rationale: 'Surface analogous democratic-medium cases from the book to learn from.' });
    }
    if (!used.has('suggest_governance_forms') && /(sortition|represent|plural|consensus|how.*govern|primitive|form)/.test(ctx)) {
      candidates.push({ tool: 'suggest_governance_forms', rationale: 'Surface democratic primitives (sortition, federated subsidiarity, plural voting, etc.) that fit the situation.' });
    }
    if (!used.has('apply_democratic_mediation') && /(market|capital|extract|monetiz|engagement|growth|neutral|apolitical)/.test(ctx)) {
      candidates.push({ tool: 'apply_democratic_mediation', rationale: 'Reframe a market/feudal-mind framing into a democratic-mediation framing.' });
    }
    if (!used.has('list_policy_strategies') && (used.has('find_failure_mode') || used.has('diagnose_implicit_feudalism'))) {
      candidates.push({ tool: 'list_policy_strategies', rationale: 'You have a diagnosis — surface the policy/regulatory moves that counter it at scale.' });
    }
    if (!used.has('find_quote')) {
      candidates.push({ tool: 'find_quote', rationale: 'Pull a grounding Schneider passage for citation or framing.' });
    }
    if (!used.has('get_glossary_term')) {
      candidates.push({ tool: 'get_glossary_term', rationale: 'Look up a specific Schneider term (implicit feudalism, governable space, modular politics, metagovernance, etc.).' });
    }

    const top = candidates[0] ?? { tool: 'start_analysis', rationale: 'No clear signal — restart with start_analysis to pick a branch.' };
    return {
      content: [{ type: 'text' as const, text: JSON.stringify({ suggested: top, alternatives: candidates.slice(1, 4) }, null, 2) }],
    };
  });

  // === DIAGNOSTIC TOOLS (4) ===

  server.registerTool('diagnose_implicit_feudalism', {
    title: 'Diagnose against Schneider\'s framing',
    description: 'Given a description of an online space, classify it as governable_space / implicitly_feudal / open_access / democratically_mediated. Heuristic — Schneider Ch. 1 emphasizes that a forum or comment section is not by itself a governable space.',
    inputSchema: {
      description: z.string().describe('1-3 paragraph description of the platform, community, or governance arrangement.'),
    },
  }, async ({ description }) => {
    const d = description.toLowerCase();
    // Strip negated phrases ("no appeal", "cannot fork", "without voice") so those
    // signals don't register as positive. Coarse but catches the obvious cases.
    const nd = d.replace(/\b(no|cannot|can'?t|not|without|never|lack(?:s|ing)?|absence of)\s+(\w+(?:\s+\w+){0,3})/g, ' ');
    let classification: 'governable_space' | 'implicitly_feudal' | 'open_access' | 'democratically_mediated' = 'open_access';
    const reasons: string[] = [];

    const hasUnilateral = /(unilatera|admin\s+fiat|owner.*ban|sole\s+(?:owner|admin)|benevolent\s+dictator|ban\s+at\s+will|terms\s+of\s+service\s+only)/.test(d) || /\b(admin|owner|moderator)\b/.test(d) && /(unaccountab|fiat|unilatera|at\s+will|absolute|unchecked)/.test(d);
    const hasVoice = /(voice|input|propose|deliberat|talk\s*page|noticeboard|forum vote|petition.*responsive|community\s+input)/.test(nd);
    const hasExit = /\b(exit|leave|migrate|fork|federate|portab)/.test(nd);
    const hasOwnership = /\b(stake|cooperative|coop\b|member-?own|user-?own|token|equity|shareholder|collective\s+ownership)/.test(nd);
    const hasFormalDemocratic = /(\belect|\bvote|jury|sortition|representat|consensus|constitut|bylaw|recall\s+procedure)/.test(nd);
    const hasAccountability = /(accountab|appeal|recall|sanction|impeach|remove.*admin|due\s+process|community\s+review)/.test(nd);

    const democraticScore = [hasVoice, hasExit, hasOwnership, hasFormalDemocratic, hasAccountability].filter(Boolean).length;

    const detected: string[] = [];
    if (hasVoice) detected.push('voice');
    if (hasExit) detected.push('exit');
    if (hasOwnership) detected.push('ownership stake');
    if (hasFormalDemocratic) detected.push('formal democratic primitives');
    if (hasAccountability) detected.push('accountability mechanisms');

    if (democraticScore >= 4 && hasFormalDemocratic && hasAccountability) {
      classification = 'democratically_mediated';
      reasons.push(`Multiple democratic affordances present (${detected.join(' + ')}) — Schneider's "democratic mediation" goal achieved structurally.`);
    } else if (democraticScore >= 3 && (hasVoice || hasFormalDemocratic) && hasAccountability) {
      classification = 'governable_space';
      reasons.push(`Meaningful ${detected.join(' + ')} — qualifies as a governable space per Schneider Ch. 1, even if not full democratic mediation.`);
    } else if (hasUnilateral && democraticScore <= 1) {
      classification = 'implicitly_feudal';
      reasons.push('Unilateral admin/owner power with little or no voice/exit/ownership — Schneider\'s "implicit feudalism" pattern (Ch. 1). The feudalism is implicit because it\'s naturalized in software defaults and ToS, not announced.');
    } else {
      classification = 'open_access';
      reasons.push('No clear feudal hierarchy but also no structural democratic mediation — closer to open-access. Schneider warns (Ch. 1) that a forum or comment section is NOT a governable space merely by existing.');
    }

    return {
      content: [{ type: 'text' as const, text: JSON.stringify({
        classification,
        democratic_affordances_detected: {
          voice: hasVoice,
          exit: hasExit,
          ownership_stake: hasOwnership,
          formal_democratic_primitives: hasFormalDemocratic,
          accountability_mechanisms: hasAccountability,
        },
        reasoning: reasons.join(' '),
        caveat: 'Heuristic match against Schneider\'s framing, not a definitive judgment. A space MUST give participants meaningful exit, voice, AND ownership stake to qualify as governable.',
        next_tool_hint: classification === 'implicitly_feudal'
          ? 'Try find_failure_mode to identify the specific pattern at work, then suggest_governance_forms for countering primitives.'
          : classification === 'governable_space' || classification === 'democratically_mediated'
          ? 'Try find_precedent_case for sibling spaces to learn from, or assess_governable_space for a fuller rubric.'
          : 'Try start_analysis with situation="exploring" or assess_governable_space to find what\'s missing.',
      }, null, 2) }],
    };
  });

  server.registerTool('find_failure_mode', {
    title: 'Find Failure Mode Patterns',
    description: 'Match a situation to one or more named failure-mode patterns from Schneider\'s catalog. Each pattern can have associated instances (specific historical cases). Returns up to 3 patterns plus their instances.',
    inputSchema: {
      domain: z.string().optional().describe('Domain hint (online_community, federated_network, platform_cooperative, dao, public_infrastructure, workplace, movement, state).'),
      signs: z.array(z.string()).optional().describe('Observed signs / dynamics, free text.'),
      kind: z.enum(['pattern', 'instance', 'any']).optional().describe('Filter by entry kind. Default: any.'),
    },
  }, async ({ domain, signs, kind }) => {
    const signsBlob = (signs ?? []).join(' ').toLowerCase();
    const domainKey = (domain ?? '').toLowerCase();
    const kindFilter = kind ?? 'any';

    const candidates = FAILURE_MODES.filter(f => kindFilter === 'any' || f.kind === kindFilter);

    const scored = candidates.map(f => {
      let score = 0;
      if (domainKey && f.domain_examples) {
        for (const dKey of Object.keys(f.domain_examples)) {
          if (dKey.toLowerCase().includes(domainKey) || domainKey.includes(dKey.toLowerCase())) score += 3;
        }
      }
      if (signsBlob) {
        const haystack = `${f.name} ${f.signature} ${f.example}`.toLowerCase();
        for (const word of signsBlob.split(/\s+/).filter(w => w.length > 3)) {
          if (haystack.includes(word)) score += 1;
        }
      }
      return { f, score };
    }).sort((a, b) => b.score - a.score);

    const topPatterns = scored.filter(s => s.score > 0 && s.f.kind === 'pattern').slice(0, 3).map(s => s.f);
    const instancesForTop = topPatterns.flatMap(p =>
      FAILURE_MODES.filter(f => f.kind === 'instance' && f.pattern_ids.includes(p.id))
    );
    const topInstances = scored.filter(s => s.score > 0 && s.f.kind === 'instance' && !instancesForTop.find(i => i.id === s.f.id)).slice(0, 3).map(s => s.f);

    if (topPatterns.length === 0 && topInstances.length === 0) {
      const list = FAILURE_MODES.filter(f => f.kind === 'pattern').map(f => `  ${f.id} — ${f.name}`).join('\n');
      return { content: [{ type: 'text' as const, text: `No clear match. Available failure-mode patterns:\n${list}` }] };
    }
    return { content: [{ type: 'text' as const, text: JSON.stringify({
      patterns: topPatterns,
      instances_of_top_patterns: instancesForTop,
      other_matched_instances: topInstances,
    }, null, 2) }] };
  });

  server.registerTool('find_precedent_case', {
    title: 'Find Precedent Cases',
    description: 'Surface 3-5 democratic-medium cases from Schneider that resemble a situation, by domain and concept.',
    inputSchema: {
      domain: z.string().describe('Domain (online_community, federated_network, platform_cooperative, dao, public_infrastructure, workplace, movement, state).'),
      what_governed: z.string().optional().describe('What is being governed (e.g., "moderation policy", "financial decisions", "membership boundaries").'),
      scale: z.string().optional().describe('Scale hint: small group, mid-size org, network of networks.'),
    },
  }, async ({ domain, what_governed, scale }) => {
    const dKey = domain.toLowerCase();
    const candidates = CASES.filter(c =>
      c.domain.toLowerCase().includes(dKey) || dKey.includes(c.domain.toLowerCase())
    );

    const scored = candidates.map(c => {
      let score = 1; // domain match
      if (what_governed) {
        const blob = `${c.brief} ${c.community} ${c.democratic_features.join(' ')} ${c.lessons_or_failures}`.toLowerCase();
        for (const word of what_governed.toLowerCase().split(/\s+/).filter(w => w.length > 3)) {
          if (blob.includes(word)) score += 2;
        }
      }
      if (scale) {
        const blob = `${c.brief} ${c.community}`.toLowerCase();
        if (blob.includes(scale.toLowerCase())) score += 1;
      }
      return { c, score };
    }).sort((a, b) => b.score - a.score);

    const top = scored.slice(0, 5).map(s => s.c);
    if (top.length === 0) {
      return { content: [{ type: 'text' as const, text: `No cases in domain "${domain}". Available domains: ${[...new Set(CASES.map(c => c.domain))].join(', ')}` }] };
    }
    return { content: [{ type: 'text' as const, text: JSON.stringify(top, null, 2) }] };
  });

  server.registerTool('list_policy_strategies', {
    title: 'List Policy Strategies',
    description: 'Surface policy / movement / regulatory moves (governable-stack acts, antitrust as democracy-tech, public-option mandates, platform-cooperative incentives, etc.) that counter a given failure mode or operate in a given domain.',
    inputSchema: {
      failure_mode_id: z.string().optional().describe('Specific failure_mode ID to find counters for.'),
      domain: z.string().optional().describe('Domain hint.'),
    },
  }, async ({ failure_mode_id, domain }) => {
    let strategies = POLICY_STRATEGIES;
    if (failure_mode_id) {
      strategies = strategies.filter(s => s.target_failure_mode_ids.includes(failure_mode_id));
      if (strategies.length === 0) {
        const ids = POLICY_STRATEGIES.flatMap(s => s.target_failure_mode_ids);
        return { content: [{ type: 'text' as const, text: `No strategies tagged for "${failure_mode_id}". Tagged failure-mode IDs across all strategies: ${[...new Set(ids)].join(', ')}` }] };
      }
    }
    if (domain) {
      const dKey = domain.toLowerCase();
      strategies = strategies.filter(s => {
        const exampleCases = s.example_case_ids.map(id => CASES.find(c => c.id === id)).filter(Boolean);
        return exampleCases.some(c => c!.domain.toLowerCase().includes(dKey));
      });
    }
    if (strategies.length === 0) {
      return { content: [{ type: 'text' as const, text: 'No matching strategies. Call without filters to see all.' }] };
    }
    return { content: [{ type: 'text' as const, text: JSON.stringify(strategies, null, 2) }] };
  });

  // === DESIGN TOOLS (3) ===

  server.registerTool('assess_governable_space', {
    title: 'Assess Against Governable-Space Requirements',
    description: 'Returns Schneider\'s structural requirements for a governable space (voice, exit, ownership stake, accountability) plus the relevant governance forms, formatted as a fillable rubric. The agent walks through with the user.',
    inputSchema: {
      space_description: z.string().optional().describe('Optional 1-3 paragraph description of the space being assessed. If provided, surfaces governance forms and cases that resemble it.'),
    },
  }, async ({ space_description }) => {
    const requirements = [
      {
        name: 'Voice',
        description: 'Participants MUST have meaningful input that affects governance outcomes — not just a comment section, but structured mechanisms (proposals, deliberation, voting, sortition juries) whose results are binding or seriously consulted.',
        diagnostic_questions: [
          'Can a member propose a rule change and have it deliberated by the community?',
          'Is there a mechanism by which member input materially shapes outcomes (vs. consultative-only)?',
          'Are there structured forums for dissent (talk pages, noticeboards, appeal processes)?',
        ],
      },
      {
        name: 'Exit',
        description: 'Participants MUST have meaningful exit options — live alternatives where their data, relationships, and identity can migrate. A platform with no portability or no federation has no real exit.',
        diagnostic_questions: [
          'Can a member leave with their data and contributions intact?',
          'Are there live alternative platforms or instances they can move to?',
          'Does the platform support federation, fork, or migration?',
        ],
      },
      {
        name: 'Ownership Stake',
        description: 'Participants SHOULD have some form of ownership or stake — economic (cooperative shares, tokens), political (governance seats), or both. Without stake, voice and exit alone reduce members to consumers.',
        diagnostic_questions: [
          'Do members have an economic claim on the platform (revenue share, ownership)?',
          'Do members have a political claim (governance vote, seat on board)?',
          'Is the stake transferable, exclusive to members, or held collectively?',
        ],
      },
      {
        name: 'Accountability',
        description: 'Admin/owner power MUST be subject to community oversight — appeals, recall, term limits, transparent rule-making. Implicit feudalism is precisely the absence of accountability for those who hold power.',
        diagnostic_questions: [
          'Are admin/moderator decisions appealable to the community?',
          'Can admins/moderators be recalled or removed by the community?',
          'Are governance rules made transparently or imposed unilaterally?',
        ],
      },
    ];

    const relevantGovernanceForms = GOVERNANCE_FORMS.slice(0, 8).map(g => ({
      id: g.id,
      name: g.name,
      brief: g.description.slice(0, 160),
    }));

    return {
      content: [{ type: 'text' as const, text: JSON.stringify({
        instructions: 'Walk through the four requirements with the user. For each, ask the diagnostic_questions and record whether the space embodies, partially embodies, or lacks the requirement. At the end, summarize gaps and call suggest_governance_forms to surface countering primitives.',
        requirements,
        relevant_governance_forms: relevantGovernanceForms,
        space_description_received: space_description ?? '(none)',
      }, null, 2) }],
    };
  });

  server.registerTool('find_similar_case', {
    title: 'Find Similar Cases (and Their Governance Designs)',
    description: 'Like find_precedent_case but framed for design — returns cases in the same domain along with the democratic features and governance forms they use, to learn from.',
    inputSchema: {
      domain: z.string().describe('Domain (online_community, federated_network, platform_cooperative, dao, public_infrastructure, workplace, movement, state).'),
      what_governed: z.string().describe('What is being governed.'),
      scale: z.string().optional().describe('Scale hint.'),
    },
  }, async ({ domain, what_governed, scale }) => {
    const dKey = domain.toLowerCase();
    const wKey = what_governed.toLowerCase();
    const scored = CASES.map(c => {
      let score = 0;
      if (c.domain.toLowerCase().includes(dKey) || dKey.includes(c.domain.toLowerCase())) score += 3;
      const blob = `${c.brief} ${c.democratic_features.join(' ')} ${c.lessons_or_failures}`.toLowerCase();
      for (const word of wKey.split(/\s+/).filter(w => w.length > 3)) {
        if (blob.includes(word)) score += 2;
      }
      if (scale) {
        if (`${c.brief} ${c.community}`.toLowerCase().includes(scale.toLowerCase())) score += 1;
      }
      return { c, score };
    }).filter(s => s.score > 0).sort((a, b) => b.score - a.score);

    const top = scored.slice(0, 5).map(s => ({
      id: s.c.id,
      name: s.c.name,
      domain: s.c.domain,
      brief: s.c.brief,
      community: s.c.community,
      democratic_features: s.c.democratic_features,
      governance_form_ids: s.c.governance_form_ids,
      lessons_or_failures: s.c.lessons_or_failures,
      source_chapter: s.c.source_chapter,
    }));

    if (top.length === 0) {
      return { content: [{ type: 'text' as const, text: `No matches. Available domains: ${[...new Set(CASES.map(c => c.domain))].join(', ')}` }] };
    }
    return { content: [{ type: 'text' as const, text: JSON.stringify(top, null, 2) }] };
  });

  server.registerTool('suggest_governance_forms', {
    title: 'Suggest Governance Forms',
    description: 'Surface democratic primitives (sortition, federated subsidiarity, plural voting, consensus, etc.) that fit a need, by failure mode they counter or by domain.',
    inputSchema: {
      countering_failure_mode_id: z.string().optional().describe('Failure mode you want to counter (e.g., "implicit-feudalism").'),
      domain: z.string().optional().describe('Domain hint.'),
      max_results: z.number().int().min(1).max(15).optional().describe('Max forms to return (default 5, hard cap 15).'),
    },
  }, async ({ countering_failure_mode_id, domain, max_results }) => {
    const cap = Math.min(max_results ?? 5, 15);
    let forms = GOVERNANCE_FORMS;

    if (countering_failure_mode_id) {
      forms = forms.filter(g => g.countered_failure_mode_ids.includes(countering_failure_mode_id));
      if (forms.length === 0) {
        const ids = GOVERNANCE_FORMS.flatMap(g => g.countered_failure_mode_ids);
        return { content: [{ type: 'text' as const, text: `No governance forms tagged as countering "${countering_failure_mode_id}". Tagged failure-mode IDs: ${[...new Set(ids)].join(', ')}` }] };
      }
    }

    if (domain) {
      const dKey = domain.toLowerCase();
      forms = forms.filter(g => {
        const exampleCases = g.example_case_ids.map(id => CASES.find(c => c.id === id)).filter(Boolean);
        return exampleCases.some(c => c!.domain.toLowerCase().includes(dKey));
      });
    }

    const top = forms.slice(0, cap);
    if (top.length === 0) {
      return { content: [{ type: 'text' as const, text: 'No matching governance forms.' }] };
    }
    return { content: [{ type: 'text' as const, text: JSON.stringify(top, null, 2) }] };
  });

  // === REFERENCE TOOLS (3) ===

  server.registerTool('apply_democratic_mediation', {
    title: 'Apply Democratic Mediation Reframe',
    description: 'Given a market/feudal-mind framing of a problem, return the democratic-mediation reframe with a grounding Schneider passage. Schneider\'s central move is to treat governance design as the medium through which democratic life happens.',
    inputSchema: {
      market_or_feudal_framing: z.string().describe('A market/feudal-mind framing. E.g., "platforms must moderate", "we need a benevolent dictator", "engagement metrics are neutral".'),
    },
  }, async ({ market_or_feudal_framing }) => {
    const m = market_or_feudal_framing.toLowerCase();

    const candidateQuotes = QUOTES.filter(q => {
      const blob = `${q.text} ${q.themes.join(' ')}`.toLowerCase();
      return q.themes.some(t => /(implicit-feudalism|democratic-mediation|governable-space|metagovernance|politics-of-no-politics)/.test(t.toLowerCase()))
        || /(implicit feudalism|democratic mediation|governable|metagovernance)/.test(blob);
    }).slice(0, 1);

    let reframe = '';
    if (/(must moderat|moderat.*neutral|content moderat|admin.*decis)/.test(m)) {
      reframe = `Schneider (Ch. 1) reframes "moderation" as governance — moderation MUST be subject to community appeal and structured deliberation, not admin fiat. The democratic-mediation alternative: design moderation as a participatory process (talk pages, juries, federated subsidiarity) rather than a unilateral act of platform owners.`;
    } else if (/(benevolent dictator|founder|owner.*lead|strong.*leader|admin.*needed)/.test(m)) {
      reframe = `Schneider (Ch. 1, "implicit feudalism") reframes the "benevolent dictator" framing as feudal default — the trope assumes that someone MUST hold unaccountable power. The democratic-mediation alternative: design accountability primitives (sortition, recall, term limits, federated subsidiarity) into the platform from the start, so that leadership emerges through structure rather than founder fiat.`;
    } else if (/(neutral|apolitical|just.*technical|engagement.*metric|algorithm.*neutral)/.test(m)) {
      reframe = `Schneider (Ch. 2, "politics of no politics") reframes "neutral / apolitical / technical" framings as concealed political choices. The democratic-mediation alternative: surface the political design choices (whose voice gets amplified, who has standing to appeal, what metrics get optimized) and put them under democratic deliberation rather than treating them as natural.`;
    } else if (/(scale|too big|cant.*all.*decide|dao.*plutocrat|whale)/.test(m)) {
      reframe = `Schneider (Ch. 3-4) reframes the "scale" objection through federation and modular politics. The democratic-mediation alternative: nest spaces with subsidiarity (decisions at the smallest competent scale), federate across spaces, and make governance modular and stack-composable rather than monolithic.`;
    } else if (/(market.*decid|user.*choose|exit.*enough|just.*leave)/.test(m)) {
      reframe = `Schneider (Ch. 1) reframes "exit alone is enough" — exit without voice or ownership reduces members to consumers, replicating market logic. The democratic-mediation alternative: voice + exit + ownership stake together, with structured accountability mechanisms.`;
    } else {
      reframe = `No specific reframe heuristic matched. General democratic-mediation move: from market/feudal-mind (consumer, admin fiat, neutral platform, engagement) → to democratic-mediation (participant, structured accountability, contested design choices, deliberation). See "Democratic Mediums" (Ch. 3) and "Governable Stacks" (Ch. 4).`;
    }

    return {
      content: [{ type: 'text' as const, text: JSON.stringify({
        market_or_feudal_framing,
        democratic_mediation_reframe: reframe,
        grounding_quote: candidateQuotes[0] ?? null,
      }, null, 2) }],
    };
  });

  server.registerTool('get_glossary_term', {
    title: 'Get Glossary Term',
    description: 'Look up a Schneider vocabulary term: implicit feudalism, governable space, governable stack, modular politics, democratic mediation, metagovernance, politics of no politics, etc.',
    inputSchema: {
      term: z.string().describe('The term to look up.'),
    },
  }, async ({ term }) => {
    const tKey = term.toLowerCase().trim();
    const exact = GLOSSARY.find(g => g.term.toLowerCase() === tKey);
    if (exact) {
      return { content: [{ type: 'text' as const, text: JSON.stringify(exact, null, 2) }] };
    }
    const partial = GLOSSARY.filter(g => g.term.toLowerCase().includes(tKey) || tKey.includes(g.term.toLowerCase()));
    if (partial.length > 0) {
      return { content: [{ type: 'text' as const, text: JSON.stringify({ note: `No exact match for "${term}". Closest:`, matches: partial.slice(0, 5) }, null, 2) }] };
    }
    const list = GLOSSARY.slice(0, 30).map(g => g.term).join(', ');
    return { content: [{ type: 'text' as const, text: `Term "${term}" not found. Sample: ${list} (${GLOSSARY.length} total — try search_book for free-text matches)` }] };
  });

  server.registerTool('find_quote', {
    title: 'Find a Schneider Quote on a Theme',
    description: 'Returns up to 3 verbatim Schneider passages on a theme. For citation in writeups. Each result includes attribution.',
    inputSchema: {
      theme: z.string().describe('Theme keyword (e.g., "implicit-feudalism", "democratic-mediation", "governable-stack", "metagovernance", "platform-cooperatives").'),
      max_results: z.number().optional().describe('Max results (default 3, hard cap 3 for fair-use discipline).'),
    },
  }, async ({ theme, max_results }) => {
    const cap = Math.min(max_results ?? 3, 3);
    const tKey = theme.toLowerCase();
    const matches = QUOTES.filter(q =>
      q.themes.some(t => t.toLowerCase().includes(tKey) || tKey.includes(t.toLowerCase()))
      || q.text.toLowerCase().includes(tKey)
    ).slice(0, cap);

    if (matches.length === 0) {
      const themes = [...new Set(QUOTES.flatMap(q => q.themes))].sort();
      return { content: [{ type: 'text' as const, text: `No quotes on theme "${theme}". Available themes: ${themes.join(', ')}` }] };
    }
    const attribution_note = 'Each quote is from Schneider, *Governable Spaces: Democratic Design for Online Life* (UC Press / Luminos, 2024), CC BY-NC-SA 4.0. Cite full attribution per `source_attribution` field. https://luminosoa.org/books/m/10.1525/luminos.181';
    return { content: [{ type: 'text' as const, text: JSON.stringify({ matches, attribution_note }, null, 2) }] };
  });

  server.registerTool('search_book', {
    title: 'Search Across All Catalogs',
    description: 'Free-text search across cases, failure modes, governance forms, policy strategies, glossary, and quotes. Returns up to 10 results.',
    inputSchema: {
      query: z.string().describe('Search keyword or phrase.'),
      max_results: z.number().int().min(1).max(50).optional().describe('Max results (default 10).'),
    },
  }, async ({ query, max_results }) => {
    const results = searchAll(query, max_results ?? 10);
    if (results.length === 0) {
      return { content: [{ type: 'text' as const, text: `No matches for "${query}".` }] };
    }
    return { content: [{ type: 'text' as const, text: JSON.stringify(results, null, 2) }] };
  });

  return server;
}

// === START SERVER (dual stdio / HTTP) ===

async function startHttpServer() {
  const app = express();
  app.use(express.json());

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', name: 'governable-spaces', version: '0.1.0' });
  });

  const sessions = new Map<string, StreamableHTTPServerTransport>();

  app.all('/mcp', async (req, res) => {
    const existingSessionId = req.headers['mcp-session-id'] as string | undefined;

    if (existingSessionId && sessions.has(existingSessionId)) {
      const transport = sessions.get(existingSessionId)!;
      await transport.handleRequest(req, res, req.body);
      return;
    }

    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: () => crypto.randomUUID(),
    });
    const sessionServer = createServer();
    await sessionServer.connect(transport);

    await transport.handleRequest(req, res, req.body);

    const newSessionId = res.getHeader('mcp-session-id') as string | undefined;
    if (newSessionId) {
      sessions.set(newSessionId, transport);
      transport.onclose = () => sessions.delete(newSessionId);
    }
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.error(`Governable Spaces MCP Server running on HTTP port ${port}`);
  });
}

async function startStdioServer() {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Governable Spaces MCP Server running on stdio');
}

const isHttp = !!process.env.PORT;
(isHttp ? startHttpServer() : startStdioServer()).catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
