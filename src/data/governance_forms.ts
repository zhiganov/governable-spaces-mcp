import type { GovernanceForm } from '../types.js';

export const GOVERNANCE_FORMS: GovernanceForm[] = [
  {
    "id": "representational-voting",
    "name": "Representational Voting",
    "description": "Participants elect representatives who make governance decisions on their behalf. Representatives MUST be accountable to constituents through regular elections or recall mechanisms. This form SHOULD include clear term limits and transparent deliberation by representatives. It is suited to large communities where direct participation by all members is impractical.",
    "diagnostic_questions": [
      "Is the community too large for every member to participate directly in every decision?",
      "Are there mechanisms for holding elected representatives accountable to the broader membership?",
      "MUST there be regular elections or recall provisions to prevent entrenchment of power?",
      "Are representatives drawn from and reflective of the community's diversity?",
      "Is there transparency in how representatives deliberate and vote?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "admin-autocracy"
    ],
    "example_case_ids": [],
    "source_chapter": "Introduction"
  },
  {
    "id": "sortition-governance",
    "name": "Sortition (Random Selection)",
    "description": "Governance participants are selected by lot rather than election, drawing on the full membership pool. Sortition SHOULD be used to constitute juries, councils, or moderation panels that represent a cross-section of the community. It counters the tendency of elections to favor well-resourced or well-networked candidates. Sortition bodies MUST have clearly defined scope, duration, and decision-making authority.",
    "diagnostic_questions": [
      "Is there a risk that elections systematically advantage certain factions or well-resourced members?",
      "Is the membership pool large and diverse enough for random selection to produce a representative body?",
      "MUST the sortition body have a defined mandate and sunset clause to prevent entrenchment?",
      "Are members willing to serve when selected, and is there a mechanism to handle refusals?",
      "Is the decision scope narrow enough to be handled by a temporary citizen-assembly-style body?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "plutocratic-token-voting",
      "politics-of-no-politics"
    ],
    "example_case_ids": [],
    "source_chapter": "Introduction"
  },
  {
    "id": "federated-subsidiarity",
    "name": "Federated Subsidiarity",
    "description": "Governance authority is distributed across nested levels — local communities, regional clusters, and network-wide bodies — with decisions made at the lowest effective level. Each level MUST retain meaningful autonomy over local matters while delegating only those decisions that require coordination to higher levels. This form SHOULD include clear protocols for escalation and appeal across levels. It is the characteristic governance form of federated networks like the fediverse.",
    "diagnostic_questions": [
      "Is the community organized across multiple distinct instances, servers, or nodes with their own local cultures?",
      "MUST local communities retain meaningful self-governance rather than deferring all decisions upward?",
      "Are there clear rules about which decisions belong at which level of the federation?",
      "Is there a mechanism for cross-instance coordination on network-wide policy without imposing uniformity?",
      "Can participants appeal local decisions to a higher-level body, and vice versa?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "platform-capture",
      "digital-colonialism"
    ],
    "example_case_ids": [
      "mastodon-federated-moderation"
    ],
    "source_chapter": "Introduction"
  },
  {
    "id": "plural-voting",
    "name": "Plural Voting (Quadratic and Weighted)",
    "description": "Voting systems that depart from simple one-person-one-vote by distributing voting credits that participants allocate across issues, or by weighting votes to counter majoritarian dominance. Quadratic voting SHOULD be used where intensity of preference matters and minority interests risk being systematically overridden. Such systems MUST be designed so that wealth or token-holdings cannot simply be converted into proportional voting power without correction mechanisms.",
    "diagnostic_questions": [
      "Are there persistent minority stakeholder groups whose intense preferences are routinely overridden by the majority?",
      "Is the community at risk of one-token-one-vote plutocracy, and does it need a corrective mechanism?",
      "MUST the voting mechanism prevent large token or resource holders from capturing outcomes?",
      "Is there sufficient technical infrastructure to implement credit-based or quadratic vote counting reliably?",
      "Have participants been educated on how the voting mechanism works so participation is meaningful?"
    ],
    "countered_failure_mode_ids": [
      "plutocratic-token-voting",
      "implicit-feudalism"
    ],
    "example_case_ids": [],
    "source_chapter": "Introduction"
  },
  {
    "id": "consensus-decision-making",
    "name": "Consensus Decision-Making",
    "description": "Decisions require broad agreement rather than a simple majority, giving each participant a de facto veto or the ability to block until concerns are addressed. Consensus processes MUST include structured facilitation to distinguish principled objections from mere preference. They SHOULD incorporate graduated blocking (stand aside, concerns noted, block) so that full blocks are reserved for fundamental objections. This form is most appropriate for small, high-trust communities with shared values.",
    "diagnostic_questions": [
      "Is the community small and cohesive enough that consensus is achievable within reasonable timeframes?",
      "MUST every participant have meaningful ability to raise concerns before a decision is finalized?",
      "Is there a trained facilitator or established facilitation protocol to prevent deadlock?",
      "Are there fallback mechanisms (e.g., supermajority vote) if consensus genuinely cannot be reached?",
      "Does the community have sufficient shared values to make consensus a convergent rather than a paralytic process?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "admin-autocracy",
      "politics-of-no-politics"
    ],
    "example_case_ids": [
      "loomio-consensus-decision-making"
    ],
    "source_chapter": "Introduction"
  },
  {
    "id": "metagovernance-constitutional-design",
    "name": "Metagovernance / Constitutional Design",
    "description": "The governance of governance: establishing the rules, processes, and values that constrain and enable all lower-level governance decisions. A governable space MUST have an explicit constitutional layer that specifies how rules are made, amended, and enforced. Metagovernance SHOULD be participatory — the community itself, not a founding team alone, MUST have meaningful input into the constitutional framework over time. This form is the precondition for all other democratic governance forms to function legitimately.",
    "diagnostic_questions": [
      "Does the platform or community have an explicit, written constitutional layer that governs how all other rules are made?",
      "MUST the founding team or administrators be bound by the constitutional layer, not exempt from it?",
      "Is there a participatory process for amending the constitution itself, accessible to ordinary members?",
      "Are the values and principles encoded in the constitution ones that the community actually endorses, not just inherited from founders?",
      "Is there a clear distinction between ordinary policy decisions and constitutional-level changes requiring higher thresholds?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "politics-of-no-politics",
      "platform-capture"
    ],
    "example_case_ids": [],
    "source_chapter": "Introduction"
  },
  {
    "id": "modular-politics-governance",
    "name": "Modular Politics",
    "description": "A design approach in which governance components — voting systems, moderation tools, appeals processes — are built as interoperable, swappable modules rather than hardcoded into a single platform. Platforms adopting modular politics MUST expose governance APIs or plugin architectures so communities can adopt the mechanisms that fit their needs. This form SHOULD support a marketplace of democratic primitives that communities can combine, rather than locking them into vendor-defined governance.",
    "diagnostic_questions": [
      "Can communities on this platform swap out their voting or moderation system without migrating to a new platform entirely?",
      "MUST the governance layer be separable from the content or social layer of the platform?",
      "Is there an open standard or API through which third-party governance tools can be integrated?",
      "Does the platform's business model create incentives to lock communities into proprietary governance tools?",
      "Are governance modules documented and auditable so communities understand what they are adopting?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "platform-capture",
      "governance-theater"
    ],
    "example_case_ids": [],
    "source_chapter": "Introduction"
  },
  {
    "id": "rough-consensus-governance",
    "name": "Rough Consensus",
    "description": "A governance form in which collective decisions emerge through informal social sensing — reading body language, cross-pollinating information across subgroups, and deferring to recognized voices within clusters — rather than formal voting. Schneider illustrates this as the default mode of human self-organization in the absence of designed governance tools. Online spaces SHOULD provide structured equivalents to rough consensus so that the textured social relationships of in-person decision-making are not flattened into undifferentiated chat.",
    "diagnostic_questions": [
      "Does the community have a way to sense distributed sentiment without reducing all voice to a single undifferentiated feed?",
      "Are subgroup networks (families, friend clusters, affinity groups) able to deliberate and then feed into a broader decision, rather than being collapsed into one channel?",
      "Is there a recognized mechanism — formal or informal — for signaling when enough consensus exists to act?",
      "Would participants who are quieter in synchronous settings still have meaningful voice in this form?",
      "Does the process have criteria for what counts as a decision, so debate does not recirculate indefinitely?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "politics-of-no-politics"
    ],
    "example_case_ids": [
      "picnic-group-chat"
    ],
    "source_chapter": "Introduction"
  },
  {
    "id": "bylaws-based-community-governance",
    "name": "Bylaws-Based Community Self-Governance",
    "description": "A governance form in which a community codifies its decision-making procedures, dispute resolution mechanisms, and membership obligations in a written document (bylaws or constitution) that members can consult and invoke when conflicts arise. Schneider holds up his mother's garden club — whose eight-page bylaws have governed it since the 1960s — as a model that online spaces consistently fail to replicate. Online communities MUST have comparable codified rules; without them, power defaults to whoever holds admin credentials.",
    "diagnostic_questions": [
      "Does the community have a written governance document that is accessible to all members?",
      "Does that document specify a path forward for common decision types and conflict scenarios?",
      "Are the rules legible to ordinary members, not just to founders or admins?",
      "Is there a process for amending the bylaws that itself goes through the community rather than admin fiat?",
      "MUST the platform or tooling provide functionality (elections, dispute resolution, amendment tracking) that makes the bylaws actionable rather than merely symbolic?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism"
    ],
    "example_case_ids": [
      "garden-club-bylaws"
    ],
    "source_chapter": "Introduction"
  },
  {
    "id": "participatory-budgeting",
    "name": "Participatory Budgeting",
    "description": "A governance form originating in Porto Alegre, Brazil (1989) in which community members directly deliberate over and decide how a portion of shared resources are allocated. Schneider cites it as a territorial-government rupture that introduces meaningful citizen voice into resource decisions. Participatory budgeting SHOULD grant participants binding, not merely advisory, power over the resources in scope; purely consultative versions replicate the 'rigid routine' of representative democracy without genuine empowerment.",
    "diagnostic_questions": [
      "Is the budget or resource pool in scope clearly defined and communicated to participants?",
      "Do participants have binding say over allocations, or is the process merely advisory?",
      "Are there deliberative supports — information, facilitation, time — so participants can make informed choices?",
      "Is participation accessible to members who are less digitally fluent or resource-rich?",
      "SHOULD there be a transparent accounting of how participant decisions were implemented?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism"
    ],
    "example_case_ids": [
      "porto-alegre-participatory-budgeting"
    ],
    "source_chapter": "Introduction"
  },
  {
    "id": "cooperative-democratic-governance",
    "name": "Cooperative (One-Member-One-Vote Economic Democracy)",
    "description": "A governance form in which participants in a shared economic enterprise each hold an equal vote in its governance, regardless of capital contribution. Schneider traces the cooperative tradition from Chartist factory workers in England — who formed cooperative stores to demonstrate democratic capacity — through Black liberation movements and Populist organizers. Cooperatives MUST vest voting rights in members as members, not as investors; capital ownership MUST NOT confer disproportionate governance power.",
    "diagnostic_questions": [
      "Are voting rights vested in membership rather than in capital share?",
      "Is there a meaningful membership pathway for all participants in the enterprise — workers, users, or community members?",
      "MUST governance documents explicitly prohibit conversion of member votes into capital-weighted votes?",
      "Are there accountability mechanisms so elected officers remain answerable to the membership?",
      "Does the cooperative have a democratic mechanism for setting its own goals, not just executing decisions made elsewhere?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism"
    ],
    "example_case_ids": [
      "chartist-cooperative-stores",
      "black-liberation-cooperatives"
    ],
    "source_chapter": "Introduction"
  },
  {
    "id": "benevolent-dictator-for-life",
    "name": "Benevolent Dictator for Life (BDFL)",
    "description": "A governance form in which a founder or designate retains final, unilateral authority over a project or community indefinitely, typically without term limits or electoral accountability. The BDFL MUST be distinguished from democratic governance: authority derives from founding, not from participant consent. This form SHOULD only be adopted as a transitional arrangement, as Schneider documents its tendency to produce power vacuums and oligarchic drift when the dictator becomes inactive or abusive.",
    "diagnostic_questions": [
      "Does the community's founding figure retain veto power over decisions without a mechanism for participants to override or remove them?",
      "Is there a succession process that would allow the community to choose a new leader democratically if the BDFL steps down or becomes abusive?",
      "Has the community explicitly chosen this arrangement, or did it emerge by default from a power vacuum?",
      "Does the BDFL's authority rest on a code of conduct or charter that participants can enforce, or is enforcement entirely at the BDFL's discretion?",
      "Are there complementary democratic mechanisms (e.g., elected councils, steering committees) that check the BDFL's authority?"
    ],
    "countered_failure_mode_ids": [],
    "example_case_ids": [
      "linux-bdfl-torvalds",
      "python-bdfl-van-rossum",
      "wikipedia-founder-wales",
      "ubuntu-bdfl-shuttleworth"
    ],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "elected-steering-council",
    "name": "Elected Steering Council",
    "description": "A governance form in which a community selects a small representative body through participant vote to replace or supplement individual dictatorial authority. The steering council MUST be constituted through a transparent electoral process among recognized community members. Schneider documents the Python steering council as an example of a community transitioning from BDFL governance to collective democratic leadership, enabled by pre-existing legitimate decision-making infrastructure (the Python Enhancement Proposal system).",
    "diagnostic_questions": [
      "Does the community have an existing, legitimate process for proposing and ratifying governance changes that can serve as the basis for an election?",
      "Is the electorate clearly defined — i.e., who counts as a recognized community member eligible to vote?",
      "Are council terms and succession procedures specified, preventing entrenchment of any single council member?",
      "Does the council's authority displace or merely advise the prior power-holder?",
      "Is there a mechanism for community members to hold council members accountable between elections?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "bdfl-power-vacuum"
    ],
    "example_case_ids": [
      "python-steering-council"
    ],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "karma-based-distributed-moderation",
    "name": "Karma-Based Distributed Moderation",
    "description": "A governance form in which moderation authority is distributed among users proportionally to reputation scores accrued through peer endorsement, rather than assigned by a founder or admin. Users who accrue sufficient karma gain the effective voice to moderate content and evaluate others' moderation decisions. Schneider holds up Slashdot's karma-and-metamoderation system as an exemplar: it SHOULD include a metamoderation layer so that moderation decisions are themselves subject to peer review, preventing the concentration of moderation power.",
    "diagnostic_questions": [
      "Is the karma or reputation score earned through transparent, peer-driven endorsement rather than admin assignment?",
      "Does the system include a metamoderation layer — i.e., can users evaluate the quality of moderation decisions, not just content?",
      "Is the threshold for gaining moderation privileges set at a level that is achievable for active participants without being trivially gamed?",
      "Does the system prevent any single user or admin from overriding distributed moderation outcomes unilaterally?",
      "Is the reputation system legible to users — can they understand why their karma changed?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "iron-law-of-oligarchy-online"
    ],
    "example_case_ids": [
      "slashdot-karma-moderation"
    ],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "code-of-conduct-governance",
    "name": "Code of Conduct Governance",
    "description": "A governance form in which a community adopts an explicit, publicly accessible code of conduct that specifies acceptable behavior and the responsibilities of administrators and moderators, creating a quasi-constitutional constraint on feudal power. Schneider notes that codes of conduct like the Contributor Covenant emerged as a response to open-source power abuses. However, he warns that this form is insufficient on its own: under implicit feudalism, enforcement of a code of conduct depends entirely on the project owner's willingness to comply, meaning it reduces effective voice only marginally unless backed by binding enforcement mechanisms.",
    "diagnostic_questions": [
      "Does the code of conduct specify not just prohibited behaviors but also the obligations and accountability mechanisms for admins and moderators?",
      "Is there an independent or community-controlled body empowered to enforce the code of conduct against admins, not just users?",
      "Is adoption of the code of conduct mandatory for all participants including leadership, or optional and voluntary?",
      "Does the code include a dispute-resolution or appeals process accessible to ordinary participants?",
      "Is the code of conduct versioned and amendable through a community process, or solely at admin discretion?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "tyranny-of-structurelessness"
    ],
    "example_case_ids": [
      "linux-contributor-covenant",
      "github-code-of-conduct"
    ],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "shadow-government-alternative-governance",
    "name": "Shadow Government / Alternative Governance Prototyping",
    "description": "A shadow government is a deliberate practice of imagining and prototyping an alternative governance structure for a platform or institution currently under undemocratic control. Schneider describes teaming up with former Twitter workers and citizen-assembly practitioners to design what representative user governance of Twitter might look like — including who holds authority, what proposals emerge, and what consent processes apply. This form SHOULD draw on expertise from both insider platform workers and democratic-design practitioners outside the platform.",
    "diagnostic_questions": [
      "Is the platform currently under undemocratic or autocratic ownership that forecloses internal reform?",
      "Are there former insiders (workers, founders) willing to collaborate on articulating an alternative governance vision?",
      "MUST any shadow governance exercise be grounded in a prior collective history or legitimating community process before proposing structures?",
      "Have practitioners with experience in citizen assemblies or sortition been consulted to inform the representative design?",
      "Is the goal to produce a concrete, actionable governance proposal rather than a purely speculative exercise?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "platform-commodification"
    ],
    "example_case_ids": [
      "peoples-history-of-twitter",
      "twitter-shareholder-proposal-2017"
    ],
    "source_chapter": "Profile: A People's History of Twitter"
  },
  {
    "id": "decentralized-dispute-resolution",
    "name": "Decentralized Dispute Resolution (Algorithmic Jury)",
    "description": "A governance form in which a randomly selected jury of participants with staked tokens independently adjudicate disputes, with participants rewarded or penalized based on whether their ruling aligns with the modal outcome across jurors. This form approximates sortition within a cryptoeconomic context and SHOULD provide a non-state, non-platform-admin path for resolving contested governance and harm cases. Outcomes are enforced algorithmically through the protocol.",
    "diagnostic_questions": [
      "Is there a persistent need to resolve disputes that cannot be fairly adjudicated by platform admins or state courts?",
      "Can participants be meaningfully incentivized through economic stake to rule honestly rather than strategically?",
      "Is the pool of potential jurors large and diverse enough to resist capture by any single faction?",
      "MUST the dispute resolution process be censorship-resistant and independent of any central administrative authority?",
      "Does the community have sufficient token liquidity and participant engagement to make random jury selection viable?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "captured-dao",
      "punitive-platform-enforcement"
    ],
    "example_case_ids": [
      "ethereum-dao-ecosystem"
    ],
    "source_chapter": "Ch. 3"
  },
  {
    "id": "soulbound-identity-governance",
    "name": "Soulbound Token / Person-Centric Identity Governance",
    "description": "A governance design paradigm in which non-transferable tokens ('soulbound' tokens) are tied to individual users rather than circulating as commodities, enabling governance systems to recognize persons rather than only capital. This form SHOULD counteract plutocracy by anchoring governance rights to identity and participation history rather than purchasable stake. Schneider frames this as crypto 'rediscovering politics' — the need for systems to account for souls, not just wallets. MUST be paired with Sybil-resistant identity systems.",
    "diagnostic_questions": [
      "Does the governance system currently conflate economic stake with personhood, producing plutocratic outcomes?",
      "Can the system implement non-transferable credentials that track participation, reputation, or membership without enabling their sale?",
      "Is Sybil resistance achievable — can the system distinguish one human from many fake accounts?",
      "MUST governance rights be tied to active participation or earned standing rather than token purchases alone?",
      "Would person-centric governance require integration with external identity systems (cooperative membership, state ID) the community is willing to use?"
    ],
    "countered_failure_mode_ids": [
      "plutocratic-token-governance",
      "captured-dao"
    ],
    "example_case_ids": [
      "ethereum-dao-ecosystem"
    ],
    "source_chapter": "Ch. 3"
  },
  {
    "id": "governance-archaeology",
    "name": "Governance Archaeology",
    "description": "Governance archaeology is the practice of intentionally crafting relationships between new governance designs and preexisting legacies across diverse times, places, and cultures. Designers SHOULD expand the canon of democratic precedents beyond Western antiquity to include Indigenous federations, African diasporic forms, Islamic trading networks, and other suppressed traditions. Governance archaeology MUST go beyond extraction: it requires reciprocity — treating historical communities as political ancestors, seeking permission where appropriate, and returning value (royalties, reparations, alliance) to living descendants of those whose governance innovations are adopted.",
    "diagnostic_questions": [
      "What historical governance legacies are informing this design — and whose history is being centered or excluded?",
      "Have the direct descendants or living custodians of the governance tradition being adopted been consulted or credited?",
      "Does the design canon include non-Western, Indigenous, or diasporic governance forms alongside Athenian or Roman precedents?",
      "Is the relationship with historical predecessors reciprocal, or merely extractive?",
      "How does this governance design relate to the decolonial imperative to repair relationships with suppressed legacies?"
    ],
    "countered_failure_mode_ids": [
      "digital-colonialism",
      "implicit-feudalism"
    ],
    "example_case_ids": [
      "cowrie-shell-governance-precedent",
      "carugati-schneider-governance-database"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "collective-sovereignty-over-roles",
    "name": "Collective Sovereignty Over Roles",
    "description": "Governance power MUST be assigned to groups (orgs) rather than to individual users or named roles. Sovereignty stems from collective membership first; role-like structures are possible but MUST be opted into deliberately rather than assumed as default. Individual autocracy is one option among many, not the presumption.",
    "diagnostic_questions": [
      "Does the platform assign permissions to individuals or admins by default, rather than to member collectives?",
      "Can groups choose their own decision-making process, or is a single process (e.g., admin approval) hardcoded?",
      "Is it possible for a group to delegate power to a single member without that being the only or default option?",
      "MUST any autocratic structure require an explicit, intentional configuration by the community rather than being the system default?",
      "Does the governance design start from collective trust, or does it start from individual authority and grant exceptions?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "politics-of-no-politics"
    ],
    "example_case_ids": [
      "modpol-minetest"
    ],
    "source_chapter": "Profile: Modpol"
  },
  {
    "id": "democratic-structuring",
    "name": "Democratic Structuring",
    "description": "A governance form originating in feminist organizing practice (Jo Freeman) in which groups MUST establish explicit, transparent processes for participation, rotating roles of authority, accountability of power-holders to the whole group, and wide diffusion of information. Groups SHOULD adopt democratic structuring as a counter to the rigid hierarchies and resentment that emerge from structureless assemblies. It applies directly to online communities that claim informality or neutrality but replicate patriarchal control.",
    "diagnostic_questions": [
      "Does the community have explicit, visible rules for how decisions get made and who holds authority?",
      "Are roles of authority rotated, or do the same individuals hold power indefinitely without accountability?",
      "MUST all participants—including newcomers—have accessible pathways to understand and exercise governance?",
      "Is information about how the space operates diffused widely, or held by an informal inner circle?",
      "Does the community treat structurelessness as neutral, and if so, who actually benefits from that framing?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "politics-of-no-politics",
      "tyranny-of-structurelessness"
    ],
    "example_case_ids": [
      "karrot-food-sharing-cooperative",
      "feminist-rap-groups-1970s"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "subsidiarity-as-content-liability-shield",
    "name": "Subsidiarity-Based Content Liability Reform",
    "description": "A governance form in which platforms gain legal immunity from content liability only by demonstrably sharing power with user communities through self-governance structures—rather than by acting as top-down neutral infrastructure. Legal regimes SHOULD expect subsidiarity as a precondition for protection, requiring platforms to provide modular politics tools (elections, petitions, boards, juries) as a condition of safe harbor. Platforms MUST NOT gain Section 230-style protection merely by claiming neutrality while retaining feudal admin control.",
    "diagnostic_questions": [
      "Does the platform's liability protection depend on demonstrable user self-governance, or merely on claims of neutrality?",
      "Are users provided with accessible tools for collective rule-making (elections, petitions, juries) as a condition of the platform's legal immunity?",
      "MUST the platform share meaningful moderation and policy power with communities as a prerequisite for safe harbor?",
      "Can user communities remove members or change rules through collective processes, rather than solely through admin fiat?",
      "Does existing law allocate coordination rights to users, or does it concentrate them in platform companies?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "platform-centric-content-governance"
    ],
    "example_case_ids": [
      "karrot-food-sharing-cooperative",
      "section-230-regime"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "cooperative-federation-labor-governance",
    "name": "Cooperative Federation for Platform Labor Governance",
    "description": "A governance form in which gig and platform workers organize into tax-advantaged, employee-owned cooperatives that collectively bargain with online labor platforms without requiring direct employment. Workers MUST elect their co-op leaders, and the federation SHOULD be backed by state-level legal frameworks so that workers' self-governance can hold its own against capitalized platform competitors. Inspired by the California Cooperative Economy Act and the Hollywood guild model.",
    "diagnostic_questions": [
      "Are platform workers currently atomized and unable to coordinate, or do they have durable legal structures for collective bargaining?",
      "MUST the governance structure enable workers to elect leadership and negotiate platform terms collectively?",
      "Does existing antitrust or labor law prohibit or impede cooperative formation among platform workers?",
      "Is there access to capital sufficient to build worker-owned alternatives to investor-backed platforms?",
      "Does the proposed federation allow workers to move between platforms while retaining representation and profit-sharing?"
    ],
    "countered_failure_mode_ids": [
      "atomized-gig-workforce",
      "antitrust-as-anti-coordination",
      "implicit-feudalism"
    ],
    "example_case_ids": [
      "nursescan-cooperative-attempt",
      "california-cooperative-economy-act",
      "colombian-driver-guilds"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "community-infrastructure-cooperative",
    "name": "Community Infrastructure Cooperative",
    "description": "A governance form in which communities of users co-own and govern physical or digital network infrastructure—broadband, routers, servers, protocols—rather than depending on investor-owned utilities. Users MUST have meaningful participation in operations, pricing, and technical decisions. Public financing SHOULD be available to underserved communities, as with rural electrification cooperatives; and laws prohibiting municipal or cooperative broadband MUST be reversed to enable this form to scale.",
    "diagnostic_questions": [
      "Is the infrastructure currently owned by investor-controlled firms that have no accountability to the users they serve?",
      "Do community members have the technical education and support (a culture of care, not just documentation) to participate in governance?",
      "MUST public financing or procurement preferences be available for communities to capitalize infrastructure cooperatives?",
      "Are there legal prohibitions on municipal or cooperative broadband that would block this form?",
      "Does the governance structure allow users to become stewards after initial build-out by private or public investors?"
    ],
    "countered_failure_mode_ids": [
      "infrastructure-mystification",
      "monopoly-broadband-control",
      "implicit-feudalism"
    ],
    "example_case_ids": [
      "magnolia-road-internet-cooperative",
      "rural-electrification-cooperatives",
      "femprocomuns-commons-cloud",
      "latin-american-microtelcos"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "digital-deliberation-at-scale",
    "name": "Digital Deliberation at Scale",
    "description": "A governance form in which governments or cross-territorial bodies use digital tools to identify clusters of public opinion, crowdsource broadly supported proposals, and cut through partisan gridlock—without reducing participation to simple polling. Pioneered by Taiwan's 'listening at scale' approach under Audrey Tang, this form SHOULD prioritize proposals that command broad consensus across dividing lines rather than amplifying polarization. It is especially well-suited to issues—like platform regulation or climate—that transcend territorial jurisdictions.",
    "diagnostic_questions": [
      "Does the issue span multiple jurisdictions in ways that make conventional territorial legislation ineffective?",
      "Is the deliberation designed to surface areas of broad consensus rather than to amplify existing partisan divisions?",
      "MUST participants have genuine influence over policy outcomes, not merely advisory input?",
      "Are the digital tools used for deliberation themselves open-source and governable by participants?",
      "Does the process make visible the full range of public opinion, including from communities that typically lack political access?"
    ],
    "countered_failure_mode_ids": [
      "top-down-regulatory-monoculture",
      "partisan-gridlock-on-platform-governance"
    ],
    "example_case_ids": [
      "taiwan-audrey-tang-deliberation",
      "decidim-barcelona",
      "citizens-convention-climate-france"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "non-exclusive-sovereignty-governance",
    "name": "Non-Exclusive Sovereignty / Overlapping Jurisdictions",
    "description": "A governance form in which multiple communities or nations hold concurrent, overlapping stewardship over the same territory or domain rather than asserting exclusive control. Schneider draws on Coulthard and Hern's concept of 'non-exclusive sovereignties' as a model for online metagovernance: communities SHOULD be able to participate in larger networks while retaining local self-governance, and platform design MUST NOT force a single, exclusive jurisdictional claim over shared social space. This form challenges the nation-state's monopoly model and the feudal 'homestead' assumption that one owner controls one domain.",
    "diagnostic_questions": [
      "Does the governance structure allow multiple communities or authorities to have legitimate, overlapping claims over the same space or resource?",
      "Can participants belong to and be governed by more than one community simultaneously without forced allegiance to a single sovereign?",
      "Does the design treat concurrent governance layers as a feature rather than a conflict to be resolved by hierarchy?",
      "Are subsidiarity relations defined so that local communities retain autonomy while participating in broader networks?",
      "MUST the metagovernance design make overlapping jurisdictions legible and navigable to participants rather than hiding them?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "platform-enclosure",
      "homesteading-ideology"
    ],
    "example_case_ids": [
      "native-land-ca-overlapping-territories",
      "dao-token-swap-metagovernance"
    ],
    "source_chapter": "Epilogue"
  }
];
