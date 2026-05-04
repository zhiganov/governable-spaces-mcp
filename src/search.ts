import type { SearchResult } from './types.js';
import {
  CASES, FAILURE_MODES, GOVERNANCE_FORMS,
  POLICY_STRATEGIES, GLOSSARY, QUOTES,
} from './data/index.js';

export function searchAll(query: string, maxResults: number = 10): SearchResult[] {
  const q = query.toLowerCase();
  const results: SearchResult[] = [];

  for (const c of CASES) {
    const searchable = `${c.name} ${c.brief} ${c.community} ${c.democratic_features.join(' ')} ${c.lessons_or_failures}`.toLowerCase();
    if (searchable.includes(q)) {
      results.push({ type: 'case', id: c.id, name: c.name, excerpt: c.brief });
    }
  }

  for (const f of FAILURE_MODES) {
    const searchable = `${f.name} ${f.signature} ${f.example}`.toLowerCase();
    if (searchable.includes(q)) {
      results.push({ type: 'failure_mode', id: f.id, name: f.name, excerpt: f.signature });
    }
  }

  for (const g of GOVERNANCE_FORMS) {
    const searchable = `${g.name} ${g.description} ${g.diagnostic_questions.join(' ')}`.toLowerCase();
    if (searchable.includes(q)) {
      results.push({ type: 'governance_form', id: g.id, name: g.name, excerpt: g.description });
    }
  }

  for (const p of POLICY_STRATEGIES) {
    const searchable = `${p.name} ${p.description}`.toLowerCase();
    if (searchable.includes(q)) {
      results.push({ type: 'policy_strategy', id: p.id, name: p.name, excerpt: p.description });
    }
  }

  for (const g of GLOSSARY) {
    const searchable = `${g.term} ${g.definition} ${g.see_also.join(' ')}`.toLowerCase();
    if (searchable.includes(q)) {
      results.push({ type: 'glossary', id: g.term.toLowerCase().replace(/\s+/g, '-'), name: g.term, excerpt: g.definition });
    }
  }

  for (const qt of QUOTES) {
    const searchable = `${qt.text} ${qt.themes.join(' ')}`.toLowerCase();
    if (searchable.includes(q)) {
      results.push({ type: 'quote', id: qt.id, name: qt.themes.slice(0, 2).join(', '), excerpt: qt.text.slice(0, 200) });
    }
  }

  return results.slice(0, maxResults);
}
