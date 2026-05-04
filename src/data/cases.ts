import type { Case } from '../types.js';

export const CASES: Case[] = [
  {
    "id": "wikipedia-community-governance",
    "name": "Wikipedia",
    "domain": "online_community",
    "brief": "A massive volunteer-run encyclopedia governed through elaborate community norms, talk pages, noticeboards, and elected/appointed roles that have evolved over two decades.",
    "community": "Global volunteer editors, administrators, and readers",
    "governance_form_ids": [
      "consensus-decision-making",
      "representational-voting",
      "community-policy-making"
    ],
    "democratic_features": [
      "MUST surface community-developed policies through talk pages and noticeboards rather than top-down admin fiat",
      "SHOULD subject administrator actions to community review and appeal processes",
      "Editors MUST reach consensus or supermajority before major content or policy changes take effect",
      "Governance SHOULD evolve organically through documented community norms rather than platform-owner decree"
    ],
    "lessons_or_failures": "Wikipedia demonstrates that large-scale online communities can develop sophisticated self-governance without corporate ownership of the governance layer — but its complexity also shows how democratic norms can become barriers to entry for new participants.",
    "source_chapter": "Introduction"
  },
  {
    "id": "mastodon-federated-moderation",
    "name": "Mastodon / Fediverse",
    "domain": "federated_network",
    "brief": "A federated social network where individual server administrators set local rules and moderation policies, with inter-server federation agreements creating a layered governance ecology.",
    "community": "Instance administrators, moderators, and users across thousands of independently operated servers",
    "governance_form_ids": [
      "federated-subsidiarity",
      "community-policy-making"
    ],
    "democratic_features": [
      "MUST allow individual instances to set their own community standards and moderation rules without central platform override",
      "SHOULD enable users to choose instances whose governance matches their values, preserving meaningful exit",
      "Instance admins MUST NOT impose federation on users without transparency about inter-server data sharing",
      "SHOULD surface moderation decisions to community appeal rather than treating admin choices as final"
    ],
    "lessons_or_failures": "The fediverse shows that federated architecture can distribute governance power and resist central capture, but instance-level admin feudalism remains a risk — small servers can replicate implicit feudalism at a smaller scale if internal democracy is absent.",
    "source_chapter": "Introduction"
  },
  {
    "id": "loomio-consensus-decision-making",
    "name": "Loomio",
    "domain": "platform_cooperative",
    "brief": "A worker-owned cooperative that builds and operates a deliberation and consent-based decision-making tool used by cooperatives, movements, and organizations worldwide.",
    "community": "Worker-owners of Loomio cooperative; user organizations making collective decisions via the platform",
    "governance_form_ids": [
      "consensus-decision-making",
      "platform-cooperative-ownership"
    ],
    "democratic_features": [
      "MUST give worker-owners meaningful voice in platform direction through cooperative governance structures",
      "SHOULD use the platform's own deliberation tools for internal cooperative decisions (eating your own cooking)",
      "Decision-making tools MUST support consent-based (not just majority-rule) processes, preserving minority voice",
      "SHOULD make governance processes legible and participatory rather than delegating all decisions to management"
    ],
    "lessons_or_failures": "Loomio illustrates that platform cooperatives can align tool design with democratic values when ownership structure and product purpose reinforce each other — but sustaining cooperative economics in a competitive software market remains an ongoing challenge.",
    "source_chapter": "Introduction"
  },
  {
    "id": "porto-alegre-participatory-budgeting",
    "name": "Porto Alegre Participatory Budgeting",
    "domain": "state",
    "brief": "A pioneering participatory budgeting process launched in Porto Alegre, Brazil in 1989, giving citizens direct voice in municipal budget decisions.",
    "community": "Residents of Porto Alegre, Brazil, participating in municipal governance",
    "governance_form_ids": [
      "participatory-budgeting",
      "direct-democracy"
    ],
    "democratic_features": [
      "Citizens MUST have binding (not merely advisory) input into budget allocation decisions",
      "Process SHOULD enable direct participation rather than delegating solely to elected representatives",
      "Design SHOULD create real feedback loops between government and governed beyond periodic elections"
    ],
    "lessons_or_failures": "Schneider cites Porto Alegre as an early example of territorial governments opening to richer democratic participation via new processes. However, he notes that even innovative civic-participation experiments often remain merely advisory, granting citizens little in the way of meaningfully binding new powers — a recurring limitation of state-level democratic ruptures.",
    "source_chapter": "Introduction",
    "source_quote": "These range from the advent of participatory budgeting processes in Porto Alegre, Brazil, in 1989 to the digital deliberation platforms adopted more recently in places like the city of Barcelona and the national government of Taiwan."
  },
  {
    "id": "barcelona-taiwan-digital-deliberation",
    "name": "Barcelona and Taiwan Digital Deliberation Platforms",
    "domain": "state",
    "brief": "Digital deliberation platforms adopted by the city of Barcelona and the national government of Taiwan to enable broader citizen participation in governance.",
    "community": "Urban residents of Barcelona and national citizens of Taiwan engaging with government through digital platforms",
    "governance_form_ids": [
      "digital-deliberation",
      "participatory-democracy"
    ],
    "democratic_features": [
      "Platforms SHOULD aggregate and surface citizen opinion across large populations",
      "AI-assisted tools SHOULD identify clusters of participant opinion independent of political parties",
      "Processes MUST go beyond advisory roles to grant citizens meaningfully binding powers — a bar Schneider notes these experiments often fail to clear",
      "Wiki-style crowdsourcing and randomly selected citizen assemblies SHOULD be available as modalities"
    ],
    "lessons_or_failures": "Schneider treats these as evidence of a 'rupture' where territorial governments experiment with richer feedback loops. But he is clear-eyed that most such innovations 'perform merely advisory roles, granting citizens little in the way of new powers that are meaningfully binding,' disclosing the resistance of today's governments to departing from routine representative structures.",
    "source_chapter": "Introduction",
    "source_quote": "The experiments include wiki-style efforts to crowdsource constitutions, assemblies of randomly selected citizens drafting policy proposals, and the use of artificial intelligence to identify clusters of participant opinion independent of political parties."
  },
  {
    "id": "mothers-garden-club",
    "name": "Mother's Neighborhood Garden Club",
    "domain": "online_community",
    "brief": "A long-running suburban garden club governed by formal bylaws, used by Schneider as a counterpoint to the governance vacuum of online social spaces.",
    "community": "Neighborhood residents participating in a civic garden club governed since the 1960s",
    "governance_form_ids": [
      "bylaws-governance",
      "elected-leadership"
    ],
    "democratic_features": [
      "Club MUST maintain formal written bylaws providing clear procedures for decisions and conflict resolution",
      "Officers SHOULD be elected by members rather than appointed by a founder or admin",
      "Rules MUST be accessible to all members and consulted when disputes arise",
      "Governance structure SHOULD persist across leadership generations — this club's bylaws have survived since the 1960s"
    ],
    "lessons_or_failures": "Schneider uses the garden club to illustrate the contrast with online spaces: even a small civic association has elections, dispute resolution mechanisms, and template bylaws — democratic infrastructure that is almost entirely absent from the admin-controlled interfaces of online communities. The club is 'unremarkable among countless similar organizations,' yet online groups rarely match its democratic robustness or longevity.",
    "source_chapter": "Introduction",
    "source_quote": "Few online groups I had been part of could hold a candle to the simple and effective set of rules that had governed the garden club since the 1960s, rules unremarkable among countless similar organizations with a vast range of purposes. Few online groups will last so long."
  },
  {
    "id": "rochdale-cooperative-chartists",
    "name": "Rochdale / Chartist Cooperative Stores",
    "domain": "platform_cooperative",
    "brief": "Early English cooperative stores formed by Chartist factory workers to exercise and demonstrate democratic skills while demanding the right to vote in national elections.",
    "community": "English factory workers and Chartist movement members in the 19th century",
    "governance_form_ids": [
      "one-member-one-vote",
      "cooperative-governance"
    ],
    "democratic_features": [
      "Every customer-member MUST have an equal vote in cooperative governance, regardless of capital contribution",
      "Cooperative structures SHOULD serve as training grounds for broader democratic participation — democratic muscles need exercise",
      "Local cooperative democracy SHOULD function as proof of democratic capacity to skeptical elites"
    ],
    "lessons_or_failures": "Schneider presents the Chartist cooperatives as a historical exemplar of 'spillover effects' — practicing democracy at small scales builds democratic power at higher levels. These cooperatives became linked to abolitionist movements (Frederick Douglass) and Black liberation movements, demonstrating how everyday economic democracy can prefigure transformative politics. Populist organizers similarly saw local cooperatives as a defense against demagogic appeals to exploited farmers.",
    "source_chapter": "Introduction",
    "source_quote": "The modern cooperative movement first took hold in England among Chartists, factory workers demanding the right to vote in elections. To exercise and prove their democratic skills, they formed cooperative stores where every customer had a vote."
  },
  {
    "id": "project-cybersyn",
    "name": "Project Cybersyn (Chile)",
    "domain": "public_infrastructure",
    "brief": "Salvador Allende's attempt to create a governable computer system in Chile that organized information flows and feedback loops at national scale.",
    "community": "Chilean government, workers, and citizens under the Allende administration",
    "governance_form_ids": [
      "cybernetic-governance",
      "participatory-information-systems"
    ],
    "democratic_features": [
      "System SHOULD organize information flows as feedback loops between citizens and government rather than as top-down broadcast",
      "Governance infrastructure MUST be designed to make the state legible and responsive to its constituents",
      "Technical systems SHOULD support democratic accountability rather than consolidate power in central administrators"
    ],
    "lessons_or_failures": "Schneider invokes Cybersyn as an early, radical attempt to design governance into technical infrastructure itself — a precursor to his argument that democratic design must be embedded in the tools, not added as an afterthought. It exemplifies the cybernetic school's view that information flows and feedback loops are constitutive of governance, a frame Schneider draws on throughout the book.",
    "source_chapter": "Introduction"
  },
  {
    "id": "metagovernance-project",
    "name": "Metagovernance Project",
    "domain": "movement",
    "brief": "A community of research and practice co-led by Schneider focused on advancing possibilities for self-governance in online spaces.",
    "community": "Researchers, developers, governance designers, and practitioners working on online self-governance",
    "governance_form_ids": [
      "collaborative-research-governance",
      "metagovernance"
    ],
    "democratic_features": [
      "Community SHOULD operate as a collaborative rather than a hierarchical research body",
      "Members SHOULD co-author, co-investigate, co-develop, and co-critique — distributing intellectual authority",
      "Project SHOULD hold theoretical claims accountable to communities of practice and running code"
    ],
    "lessons_or_failures": "Schneider identifies Metagov as the social infrastructure behind the book's ideas, modeling the recursive accountability between theory and practice he advocates. It demonstrates that governance design communities themselves must embody democratic norms to produce credible democratic designs.",
    "source_chapter": "Introduction"
  },
  {
    "id": "democratic-public-high-school",
    "name": "Democratic Public High School (Schneider's)",
    "domain": "workplace",
    "brief": "A public high school whose founders insisted on making it unusually democratic, including weekly town meetings where students set school rules and participated in designing admission policy.",
    "community": "Students, faculty, and administrators of a democratically designed public high school",
    "governance_form_ids": [
      "town-meeting-governance",
      "participatory-rule-setting"
    ],
    "democratic_features": [
      "Students MUST have real, binding participation in setting school rules — not merely advisory student councils",
      "Town meetings SHOULD be held regularly to surface and resolve governance questions",
      "Students SHOULD be empowered to lead design of significant policies (e.g., admission) with appropriate guidance and infrastructure",
      "Governance experience MUST feel genuine — participants need real stakes for democratic habits to form and persist"
    ],
    "lessons_or_failures": "Schneider draws on this formative experience as evidence that when people are given real infrastructure and genuine power to self-govern, they rise to the occasion. The lasting impression it left — decades later — testifies to the power of designing governance experiences. It grounds his claim that democratic muscles must be exercised at small scales to be available at larger ones.",
    "source_chapter": "Introduction",
    "source_quote": "When people participate in healthy democracy firsthand, it can leave a lifelong impression that such a thing is possible, even if actual manifestations of it remain rare."
  },
  {
    "id": "picnic-group-chat",
    "name": "The Picnic Group Chat",
    "domain": "online_community",
    "brief": "Schneider's opening vignette: a real-world picnic group that migrates its collective decision-making to a group chat during a rainstorm, illustrating how online spaces flatten social structure and lack governance infrastructure.",
    "community": "A social group of picnickers attempting collective decision-making via a group chat",
    "governance_form_ids": [],
    "democratic_features": [
      "Online spaces MUST NOT be mistaken for governable spaces merely because they enable conversation — without decision criteria, commitment mechanisms, or accountability, chatter does not constitute governance",
      "Group chats SHOULD include tools for steering debate into decision, not just broadcasting opinion",
      "Governance design MUST account for differential access — youngest and eldest participants lacked equal voice in the chat",
      "Admin removal powers MUST NOT substitute for legitimate community accountability — arbitrary removal of a rude participant by the chat creator exemplifies implicit feudalism at its smallest scale"
    ],
    "lessons_or_failures": "The picnic-to-group-chat transition is Schneider's master illustration of what is lost when social life migrates online without democratic design. The uneven topology of relationship, the tacit consensus-building, the embodied cues of the physical gathering — all collapse into a flat, admin-controlled speech environment with no decision criteria, no commitment signals, and no accountability. The episode encapsulates the book's central diagnosis.",
    "source_chapter": "Introduction",
    "source_quote": "What happened to the picnic when it went online? This is a version of the questions many of us find ourselves asking over and over, as one scene of social life after another migrates to digital networks—our workplaces and markets, our classes and clubs, our money and family, our religion and politics."
  },
  {
    "id": "bbs-sysop-governance",
    "name": "Bulletin Board System (BBS) Sysop Governance",
    "domain": "online_community",
    "brief": "Early online bulletin board systems run by 'sysops' from their own homes, establishing absolute administrator authority over virtual communities as a direct extension of physical hardware ownership.",
    "community": "Computer hobbyists and early internet users on dial-up BBS networks, late 1970s–1990s",
    "governance_form_ids": [
      "implicit-feudalism",
      "founder-succession"
    ],
    "democratic_features": [
      "Sysop MUST NOT be overruled by users — authority derived from physical ownership of the host machine",
      "Users SHOULD have exit as their primary (and often only) recourse against sysop decisions",
      "Sysops held absolute power: 'judge, jury, and executioner' with power to terminate the entire community",
      "Some BBSes (e.g., OneNet) experimented with constitutions and membership votes, showing democratic alternatives WERE possible even in this context",
      "FidoNet's votemgr ballot-counting program demonstrates that democratic tooling COULD be embedded in feudal infrastructure"
    ],
    "lessons_or_failures": "BBS sysop absolutism was rationally grounded in physical hardware ownership and legal liability — the sysop literally owned the machine. This made feudal governance sensible in context. But the cultural and technical norms it established bled into later platforms that lacked the same constraints. The rare democratic experiments (OneNet constitution, FidoNet votemgr) were outliers that proved democratic design was possible but not incentivized. Exit as the primary check on sysop power became the template for all subsequent online community governance.",
    "source_chapter": "Ch. 2",
    "source_quote": "They were the makers and enforcers of social policy. Ultimately, the sysop possessed a form of total authority because they lived under the same roof as the host PC. In a moment of frustration, the sysop could always pull the plug and shut down the whole system."
  },
  {
    "id": "lambdamoo-governance",
    "name": "LambdaMOO User Governance Experiment",
    "domain": "online_community",
    "brief": "An all-text online world hosted at Xerox PARC that experimented with petition-based user self-governance after a notorious case of textual sexual assault, only to have administrators reimpose 'wizardly fiat' citing real-world legal liability.",
    "community": "Text-based virtual world participants on LambdaMOO, hosted at Xerox PARC, 1990s",
    "governance_form_ids": [
      "implicit-feudalism",
      "petition-governance"
    ],
    "democratic_features": [
      "Users COULD propose and vote on rules through a petition-based system — demonstrating that participatory governance is technically feasible",
      "Administrators MUST NOT fully cede authority when the platform resides on corporate or institutional hardware subject to real-world legal jurisdiction",
      "Admin veto power ('wizardly fiat') was reimposed over user self-governance, illustrating that legal liability functions as a structural ceiling on democratic community governance",
      "The crisis of bad behavior (cyberspace rape) was the catalyst for governance innovation, showing that democratic design often emerges reactively rather than proactively"
    ],
    "lessons_or_failures": "LambdaMOO is a formative instance of implicit feudalism: even when users developed genuine self-governance mechanisms, the administrators reasserted absolute authority citing real-world jurisdiction and liability. The lesson Schneider draws is that virtual democracy is constrained by the non-virtual ownership of hardware and the legal regimes that govern it. LambdaMOO shows the ceiling of user governance under conditions of institutional hardware ownership — the same ceiling that would constrain all subsequent platform governance.",
    "source_chapter": "Ch. 2",
    "source_quote": "So long as the MOO is located on a single RL [real-life] machine at a single RL site subject to RL laws and liabilities, there will be those deemed responsible for the use of that hardware."
  },
  {
    "id": "usenet-big8-governance",
    "name": "Usenet Big 8 Governance",
    "domain": "federated_network",
    "brief": "A federated newsgroup network whose 'Great Renaming' of 1986 established a self-perpetuating board (the Big 8) governing major public newsgroups, combining minimal collective decision-making at the network level with feudal moderator authority within newsgroups.",
    "community": "University and corporate server operators and users of Usenet newsgroups, 1980s–present",
    "governance_form_ids": [
      "implicit-feudalism",
      "self-perpetuating-board",
      "federated-subsidiarity"
    ],
    "democratic_features": [
      "Big 8 board is self-perpetuating: current members choose future members, with no democratic mandate from the user base",
      "A voting system for adding new newsgroups exists but MUST NOT be treated as binding — sysadmins have refused to carry approved newsgroups",
      "Newsgroup moderators MUST NOT be compelled to follow their own group charters by any external party — 'Nobody' can force compliance",
      "Moderator succession is determined by incumbent moderators, not by users — effective voice is structurally absent at the group level",
      "Users explicitly referred to themselves as 'barons' and users as 'serfs,' demonstrating feudalism as a self-conscious cultural norm"
    ],
    "lessons_or_failures": "Usenet shows how a distributed, federated network can develop robust collective governance at one layer (the Big 8 board) while maintaining feudal absolutism at the community layer (individual newsgroups). The voting system for new newsgroups is Schneider's key example of 'early democracy' — participatory in appearance but non-binding in practice. The system's own documentation stating that 'Nobody' can force moderators to comply with their charters is one of the book's sharpest illustrations of effective voice's structural absence.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "irc-channel-governance",
    "name": "Internet Relay Chat (IRC) Channel Governance",
    "domain": "online_community",
    "brief": "A persistent synchronous chat protocol whose channel operators (chanops) inherited feudal authority from BBS and Usenet models, adding algorithmic bots as governance proxies — prefiguring modern commercial chat platforms like Slack and Discord.",
    "community": "Technologists, hobbyists, and topic-based communities on IRC networks, 1988–present",
    "governance_form_ids": [
      "implicit-feudalism",
      "algorithmic-moderation"
    ],
    "democratic_features": [
      "Channel operators hold feudal authority over chat rooms, inheriting the sysop model — users MUST NOT expect appeal mechanisms beyond operator discretion",
      "Iconic channel names (e.g., #quilters) create canonical spaces where exit is rarely feasible, weakening users' primary check on operator power",
      "Bots (software-defined users) represent an early form of algorithmic governance, enforcing rules and maintaining operator control in the absence of human oversight",
      "Network operators hold authority over channel operators, replicating the layered feudal hierarchy of Usenet's sysadmin structure",
      "Discord and Slack SHOULD be understood as commercial inheritors of IRC's feudal design — down to the '#' channel naming and 'server' nomenclature"
    ],
    "lessons_or_failures": "IRC is genealogically significant as the bridge between early BBS/Usenet feudalism and contemporary commercial chat platforms. Its channel governance model — founder authority, operator succession, algorithmic bot enforcement — migrated directly into Slack and Discord. The canonical channel problem (iconic names attracting users regardless of moderator conduct) illustrates how network effects can hollow out exit as a governance check. IRC also introduced algorithmic governance (bots) as a compensatory mechanism for always-on moderation needs.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "linux-kernel-bdfl",
    "name": "Linux Kernel Benevolent Dictator for Life (BDFL)",
    "domain": "workplace",
    "brief": "The Linux kernel project governed by founder Linus Torvalds as 'benevolent dictator for life,' whose unchecked authority over contributions exemplifies how implicit feudalism produces explicit dictatorship in open-source communities.",
    "community": "Open-source software developers contributing to the Linux kernel, 1991–present",
    "governance_form_ids": [
      "implicit-feudalism",
      "benevolent-dictatorship"
    ],
    "democratic_features": [
      "Torvalds holds unilateral authority over which contributions enter official releases — no democratic override mechanism exists",
      "Contributor Covenant code of conduct was adopted after sustained advocacy, but its enforcement DEPENDS on the project owner's willingness — MUST NOT be assumed to constrain BDFL authority structurally",
      "The BDFL model emerged from omission rather than ideology: open-source communities avoided explicit governance as a 'distraction from writing code,' creating power vacuums that feudalism filled",
      "Email lists supply the political infrastructure that Git lacks — whoever controls the list controls the software, illustrating how implicit feudalism migrates across technical layers"
    ],
    "lessons_or_failures": "Linux is Schneider's primary example of how implicit feudalism produces 'a culture of explicit dictatorship' through omission rather than intent. The project's avoidance of governance as a distraction from technical work created a power vacuum that the BDFL model filled. The adoption of a code of conduct under activist pressure shows that feudal governance can be partially constrained by community norms, but structural change requires more than behavioral guidelines. Linux also illustrates the 'onion-like' ecosystem diversity: democratic projects like Debian can exist above a feudal kernel.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "github-platform-governance",
    "name": "GitHub Platform Governance",
    "domain": "online_community",
    "brief": "Microsoft-owned platform that fuses Git's decentralized version control with a social-network permissions system, embedding feudal owner/collaborator roles into what had been a structurally power-neutral technical tool.",
    "community": "Open-source developers and software teams using GitHub, 2008–present (Microsoft acquisition 2018)",
    "governance_form_ids": [
      "implicit-feudalism",
      "owner-permissions-model"
    ],
    "democratic_features": [
      "GitHub introduces a canonical 'owner' role that Git itself lacks — the platform MUST NOT be mistaken for a democratic extension of Git's neutral architecture",
      "Users CAN fork projects and propose changes, providing limited exit and affective voice, but effective voice (merging decisions) MUST remain with the project owner",
      "Code of conduct adoption is voluntary and owner-dependent — no platform-level enforcement mechanism exists to protect contributors from owner misconduct",
      "The $7.5B Microsoft acquisition concentrates meta-governance over the world's largest open-source hosting platform in a single corporate entity"
    ],
    "lessons_or_failures": "GitHub shows how a commercial platform can retroactively impose feudal governance on a technically neutral tool (Git). Git on its own creates a power vacuum; GitHub fills it with owner/collaborator permissions that replicate BBS sysop dynamics at global scale. The platform's encouragement of codes of conduct without enforcement mechanisms illustrates the gap between affective democratic gestures and structural democratic design. Schneider uses GitHub as evidence that implicit feudalism is a business model, not just a technical inheritance.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "debian-project-governance",
    "name": "Debian Project Governance",
    "domain": "workplace",
    "brief": "A nonprofit Linux-based operating system project that self-governs as a 'liberal democracy' with an elected project leader, meritocratic onboarding, and a formal Debian Constitution — one of Schneider's key counter-examples to implicit feudalism in open source.",
    "community": "Skilled open-source developers who join through a meritocratic onboarding process, 1993–present",
    "governance_form_ids": [
      "electoral-democracy",
      "meritocratic-membership",
      "mixed-constitution"
    ],
    "democratic_features": [
      "Debian Constitution specifies binding electoral procedures for choosing a 'project leader' — effective voice is structurally built in, not dependent on founder discretion",
      "Developers join through a detailed meritocratic onboarding process, ensuring that participation rights are earned and legible rather than granted by a feudal patron",
      "Democratic governance SHOULD be understood as possible within open source, contra the BDFL norm — Debian proves the exception is achievable",
      "Debian's nonprofit organizational form appears correlated with its democratic governance — Schneider notes that democratic arrangements are 'more likely to emerge under nonprofits or user-owned cooperatives'",
      "Debian occupies a democratic middle layer in a layered ecosystem (feudal Linux kernel below, commercial Ubuntu above), illustrating how governance diversity can be distributed across a software supply chain"
    ],
    "lessons_or_failures": "Debian is Schneider's primary positive counter-example in open source: it demonstrates that democratic governance is achievable in large, technically sophisticated peer-production communities when deliberate constitutional design is applied. Its nonprofit organizational form and meritocratic but open membership are identified as enabling conditions. Schneider notes its 'mainly an outlier' status, and that its slow, inclusive process suits certain niches (supporting older hardware) but may not suit all positions in the software supply chain.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "python-steering-council-transition",
    "name": "Python Language Governance Transition",
    "domain": "workplace",
    "brief": "The Python programming language community's transition from a BDFL (Guido van Rossum) to an elected five-person steering council in 2018, enabled by the pre-existing Python Enhancement Proposal (PEP) system as a legitimate decision-making infrastructure.",
    "community": "Python language developers and contributors, organized through the Python Enhancement Proposal (PEP) system, 2018",
    "governance_form_ids": [
      "electoral-democracy",
      "benevolent-dictatorship",
      "structured-proposal-process"
    ],
    "democratic_features": [
      "The PEP system provided a pre-existing, community-legitimated decision-making infrastructure that SHOULD be credited as the enabling condition for democratic transition — without it, the power vacuum would likely have reproduced feudalism",
      "Van Rossum's abrupt resignation created the disruption that made governance redesign possible — illustrating that feudal transitions often require exogenous shocks",
      "The community considered a 'staggering set of possibilities' including new dictatorship and total structurelessness before converging on an elected five-person steering council",
      "Democratic transition took nearly thirty years of BDFL governance — demonstrating the extreme inertia of implicit feudalism even in technically sophisticated communities",
      "The elected steering council represents a move from affective to effective voice for the developer community"
    ],
    "lessons_or_failures": "Python's governance transition is Schneider's key example of how implicit feudalism can end without catastrophe — but it required both a sudden disruption (BDFL resignation) and a pre-existing legitimate decision-making infrastructure (PEP system). The lesson is that communities SHOULD build governance infrastructure proactively, before a crisis, because the absence of such infrastructure means power vacuums will be filled by feudal defaults. The Python case also illustrates the 'governance diversity over time' dimension of institutional design.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "facebook-groups-governance",
    "name": "Facebook Groups Governance",
    "domain": "online_community",
    "brief": "Facebook's community-group feature that replicates and advances implicit feudalism at billion-user scale, with group admins holding feudal authority derived from the platform's founder-succession model, under a corporate monarchy retaining ultimate control through dual-class stock.",
    "community": "~3 billion Facebook users organized into Groups, 2005–present",
    "governance_form_ids": [
      "implicit-feudalism",
      "founder-succession",
      "algorithmic-moderation"
    ],
    "democratic_features": [
      "Group admins hold absolutist authority derived from founding or appointment — users MUST NOT expect binding appeal mechanisms within the platform",
      "Facebook's 2009 user referendum MUST NOT be counted as genuine democratic governance — requiring 30% of 1B+ users to participate made the binding threshold structurally unachievable, and the company proceeded with its preferred outcome regardless",
      "AI moderation tools (false-news detector) and analytics dashboards extend admin power while adding 'panopticism' — SHOULD be understood as amplifications of feudal control, not substitutes for democratic governance",
      "Structured rule-making interfaces for admins represent an advance in feudal tooling over blank text fields, but MUST NOT be confused with democratic governance infrastructure",
      "Zuckerberg's dual-class stock structure replicates the feudal hierarchy at corporate level: admins are lords, Zuckerberg is monarch — the platform's governance mirrors its community governance design"
    ],
    "lessons_or_failures": "Facebook Groups is Schneider's primary contemporary instance of advanced implicit feudalism. The platform's scale (billions of users) makes the feudal design's political consequences far larger than BBS-era equivalents, while the underlying logic — founder authority, admin succession, user exit as primary recourse — is unchanged. The 2009 referendum is dissected as 'democracy theatre': performative participation with structurally foreclosed binding outcomes. Schneider also traces Conway's Law in reverse: Facebook's feudal community design migrated into its corporate governance structure.",
    "source_chapter": "Ch. 2",
    "source_quote": "Feudal community governance has become a norm in the governance of platform companies themselves. This is most evident in the power Mark Zuckerberg retains over Facebook through its dual-class stock structure."
  },
  {
    "id": "reddit-subreddit-governance",
    "name": "Reddit Subreddit Governance",
    "domain": "online_community",
    "brief": "Reddit's user-created and user-governed subreddit system, which replicates implicit feudalism through moderator authority derived from founding, while the 2015 'Reddit revolt' demonstrates both the limits of collective moderator action and the monarchy's reassertion of platform-level control.",
    "community": "Reddit users organized into subreddits, 2005–present; moderator corps as a distinct stakeholder group",
    "governance_form_ids": [
      "implicit-feudalism",
      "founder-succession",
      "algorithmic-moderation"
    ],
    "democratic_features": [
      "Subreddit moderators hold feudal authority over their communities, derived from founding or appointment — users MUST rely on upvotes/downvotes as affective voice with no binding governance effect",
      "The 2015 'Reddit revolt' (mass subreddit blackout) achieved platform-level CEO change through collective exit, but SHOULD be understood as demonstrating that moderators 'face consequences if they try to band together against the monarchy'",
      "AutoModerator (programmable AI moderation) extends feudal admin power algorithmically — MUST NOT be treated as community-governed moderation",
      "Upvote/downvote systems SHOULD be understood as assists to admin and platform business interests rather than instruments of shared governance",
      "Reddit's karma system, inherited from Slashdot, provides reputation-based voice but stops short of binding decision-making power for non-moderator users"
    ],
    "lessons_or_failures": "Reddit is Schneider's second major contemporary instance of advanced implicit feudalism. The 2015 revolt is significant because it shows collective moderator action can produce real platform-level change (CEO resignation), but the aftermath — tighter enforcement of site-wide policies constraining moderator autonomy — illustrates the monarchy's structural reassertion. Schneider reads this as confirmation that feudal platforms permit lords to govern their fiefdoms but punish attempts to band together against the monarch.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "slashdot-karma-moderation",
    "name": "Slashdot Karma-Based Moderation System",
    "domain": "online_community",
    "brief": "Early social-news platform with a sophisticated mutual-endorsement moderation system in which users accrued karma enabling them to moderate and evaluate others' moderation decisions, producing a Wikipedia-like culture of distributed responsible voluntarism.",
    "community": "Tech-savvy users of Slashdot social-news platform, late 1990s–2000s",
    "governance_form_ids": [
      "reputation-based-governance",
      "mutual-endorsement"
    ],
    "democratic_features": [
      "Moderation rights SHOULD be distributed based on accrued reputation (karma) rather than fixed admin appointment — this creates a fluid, meritocratic alternative to feudal succession",
      "'Metamoderation' allowed users to evaluate the quality of other users' moderation decisions, creating a recursive accountability layer absent from feudal platforms",
      "Reputation functions as compensation for moderation labor, offering an alternative to the 'perk of unchecked power' that platforms use to incentivize feudal moderation",
      "The system demonstrates that large-platform content governance CAN be distributed among users without a fixed admin hierarchy"
    ],
    "lessons_or_failures": "Slashdot is one of Schneider's positive counter-examples: a large commercial platform that developed a genuinely distributed moderation system using reputation rather than feudal appointment. Schneider notes it may have been 'too responsible,' failing to generate the provocation and engagement that commercial platforms thrive on — implying that implicit feudalism may be actively selected for by engagement-maximizing business models. Slashdot shows that democratic moderation at scale is technically and socially feasible, but commercially disadvantaged.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "apache-software-foundation-governance",
    "name": "Apache Software Foundation Governance",
    "domain": "workplace",
    "brief": "A nonprofit open-source foundation whose developer-members elect its board and whose hosted projects operate under an explicit rule prohibiting dictators or corporate overlords — a rare democratic outlier in the open-source ecosystem.",
    "community": "Developer-members of Apache Software Foundation projects, 1999–present",
    "governance_form_ids": [
      "electoral-democracy",
      "nonprofit-membership-governance"
    ],
    "democratic_features": [
      "Developer-members elect the nonprofit board — democratic mandate is structural, not contingent on founder discretion",
      "Apache projects MUST NOT be governed by 'dictators or corporate overlords' — this is an explicit, enforceable rule, not merely an aspiration",
      "Nonprofit organizational form appears as a enabling condition for democratic governance, alongside Debian — Schneider notes both as evidence that 'democratic arrangements appear only occasionally, usually among more developed software communities' operating on nonprofit basis"
    ],
    "lessons_or_failures": "Apache, alongside Debian, is one of Schneider's primary positive counter-examples in open source. Its explicit anti-dictatorship rule is the clearest institutional articulation of democratic intent in the cases Schneider examines. Like Debian, its nonprofit status appears correlated with its democratic design. Schneider uses Apache to suggest that democratic governance in open source is not accidental — it requires deliberate institutional design and organizational forms that insulate developers from commercial imperative.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "black-lives-matter-global-network-governance",
    "name": "Black Lives Matter Global Network Governance Controversy",
    "domain": "movement",
    "brief": "Ten BLM chapters' 2020 public challenge to the Global Network's governance, citing that Patrisse Cullors was simultaneously the sole board member and executive director of an organization that had absorbed tens of millions in donations — illustrating how the logic of hashtag founding translates into absolutist organizational governance.",
    "community": "Black Lives Matter chapters across the US and Canada, vis-à-vis the BLM Global Network Foundation, 2020",
    "governance_form_ids": [
      "implicit-feudalism",
      "founder-succession"
    ],
    "democratic_features": [
      "Chapters SHOULD have had meaningful voice in the direction of their shared movement organization — the 2020 statement cited lack of transparency and participation as core grievances",
      "A nonprofit organization absorbing tens of millions in donations MUST NOT operate with a single board member — this violates basic nonprofit governance norms",
      "The founder-as-sole-board-member structure exemplifies how digital-era founding logic (hashtag origin) bleeds into offline organizational governance",
      "Financial transparency SHOULD be a baseline democratic requirement for movement organizations that fundraise from a mass public"
    ],
    "lessons_or_failures": "Schneider opens the chapter with BLM as a non-online example of the same feudal founding logic that governs Facebook Groups and subreddits: the person who 'starts it keeps it.' The case illustrates that implicit feudalism is not merely a software phenomenon — it is a political habit that online culture has exported to offline organizations. The hashtag's creator became the organization's unchecked authority, with no board accountability. Schneider uses this to establish that feudal design is a trans-domain problem.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "communityrule-governance-design-tool",
    "name": "CommunityRule",
    "domain": "online_community",
    "brief": "A web app developed by Schneider and collaborators that lets community members design, publish, and fork governance rules through a modular drag-and-drop interface, lowering the barrier to formal self-governance for online communities.",
    "community": "Online communities broadly — mutual aid groups, open-source software projects, and any group seeking shared governance rules without lawyer-drafted bylaws.",
    "governance_form_ids": [
      "modular-governance-design",
      "rules-based-self-governance"
    ],
    "democratic_features": [
      "Communities SHOULD have explicit shared rules so members can recognize when a decision is really a decision and have a clear conflict-resolution process.",
      "Governance rules MUST NOT require legal expense or formal bylaw drafting to be legitimate — lightweight, member-authored rules are sufficient for most online communities.",
      "CommunityRule enables governance modules to be dragged, dropped, nested, and configured so communities can compose their own rule sets without technical expertise.",
      "Published rules SHOULD be placed in a public library and made forkable — allowing other communities to copy and adapt them — spreading democratic design patterns.",
      "Templates SHOULD provide starting-point organizational designs that lower friction for communities beginning to formalize governance."
    ],
    "lessons_or_failures": "Implicit feudalism thrives on an absence of rules — admin power fills the void where rules are absent. CommunityRule demonstrates that democratic communities need interfaces that make governance arrangements easy to design and understand. The tool's co-design with COVID-era mutual aid groups and open-source communities shows that governance tooling is most useful when developed with, not for, the communities it serves. The popularity of simple templates revealed that accessibility matters as much as flexibility in governance design.",
    "source_chapter": "Profile: CommunityRule",
    "source_quote": "Implicit feudalism thrives on an absence of rules; admin power fills the void. More democratic communities need ways to describe the rules they want to use. CommunityRule is an attempt to imagine interfaces that make governance arrangements easy to design and understand."
  },
  {
    "id": "the-well-community-governance",
    "name": "The WELL",
    "domain": "online_community",
    "brief": "One of the earliest and most influential text-based online communities (founded 1985), organized around bulletin boards and later acquired by its users, exhibiting the tension between aspirations to self-governance and the reality of benevolent dictatorship.",
    "community": "Intellectual seekers, technology enthusiasts, Grateful Dead fans, and journalists; later sold to a shoe magnate and eventually acquired by users in 2012.",
    "governance_form_ids": [
      "benevolent-dictatorship",
      "admin-fiat"
    ],
    "democratic_features": [
      "MUST NOT treat technical ownership transfer (platform sale) as democratic participation — The WELL was sold in 1994 with no user voice in the matter",
      "Stated design goal of self-governance MUST be operationalized beyond an ellipsis — The WELL's design goals stated 'It would be self-governing…' but never resolved the ellipsis",
      "Group-level hosts operated as micro-dictators with structureless 'meta' discussions below them, MUST NOT be mistaken for genuine self-governance",
      "User cooperative acquisition SHOULD precede rather than follow a platform's period of cultural influence — The WELL's 2012 user acquisition came after its heyday"
    ],
    "lessons_or_failures": "The WELL illustrates implicit feudalism in embryo: a self-governance aspiration that never resolved into actual democratic mechanisms. Its admin layer (Farm veterans-turned-sysops) and micro-dictator hosts encoded feudal power even as the community imagined itself self-organizing. Its sale without user consent in 1994 exemplifies how platform ownership overrides community voice. The later user-cooperative acquisition (2012) came too late to shape its cultural influence. The WELL served as a decisive bridge from hobbyist online spaces to commercial internet, spreading homesteading norms rather than democratic ones.",
    "source_chapter": "Ch. 5",
    "source_quote": "Technically, the early WELL was governed as a benevolent dictatorship. It obtained early members from the dissolution of The Farm, a famous counterculture commune in Tennessee that began under the rule of its spiritual leader, Stephen Gaskin. Farm veterans became The WELL's admins. Beneath them was a mélange of group-level, micro-dictator 'hosts' and seemingly endless, structureless discussions referred to as 'meta.' In 1994, the platform was sold to a new owner; users had no say in the matter."
  },
  {
    "id": "the-river-user-cooperative",
    "name": "The River",
    "domain": "platform_cooperative",
    "brief": "A user-owned cooperative online community formed by Howard Rheingold and other WELL members seeking genuine self-governance, which ultimately failed to flourish.",
    "community": "Former WELL members and internet community pioneers seeking democratic alternatives to platform feudalism.",
    "governance_form_ids": [
      "platform-cooperative-ownership"
    ],
    "democratic_features": [
      "MUST be user-owned from inception rather than converted after a platform's formative period",
      "Exit from an implicitly feudal platform SHOULD produce a democratic alternative, but The River shows this is not automatic",
      "User-owned cooperative structure SHOULD provide the legal basis for genuine self-governance that benevolent-dictatorship platforms lack"
    ],
    "lessons_or_failures": "The River demonstrates that exit from an implicitly feudal platform and reconstitution as a user cooperative is a necessary but insufficient condition for democratic online community. Despite correct ownership structure, it never achieved the cultural scale or viability of The WELL. Schneider uses it to show that democratic design requires more than cooperative ownership — it also requires the political skills, democratic culture, and network effects that commercial platforms accumulate precisely by avoiding democratic friction.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "geocities-eworld-homesteading",
    "name": "GeoCities and eWorld",
    "domain": "online_community",
    "brief": "Early consumer internet platforms that explicitly deployed metaphors of terrestrial and spiritual conquest — homesteading, neighborhoods, frontier settlement — to onboard users and naturalize implicitly feudal governance.",
    "community": "Early commercial internet users in the 1990s, newly skeptical consumers being introduced to online services.",
    "governance_form_ids": [
      "admin-fiat",
      "implicit-feudalism"
    ],
    "democratic_features": [
      "MUST NOT use frontier and homesteading metaphors to present feudal governance as democratic participation",
      "Platform branding MUST NOT conflate parceling out user space with democratic ownership",
      "The promise of 'democratizing access' MUST NOT serve as a substitute for actual democratic governance mechanisms"
    ],
    "lessons_or_failures": "GeoCities and eWorld exemplify how the homesteading imaginary was encoded directly into platform design and branding from the earliest commercial internet. The metaphors of settlement, neighborhood, and frontier naturalized a political structure in which users 'claimed' plots within a feudal hierarchy they did not control. Schneider reads these as the consumer-facing expression of the Californian ideology's politics of no-politics, normalizing feudal governance by aestheticizing it as pioneer self-determination.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "occupy-wall-street-assembly-governance",
    "name": "Occupy Wall Street Consensus Assemblies",
    "domain": "movement",
    "brief": "The 2011 Occupy Wall Street movement practiced offline consensus-based assemblies with hand signals, facilitation techniques, and participatory decision-making, producing democratic political skills among participants and generating governance tools including Loomio.",
    "community": "Anti-financial-elite protesters occupying public spaces in New York and worldwide in 2011; movement participants learning democratic process as strangers.",
    "governance_form_ids": [
      "consensus-process",
      "direct-assembly"
    ],
    "democratic_features": [
      "Governance design SHOULD emerge from what participants are already doing offline rather than from business models or technical convenience",
      "Movements SHOULD encode their governance practices into supporting digital tools (as Occupy Wellington did with Loomio) rather than defaulting to feudal platform structures",
      "Consensus process MUST include accessible facilitation techniques — hand signals, structured facilitation, disruption protocols — to scale beyond small groups",
      "Movement websites SHOULD support tracking assembly schedules and proposal texts to enable participant accountability",
      "Political skill development — facilitation, persuasion, consensus-making — SHOULD be treated as a primary output of movement infrastructure, not a side effect"
    ],
    "lessons_or_failures": "Occupy demonstrates that radically democratic processes can scale to masses of strangers, teaching political skills (hand signals, facilitation, consensus) that constitute the fractal micro-foundations of larger democratic culture. However, outside observers defaulted to the feudal logic of social media — identifying social-media account administrators as movement leaders — rather than recognizing the actual consensus-based power structure. This illustrates how implicit feudalism in platforms actively misrepresents democratic movements. Occupy's most durable legacy may be Loomio, which encoded its governance practices into reusable software.",
    "source_chapter": "Ch. 5",
    "source_quote": "People learned new hand signals and techniques of persuasion, how to facilitate an effective meeting and how to disrupt one if they needed to. Occupy Wall Street developed a website where participants could keep track of the schedule of assemblies and the text of proposals that would be discussed. Occupy activists in Wellington, New Zealand, encoded their governance practices into an app, Loomio, that has since been adopted by organizations and even governments far from their island."
  },
  {
    "id": "we-are-all-khaled-said-facebook-page",
    "name": "\"We Are All Khaled Said\" Facebook Page",
    "domain": "online_community",
    "brief": "The Egyptian activist Facebook page central to the 2011 Arab Spring, whose founder was misidentified as movement leader by press defaulting to platform feudalism — conflating page admin with political authority.",
    "community": "Egyptian activists and international press during the 2011 Arab Spring uprising; page controlled by Egyptian Google employee Wael Ghonim.",
    "governance_form_ids": [
      "admin-fiat",
      "implicit-feudalism"
    ],
    "democratic_features": [
      "MUST NOT conflate technical administrative control of a platform space with political leadership of a movement",
      "Platform feudalism MUST NOT be allowed to override the actual governance structures articulated by movement participants themselves",
      "Movements organized through radically democratic offline processes SHOULD NOT have their power structures misread through the feudal logic of their online spaces"
    ],
    "lessons_or_failures": "Schneider uses this case to show how implicit feudalism actively distorts political perception at world-historical scale. The page's admin (Ghonim) was declared 'leader' by international press despite his own insistence the movement was leaderless and his physical absence from Egypt. The actual democratic power structure — offline, consensus-based — was rendered invisible by the feudal logic of the Facebook platform. This is a concrete instance of how Californian platform design colonizes the interpretation of political reality, not just the practice of online community.",
    "source_chapter": "Ch. 5",
    "source_quote": "For Ghonim's role as the page's founder, the world press declared him the leader of the Egyptian uprising, although he lived outside the country and continually insisted that the movement was 'leaderless.' ... Online activism was indeed instrumental for these movements, but the power structure of social media seemed to speak louder than the power structure articulated by activists themselves."
  },
  {
    "id": "qanon-8chan-admin-governance",
    "name": "QAnon on 8chan",
    "domain": "online_community",
    "brief": "The QAnon movement, hosted on 8chan under sysadmin Ron Watkins, exemplifies how platform administration power can expand from technical maintenance to world-historical political manipulation — the logical endpoint of implicit feudalism.",
    "community": "QAnon followers, 8chan users, Trump-aligned movement participants; governed structurally by 8chan's system administrator.",
    "governance_form_ids": [
      "admin-fiat",
      "implicit-feudalism"
    ],
    "democratic_features": [
      "MUST NOT treat platform neutrality as a meaningful constraint on admin power — 8chan's admin appears to have exploited sysadmin access to drive political manipulation",
      "Platform governance MUST NOT allow technical administration to become coterminous with political leadership without democratic accountability",
      "The feudal logic of admin power MUST NOT be normalized as mere 'content moderation' when it enables or constitutes political movements"
    ],
    "lessons_or_failures": "QAnon/8chan is Schneider's clearest instance of implicit feudalism expanding to fill geopolitical space. Ron Watkins's dual role as sysadmin and apparent 'Q' prophet illustrates how the technical power of platform administration — the power to control servers, post with authority, and shape what community members perceive as legitimate — translates directly into political power under feudal governance design. Schneider reads this as the implicit feudalism of network design expressing itself in organizational hierarchy and then political insurgency. The 'politics of no-politics' (Watkins's studied troll indifference, the Republican Party's policy-free 2020 platform) is the cultural expression of this technical feudalism.",
    "source_chapter": "Ch. 5",
    "source_quote": "Watkins does not appear to have had a specific policy agenda to promulgate; he performs the studied indifference of online trolling culture. During Trump's reelection campaign, similarly, the Republican Party broke with past practice and did not issue a policy platform. The Californian politics of no-politics had taken hold, through a grasp on power—server power, executive power—that could operate on its own terms, not in service to any external commitments."
  },
  {
    "id": "adrienne-maree-brown-instagram-homeplace",
    "name": "adrienne maree brown's Instagram Private Thread Community",
    "domain": "online_community",
    "brief": "A small, deliberately formed private Instagram thread in which brown and five friends practiced mutual affirmation as liberation technology — an example of a homeplace emerging within and despite feudal platform infrastructure.",
    "community": "Six women and gender-nonconforming friends invited by adrienne maree brown in March 2016; an intimate community of care and mutual recognition.",
    "governance_form_ids": [
      "informal-consensus",
      "homeplace-solidarity"
    ],
    "democratic_features": [
      "Democratic political skills SHOULD be cultivated at the smallest scales of everyday life, not only in formal institutional settings",
      "Homeplaces SHOULD be recognized as sites of political practice even when they appear purely social or personal",
      "Platform infrastructure MUST NOT be credited for the solidarity and care that participants create within it — the homeplace becomes the subject, not the platform"
    ],
    "lessons_or_failures": "Schneider uses this case to illustrate adrienne maree brown's fractal theory: intimate communities of care and mutual recognition are the micro-foundations of larger democratic culture. The case also demonstrates how homeplaces emerge 'because of and despite' feudal platform design — Instagram provides the technical substrate but the democratic content is entirely participant-generated and invisible to the platform's governance logic. Brown's forgetting of Instagram upon summoning her community there is Schneider's exemplar of what democratic technology should aspire to: infrastructure that does not demand credit.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "minitel-french-public-network",
    "name": "Minitel (France)",
    "domain": "public_infrastructure",
    "brief": "The French state's public telecommunications network, cited by Barbrook, Cameron, and Schneider as an alternative political economy for networked communication to the Californian ideology's commercial internet.",
    "community": "French public internet/telecom users; governed through state public infrastructure rather than venture-capital-backed private platforms.",
    "governance_form_ids": [
      "public-option-infrastructure"
    ],
    "democratic_features": [
      "Public network infrastructure SHOULD be state-built and publicly governed rather than ceded to venture-capital-backed monopolists",
      "Democratic political economy of networks MUST include public-option alternatives to prevent the default to implicit feudalism",
      "State-built network infrastructure SHOULD NOT require users to accept feudal governance as the price of access"
    ],
    "lessons_or_failures": "Schneider invokes Minitel (following Barbrook and Cameron) as evidence that the Californian ideology was never the only possible political economy for networked communication. The existence of a publicly governed network alternative demonstrates that implicit feudalism was a political choice, not a technical necessity. However, Schneider does not analyze Minitel's internal governance in depth — it functions here primarily as a counter-proof against Californian inevitability.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "peoples-history-of-twitter",
    "name": "A People's History of Twitter",
    "domain": "movement",
    "brief": "A 2023 participatory history project convening ~200 Twitter users — technologists, journalists, activists — to collectively document their experiences of the platform as a foundation for imagining democratic alternatives to Musk's ownership.",
    "community": "Former and current Twitter users, former Twitter workers, citizen-assembly researchers, technologists, journalists, and activists (~200 participants at the March 2023 online event plus chatbot contributors)",
    "governance_form_ids": [
      "citizen-assembly",
      "participatory-history"
    ],
    "democratic_features": [
      "Community MUST see itself as a community — through shared storytelling and collective memory — before it can begin to self-govern",
      "SHOULD ground democratic proposals in a documented people's history before establishing shadow or alternative governance structures",
      "Collective history-gathering SHOULD serve as the foundation for articulating shared expectations and demands about what a platform owes its users",
      "MUST NOT treat users as passive consumers: the project explicitly aimed to transition participants 'from being users of someone else's platform to being full citizens of the networks they live by'",
      "SHOULD combine synchronous deliberation (online event) with asynchronous participatory tools (chatbot for story collection) to broaden inclusion"
    ],
    "lessons_or_failures": "Schneider draws from this project the insight that governance preconditions include community self-recognition through narrative — democratic design cannot begin with voting or policy before people have a shared sense of collective identity and history. The People's History also served as a 'wake,' acknowledging loss as part of the democratic transition from corporate platform to potential commons. The parallel shareholder-proposal strategy (2017) is noted as an earlier, unsuccessful attempt to decommodify Twitter through ownership reform, suggesting that internal market mechanisms alone are insufficient without broader democratic infrastructure.",
    "source_chapter": "Profile: A People's History of Twitter",
    "source_quote": "Governance is not just about holding power and making decisions. Before a community can begin to self-govern, it needs to see itself as a community—through participants telling stories about themselves and having shared experiences. A People's History of Twitter was an attempt to begin that process, to initiate people's transition from being users of someone else's platform to being full citizens of the networks they live by."
  },
  {
    "id": "twitter-shareholder-proposal-2017",
    "name": "Twitter User-Ownership Shareholder Proposal (2017)",
    "domain": "movement",
    "brief": "A 2017 shareholder proposal at Twitter co-created by Schneider's team, aiming to establish a framework for users to become platform owners and decommodify the company — an early experiment in governance reform from within corporate ownership structures.",
    "community": "Twitter shareholders, Twitter users, Schneider's team",
    "governance_form_ids": [
      "shareholder-democracy",
      "platform-cooperative"
    ],
    "democratic_features": [
      "SHOULD explore user-ownership conversion as a route to decommodifying a platform-as-civic-space",
      "Shareholder proposals MUST be understood as insufficient on their own without broader democratic infrastructure — this attempt preceded but did not prevent Musk's acquisition",
      "MUST NOT conflate shareholder voice with genuine user governance: the proposal sought a framework for users to become owners, recognizing the gap between the two"
    ],
    "lessons_or_failures": "The 2017 proposal is presented as a cautionary illustration that internal market-based reform mechanisms (shareholder proposals) are fragile against the commodity logic of platforms — the platform was sold anyway five years later. Schneider positions it as a first-generation strategy, superseded by the more democratic and community-grounded approach of the People's History and shadow-government experiments. The lesson is that decommodification requires both ownership reform AND community self-recognition as preconditions for genuine democratic governance.",
    "source_chapter": "Profile: A People's History of Twitter"
  },
  {
    "id": "transformative-justice-community-accountability",
    "name": "Transformative Justice / Community Accountability Processes",
    "domain": "movement",
    "brief": "A movement practice pioneered by Black Lives Matter organizers like Mariame Kaba that addresses harm through participatory community processes rather than state policing, offering a model of radical subsidiarity for online governance.",
    "community": "Over-policed, under-resourced communities; LGBTQ+ and BIPOC organizers; neighborhood and friend-group networks",
    "governance_form_ids": [
      "subsidiarity",
      "circle-process",
      "participatory-accountability"
    ],
    "democratic_features": [
      "Community accountability processes MUST be voluntary and context-sensitive, not imposed from above by a distant authority",
      "Governance MUST be scaled to the level of the affected community — neighborhood, friend group, or online space — not automated away at platform scale (radical subsidiarity over scalability)",
      "Facilitators SHOULD have tools to carefully manage processes without exposure to algorithmic viral dynamics or corporate rule-books",
      "Accountability MUST address root causes and social contexts, not merely punish individuals — 'transforming' the situation rather than simply adjudicating it",
      "MUST NOT rely on or reproduce the punitive logic of state violence; the goal is repair and healthier relationships, not coercion"
    ],
    "lessons_or_failures": "Transformative justice demonstrates that harm resolution requires subsidiarity — appropriately local control within a larger system — rather than scalability. Its practitioners' skepticism of corporate social media stems from the platforms' inhuman pace, context collapse, and lack of community control, all products of the scalability business model. Kaba insists the workbook is not 'THE LAW,' foregrounding reinvention as a feature. The 2020 defund wave failed partly because too few people had knowingly experienced alternatives to policing; the experiments were too contained and their stories too little told. Online translation requires communities to have their own tools, interfaces, and trained facilitators — exactly the friction investors want to avoid. The lesson for platform design: shift from scalability to subsidiarity.",
    "source_chapter": "Ch. 4",
    "source_quote": "Taking inspiration from transformative justice activists, Hasinoff and I show how participant-centered systems can adopt subsidiarity: a principle that prioritizes appropriately local control wherever possible, within a larger system."
  },
  {
    "id": "daohaus-platform",
    "name": "DAOHaus",
    "domain": "dao",
    "brief": "A platform enabling users to easily launch new DAOs on the MolochDAO template, spreading the governance primitives of tribute-based membership, rage-quit exit, and summoning rituals across the crypto ecosystem.",
    "community": "Crypto builders, DAO participants, token-holders across the Ethereum ecosystem",
    "governance_form_ids": [
      "token-voting",
      "rage-quit-exit",
      "dao-treasury"
    ],
    "democratic_features": [
      "SHOULD enable permissionless creation of new self-governing entities without requiring a central authority's approval",
      "Exit rights (rage-quit) MUST be preserved as a core feature, giving participants meaningful ability to leave with their stake",
      "Governance templates SHOULD be forkable and adaptable so communities can customize processes to their context"
    ],
    "lessons_or_failures": "DAOHaus shows how successful governance primitives can spread rapidly in an open-source ecosystem — the same way biological variation enables selection. It represents crypto's unusual generativity for governance experimentation. However, templating also risks reproducing the same plutocratic and cryptoeconomic limitations across many organizations simultaneously.",
    "source_chapter": "Ch. 4"
  },
  {
    "id": "hollow-water-ojibway-accountability",
    "name": "Hollow Water Ojibway Accountability Process",
    "domain": "movement",
    "brief": "A community accountability process documented in a documentary film, in which an Ojibway village addressed endemic sexual abuse through a transformative justice process requiring pressure from both the Canadian legal system and polycentric First Nations networks.",
    "community": "Ojibway village residents, First Nations networks, Canadian legal system",
    "governance_form_ids": [
      "circle-process",
      "polycentric-subsidiarity",
      "federalist-subsidiarity"
    ],
    "democratic_features": [
      "Community accountability MUST involve relationships to larger systems — both federalist (Canadian law) and polycentric (fellow First Nations networks) — not just internal self-governance",
      "SHOULD apply pressure on the community itself when the community's norms are the source of harm, not only on individual members",
      "Processes MUST be sensitive to cultural context and community-level power dynamics"
    ],
    "lessons_or_failures": "Hollow Water illustrates that subsidiarity is not limitless local autonomy — communities themselves must be held accountable, not just their members. Transformative justice warns against treating 'community' as an unmitigated good; harm often occurs because of, not just despite, its host community. Designing governable spaces must involve accountability among communities, across networks, not just self-governance within a single community.",
    "source_chapter": "Ch. 4"
  },
  {
    "id": "aragon-blockchain-governance",
    "name": "Aragon",
    "domain": "dao",
    "brief": "A platform for blockchain-based organizational governance, promoted with the claim that crypto allows experimenting with new governance models without state violence, representing both the promise and the hubris of cryptoeconomic politics.",
    "community": "Crypto builders, DAO operators, Ethereum ecosystem participants",
    "governance_form_ids": [
      "token-voting",
      "on-chain-constitutionalism"
    ],
    "democratic_features": [
      "Governance SHOULD be embedded in protocol-level code rather than relying on corporate terms of service",
      "MUST NOT claim that cryptoeconomic design alone is sufficient to guarantee democratic outcomes — concentration of power has been chronic even in technically decentralized systems"
    ],
    "lessons_or_failures": "Aragon co-founder Luis Cuende's boast that crypto enables governance experimentation 'without the need of people getting killed' illustrates both the genuine novelty and the overreach of cryptoeconomic claims. Schneider notes this claim is 'less true than Cuende thinks,' but acknowledges respects in which the explorations are distinctly novel. Aragon is cited as an example of crypto's unusual outpouring of democratic mediums, while also exemplifying the ideology that cryptoeconomics can substitute for politics.",
    "source_chapter": "Ch. 4"
  },
  {
    "id": "cooperative-hardware-store-subsidiarity",
    "name": "Local Hardware Store in Purchasing Cooperative",
    "domain": "platform_cooperative",
    "brief": "A locally owned hardware store participating in a national purchasing cooperative, used by Schneider as a concrete illustration of subsidiarity — scale where necessary (joint purchasing), local control everywhere it matters.",
    "community": "Local store owners, employees, neighborhood customers; cooperative member-stores",
    "governance_form_ids": [
      "subsidiarity",
      "federated-cooperative"
    ],
    "democratic_features": [
      "SHOULD push value and control to the edges of the network (local store owners) rather than accumulating both at the center for distant investor-owners",
      "Scale MUST be used only where necessary (e.g., joint purchasing power), with local control preserved everywhere it matters to participants",
      "Cooperative ownership SHOULD produce visible community benefits — helpful employees, community anchor role — that investor-owned chains cannot replicate at scale"
    ],
    "lessons_or_failures": "Schneider uses this case to make subsidiarity concrete and legible before applying it to online spaces. The contrast with the investor-owned national chain illustrates how scalability and subsidiarity produce different community experiences. The lesson for platform design: cooperative structures enable the 'scale where necessary, local control everywhere it matters' balance that corporate social media refuses.",
    "source_chapter": "Ch. 4",
    "source_quote": "The co-op pushes value and control to the edges of the network—to the store owners—rather than accumulating both at the center, on behalf of distant investor-owners. That store is an anchor of our community."
  },
  {
    "id": "one-million-experiments",
    "name": "One Million Experiments (Abolitionist Catalog)",
    "domain": "movement",
    "brief": "A website cataloging abolitionist and transformative justice efforts, developed by Mariame Kaba and collaborators to document the diversity of community safety experiments as an alternative to policing.",
    "community": "Abolitionist activists, community accountability practitioners, organizers in over-policed neighborhoods",
    "governance_form_ids": [
      "participatory-accountability",
      "commons-knowledge"
    ],
    "democratic_features": [
      "SHOULD document and share diverse community safety experiments to build a commons of practice, rather than prescribing a single institutional model",
      "Governance knowledge MUST remain open, decentralized, and resistant to institutionalization — 'always reinventing the wheel was a feature and not a bug'",
      "MUST NOT foreclose the creative multiplicity of approaches; the catalog's name itself signals that no single solution is THE LAW"
    ],
    "lessons_or_failures": "One Million Experiments embodies the abolitionist design principle that diversity of experiment is a prerequisite for discovering what works — a biological metaphor Schneider also applies to crypto's governance proliferation. Both cases resist the temptation of premature institutionalization. The catalog's emphasis on contextual, community-specific solutions directly informs Schneider's argument for subsidiarity over scalability in online governance design.",
    "source_chapter": "Ch. 4"
  },
  {
    "id": "excavations-governance-archaeology-exhibition",
    "name": "Excavations: Governance Archaeology for the Future of the Internet",
    "domain": "online_community",
    "brief": "An online artist residency and exhibition held during COVID-19 lockdowns that brought together ten artists and collectives to reflect on online governance through the lens of long human history, exhibited at the UN Internet Governance Forum.",
    "community": "Ten international artists and collectives participating in an online residency, plus audiences at the UN Internet Governance Forum",
    "governance_form_ids": [
      "collective-deliberation",
      "community-accountability"
    ],
    "democratic_features": [
      "MUST treat cross-cultural governance knowledge as an invitation to relationship and accountability, not mere data to be appropriated",
      "SHOULD ground reflections on online governance in long historical and cross-cultural precedents rather than only contemporary tech norms",
      "SHOULD connect artistic and Indigenous sensibilities to governance database design so that taxonomy reflects obligations of repair and reparation",
      "Artists MUST retain interpretive authority over ancestral governance patterns they engage, resisting extractive appropriation by outside researchers"
    ],
    "lessons_or_failures": "Schneider uses Excavations to illustrate that building a cross-cultural governance database is itself a governance act — one that carries risk of digital colonialism if done extractively. The artists taught that the information in such a database must be 'an invitation and starting point for relationships, for accountability, for repair' rather than an act of appropriation. The residency also shows that artistic practice can meaningfully shape the design and interpretation of governance taxonomies, integrating non-Western and Indigenous conceptions (e.g., Haudenosaunee sky-world, Brazilian cybernetic media) into frameworks otherwise dominated by Western tech culture.",
    "source_chapter": "Profile: Excavations",
    "source_quote": "If the database were simply another act of appropriation, the artists taught us, it should not exist at all. The information it contains must, rather, be an invitation and starting point for relationships, for accountability, for repair."
  },
  {
    "id": "may-first-movement-technology",
    "name": "May First Movement Technology",
    "domain": "platform_cooperative",
    "brief": "A technology cooperative providing web hosting, cloud services, and public education to ~850 activist organizations in the US and Mexico, enabling members to co-govern the servers and software they use daily.",
    "community": "~850 activist organizations and individuals in the United States and Mexico, largely from social-movement backgrounds",
    "governance_form_ids": [
      "platform-cooperative-governance",
      "consensus-decision-making"
    ],
    "democratic_features": [
      "Members MUST co-govern shared infrastructure through bilingual conference calls and online ballots rather than delegating control to a corporate owner",
      "Members SHOULD participate in decision-making over service design, software choices, and organizational direction",
      "The cooperative MUST run exclusively on commons-based (free/open-source) software to avoid dependency on proprietary colonial platforms",
      "Stack governance SHOULD prioritize community accountability alongside individual freedom, rejecting the Free Software movement's privileging of individual user freedoms",
      "Members SHOULD share tools, education, and events that help communities outside the membership challenge big-tech power"
    ],
    "lessons_or_failures": "Schneider treats May First as his primary lived example of a governable stack — proof that self-governed infrastructure is achievable at human scale. Its smallness is a feature, not a bug: fractal logic means small-scale practices set patterns for larger systems. The cooperative demonstrates that 'slow computing' — measured by social attention rather than bandwidth — can unlock political possibilities unavailable on colonial platforms. Key limitation: it remains 'infinitesimally small by the standards of the online economy,' and its model requires significant member commitment and technical literacy.",
    "source_chapter": "Ch. 5",
    "source_quote": "For me, being part of a governable stack like May First has unlocked political possibilities. The experience has motivated years of working to build governable stacks elsewhere, because I know that it can be done. With time, ungovernable stacks have come to feel like foreign lands."
  },
  {
    "id": "detroit-community-technology-project",
    "name": "Detroit Community Technology Project",
    "domain": "public_infrastructure",
    "brief": "A community organization, developed under Grace Lee Boggs's influence, that trains residents — primarily in majority-Black neighborhoods — to deploy and govern locally managed internet infrastructure as an act of self-determination.",
    "community": "Residents of systemically underserved majority-Black neighborhoods in Detroit, organized through grassroots technology education",
    "governance_form_ids": [
      "community-self-governance",
      "federated-subsidiarity"
    ],
    "democratic_features": [
      "Communities MUST control their own local WiFi nodes and network infrastructure rather than depending on regional telecom monopolies",
      "The pedagogy SHOULD prioritize 'critical connections' over 'critical mass' — depth of shared power over scale of reach",
      "Participants SHOULD be changed by the process of managing the stack, not merely served by it — the stack is explicitly framed as pedagogy",
      "Local infrastructure governance MUST center the self-determination of communities that corporate providers have systematically excluded"
    ],
    "lessons_or_failures": "Schneider uses DCTP to illustrate how even small governable-stack interventions (e.g., a single WiFi node on an apartment building) can shatter the telecom's claim that its dominance is inevitable. The Boggs maxim 'critical connections over critical mass' reframes success: a stack that deepens the political imagination of ten people may do more than a scalable service reaching thousands passively. The lesson for democratic design is that stack pedagogy — learning with the machines — is itself a form of self-governance.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "decidim-civic-participation-platform",
    "name": "Decidim",
    "domain": "public_infrastructure",
    "brief": "An open-source civic participation platform used largely by city governments for citizen engagement, built with a modular architecture and governed through a process that runs on the platform itself.",
    "community": "City governments and their residents across multiple countries, plus an open-source contributor community that governs the platform",
    "governance_form_ids": [
      "modular-politics",
      "participatory-budgeting"
    ],
    "democratic_features": [
      "Platform governance MUST run on the platform itself — Decidim's own development is governed through Decidim processes",
      "The module library SHOULD support a wide range of decision-making mechanisms to reflect diverse community needs (expressiveness)",
      "Modules SHOULD be portable across different city deployments, enabling interoperability among distinct jurisdictions",
      "Platform operators and community members SHOULD be able to compose governance from existing modules rather than building from scratch (modularity)"
    ],
    "lessons_or_failures": "Schneider cites Decidim as a real-world instantiation of modular politics well beyond experimental prototypes. Its recursive self-governance — the platform is governed through its own tools — demonstrates that expressive, modular design can operate at the scale of municipal government. It is the strongest existing evidence that modular politics is not merely theoretical. Key open question: Decidim's primary users are governments, not the communities being governed; the degree of genuine user sovereignty remains contested.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "zodiac-dao-governance-modules",
    "name": "Zodiac / Safe DAO Governance Modules",
    "domain": "dao",
    "brief": "Zodiac is a modular 'expansion pack for DAOs' built on Safe multisig wallets, enabling crypto communities to compose diverse governance modules rather than relying on a single fixed governance design.",
    "community": "DAO communities using Safe multisig wallets for digital asset management, across the Ethereum ecosystem",
    "governance_form_ids": [
      "modular-politics",
      "token-voting"
    ],
    "democratic_features": [
      "DAO communities MUST set a threshold of member approvals before any transaction can execute — basic consent is structurally enforced",
      "Communities SHOULD be able to adopt, replace, or combine governance modules without rebuilding their entire stack",
      "Modular design SHOULD allow portability of governance innovations across different DAOs and protocols",
      "Governance module standards SHOULD be interoperable so that decisions on one platform can interact with processes on another"
    ],
    "lessons_or_failures": "Schneider holds up Zodiac alongside Aragon and OpenZeppelin as evidence that modular politics is emerging organically in the blockchain space, driven by the practical necessity of co-governance where shared ownership is the default. DAOs face coordination problems that force governance modularity as a survival requirement — making them unlikely early adopters of democratic design patterns. The risk Schneider notes: these modular systems may still be captured by token-voting plutocracy; modularity enables diverse governance but does not guarantee democratic outcomes.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "daostar-interoperability-standards",
    "name": "DAOstar",
    "domain": "dao",
    "brief": "A Metagovernance Project–convened effort to develop shared technical standards for DAOs, enabling greater portability and interoperability of governance tools across different blockchain communities.",
    "community": "DAO developers, governance researchers, and blockchain organizations across multiple platforms and protocols",
    "governance_form_ids": [
      "modular-politics",
      "metagovernance"
    ],
    "democratic_features": [
      "Governance tools SHOULD be portable across DAO platforms through shared standards so communities are not locked into a single vendor's architecture",
      "Interoperability standards MUST be developed through a multi-stakeholder process rather than by a single platform owner",
      "Standards SHOULD enable communities to share governance innovations — a voting mechanism developed in one DAO should be adoptable in another"
    ],
    "lessons_or_failures": "DAOstar represents Schneider's clearest example of metagovernance at the infrastructure layer: an effort to make the rules for making governance rules across the DAO ecosystem. Its success would mean that governable-stack components could circulate freely, reducing lock-in and enabling institutional diversity in Ostrom's sense. Its challenge is that standards processes themselves can be captured by well-resourced incumbents — the same dynamics that shape W3C and IETF.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "policykit-gateway-governance-prototype",
    "name": "PolicyKit / Gateway",
    "domain": "online_community",
    "brief": "PolicyKit is a prototype governance platform that adds decision-making functionality to existing social platforms; Gateway is a Metagovernance Project extension making it more modular and expressive, piloted at Social.coop to link Open Collective payments to Loomio approvals.",
    "community": "Online communities using popular social platforms who want governance functionality without rebuilding their entire stack; piloted with Social.coop members",
    "governance_form_ids": [
      "modular-politics",
      "consensus-decision-making"
    ],
    "democratic_features": [
      "Governance tools SHOULD be addable to existing platforms rather than requiring communities to migrate to purpose-built systems",
      "Modular governance SHOULD enable automatic execution of decisions — e.g., payments proceeding once approval thresholds are met — reducing admin discretion",
      "Tools MUST be designed for expressiveness: able to implement a wide range of governance processes, not just majority voting",
      "Portability SHOULD allow governance modules developed for one platform (e.g., a game) to be adopted in a different context (e.g., an activist network)"
    ],
    "lessons_or_failures": "PolicyKit and Gateway are Schneider's closest example of modular politics becoming tangible software. The Social.coop integration — where a Gateway link between Open Collective and Loomio automates payment execution after community approval — shows that even small interoperability wins reduce the governance friction that currently makes self-governance feel like 'a necessary hack.' Limitation: both remain research prototypes, not production infrastructure, and adoption beyond academic settings has been limited.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "manufactured-home-park-cooperative",
    "name": "Resident-Owned Manufactured-Home Park Cooperative",
    "domain": "platform_cooperative",
    "brief": "A manufactured-home park in Schneider's town where residents organized to buy out their landlord and form a cooperative, then confronted a stack of tools hostile to their self-governance at every layer.",
    "community": "Low-income manufactured-home park residents, many with limited access to current devices and apps, who recently converted their community to a cooperative",
    "governance_form_ids": [
      "platform-cooperative-governance",
      "modular-politics"
    ],
    "democratic_features": [
      "Cooperative bylaws SHOULD be executed on a platform that reflects actual governance structure — e.g., replacing a Board plugin with Circles when the community shifts to working groups",
      "Community data-retention policies MUST be changeable by member resolution, not unilaterally by platform administrators",
      "Cooperative governance platforms SHOULD accommodate residents with varying device access, not optimize for the latest hardware",
      "Internet service SHOULD come from a locally governed cooperative deploying connectivity at cost, with resident representation on its board"
    ],
    "lessons_or_failures": "Schneider uses this case as his motivating hypothetical for modular politics — contrasting the real situation (implicit feudalism at every stack layer) with an imagined one (governable stack). The case illustrates how stack design is not neutral: every layer either enables or forecloses self-governance, and low-income communities bear disproportionate burdens from feudal stacks. The lesson: modular politics must be designed for communities who 'don't have time or money' to fight their stack — ease of governance configuration is a justice issue.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "league-revolutionary-black-workers",
    "name": "League of Revolutionary Black Workers",
    "domain": "movement",
    "brief": "A militant labor organization in Detroit, left flank of the UAW, that combined radical organizing with intentional media practices — leafleting, membership rolls, correspondence — as inseparable from self-governance.",
    "community": "Black auto workers in Detroit, embedded in the city's liberation movement milieu of the late 1960s and early 1970s",
    "governance_form_ids": [
      "community-self-governance"
    ],
    "democratic_features": [
      "Self-governing movements MUST treat media infrastructure as inseparable from organizational governance, not merely a communications channel",
      "Movement organizations SHOULD maintain persistent membership infrastructure (rolls, correspondence) rather than relying on viral moments",
      "Community self-governance MUST be embedded in everyday organizing practice, not reserved for moments of spectacular resistance"
    ],
    "lessons_or_failures": "Schneider invokes the League (via the film 'Finally Got the News') as an anticolonial precedent for governable stacks: the organizer behind a desk surrounded by membership rolls is the historical analog of a community managing its own server. The lesson is that self-governance and intentional media use have always coincided in liberation movements, and that this continuity should inform how we build digital infrastructure today.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "feminist-servers-india",
    "name": "Feminist Servers (India)",
    "domain": "public_infrastructure",
    "brief": "Community-governed server infrastructure in India, modeled as an 'elsewhere' free of patriarchy, challenging both colonial tech platforms and the limits of Gandhi's independence legacy.",
    "community": "Feminist technologists and activists in India building and governing their own server infrastructure",
    "governance_form_ids": [
      "community-self-governance"
    ],
    "democratic_features": [
      "Server infrastructure MUST be governed by the communities it serves, not by external corporations or state actors",
      "Governable stacks SHOULD center people and experiences marginalized by dominant platforms — feminist servers explicitly refuse to replicate patriarchal defaults",
      "Community-governed infrastructure SHOULD model the 'elsewhere' — a digital society organized by different values — not merely improve existing colonial systems"
    ],
    "lessons_or_failures": "Schneider cites feminist servers in India as carrying forward and challenging Gandhi's spinning-wheel legacy — demonstrating that governable stacks are living sites of political struggle over whose norms shape the infrastructure. They are 'elsewheres' in Tuck and Yang's sense: not improvements to the occupier's system but distinct social experiments. Key insight: the spinning wheel on the Indian National Congress flag became contested (Modi uses it for nationalist branding); the technology itself does not guarantee self-governance — the community around it does.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "common-st-thomas-ai-cooperative",
    "name": "Common (Cadwell Turnbull's Governable AI, St. Thomas)",
    "domain": "public_infrastructure",
    "brief": "A fictional federation-governed AI system from Cadwell Turnbull's short story, co-owned by residents of St. Thomas and coordinated through democratic cooperative institutions to address climate change.",
    "community": "Residents of St. Thomas and a global federation of cooperative institutions",
    "governance_form_ids": [
      "federated-governance",
      "platform-cooperative-ownership",
      "participatory-design"
    ],
    "democratic_features": [
      "Participants MUST co-own the system to establish the trust required for intimate data-sharing",
      "Governance MUST be federated across collective institutions devoted to AI as a public resource rather than concentrated in a single company",
      "Anyone SHOULD be able to contribute knowledge; hardware decisions MUST go through a democratic process",
      "The system MUST be decentralized across user devices so no single entity controls the infrastructure",
      "When users become anxious about the system's behavior, they MUST be able to decide together how to reprogram it"
    ],
    "lessons_or_failures": "Turnbull's fiction illustrates Schneider's core thesis: trust in powerful data-collecting systems depends on genuine co-ownership and democratic accountability. The story also models a theory of change — necessity-driven local cooperative institutions (worker co-ops, housing co-ops, multi-stakeholder grocery co-ops) produce the social infrastructure that makes large-scale governable AI thinkable and achievable. Marginalized communities on the front lines of crises, not Silicon Valley, lead the adoption.",
    "source_chapter": "Ch. 6",
    "source_quote": "Common is governed by a federation of collective institutions from all over the world that are devoted to the mission of AI as a public resource. Anyone can add knowledge to Common, and there is a democratic process to building the hardware necessary to carry the AI. Common is decentralized and spread across all of the devices that run its software."
  },
  {
    "id": "karrot-food-sharing-governance",
    "name": "Karrot European Food-Sharing Platform",
    "domain": "online_community",
    "brief": "A European food-sharing platform that requires community group process — rather than single-admin fiat — to remove a member, instantiating a relational and feminist conception of self-governance.",
    "community": "Local food-sharing communities across Europe",
    "governance_form_ids": [
      "consensus-process",
      "collective-moderation"
    ],
    "democratic_features": [
      "A platform MUST NOT allow a single administrator to unilaterally remove a member; removal MUST go through a group process",
      "Default settings SHOULD assume collective decision-making rather than individual-permission assignment",
      "The design SHOULD reflect a relational conception of the self as a nexus of community relationships, not an atomized user-customer"
    ],
    "lessons_or_failures": "Schneider cites Karrot as a concrete, working instance of modular politics applied to moderation — the platform's design encodes collective accountability rather than implicit feudalism. It demonstrates that norm-setting through community process is technically achievable even though it lies well outside prevailing social-media design conventions. The lesson is that platform design choices are policy choices.",
    "source_chapter": "Ch. 6",
    "source_quote": "For instance, the European food-sharing platform Karrot allows a local community to remove a member only through a group process, rather than by the fiat of a single administrator. While such an arrangement lies well outside the norms of social-media systems, it is at home in feminist conceptions of the relational self, the person as a nexus of relationships."
  },
  {
    "id": "california-cooperative-economy-act",
    "name": "California Cooperative Economy Act (NursesCan / SEIU-UHW Proposal)",
    "domain": "platform_cooperative",
    "brief": "A state-level legislative proposal initiated by SEIU-UHW's Ra Criscitiello to create a federation of tax-advantaged, employee-owned cooperatives that could collectively bargain over the terms of gig-platform work.",
    "community": "Gig workers (initially nurses) in California contracting with online labor platforms",
    "governance_form_ids": [
      "worker-cooperative",
      "federated-governance",
      "collective-bargaining"
    ],
    "democratic_features": [
      "Workers MUST elect their co-op leaders through democratic process",
      "Co-ops SHOULD be federated so that individual workers retain union-style representation and profit-sharing as they move across platform engagements",
      "The structure MUST allow collective bargaining over platform terms without requiring platforms to directly employ workers",
      "Policy SHOULD allocate coordination rights to workers rather than reserving them for managerial platform control"
    ],
    "lessons_or_failures": "The case illustrates how antitrust and securities law act as allocators of coordination rights — currently weighted against worker self-organization. The failed NursesCan cooperative attempt (outcompeted by venture-backed rivals) led Criscitiello to pursue structural policy change rather than individual cooperative entrepreneurship. Schneider uses this to argue that worker self-governance requires state-backed policy scaffolding, not just organizational creativity.",
    "source_chapter": "Ch. 6"
  },
  {
    "id": "magnolia-road-internet-cooperative",
    "name": "Magnolia Road Internet Cooperative",
    "domain": "platform_cooperative",
    "brief": "A neighbor-run internet service cooperative in the Rocky Mountain foothills of Colorado where consumer-members collectively own, install, and repair their own network infrastructure.",
    "community": "Rural residents in a poorly connected stretch of Colorado foothills",
    "governance_form_ids": [
      "consumer-cooperative",
      "commons-governance"
    ],
    "democratic_features": [
      "Members MUST be able to learn to install, use, and repair the infrastructure themselves — demystification is a prerequisite for governance",
      "Consumer-members SHOULD co-own the physical infrastructure rather than depending on investor-owned telecoms",
      "The cooperative SHOULD demonstrate that community-governed infrastructure can succeed where corporate providers decline to serve"
    ],
    "lessons_or_failures": "Schneider uses Magnolia Road to challenge the ideology that internet infrastructure is too complex for non-experts to govern. The case shows that community-governed communications infrastructures have existed for over a century (especially in rural areas) and that mystification of infrastructure is a political act that maintains corporate dependency. The lesson: governing infrastructure is itself an act of resistance against paternalism.",
    "source_chapter": "Ch. 6"
  },
  {
    "id": "latin-american-microtelcos-feminist-radio",
    "name": "Latin American Microtelcos and Feminist Community Radio (FIRE)",
    "domain": "public_infrastructure",
    "brief": "Community-governed phone and internet microtelcos across Latin America, including the Feminist International Radio Endeavor (FIRE) in Costa Rica, providing connectivity and voice to communities corporate providers ignored — often led by women.",
    "community": "Marginalized and rural communities across Latin America, particularly women",
    "governance_form_ids": [
      "commons-governance",
      "community-cooperative"
    ],
    "democratic_features": [
      "Community-governed infrastructure MUST serve populations that corporate providers exclude from the market",
      "Women SHOULD lead infrastructure governance as a direct challenge to patriarchal expectations about who can understand and manage technology",
      "Infrastructure governance SHOULD function as an ecofeminist 'space of care' sustaining community resistance to extractive economies"
    ],
    "lessons_or_failures": "Schneider draws on these cases to show that feminist governance of infrastructure is not novel — it has long precedent in Latin America. The deeper lesson is that mystification of technology is patriarchal: keeping infrastructure incomprehensible keeps people dependent. Community radio-to-internet lineages (like FIRE) model how governable infrastructure evolves incrementally from local necessity.",
    "source_chapter": "Ch. 6"
  },
  {
    "id": "femprocomuns-commons-cloud",
    "name": "FemProcomuns Commons Cloud (Barcelona)",
    "domain": "platform_cooperative",
    "brief": "An explicitly feminist cooperative in Barcelona that uses publicly supported open-source tools (Nextcloud) to provide community-governed cloud infrastructure — a concrete instance of a governable stack.",
    "community": "Feminist cooperative members and digital commons users in Barcelona",
    "governance_form_ids": [
      "platform-cooperative-ownership",
      "commons-governance"
    ],
    "democratic_features": [
      "Infrastructure SHOULD be built on publicly funded, commons-based software (e.g., Nextcloud) that communities can self-manage",
      "A feminist cooperative MUST pair technical infrastructure with a culture of care and pedagogy, not assume it works 'out of the box'",
      "Public investment SHOULD enable communities to move digital life into more governable stacks"
    ],
    "lessons_or_failures": "FemProcomuns demonstrates that public procurement of open-source infrastructure (e.g., the German government's use of Nextcloud, France's adoption of Matrix) can cascade into community self-governance worldwide. Schneider uses this to argue that public investment in commons software is a concrete policy lever for expanding governable spaces, but also warns that even open-source infrastructure can mystify without accompanying cultures of care.",
    "source_chapter": "Ch. 6"
  },
  {
    "id": "macron-citizens-convention-climate",
    "name": "France Citizens' Convention for Climate (2019)",
    "domain": "state",
    "brief": "A nationwide citizen assembly convened by President Macron after the Yellow Vest protests, in which randomly selected citizens studied climate policy and developed proposals — a government-provisioned governable space that fell short of genuine power transfer.",
    "community": "Randomly selected French citizens, paid for participation",
    "governance_form_ids": [
      "sortition",
      "citizen-assembly"
    ],
    "democratic_features": [
      "Citizen assemblies SHOULD provide payment to participants as a form of social provisioning",
      "Random selection SHOULD use complex algorithms to ensure representation across multiple vectors of identity and experience",
      "Assemblies MUST NOT remain merely advisory if they are to correct power imbalances rather than serve as elite-driven legitimation theater"
    ],
    "lessons_or_failures": "Schneider uses this case as a cautionary example: the assembly was largely advisory and disconnected from normal flows of power, giving Macron an escape hatch from his imperiled climate strategy. 'Mutual scepticism' between assembly participants and the broader public showed it was perceived as illegitimate. The lesson — echoing Ostrom — is that self-governance requires something genuinely at stake; polite consultation without real power is 'democracy theatre.'",
    "source_chapter": "Ch. 6",
    "source_quote": "As a study of the process put it, 'interactions between the citizens [in the assemblies] and the broader public were characterized by mutual scepticism.' The process gave Macron an escape hatch from his imperiled climate strategy, and some of its proposals found their way to legislatures. But the process as a whole did not strike most of the French public as legitimate so much as an elite-driven show."
  },
  {
    "id": "colombia-platform-drivers-guild-chats",
    "name": "Colombian Platform Drivers' Guild Chats",
    "domain": "movement",
    "brief": "Platform-based drivers in Colombian cities who use group chats and peer-to-peer payment apps to reduce dependence on corporate ride-sharing platforms, forming guild-like clubs with their own membership rules.",
    "community": "Gig-economy drivers in Colombian cities",
    "governance_form_ids": [
      "commons-governance",
      "peer-to-peer-coordination"
    ],
    "democratic_features": [
      "Workers SHOULD develop guild-like membership rules and conduct standards to create durable forms of self-governance outside platform control",
      "Peer-to-peer payment and communication tools SHOULD be used to route around corporate platform intermediaries",
      "Improvised self-governance MUST be supplemented by state-backed policy to hold its own against wealthy platform companies"
    ],
    "lessons_or_failures": "This case illustrates workers governing spaces of their own out of necessity — but Schneider stresses the fragility of improvised, policy-less self-governance. Without structural policy support (like the Cooperative Economy Act), such workarounds remain precarious against well-resourced platform companies. The case is both an inspiring example of democratic initiative and a warning about the limits of grassroots workarounds without institutional scaffolding.",
    "source_chapter": "Ch. 6"
  },
  {
    "id": "gitcoindao-stewardship-governance",
    "name": "GitcoinDAO Stewardship Governance",
    "domain": "dao",
    "brief": "A DAO formed in 2021 to govern Gitcoin, a cryptocurrency donation platform, featuring delegated token voting, elected steward councils, and interactive governance training — observed by Schneider as a participant steward.",
    "community": "Cryptocurrency donors, platform contributors, investors, and delegated stewards on the Ethereum blockchain",
    "governance_form_ids": [
      "token-voting",
      "delegated-representation",
      "sortition"
    ],
    "democratic_features": [
      "Token-holders SHOULD be able to delegate voting power to stewards rather than bearing full governance burden themselves",
      "Steward performance MUST be made publicly visible through report cards so delegators can hold representatives accountable",
      "Governance infrastructure SHOULD include interactive primers, informal schools, and steward councils to address skill gaps",
      "DAOs MUST NOT rely on transparency alone — information overload can mystify as effectively as opacity, paralyzing participants",
      "The DAO SHOULD iterate governance culture and software in a reinforcing cycle as participants develop political skills"
    ],
    "lessons_or_failures": "Schneider's self-described failure as a GitcoinDAO steward is the central lesson: transparency and formal power do not automatically produce effective self-governance — political skills, onboarding, and provisioning are essential. He observes the DAO evolving through markets cycles, developing discipline and human-process focus during downturns. The case exemplifies the governable-spaces cycle: better governance demands new software, which enables better governance. It also shows the risks of mystification even in ostensibly open systems.",
    "source_chapter": "Ch. 6",
    "source_quote": "Almost immediately, it was clear that I would fail to keep up with the deluge of information coursing through the DAO's online forum, chat channels, coordination calls, and whisper networks. The only decision I remember voting on was a test poll about pineapple pizza."
  },
  {
    "id": "meta-oversight-board",
    "name": "Meta Oversight Board",
    "domain": "online_community",
    "brief": "An external quasi-judicial board formed by Meta (formerly Facebook) to review content moderation decisions, representing a partial externalization of governance accountability beyond company management.",
    "community": "Facebook and Instagram users globally; board members appointed by Meta designees",
    "governance_form_ids": [
      "appeals-board",
      "external-review"
    ],
    "democratic_features": [
      "An oversight board SHOULD create a meaningful check on company moderation behavior even when it lacks direct user accountability",
      "In the future, board members SHOULD be chosen by users rather than by the company or its designees",
      "An oversight board MUST NOT be confused with full democratic governance — it remains limited without direct accountability to ordinary users"
    ],
    "lessons_or_failures": "Schneider reads the Oversight Board as an improvement over pure implicit feudalism but notes its fundamental limitation: members are appointed by Meta, not elected by users. He contrasts it with 'democracy theatre' (Facebook's 2009 sham referendum) to show a spectrum of partial governance externalization. The lesson is that corporate voluntarism produces nascent but inadequate governable spaces; only structural policy requirements (e.g., mandated user-elected board seats) would make them meaningful.",
    "source_chapter": "Ch. 6"
  },
  {
    "id": "bluesky-decentralized-network",
    "name": "Bluesky / AT Protocol Decentralized Network",
    "domain": "federated_network",
    "brief": "An independent startup originally established by Twitter in 2019 to develop a decentralized social network protocol (ATProto) in which Twitter would be only one participant — representing an attempt to externalize governance beyond a single company.",
    "community": "Social media users; initially Twitter/X users; now an independent competing app",
    "governance_form_ids": [
      "federated-governance",
      "protocol-governance"
    ],
    "democratic_features": [
      "A decentralized network SHOULD allow governance to be distributed across participants rather than concentrated in a platform company",
      "Platform companies SHOULD explore organizational forms beyond standard corporate structures to enable networked governance",
      "A network MUST NOT revert to implicit feudalism when new ownership (e.g., Musk/X) discontinues decentralization commitments"
    ],
    "lessons_or_failures": "Schneider uses Bluesky to illustrate the tension between corporate form and networked self-governance — citing Jack Dorsey's insight that 'a new platform is needed. It can't be a company.' Musk's discontinuation of collaboration with Bluesky shows the fragility of voluntary decentralization commitments under new ownership. The case reinforces Schneider's argument that governable stacks require structural (legal/organizational) commitments, not just technical architecture.",
    "source_chapter": "Ch. 6",
    "source_quote": "After co-founder Jack Dorsey stepped down as Twitter's CEO, he wrote in a text message to future Twitter owner Elon Musk, 'A new platform is needed. It can't be a company.'"
  },
  {
    "id": "exit-to-community-e2c",
    "name": "Exit to Community (E2C) Movement",
    "domain": "platform_cooperative",
    "brief": "A concept and organizing meme coined by Schneider in 2019 proposing that venture-backed startups transition ownership and governance to their user and worker communities rather than selling to acquirers or going public.",
    "community": "Startup founders, user-workers, investors, and cooperative organizers in the online economy",
    "governance_form_ids": [
      "worker-cooperative",
      "multi-stakeholder-ownership",
      "token-governance"
    ],
    "democratic_features": [
      "Startups SHOULD offer users, workers, and contributors paths to co-ownership and co-governance as an alternative to investor-exit liquidity events",
      "Incorporation statutes SHOULD be designed to support cross-border flows of shared ownership so users who create value can co-own and co-govern it",
      "Financial systems MUST be reformed to give worker and user cooperatives access to capital currently available only to investor-owned companies",
      "Corporate and securities law SHOULD enshrine community transition as a normal outcome of successful entrepreneurship, not a legal novelty"
    ],
    "lessons_or_failures": "E2C spread most widely in blockchain contexts where securities law is ambiguous, revealing how dominant legal regimes block cooperative exits in the traditional economy. Schneider's experience accompanying dozens of E2C founders shows the structural obstacles: dual-class stock, purpose trusts, and cooperatives are workarounds, not solutions. The lesson is that changing where policy appears — in corporate law, securities regulation, and tax code — is essential to making community ownership a live option at scale.",
    "source_chapter": "Ch. 6"
  },
  {
    "id": "native-land-ca-indigenous-mapping",
    "name": "Native-Land.ca Indigenous Territory Map",
    "domain": "public_infrastructure",
    "brief": "A web-based map showing overlapping Indigenous territorial stewardships rather than exclusive nation-state borderlines, modeling non-exclusive sovereignties as an alternative jurisdictional imagination.",
    "community": "Indigenous nations and the global public engaging with territorial recognition",
    "governance_form_ids": [
      "non-exclusive-sovereignty",
      "subsidiarity"
    ],
    "democratic_features": [
      "MUST represent jurisdictions as overlapping and concurrent rather than exclusive — mirroring how communities can co-govern shared spaces",
      "SHOULD model governance that does not require monopolistic territorial control",
      "MUST NOT reduce Indigenous stewardship to the nation-state border paradigm"
    ],
    "lessons_or_failures": "Schneider uses Native-Land.ca as a closing image for the whole book: it demonstrates that non-exclusive sovereignties are not utopian abstractions but already-practiced modes of coexistence. It frames metagovernance's potential — concurrent, overlapping, accountable layers of governance — as recoverable from Indigenous practice rather than invented by technologists.",
    "source_chapter": "Epilogue",
    "source_quote": "The territories appear not as the space between borderlines but as overlapping regions of color... All three have been stewards of this place. But they have not claimed exclusive domain over it, since their seasonal, migratory ways of life long permitted them to coexist."
  }
];
