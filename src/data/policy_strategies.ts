import type { PolicyStrategy } from '../types.js';

export const POLICY_STRATEGIES: PolicyStrategy[] = [
  {
    "id": "self-governance-as-network-policy-paradigm",
    "name": "Self-Governance as Network Policy Paradigm",
    "description": "Schneider argues for a policy paradigm encoded in both law and technical systems that takes self-governance — rather than top-down authority — as the basis for problem-solving at the network level. This paradigm would make networks home to new jurisdictions enabled by but not reducible to territorial governments, positioning democratic self-governance as an organizing principle for the legal and technical infrastructure of online life.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "platform-unaccountability",
      "democratic-skill-atrophy"
    ],
    "example_case_ids": [
      "participatory-budgeting-porto-alegre",
      "barcelona-digital-deliberation",
      "taiwan-digital-deliberation"
    ],
    "source_chapter": "Introduction"
  },
  {
    "id": "participatory-budgeting-as-rupture",
    "name": "Participatory Budgeting and Digital Deliberation as Democratic Rupture",
    "description": "Schneider identifies a class of government-led innovations — participatory budgeting originating in Porto Alegre (1989), digital deliberation platforms in Barcelona and Taiwan, wiki-style constitutional crowdsourcing, randomly selected citizen assemblies, and AI-assisted opinion clustering — as a significant democratic rupture that presents opportunities to embed richer feedback loops between citizens and governance. He notes, however, that most such experiments play only advisory roles and grant citizens little in the way of meaningfully binding new powers, disclosing existing governments' resistance to departing from routine.",
    "target_failure_mode_ids": [
      "democratic-skill-atrophy",
      "platform-unaccountability"
    ],
    "example_case_ids": [
      "participatory-budgeting-porto-alegre",
      "barcelona-digital-deliberation",
      "taiwan-digital-deliberation"
    ],
    "source_chapter": "Introduction"
  },
  {
    "id": "cooperative-movement-as-democratic-spillover",
    "name": "Cooperative Movement as Democratic Spillover Strategy",
    "description": "Schneider traces a historical strategy in which practicing democracy at small economic scales — through cooperative stores, worker associations, and mutual-aid organizations — has functioned as a method for building democratic capacity and power at higher political levels. Chartists formed cooperative stores to exercise and demonstrate democratic skills; cooperatives linked abolitionist movements and Black liberation organizing; Populist cooperatives were understood as defenses against demagogic appeal. Schneider frames this lineage as a model for what governable online spaces could accomplish today.",
    "target_failure_mode_ids": [
      "democratic-skill-atrophy",
      "implicit-feudalism"
    ],
    "example_case_ids": [
      "cooperative-chartist-stores",
      "black-liberation-cooperatives",
      "populist-cooperative-movement"
    ],
    "source_chapter": "Introduction"
  },
  {
    "id": "blockchain-web3-as-democratic-rupture-opportunity",
    "name": "Blockchain / Web3 as Contested Democratic Rupture",
    "description": "Schneider identifies the advent of blockchain, Web3, and crypto as a second major rupture offering opportunities to reimagine networks along more democratic lines. He argues that distributed ledgers differ with near-surgical precision in their power structures from earlier server-centric systems, and that open-source foundations allow successful governance innovations to spread rapidly. He is explicit that much in this space is antidemocratic and plutocratic, framing the rupture as a contested space presenting as many dangers as opportunities rather than a salvific solution.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "platform-unaccountability"
    ],
    "example_case_ids": [
      "ethereum-buidl-culture"
    ],
    "source_chapter": "Introduction"
  },
  {
    "id": "redirecting-finance-and-regulation-for-democratic-design",
    "name": "Redirecting Finance and Regulation to Enable Democratic Design",
    "description": "Schneider argues that enabling democratic design in online life requires redirecting flows of finance and regulation, not merely redesigning interfaces. Because design emerges through social and economic life rather than from solitary designers, changing how online spaces are built means also changing aspects of the social order that shape and constrain it. This positions regulatory and financial reform as necessary preconditions for the emergence of governable spaces at scale.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "democratic-skill-atrophy",
      "platform-unaccountability"
    ],
    "example_case_ids": [],
    "source_chapter": "Introduction"
  },
  {
    "id": "communityrule-governance-tooling",
    "name": "CommunityRule: Modular Governance Design Tooling",
    "description": "CommunityRule is a web application that allows online communities to design, publish, and share governance rules through an interactive drag-and-drop interface of nestable, configurable governance modules. Developed through consultations with mutual aid groups and open-source software communities during the COVID-19 pandemic, it addresses the gap between overly formal traditional bylaws and the absence of rules that lets admin power fill the void. Users can publish rules to a public library where others can fork and adapt them, and a set of simple templates reflecting basic organizational designs is available as a free booklet. Schneider frames CommunityRule as an attempt to imagine interfaces that make governance arrangements easy to design and understand, directly countering the conditions under which implicit feudalism thrives.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "politics-of-no-politics"
    ],
    "example_case_ids": [
      "communityrule-mutual-aid-groups",
      "communityrule-open-source-communities"
    ],
    "source_chapter": "Profile: CommunityRule"
  },
  {
    "id": "homeplace-as-counter-design-strategy",
    "name": "Homeplace as Site of Resistance Against Feudal Platform Design",
    "description": "Drawing on bell hooks's concept of the homeplace — a space of care, shared power, and resistance carved out within an oppressive broader society — Schneider identifies a recurring counter-strategy in which marginalized communities construct sites of solidarity and democratic practice on top of implicitly feudal platforms, beyond the comprehension or control of platform owners. These homeplaces are not encoded in the software but emerge through affective affinity and deliberate community-building, and they represent an alternative political imagination to the homesteading logic dominant in Californian technology. Schneider treats the cultivation and protection of homeplaces as a concrete, if fragile, democratic alternative to the politics of no-politics.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "politics-of-no-politics",
      "homesteading-logic"
    ],
    "example_case_ids": [
      "brown-instagram-homeplace",
      "the-well-homeplace-moments"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "anti-feudal-practice-before-anti-feudal-design",
    "name": "Practice Anti-Feudal Interactions Before Building Anti-Feudal Systems",
    "description": "Schneider invokes Conway's Law — that technical systems come to resemble the organizations that design them — to advance Agre's prescription that cultivating anti-feudal social practices must precede the construction of anti-feudal technology. Organizations and movements that first develop habits of democratic accountability, consensus, and distributed authority are thereby positioned to encode those habits into the software they build, rather than replicating feudal permission-control logics by default. Loomio is offered as an example of a platform whose design followed from the offline consensus practices of Occupy activists rather than from business-model convenience.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "politics-of-no-politics"
    ],
    "example_case_ids": [
      "loomio-occupy-governance"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "minitel-public-network-alternative-model",
    "name": "Public-State Network Infrastructure as Alternative to Californian Feudal Platforms",
    "description": "Schneider endorses Barbrook and Cameron's citation of France's Minitel system as an example of an alternative political economy for networked communication — one organized through state investment and public access rather than venture-capital-driven platform monopoly. The argument is that democratic alternatives to implicit feudalism require not only different everyday practices but also different infrastructure models, in which public or cooperative ownership replaces the VC exit-logic that demands feudal centralization for scalability. This frames public network infrastructure as a democratic design strategy at the level of political economy.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "californian-ideology",
      "politics-of-no-politics",
      "exit-over-voice"
    ],
    "example_case_ids": [
      "minitel-france"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "peoples-history-as-pre-governance-foundation",
    "name": "Collective History-Telling as Pre-Governance Foundation",
    "description": "Before a user community can begin to self-govern, it needs to see itself as a community — through participants telling stories about themselves and having shared experiences. Schneider's \"A People's History of Twitter\" project, organized in March 2023, used a public online event and an AI chatbot to gather accounts from nearly two hundred users, grounding a prospective democratic alternative in a shared historical record. This collective history serves as the foundation for articulating expectations about what a platform owes its users and what democratic governance of it might look like.",
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
    "id": "shareholder-proposal-for-user-ownership",
    "name": "Shareholder Proposal as Platform Decommodification Strategy",
    "description": "In 2017, Schneider's team filed a shareholder proposal at Twitter aimed at establishing a framework for users to become the platform's owners — a tactic for decommodifying a commercial social platform from within its existing corporate structure. This approach works through securities law and investor relations to introduce user-ownership mechanisms before a platform can be bought or sold as a pure commodity.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "platform-as-commodity"
    ],
    "example_case_ids": [
      "twitter-user-ownership-shareholder-proposal-2017"
    ],
    "source_chapter": "Profile: A People's History of Twitter"
  },
  {
    "id": "shadow-government-citizen-assembly-for-platforms",
    "name": "Shadow Government / Citizen Assembly as Platform Democratic Alternative",
    "description": "Following Elon Musk's acquisition of Twitter, Schneider's team — working with former Twitter employees and practitioners of citizen assemblies for governments — began designing a representative assembly of Twitter users as a shadow governance body. The approach draws on deliberative democratic forms proven in civic contexts and applies them to imagining what policies a user-governed platform would adopt, who would have standing to propose and ratify changes, and how legitimacy would be established.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "platform-as-commodity"
    ],
    "example_case_ids": [
      "peoples-history-of-twitter",
      "twitter-user-ownership-shareholder-proposal-2017"
    ],
    "source_chapter": "Profile: A People's History of Twitter"
  },
  {
    "id": "subsidiarity-over-scalability-design-mandate",
    "name": "Subsidiarity Over Scalability as Platform Design Mandate",
    "description": "Schneider and Amy Hasinoff argue for a structural shift in platform governance from scalability—expanding without rethinking basic elements—to subsidiarity, a principle that prioritizes appropriately local control wherever possible within a larger system. Under this approach, any online community would have the tools and interfaces to develop accountability processes suited to its own culture, with facilitators managing processes free from algorithmic viral winds or rules set by distant corporate offices. This is framed as a direct regulatory and design counter to the venture-capital model that drives automation and global rule books at the expense of contextual due process.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "scalability-as-anti-democratic-design",
      "politics-of-no-politics"
    ],
    "example_case_ids": [
      "mastodon-federated-moderation",
      "transformative-justice-community-accountability",
      "hollow-water-ojibway-accountability-process"
    ],
    "source_chapter": "Ch. 4"
  },
  {
    "id": "rights-based-protocol-design",
    "name": "Rights-Based Constitutional Layer in Blockchain Protocols",
    "description": "Schneider describes a strategy of encoding a robust set of rights, responsibilities, and guarantees directly into blockchain protocols—going beyond the property-rights and censorship-resistance protections already present in many systems. Future protocols, on this model, might include code ensuring worker protections, banning carbon-emitting mining, guaranteeing basic income to all users, or enforcing natural-language agreements through cryptoeconomic courts. The effect would be to make externalities and noneconomic values visible and enforceable at the protocol layer, counteracting plutocracy without relying solely on territorial state regulation.",
    "target_failure_mode_ids": [
      "crypto-plutocracy",
      "cryptoeconomics-without-politics",
      "blockchain-externalities"
    ],
    "example_case_ids": [
      "molochdao-coordination-experiment"
    ],
    "source_chapter": "Ch. 4"
  },
  {
    "id": "abolitionist-democratic-infrastructure-as-platform-alternative",
    "name": "Abolition Democracy as Framework for Platform Accountability Infrastructure",
    "description": "Drawing on Angela Davis's elaboration of W. E. B. Du Bois's 'abolition democracy,' Schneider frames transformative justice not merely as a policing reform but as a template for building democratic accountability infrastructure online. The argument is that the resources currently spent on coercive, scalable enforcement—content moderation automation, global rule books, opaque human review—could instead fund the cultivation of political skills, contextual facilitators, and community-governed processes. This reframes defunding coercive platform governance as a positive democratic investment, parallel to Du Bois's call for voting rights, cooperative economic power, and education in the wake of slavery.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "scalability-as-anti-democratic-design"
    ],
    "example_case_ids": [
      "transformative-justice-community-accountability",
      "hollow-water-ojibway-accountability-process"
    ],
    "source_chapter": "Ch. 4"
  },
  {
    "id": "modular-politics-governance-layer",
    "name": "Modular Politics as Governance Layer for the Internet",
    "description": "Modular politics is a design paradigm, developed by Schneider and collaborators in the Metagovernance Project, that envisions a composable governance layer capable of replacing implicit feudalism across online spaces. It rests on four design goals — modularity (composable governance parts), expressiveness (wide range of implementable processes), portability (governance tools transferable across platforms), and interoperability (governance systems on different platforms can interact and share data). The framework is explicitly positioned as an action-arena redesign: by changing what governance tools are available and how they interoperate, it changes what choices communities can make. Implementations have emerged in PolicyKit, Gateway, Decidim, and DAO tooling such as Zodiac and Aragon.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "politics-of-no-politics"
    ],
    "example_case_ids": [
      "social-coop",
      "decidim-platform",
      "aragon-dao",
      "metagovernance-project-gateway"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "governance-archaeology-as-design-practice",
    "name": "Governance Archaeology: Expanding the Democratic Canon for Stack Design",
    "description": "Governance archaeology, developed by Schneider and political scientist Federica Carugati, is a practice of intentionally crafting relationships between new governance designs and preexisting historical legacies — assembling a database of collective-governance institutions across time and space as a resource for designers. It involves two decolonial moves: expanding the canon of democratic legacies beyond the Western Greco-Roman tradition (drawing on Indian city-republics with sortition, African cowrie-based exchange systems, Indigenous North American treaty practices, and more) and repairing relationships with suppressed or violated governance traditions through reciprocity, including consultation with living descendants and potential royalties or reparations when stacks derive value from a community's insights. The goal is to make designers' relationships with historical precedents more explicit, rigorous, and accountable.",
    "target_failure_mode_ids": [
      "digital-colonialism",
      "implicit-feudalism"
    ],
    "example_case_ids": [
      "may-first-movement-technology",
      "detroit-community-technology-project"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "constructive-programme-stack-building",
    "name": "Constructive Programme: Stack-Building as the Heart of Resistance",
    "description": "Drawing on Gandhi's insight that civil disobedience without a constructive programme is 'like a paralysed hand attempting to lift a spoon,' Schneider frames the deliberate assembly of governable stacks as the infrastructural heart of anticolonial digital resistance — not a supplement to protest but its necessary substrate. This strategy holds that communities using colonial platforms for organizing while maintaining governable stacks of their own occupy a structurally different position: they are maroons with territory of their own, rather than purely subjected users. Stack-building is simultaneously pedagogy, political practice, and rupture — the Detroit Community Technology Project's neighborhood WiFi nodes and the university lab's self-hosted cloud are offered as instances where even small interventions shatter the inevitability claims of dominant providers.",
    "target_failure_mode_ids": [
      "digital-colonialism",
      "implicit-feudalism",
      "virality-as-colonizing-strategy"
    ],
    "example_case_ids": [
      "may-first-movement-technology",
      "detroit-community-technology-project",
      "social-coop"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "free-software-commons-with-community-accountability",
    "name": "Free Software Commons Reoriented toward Community Accountability",
    "description": "Schneider acknowledges that the Free Software and Open Source movements have produced vast shared software commons but argues their emphasis on individual user freedoms — including those of corporations — has privileged the technically sophisticated while enabling exclusionary cultures and uses antithetical to democratic values (military jets, asylum-seeker imprisonment databases). The policy move he identifies is to reorient commons-based software development so that community accountability is prioritized alongside individual freedom, shifting the commons from a neutral resource to a substrate explicitly designed for self-governing communities. Governable stacks rely on commons-based software exclusively but insist that the social and governance dimensions of the stack matter as much as the licensing model.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "digital-colonialism"
    ],
    "example_case_ids": [
      "may-first-movement-technology",
      "social-coop"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "section-230-reform-for-self-governance",
    "name": "Section 230 Reform Conditioned on User Self-Governance",
    "description": "Schneider proposes restructuring liability protection under Section 230 so that platforms gain immunity only by sharing power with user communities — requiring them to provide modular-politics tools (elections, petitions, boards, juries) and expecting subsidiarity as a prerequisite for legal protection. Rather than reinforcing the company-customer logic of content moderation, this approach centers peer-to-peer self-governance at the scale of communities. The European food-sharing platform Karrot, which requires a group process rather than administrative fiat to remove a member, illustrates what such design looks like in practice.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "politics-of-no-politics",
      "platform-centric-content-governance"
    ],
    "example_case_ids": [
      "karrot-food-sharing-platform",
      "section-230-safe-harbor-regime"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "cooperative-economy-act-gig-worker-federation",
    "name": "Cooperative Economy Act: Federating Gig Workers into Tax-Advantaged Co-ops",
    "description": "Ra Criscitiello of SEIU-UHW initiated a California state-level proposal — the Cooperative Economy Act — that would create a federation of tax-advantaged, employee-owned cooperatives able to contract collectively with online labor platforms. Workers would elect their co-ops' leaders and bargain over platform terms without platforms needing to classify them as employees, drawing on the Hollywood guild model of portable representation across jobs. Schneider presents this as a legislative strategy for converting the gig economy's fragmented coordination rights into worker self-governance backed by state power.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "algorithmic-labor-management",
      "antitrust-as-coordination-suppression"
    ],
    "example_case_ids": [
      "nursescan-seiu-cooperative-proposal",
      "california-cooperative-economy-act",
      "colombian-driver-guilds"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "community-ownership-mandate-for-physical-infrastructure",
    "name": "Mandatory Community Stewardship of Physical Internet Infrastructure",
    "description": "Schneider proposes reversing the prevailing pattern of corporate-backed prohibitions on municipal and cooperative broadband by instead preventing long-term investor ownership of physical internet infrastructure. Private firms might build and help capitalize such projects, but the law could ensure that communities of users become stewards after build-out, backed by public financing commitments modeled on rural electrification. The Magnolia Road Internet Cooperative in Colorado and Latin American microtelcos are cited as existing demonstrations that user-governed connectivity can succeed where investor ownership falls short.",
    "target_failure_mode_ids": [
      "infrastructure-mystification",
      "coordination-rights-suppression",
      "investor-ownership-capture"
    ],
    "example_case_ids": [
      "magnolia-road-internet-cooperative",
      "latin-american-microtelcos",
      "fire-costa-rica-feminist-radio"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "exit-to-community-e2c",
    "name": "Exit to Community (E2C): Transitioning Startups to User Ownership",
    "description": "Schneider coined the slogan 'exit to community' (E2C) in 2019 as an alternative to the two dominant startup exit paths — acquisition and public stock offering — both of which treat the user community as a commodity to be sold. E2C invites startups to bring their most direct participants (users, workers, contributors) into structures of ownership and governance through mechanisms such as dual-class stock, purpose trusts, and cooperatives. He argues that incorporation statutes and securities law need to be redesigned to support this kind of cross-border user co-ownership, enabling communities to access capital currently available only to wealthy investors.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "venture-capital-exit-logic",
      "securities-law-as-participation-barrier"
    ],
    "example_case_ids": [
      "gitcoindao-stewardship",
      "uber-airbnb-sec-stock-request",
      "meta-oversight-board"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "user-codetermination-mandate",
    "name": "User Codetermination Mandate for Large Platforms",
    "description": "Drawing on Germany's requirement of worker codetermination through board participation, Schneider proposes that platforms above a certain size be required to include user-elected representatives on their boards or moderation teams. Governments might also condition securities exemptions — as a US regulator's 2018 'sufficiently decentralized' standard did for blockchains — on platforms distributing ownership and governance meaningfully to users. This approach frames democratic ownership as a normal aspiration built into corporate and securities law, rather than a voluntary gesture.",
    "target_failure_mode_ids": [
      "implicit-feudalism",
      "platform-centric-content-governance",
      "democracy-theatre"
    ],
    "example_case_ids": [
      "meta-oversight-board",
      "airbnb-host-advisory-board",
      "gitcoindao-stewardship"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "antitrust-as-coordination-rights-allocator",
    "name": "Antitrust Reform as Reallocation of Worker Coordination Rights",
    "description": "Drawing on legal scholar Sanjukta Paul's framing of antitrust law as an 'allocator of coordination rights,' Schneider argues that antitrust doctrine has functioned to fragment platform workers and prevent them from forming unions or cooperatives, while leaving large platform companies' internal coordination unchallenged. Reforming antitrust to permit — and actively enable — worker and user coordination is thus a democratic policy move, redistributing the right to organize from corporations to communities. This analysis connects feminist critiques of witch-hunt persecution of women's economic networks to contemporary platform labor suppression.",
    "target_failure_mode_ids": [
      "antitrust-as-coordination-suppression",
      "algorithmic-labor-management",
      "implicit-feudalism"
    ],
    "example_case_ids": [
      "california-cooperative-economy-act",
      "colombian-driver-guilds",
      "nursescan-seiu-cooperative-proposal"
    ],
    "source_chapter": "Ch. 6"
  }
];
