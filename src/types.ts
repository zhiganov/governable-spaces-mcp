export type Domain =
  | "online_community"      // forums, chats, wikis, subreddits, Discord servers
  | "federated_network"     // fediverse, ATProto, IndieWeb, federated wikis
  | "platform_cooperative"  // worker- or user-owned platforms
  | "dao"                   // on-chain governance, DAOs, token-voting orgs
  | "public_infrastructure" // public-option platforms, civic tech
  | "workplace"             // worker co-ops, sociocracy, holacracy in firms
  | "movement"              // social movements, mutual-aid networks
  | "state";                // government, municipal, regulatory

export const DOMAINS: Domain[] = [
  "online_community", "federated_network", "platform_cooperative", "dao",
  "public_infrastructure", "workplace", "movement", "state",
];

// Discriminator for entries in the FAILURE_MODES catalog.
//   - 'pattern'  — the recurring counter-democratic pattern itself
//                  (implicit-feudalism, politics-of-no-politics, etc.)
//   - 'instance' — a specific historical/contemporary case Schneider names
//                  as exemplifying a pattern (reddit-2023-api-revolt, etc.)
export type FailureModeKind = 'pattern' | 'instance';

export interface Case {
  id: string;
  name: string;
  domain: Domain;
  brief: string;                        // 1-2 sentence description
  community: string;                    // who participates / who is governed
  governance_form_ids: string[];        // 1-3 governance forms in use
  democratic_features: string[];        // 2-5 concrete affordances, with MUST/SHOULD modal markers
  lessons_or_failures: string;
  source_chapter: string;
  source_quote?: string;
}

export interface FailureMode {
  id: string;
  name: string;
  kind: FailureModeKind;
  signature: string;                                   // recognition heuristics
  example: string;
  pattern_ids: string[];                               // for instance: parent pattern ids
  domain_examples: Partial<Record<Domain, string[]>>;
  countering_governance_form_ids: string[];
  source_chapter: string;
}

export function isPattern(f: FailureMode): boolean {
  return f.kind === 'pattern';
}

export interface GovernanceForm {
  id: string;
  name: string;
  description: string;
  diagnostic_questions: string[];
  countered_failure_mode_ids: string[];
  example_case_ids: string[];
  source_chapter: string;
}

export interface PolicyStrategy {
  id: string;
  name: string;
  description: string;
  target_failure_mode_ids: string[];
  example_case_ids: string[];
  source_chapter: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  see_also: string[];
  source_quote?: string;
  source_chapter?: string;
}

export interface Quote {
  id: string;
  text: string;
  themes: string[];          // lowercase tags like "implicit-feudalism", "democratic-mediation"
  source_chapter: string;
  source_attribution: string; // "Schneider, Governable Spaces (UC Press / Luminos, 2024), Ch. X"
}

export type SearchResultType =
  | "case" | "failure_mode" | "governance_form"
  | "policy_strategy" | "glossary" | "quote";

export interface SearchResult {
  type: SearchResultType;
  id: string;
  name: string;
  excerpt: string;
}
