import type { PolicyStrategy } from '../types.js';

export const POLICY_STRATEGIES: PolicyStrategy[] = [
  {
    "id": "democratic-design-finance-regulation-redirect",
    "name": "Redirecting Finance and Regulation to Enable Democratic Design",
    "description": "Enabling democratic design in online life MUST involve redirecting flows of finance and regulation, not merely redesigning interfaces. Schneider contends that social and economic conditions shape and constrain design, so changing the governance of online spaces requires altering the underlying conditions of capital and regulatory incentive. Policy actors SHOULD treat democratic design as a systemic investment target, not a voluntary platform feature.",
    "target_failure_mode_ids": [
      "implicit-feudalism"
    ],
    "example_case_ids": [],
    "source_chapter": "Introduction"
  },
  {
    "id": "participatory-budgeting-citizen-voice-rupture",
    "name": "Participatory Budgeting and Citizen-Voice Platforms as Democratic Ruptures",
    "description": "Territorial governments SHOULD seize technological ruptures — participatory budgeting (Porto Alegre, 1989), digital deliberation platforms (Barcelona, Taiwan), crowdsourced constitutions, citizens' assemblies, and AI-assisted opinion clustering — as genuine expansions of binding citizen power. Schneider warns that most such experiments currently perform only advisory roles and MUST NOT be allowed to remain merely performative consultation; they should confer meaningfully binding powers on participants.",
    "target_failure_mode_ids": [
      "implicit-feudalism"
    ],
    "example_case_ids": [
      "porto-alegre-participatory-budgeting",
      "barcelona-decidim",
      "taiwan-vtaiwan"
    ],
    "source_chapter": "Introduction"
  },
  {
    "id": "code-of-conduct-enforcement-infrastructure",
    "name": "Code-of-Conduct Enforcement Infrastructure",
    "description": "Open-source projects and platforms MUST adopt enforceable codes of conduct that specify binding obligations on admins and moderators, not merely aspirational norms. Codes of conduct SHOULD include transparent dispute-resolution pathways and appeal mechanisms so that violations by power-holders can be addressed without relying solely on those same power-holders. Projects MUST NOT treat codes of conduct as optional features dependent solely on project-owner willingness.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "tyranny-of-structurelessness",
      "benevolent-dictator-for-life"
    ],
    "example_case_ids": [
      "linux-kernel",
      "contributor-covenant",
      "github-platform"
    ],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "anti-feudal-platform-liability-reform",
    "name": "Anti-Feudal Platform Liability Reform",
    "description": "Legal reforms SHOULD decouple server ownership from absolute governance authority over online communities, removing the structural incentive — originally rooted in hardware liability — that hardened sysop absolutism into platform-wide feudal defaults. Section 230–style protections SHOULD be conditioned on platforms providing meaningful user voice mechanisms, not merely on content-neutrality claims. Platforms MUST NOT leverage liability-shield arguments to justify denying communities effective participatory governance tools.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "server-ownership-governance-conflation"
    ],
    "example_case_ids": [
      "lambdamoo-wizardly-fiat",
      "bbs-sysop-absolutism",
      "facebook-groups"
    ],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "nonprofit-cooperative-governance-incentives",
    "name": "Nonprofit and Cooperative Ownership Incentives for Democratic Platform Governance",
    "description": "Policy SHOULD create incentives — tax treatment, grant eligibility, public procurement preference — for online community platforms organized as nonprofits or user-owned cooperatives, because community governance demonstrably mirrors underlying ownership structures. Platforms organized under nonprofit or cooperative ownership SHOULD be required to implement democratic governance features as a condition of their status. For-profit platforms MUST NOT receive equivalent public subsidy without comparable governance accountability requirements.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "feudal-corporate-governance"
    ],
    "example_case_ids": [
      "debian-project",
      "wikipedia",
      "apache-software-foundation"
    ],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "everyday-politics-as-democratic-infrastructure",
    "name": "Cultivate Everyday Political Skills as Democratic Infrastructure",
    "description": "Regulatory and civic-tech interventions MUST treat everyday political skill-building — consensus-making, facilitation, accountable association — as foundational infrastructure for democracy, not a downstream byproduct of platform design. Schneider argues that software designs SHOULD encourage the practice of political skills (voice, accountability, deliberation) rather than replacing or evading them. Policy MUST NOT assume that providing exit options or formal voting mechanisms is sufficient for democratic legitimacy; the texture of daily online interaction shapes democratic capacity at scale.",
    "target_failure_mode_ids": [
      "politics-of-no-politics",
      "implicit-feudalism",
      "californian-ideology"
    ],
    "example_case_ids": [
      "loomio-occupy-governance",
      "occupy-wall-street-consensus-assemblies",
      "adrienne-maree-brown-instagram-homeplace"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "anti-feudal-platform-design-mandate",
    "name": "Mandate Anti-Feudal Design Standards in Platform Governance",
    "description": "Legislation SHOULD require that platforms used for community governance provide meaningful voice and accountability mechanisms beyond mere exit options, so that users are not defaulted into implicitly feudal admin-dictator structures. Platforms MUST NOT be permitted to claim democratic legitimacy solely on the basis of exit availability (i.e., the ability to leave). Schneider argues that because implicit feudalism is encoded into social software at the design level, design mandates — not just content moderation rules — are necessary to interrupt the pipeline from platform feudalism to mass political authoritarianism.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "politics-of-no-politics",
      "exit-as-democracy-substitute"
    ],
    "example_case_ids": [
      "the-well-benevolent-dictatorship",
      "loomio-occupy-governance"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "antitrust-as-anti-feudal-democracy-tech",
    "name": "Antitrust Enforcement as Anti-Feudal Democracy Protection",
    "description": "Antitrust policy MUST NOT accept platform CEOs' argument that consolidated monopoly power is democratically necessary to counter foreign platform rivals; Schneider identifies this as a profound concession of democratic possibilities for expediency. Regulators SHOULD treat monopoly-scale platform control as a structural form of implicit feudalism, and enforcement actions SHOULD be framed explicitly as democracy-protection measures rather than purely economic ones. The VC business model's demand for monopoly-level scale is itself a policy target, not merely its downstream market effects.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "californian-ideology",
      "vc-monopoly-scale-imperative"
    ],
    "example_case_ids": [
      "facebook-zuckerberg-antitrust-defense"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "foreign-policy-democratic-platform-standards",
    "name": "Foreign Policy and Export Controls Tied to Democratic Platform Design",
    "description": "Schneider argues that legislation and foreign policy alone are insufficient to counter the authoritarian uses of Californian platforms, but they remain necessary components: export of implicitly feudal platform designs SHOULD be treated as a democracy and human-rights concern in foreign policy frameworks. Governments MUST attend to how domestic platform governance defaults are decoded by actors globally — including autocratic movements and state actors — and SHOULD condition platform market access on democratic design standards rather than treating platform spread as geopolitically neutral.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "californian-ideology",
      "digital-colonialism"
    ],
    "example_case_ids": [
      "islamic-state-social-media-feudalism",
      "qanon-8chan-admin-power"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "people-history-as-governance-foundation",
    "name": "Collective Memory-Making as Pre-Governance Infrastructure",
    "description": "Before a community can self-govern, it MUST first see itself as a community — through shared storytelling, collective history-making, and acknowledged common experience. Organizers SHOULD facilitate structured memory events (oral histories, chatbots, public assemblies) to ground users' transition from passive platform consumers to active citizens. This collective history then provides the normative foundation — what the platform did right and how it betrayed users — for articulating democratic expectations about what should come next.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "platform-as-commodity"
    ],
    "example_case_ids": [
      "peoples-history-of-twitter"
    ],
    "source_chapter": "Profile: A People's History of Twitter"
  },
  {
    "id": "subsidiarity-over-scalability-mandate",
    "name": "Subsidiarity Over Scalability Mandate",
    "description": "Online platforms MUST shift from scalability-first design toward subsidiarity: prioritizing appropriately local control wherever possible within a larger system. Platforms SHOULD provide communities with the tools and interfaces to develop governance processes appropriate to their own culture, rather than imposing global rule books and algorithmic enforcement. Facilitators MUST have tools to manage processes at community scale without exposure to algorithmic viral dynamics or distant corporate rule-setting. This directly counters the venture-capital scalability model that generates context-blind, due-process-free moderation regimes.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "politics-of-no-politics",
      "scalability-as-governance-substitute"
    ],
    "example_case_ids": [
      "mastodon-federated-moderation",
      "transformative-justice-community-accountability",
      "molochdao-coordination-experiment"
    ],
    "source_chapter": "Ch. 3"
  },
  {
    "id": "cooperative-democratic-structuring-for-daos",
    "name": "Cooperative Democratic Structuring for DAOs",
    "description": "DAOs and blockchain protocols SHOULD incorporate cooperative legal and governance structures — one-member-one-vote person-centric governance alongside market-based incentives — to counteract plutocratic tendencies. Platforms MUST NOT rely solely on cryptoeconomic token-voting as a substitute for democratic governance; noneconomic values and human identity MUST be centered in governance design. A growing number of DAOs incorporating as cooperative legal entities or reserving governance power for workers and active users represents the recommended direction.",
    "target_failure_mode_ids": [
      "captured-dao",
      "crypto-plutocracy",
      "implicit-feudalism"
    ],
    "example_case_ids": [
      "molochdao-coordination-experiment",
      "daohaus-platform"
    ],
    "source_chapter": "Ch. 3"
  },
  {
    "id": "rights-based-protocol-layer-mandate",
    "name": "Rights-Based Protocol Layer Mandate",
    "description": "Blockchain protocols and the apps built on them SHOULD embed a robust constitutional layer encoding rights, responsibilities, and guarantees beyond property and censorship-resistance — including protections against harm to people and the natural world. Future protocols SHOULD include code that ensures worker protections, basic income guarantees, bans on carbon-emitting miners, and other values not reducible to maximizing wealth. Rights-based designs MUST counteract plutocracy and make externalities visible to systems that would otherwise ignore them.",
    "target_failure_mode_ids": [
      "crypto-plutocracy",
      "captured-dao",
      "cryptoeconomic-externalities"
    ],
    "example_case_ids": [
      "molochdao-coordination-experiment"
    ],
    "source_chapter": "Ch. 3"
  },
  {
    "id": "democratic-play-as-governance-infrastructure",
    "name": "Democratic Play as Governance Infrastructure",
    "description": "Movements and platform designers SHOULD cultivate play — structured experimentation within rules set apart from ordinary life — as the engine through which democratic political skills are developed and future institutions are imagined. Governance designers MUST resist the impulse to treat all political experimentation as serious policy prescription, recognizing that play, pleasure, and mythological reinvention are legitimate and necessary preconditions for democratic culture. The right to play SHOULD be treated as a political right, because unequal access to spaces of play reproduces unequal access to political possibility.",
    "target_failure_mode_ids": [
      "politics-of-no-politics",
      "implicit-feudalism"
    ],
    "example_case_ids": [
      "transformative-justice-community-accountability",
      "molochdao-coordination-experiment"
    ],
    "source_chapter": "Ch. 3"
  },
  {
    "id": "governable-stack-building-as-resistance",
    "name": "Governable Stack Construction as Anti-Colonial Organizing",
    "description": "Communities MUST build interconnected, self-governed socio-technical infrastructures (governable stacks) that replace dependency on colonial platforms at every layer: community, interface, infrastructure, and ecology. Resistance movements SHOULD treat stack-building as the 'constructive programme' parallel to protest — the substrate without which ungovernable moments remain fleeting. Relying solely on colonial platforms for organizing MUST NOT be treated as equivalent to having a governable infrastructure of one's own.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "digital-colonialism",
      "virality-as-colonial-strategy"
    ],
    "example_case_ids": [
      "may-first-movement-technology",
      "detroit-community-technology-project",
      "social-coop"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "modular-politics-governance-layer",
    "name": "Modular Politics: A Composable Governance Layer for Online Spaces",
    "description": "Platform designers and community operators MUST implement governance tooling that is modular (composable, importable parts), expressive (wide range of process types), portable (reusable across platforms), and interoperable (able to share data and influence across systems). This governance layer SHOULD replace implicit feudalism as the default architecture of online spaces, enabling communities to evolve their governance in step with their needs. No governance tool SHOULD lock a community into a single decision-making paradigm or make governance non-transferable.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "politics-of-no-politics",
      "digital-colonialism"
    ],
    "example_case_ids": [
      "social-coop",
      "decidim",
      "policykit-gateway",
      "zodiac-dao-modules",
      "aragon-modular-dao"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "governance-archaeology-canon-expansion",
    "name": "Governance Archaeology: Expanding the Democratic Canon for Stack Design",
    "description": "Designers of governable stacks MUST intentionally excavate and relate to diverse historical governance legacies — including non-Western, Indigenous, and suppressed traditions — rather than defaulting to the Greco-Roman or Silicon Valley canon. This practice SHOULD involve two steps: expanding the canon to achieve an 'ecology of knowledges' across cultures and eras, and repairing relationships with communities whose governance legacies have suffered colonial violence, up to and including seeking permission and offering reciprocity or reparations when a stack derives value from those legacies. Colonial distortions of historical knowledge MUST be interrogated rather than reproduced.",
    "target_failure_mode_ids": [
      "digital-colonialism",
      "implicit-feudalism"
    ],
    "example_case_ids": [
      "metagovernance-project-daostar",
      "detroit-community-technology-project"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "user-board-representation-mandate",
    "name": "Mandatory User-Elected Board Representation on Large Platforms",
    "description": "Governments SHOULD impose, on platforms above a certain size, a requirement that user-elected representatives sit on corporate boards or moderation teams, modeled on Germany's worker codetermination law. Corporate and securities laws SHOULD enshrine governable spaces as a normal aspiration, where successful entrepreneurship transitions to community control. Regulators MUST recognize users, workers, and contributors — not only investors — as legitimate stakeholders with governance and ownership rights in the value they help create.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "democracy-theatre",
      "platform-centric-content-governance"
    ],
    "example_case_ids": [
      "meta-oversight-board",
      "airbnb-host-advisory-board",
      "germany-codetermination"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "citizen-assemblies-online-governance",
    "name": "Citizen Assemblies and Sortition-Based Bodies for Online Policy Challenges",
    "description": "Governments SHOULD convene sortition-based citizen assemblies with real decision-making power — not merely advisory roles — to address policy challenges in online life that transcend partisan legislating. Assemblies MUST be provisioned: participants SHOULD receive payment and adequate information to govern meaningfully, not be asked to absorb an extra burden on top of existing marginalization. Governments SHOULD cede genuine authority to network-native polities with strong democratic commitments, rather than treating assemblies as elite-driven consultation theater that leaves underlying power imbalances intact.",
    "target_failure_mode_ids": [
      "politics-of-no-politics",
      "top-down-regulatory-monoculture",
      "democracy-theatre"
    ],
    "example_case_ids": [
      "macron-citizens-convention-climate",
      "ireland-abortion-assembly",
      "chile-constitutional-assembly",
      "canada-misinformation-assembly",
      "michigan-covid-assembly"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "partner-state-cooperative-provisioning",
    "name": "Partner State Policy: Public Support for Democratic Associations Without Control",
    "description": "Governments MUST provision governable spaces by providing economic and political resources that self-governance requires, without attempting to control the associations they support. Policy SHOULD follow the 'partner state' model developed by cooperativists: public financing, legal structures, and procurement rules that encourage democratic associations across society. Social provisioning MUST correct unequal access to authority and agency, recognizing hidden care and governance labor, so that self-governance does not become an extra burden falling on already-marginalized communities.",
    "target_failure_mode_ids": [
      "top-down-regulatory-monoculture",
      "implicit-feudalism",
      "paternalist-platform-governance"
    ],
    "example_case_ids": [
      "porto-alegre-participatory-budgeting",
      "decidim-barcelona",
      "rural-electrification-cooperatives",
      "california-cooperative-economy-act"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "metagovernance-democratic-design-mandate",
    "name": "Metagovernance as Democratic Design Mandate",
    "description": "Policy and institutional actors MUST attend to the background conditions of governance — the metagovernance layer — rather than addressing individual governance failures in isolation. Schneider argues that implicit feudalism itself functions as a hidden metagovernance, and that replacing it requires explicit, intentional shaping of the conditions under which communities self-organize. Policies SHOULD support community ownership and self-governance over paternalistic top-down decrees, and MUST NOT allow the mystification of technology to crowd out the cultivation of political skills among ordinary people.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "politics-of-no-politics",
      "feudal-design-defaults"
    ],
    "example_case_ids": [
      "native-land-ca",
      "project-cybersyn",
      "dao-token-metagovernance"
    ],
    "source_chapter": "Epilogue"
  }
];
