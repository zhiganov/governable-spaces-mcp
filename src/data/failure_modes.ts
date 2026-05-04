import type { FailureMode } from '../types.js';

export const FAILURE_MODES: FailureMode[] = [
  {
    "id": "implicit-feudalism",
    "name": "Implicit Feudalism",
    "kind": "pattern",
    "signature": "Platform or online space governed by a single owner/admin with unchecked, arbitrary power over participants; no meaningful voice, exit, or ownership stake for members; rules imposed top-down without democratic legitimacy.",
    "example": "Online communities governed by platform owners who hold absolute power over users, mirroring feudal lord-serf relationships where residents have no formal say in the rules that govern them.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Reddit admin unilateral policy changes",
        "Discord server owner bans"
      ],
      "federated_network": [
        "Mastodon instance owner unilateral rule changes"
      ],
      "dao": [
        "VC-controlled DAO multisig override"
      ]
    },
    "countering_governance_form_ids": [
      "federated-subsidiarity",
      "community-ownership",
      "modular-politics"
    ],
    "source_chapter": "Introduction"
  },
  {
    "id": "politics-of-no-politics",
    "name": "Politics of No Politics",
    "kind": "pattern",
    "signature": "Platform or community claims to be neutral, apolitical, or purely technical while embedding specific political choices in its design; governance is rendered invisible or naturalized so that power cannot be contested.",
    "example": "Tech platforms presenting algorithmic curation and moderation decisions as neutral or purely technical, masking the political choices embedded in design.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Facebook's 'connecting people' neutrality framing"
      ],
      "platform_cooperative": [
        "Ostensibly flat cooperatives with informal power hierarchies"
      ],
      "dao": [
        "'Code is law' DAO governance framing"
      ]
    },
    "countering_governance_form_ids": [
      "modular-politics",
      "democratic-mediation"
    ],
    "source_chapter": "Introduction"
  },
  {
    "id": "digital-colonialism",
    "name": "Digital Colonialism",
    "kind": "pattern",
    "signature": "Powerful platform actors (typically from wealthy nations) impose governance structures, norms, and extractive relationships on communities without their consent; local self-determination is foreclosed by external ownership and rule-setting.",
    "example": "Global platforms headquartered in the US extending their terms-of-service governance over communities worldwide without those communities having any democratic recourse or self-determination.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "US-based platforms imposing content rules on Global South communities"
      ],
      "public_infrastructure": [
        "Foreign-owned platform infrastructure replacing local civic space"
      ],
      "state": [
        "Regulatory asymmetry allowing platform colonialism"
      ]
    },
    "countering_governance_form_ids": [
      "federated-subsidiarity",
      "public-option-platform",
      "governable-stack"
    ],
    "source_chapter": "Introduction"
  },
  {
    "id": "democratic-skill-atrophy",
    "name": "Democratic Skill Atrophy via Platform Design",
    "kind": "pattern",
    "signature": "Online spaces provide no election functionality, no dispute-resolution mechanisms, no bylaw templates; all meaningful power rests with admins; users have no practice exercising collective voice and therefore lose the democratic muscles needed for larger-scale politics.",
    "example": "Schneider contrasts his mother's garden club — with eight pages of bylaws, elections, and dispute resolution — with the email lists, open-source communities, and hashtag movements he administered, where 'power rested with me and whoever else's accounts had admin privileges' and no governance infrastructure existed.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "email discussion groups without governance tooling",
        "hashtag protest movement coordination spaces"
      ],
      "federated_network": [
        "open-source software community mailing lists"
      ],
      "movement": [
        "2011 wave social-movement online spaces"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Introduction"
  },
  {
    "id": "admin-fiat-removal",
    "name": "Arbitrary Admin Removal Without Due Process",
    "kind": "pattern",
    "signature": "A single account holder (the 'admin' designated by the software) removes participants from a shared space unilaterally, with no stated criteria, no appeal mechanism, and no community input — illustrating how platform architecture consolidates disciplinary power in one role.",
    "example": "In the picnic group chat, 'One person complains especially crudely, only to vanish from the chat—removed by the person who started it, whom the software regards as its admin.' No criteria, no process, no appeal.",
    "pattern_ids": [
      "implicit-feudalism"
    ],
    "domain_examples": {
      "online_community": [
        "picnic group chat admin removal",
        "Discord server admin bans",
        "subreddit moderator removals"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Introduction"
  },
  {
    "id": "tyranny-of-structurelessness",
    "name": "Tyranny of Structurelessness",
    "kind": "pattern",
    "signature": "A community or project explicitly rejects formal governance as unnecessary or ideologically suspect; an informal hidden hierarchy forms instead, reproducing existing social power and privilege; the absence of explicit rules makes the de facto power structure harder to challenge or even perceive.",
    "example": "Most open-source projects avoided explicit governance as a 'distraction from writing code,' producing power vacuums that implicit feudalism filled — resulting in BDFL dictatorships and cultures of harassment.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "open-source BDFL culture",
        "do-ocracy failure in open source"
      ],
      "movement": [
        "early feminist rap groups (Jo Freeman)",
        "Double Union hackerspace meritocracy critique"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "affective-vs-effective-voice-gap",
    "name": "Affective Voice Without Effective Voice",
    "kind": "pattern",
    "signature": "A platform provides abundant channels for emotional expression, complaint, and persuasion (likes, comments, upvotes, call-outs) but no binding, transparent mechanism by which user speech changes policy or removes an admin; users feel heard but cannot compel action; affective voice substitutes for and masks the absence of effective voice.",
    "example": "Cancel culture dynamics: critics can rally and publicly shame, but have no dispute-resolution system, no way to vote out an admin, and no specified pathway to reconciliation — while the admin can simply remove critics from the spaces they share.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Facebook democracy theatre referendum 2009",
        "cancel culture / call-out without recourse",
        "Reddit upvote/downvote without governance power"
      ],
      "movement": [
        "BLM chapters lacking financial transparency and participation rights"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "democracy-theatre",
    "name": "Democracy Theatre",
    "kind": "pattern",
    "signature": "A platform or organization stages a formal participatory process (referendum, vote, consultation) while engineering conditions that guarantee the result is non-binding or unachievable: impossibly high quorum thresholds, opaque language, advisory-only framing, or retroactive reinterpretation of results. Performs legitimacy without transferring power.",
    "example": "Facebook's 2009 user referendum on terms-of-service changes required 30 percent of over 1 billion users to participate for the vote to be binding — equivalent to the entire US population. Far under 1 percent participated; the company declared it 'advisory' and proceeded as planned.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Facebook 2009 terms-of-service referendum"
      ],
      "dao": [
        "token-vote quorum manipulation"
      ],
      "state": [
        "performative public consultations with unreachable thresholds"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "founder-lock-in",
    "name": "Founder Lock-In",
    "kind": "pattern",
    "signature": "The person who initiates a community, platform, or organization retains permanent or near-permanent authority regardless of growth, community will, or outside stakeholder interests; authority derives from founding rather than ongoing consent; structural mechanisms (dual-class stock, 'founder's seat,' BDFL status, sole board membership) encode this permanence in the institution.",
    "example": "Mark Zuckerberg's dual-class stock structure ensures he retains majority control of Meta indefinitely, regardless of shareholder votes or the platform's billions of users.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Facebook dual-class stock / Zuckerberg control",
        "Linux BDFL Linus Torvalds",
        "Jimmy Wales 'founder's seat' on Wikimedia board"
      ],
      "movement": [
        "Patrisse Cullors as sole board member and executive director of BLM Global Network"
      ],
      "workplace": [
        "GitHub project owner permanence"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "usenet-backbone-cabal",
    "name": "Usenet Backbone Cabal and Big 8",
    "kind": "instance",
    "signature": "A self-perpetuating board of sysadmins controls the canonical hierarchy of a federated network; voting exists but is non-binding over technical power; moderators of individual newsgroups are answerable to nobody; the system explicitly calls its administrators 'barons' and users 'serfs.'",
    "example": "Big 8 documentation states explicitly that nobody can force moderators to change their policies or obey the group charter; in some instances sysadmins refused to carry newsgroups approved by a vote.",
    "pattern_ids": [
      "implicit-feudalism",
      "tyranny-of-structurelessness"
    ],
    "domain_examples": {
      "federated_network": [
        "Usenet Big 8 governance",
        "Usenet 'Great Renaming' 1986"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "lambdamoo-wizardly-fiat",
    "name": "LambdaMOO Reintroduction of Wizardly Fiat",
    "kind": "instance",
    "signature": "A virtual world experiments with user self-governance (petition-based rule-setting) but administrators retract participatory powers, citing real-world legal liability of the host institution; the server's physical location under a corporate or institutional roof overrides the community's political experiments.",
    "example": "In 1996, LambdaMOO admins announced 'reintroducing wizardly fiat' with veto power over user self-governance: 'So long as the MOO is located on a single RL machine at a single RL site subject to RL laws and liabilities, there will be those deemed responsible for the use of that hardware.'",
    "pattern_ids": [
      "implicit-feudalism",
      "founder-lock-in"
    ],
    "domain_examples": {
      "online_community": [
        "LambdaMOO wizardly fiat 1996"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "linux-bdfl-model",
    "name": "Linux BDFL (Benevolent Dictator for Life)",
    "kind": "instance",
    "signature": "Open-source project founder retains unilateral authority over canonical releases indefinitely; community contributes code but cannot override the dictator's choices; explicit governance is avoided as a distraction; the cultural label 'BDFL' normalizes the arrangement as benevolent rather than problematic.",
    "example": "Linus Torvalds has held ultimate power over Linux kernel releases since 1991, including after a 2018 sabbatical 'to learn how to stop being an asshole'; his role exemplifies how implicit feudalism produces a culture of explicit dictatorship through omission rather than ideology.",
    "pattern_ids": [
      "implicit-feudalism",
      "founder-lock-in",
      "tyranny-of-structurelessness"
    ],
    "domain_examples": {
      "workplace": [
        "Linux kernel Linus Torvalds BDFL",
        "Python Guido van Rossum BDFL until 2018",
        "Ubuntu Mark Shuttleworth sabdfl"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "reddit-2015-revolt",
    "name": "Reddit 2015 Moderator Revolt",
    "kind": "instance",
    "signature": "Volunteer moderators exercise collective exit (mass subreddit blackout) to force a corporate governance concession; the tactic succeeds in removing a CEO but results in tighter platform-level policy enforcement, demonstrating the limits of moderator collective action against the platform monarchy.",
    "example": "In 2015, moderators galvanized by Gamergate-era crackdowns switched subreddits to private en masse, causing a widespread blackout and the resignation of interim CEO Ellen Pao — but the victory brought heightened site-wide policies constraining moderator autonomy.",
    "pattern_ids": [
      "implicit-feudalism",
      "affective-vs-effective-voice-gap"
    ],
    "domain_examples": {
      "online_community": [
        "Reddit 2015 moderator revolt / Ellen Pao resignation"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "blm-single-board-member",
    "name": "Black Lives Matter Global Network Single-Board-Member Governance",
    "kind": "instance",
    "signature": "A social-movement organization absorbing tens of millions of dollars during a historic uprising operates with a single board member who is simultaneously its executive director; local chapters have no formal participation in financial decisions or organizational direction; the logic of a founding hashtag becomes the governance of an institution.",
    "example": "Ten BLM chapters declared 'It is time for accountability' in November 2020, noting that Patrisse Cullors was both sole board member and executive director of the BLM Global Network, and that chapters lacked financial support and participatory rights.",
    "pattern_ids": [
      "founder-lock-in",
      "implicit-feudalism"
    ],
    "domain_examples": {
      "movement": [
        "BLM Global Network single-board-member governance 2020"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "aol-community-leader-unpaid-labor",
    "name": "AOL Community Leader Unpaid-Labor Exploitation",
    "kind": "instance",
    "signature": "A platform recruits volunteer community managers with the perk of unchecked power (implicit feudalism as compensation) instead of wages; when volunteers recognize they are generating real profit, they protest; the arrangement draws regulatory scrutiny but the norm of unpaid moderation labor persists across the industry.",
    "example": "America Online appointed 'community leaders' in the early 1990s to moderate chat rooms in exchange for reduced access costs; when some recognized their profit-generating labor, the program drew Department of Labor scrutiny for under-compensation.",
    "pattern_ids": [
      "implicit-feudalism"
    ],
    "domain_examples": {
      "online_community": [
        "AOL community leaders program 1990s"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "californian-ideology-exit-as-democracy",
    "name": "Exit-as-Democracy Substitution",
    "kind": "pattern",
    "signature": "Platform governance justified solely by user ability to leave; no meaningful voice or ownership offered; 'if you don't like it, leave' treated as sufficient democratic legitimacy. Founders and VCs celebrate exit as freedom while hard-coding admin control.",
    "example": "Elon Musk's Twitter polls framed as democratic while employees warned they were insecure and manipulable; Robert Nozick's 'the only utopia is the ability to exit one utopia for another' invoked to justify feudal platform governance.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "The WELL sold to Bruce Katz in 1994 with no user say",
        "Twitter under Musk—poll theater replacing governance"
      ],
      "platform_cooperative": [
        "The River—never flourished as exit-capable alternative to The WELL"
      ],
      "dao": [
        "Seasteading and Mars colony 'direct democracy' predicated on exit from existing polities"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "homesteading-imaginary",
    "name": "Homesteading Imaginary",
    "kind": "pattern",
    "signature": "Online spaces framed through frontier/homesteading metaphors—virgin territory, personal sovereignty within one's claimed plot, endless expansion, exit to a new plot if dissatisfied. Democracy promised as emanating from local feudal absolutism. Encodes property logic, patriarchy, and erasure of prior inhabitants.",
    "example": "Howard Rheingold subtitled his WELL book 'Homesteading on the Electronic Frontier'; Ethereum named its first two protocol versions 'Frontier' and 'Homestead'; GeoCities and eWorld used terrestrial and spiritual conquest metaphors.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "The WELL—'homesteading on the electronic frontier'",
        "GeoCities territorial metaphors"
      ],
      "federated_network": [
        "Ethereum Frontier/Homestead versioning"
      ],
      "dao": [
        "Seasteading colonies framed as democratic through exit options"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "feudal-soteriology",
    "name": "Feudal Soteriology (Salvation Through Submission to the Admin)",
    "kind": "pattern",
    "signature": "Political or religious movements that emerge from implicitly feudal network spaces adopt hierarchical salvation narratives—redemption comes through absolute submission to a sovereign figure (caliph, president, Q) who occupies the structural role of platform admin. Democratic accountability is cast as the obstacle to salvation.",
    "example": "QAnon's pseudonymous prophet Q posted on 8chan, whose sysadmin Ron Watkins is believed to be Q's author—the technical administrator of the platform became the apocalyptic oracle; salvation required ceding power to the admin-as-sovereign.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "QAnon on 8chan—sysadmin as prophet",
        "Islamic State caliphate as networked feudal umma"
      ],
      "state": [
        "Trump presidency—governing by platform diktat and poll theater",
        "Curtis Yarvin's explicit monarchism extrapolated from startup governance logic"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "the-well-sold-no-user-say",
    "name": "The WELL—Sold Without User Consent (1994)",
    "kind": "instance",
    "signature": "Platform community sold to new owner with zero user input; benevolent dictatorship structure made sale legally and technically trivial; founding democratic aspiration ('It would be self-governing…') never resolved.",
    "example": "In 1994 The WELL was sold to shoe magnate Bruce Katz; users had no say. Katz proclaimed belief in 'the power of this new emerging media' as democratic while acquiring the community as private property.",
    "pattern_ids": [
      "implicit-feudalism",
      "exit-as-democracy-substitution",
      "homesteading-imaginary"
    ],
    "domain_examples": {
      "online_community": [
        "The WELL sale to Bruce Katz, 1994"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "arab-spring-feudal-misreading",
    "name": "Arab Spring / Occupy—Feudal Misreading of Leaderless Movements",
    "kind": "instance",
    "signature": "Press and public default to platform's feudal power logic when interpreting movements: whoever controls the admin account is declared the movement leader, regardless of the democratic processes activists actually use offline.",
    "example": "Wael Ghonim, creator of the 'We Are All Khaled Said' Facebook page, was declared leader of the Egyptian uprising by world press despite insisting the movement was leaderless. Dan Rather identified Occupy activist Priscilla Grim as 'the real leader' because she administered social media accounts—ignoring the offline consensus assembly.",
    "pattern_ids": [
      "implicit-feudalism",
      "homesteading-imaginary"
    ],
    "domain_examples": {
      "online_community": [
        "'We Are All Khaled Said' Facebook page—Ghonim as accidental admin-leader"
      ],
      "movement": [
        "Occupy Wall Street—Priscilla Grim misidentified as leader via admin access"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "yarvin-explicit-monarchism",
    "name": "Curtis Yarvin / Neoreaction—Startup Logic as Explicit Monarchism",
    "kind": "instance",
    "signature": "Implicit feudalism of startup governance made fully explicit as political program: the CEO/founder model becomes advocacy for monarchy; tech investor networks (Thiel) fund and normalize the ideology; connection to executive-branch advisors (Bannon, Trump White House).",
    "example": "Curtis Yarvin, blogger and tech entrepreneur backed by Peter Thiel, applied the structure of startup companies to politics, producing explicit monarchism. Trump advisor Steve Bannon was a Yarvin reader; Yarvin reportedly communicated with the Trump White House.",
    "pattern_ids": [
      "implicit-feudalism",
      "politics-of-no-politics",
      "feudal-soteriology"
    ],
    "domain_examples": {
      "online_community": [
        "Yarvin's neoreactionary blog as political homestead"
      ],
      "state": [
        "Yarvin-Thiel-Bannon-Trump alignment—startup governance as executive monarchism"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "platform-diktat-as-geopolitics",
    "name": "Platform Diktat as Geopolitics",
    "kind": "pattern",
    "signature": "Technical administration of platforms expands from content moderation into direct geopolitical power—de-platforming heads of state, influencing elections, acting as substitute sovereigns. Admin role becomes coterminous with statecraft; no democratic accountability for the admin.",
    "example": "Corporate social-media CEOs de-platformed Donald Trump in the last days of his presidency; Ron Watkins's server admin role merged with prophetic political leadership; Zuckerberg argued consolidated monopoly power was necessary to counter Chinese platforms—framing antitrust immunity as democratic necessity.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Twitter/Facebook de-platforming of Trump, Jan 2021"
      ],
      "state": [
        "Zuckerberg antitrust defense as democracy-vs-China framing"
      ],
      "federated_network": [
        "8chan/QAnon—server admin as political operator"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "vc-scale-imperative-anti-democracy",
    "name": "Venture-Capital Scale Imperative as Anti-Democratic Force",
    "kind": "pattern",
    "signature": "VC business model requires monopoly-level scale with near-zero marginal cost; political accountability is treated as friction interfering with growth; implicit feudalism provides the centralized control architecture that enables scaling while bypassing democratic governance. Investors demand: grow, consume, colonize, or die.",
    "example": "Silicon Valley's VC model, turbocharged by the 1979 tax cut on capital gains and loosening of the 'prudent man rule,' demanded business models seeking monopoly scale. Implicit feudalism provided the social and technical blueprint for founders and VCs to maintain centralized control even across vast digital empires.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Instagram, Facebook—VC-scale-driven feudal growth models"
      ],
      "platform_cooperative": [
        "The River—never flourished against VC-funded competitors"
      ],
      "state": [
        "Zuckerberg antitrust defense as scale-as-democracy argument"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "harmony-discourse-autocratic-moderation",
    "name": "Harmony Discourse as Autocratic Moderation Cover",
    "kind": "pattern",
    "signature": "Platform admins and community moderators invoke culturally resonant cohesion values ('harmony,' 'civility,' 'community standards') to justify top-down content suppression without democratic accountability. Subsidiary bureaucracies self-censor to anticipate state or platform power.",
    "example": "Under fear of Chinese state crackdowns, admins of Chinese social-media platforms and user communities act as subsidiary bureaucracies, imposing their best guess of what 'harmony' will allow—protecting their right to exist by preemptive self-censorship rather than democratic process.",
    "pattern_ids": [
      "implicit-feudalism",
      "politics-of-no-politics"
    ],
    "domain_examples": {
      "online_community": [
        "Chinese social-media platform moderation under 'harmony' doctrine"
      ],
      "state": [
        "Chinese Communist Party 'harmony' discourse applied to digital platforms"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "platform-as-commodity-not-commons",
    "name": "Platform as Commodity, Not Commons",
    "kind": "pattern",
    "signature": "A platform that hosts civic life can be bought, sold, or radically restructured by a single owner with no user consent or recourse; users have no ownership stake, no exit with continuity, and no meaningful voice over changes to rules or direction.",
    "example": "When Elon Musk acquired Twitter for $44 billion in October 2022, users discovered that the civic space they had built their communities in was a commodity that could be purchased, restructured, and renamed at a single owner's discretion.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "twitter-musk-acquisition-2022"
      ],
      "platform_cooperative": [
        "twitter-shareholder-proposal-2017"
      ]
    },
    "countering_governance_form_ids": [
      "user-ownership-shareholder-proposal",
      "citizen-assembly-for-platforms"
    ],
    "source_chapter": "Profile: A People's History of Twitter"
  },
  {
    "id": "plutocratic-dao-governance",
    "name": "Plutocratic DAO Governance",
    "kind": "pattern",
    "signature": "Governance rights derived from token holdings or computational stake rather than personhood; wealth concentrations translate directly into disproportionate voting power; venture-capital token stakes dominate protocol decisions; no counter-pressure mechanism equivalent to progressive taxation or collective bargaining.",
    "example": "Venture capitalists holding large stakes in important DAOs and protocols dominate governance processes; token-weighted voting reproduces joint-stock company plutocracy without the state-imposed counter-pressures available to corporations.",
    "pattern_ids": [],
    "domain_examples": {
      "dao": [
        "MolochDAO token-weighted governance",
        "Ethereum DAO venture-capital dominance"
      ],
      "platform_cooperative": [
        "token-based co-op governance without personhood safeguards"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-voting",
      "soulbound-token-identity",
      "cooperative-one-member-one-vote"
    ],
    "source_chapter": "Ch. 4"
  },
  {
    "id": "cryptoeconomic-reductionism",
    "name": "Cryptoeconomic Reductionism",
    "kind": "pattern",
    "signature": "All governance and coordination questions are framed as incentive-alignment problems solvable by economic mechanism design; non-economic values (justice, dignity, ecological harm, human identity) become invisible or unthinkable; political discretion is crowded out by algorithmic enforcement; participants begin to cast themselves in the image of market actors.",
    "example": "Crypto cultures use 'bull' and 'bear' market language to describe emotional states; externalities like carbon footprint and money laundering are invisible to internal cryptoeconomic processes because they generate no penalty signal within the protocol.",
    "pattern_ids": [],
    "domain_examples": {
      "dao": [
        "Bitcoin energy externality blindness",
        "Ethereum DAO externality failures"
      ],
      "federated_network": [
        "algorithmic moderation crowding out contextual judgment"
      ]
    },
    "countering_governance_form_ids": [
      "cooperative-one-member-one-vote",
      "soulbound-token-identity",
      "rights-based-protocol-design"
    ],
    "source_chapter": "Ch. 4"
  },
  {
    "id": "scalability-over-subsidiarity",
    "name": "Scalability Over Subsidiarity",
    "kind": "pattern",
    "signature": "Platform design prioritizes unlimited user growth at declining per-user cost, requiring global rule books and algorithmic enforcement; local context is systematically eliminated to avoid duplication costs; community-specific governance is treated as investor-unfriendly friction; moderation cannot be sensitive to context because context-sensitivity does not scale.",
    "example": "Corporate social-media platforms govern harm through software-enabled automation — global rule books, algorithmic enforcement wherever possible, and opaque human decision-making when necessary — producing continual complaints of both overreaction and underreaction born of blindness to context and lack of due process.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Reddit global content policy overriding subreddit norms",
        "Facebook automated content moderation"
      ],
      "federated_network": [
        "centralized moderation pipelines applied uniformly across diverse communities"
      ],
      "platform_cooperative": [
        "VC-backed platform co-op forced to shed local governance to hit growth targets"
      ]
    },
    "countering_governance_form_ids": [
      "federated-subsidiarity",
      "transformative-justice-community-accountability"
    ],
    "source_chapter": "Ch. 4"
  },
  {
    "id": "el-salvador-bitcoin-authoritarian",
    "name": "El Salvador Bitcoin Adoption — Crypto Enabling Authoritarianism",
    "kind": "instance",
    "signature": "State actor adopts cryptocurrency not to decentralize power but to consolidate it; crypto's anti-feudal technical affordances do not prevent authoritarian social outcomes when state power and crypto infrastructure are fused.",
    "example": "El Salvador's Bitcoin-enthused president Nayib Bukele demonstrates that blockchain technology's design does not guarantee democratic social outcomes; concentrations of power have been chronic in the governance of blockchains even when their technical architecture nominally lacks a single owner.",
    "pattern_ids": [
      "plutocratic-dao-governance",
      "cryptoeconomic-reductionism"
    ],
    "domain_examples": {
      "state": [
        "El Salvador Bitcoin legal tender mandate under Bukele"
      ],
      "public_infrastructure": [
        "state-mandated crypto wallet (Chivo) with no user governance rights"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 4"
  },
  {
    "id": "virality-as-colonizing-strategy",
    "name": "Virality as Colonizing Strategy",
    "kind": "pattern",
    "signature": "Platform optimizes for 'engagement' and circulation rather than decision, resolution, or consensus. Movements achieve viral moments but cannot sustain persistent organizations. Signal without capacity. Fetish of circulation supplants political goals. Organizers cannot reach members unless content is 'hilarious or enraging or gorgeous.'",
    "example": "After 2011's Arab Spring and Occupy Wall Street, viral social-media energy failed to sustain durable organizations; a decade later nearly all viral movements of 2011 had succumbed to emboldened versions of the forces they opposed, while authoritarian leaders learned to outlast digital insurgencies with obfuscation.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Occupy Wall Street media center dependence",
        "Instagram labor-organizing failure"
      ],
      "movement": [
        "Arab Spring social-media collapse",
        "Zapatistas-to-2011 protest-wave cycle"
      ],
      "platform_cooperative": []
    },
    "countering_governance_form_ids": [
      "governable-stacks",
      "modular-politics"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "free-software-individual-freedom-capture",
    "name": "Free Software / Open Source: Individual Freedom Without Community Accountability",
    "kind": "instance",
    "signature": "Free and Open Source movements emphasize freedoms of individual users and corporations, privileging those with technical know-how; result is commons-based software that flies in military jets and aids imprisonment, while developer culture harbors exclusion. Individual freedom without community accountability is insufficient for governable stacks.",
    "example": "The movements' emphasis on the freedoms of individual users, as well as of corporations, has privileged those with the technical know-how to take advantage. The software commons has spawned operating systems that fly in military jets and databases that aid in the imprisonment of asylum seekers.",
    "pattern_ids": [
      "colonial-stack-imposition",
      "politics-of-no-politics"
    ],
    "domain_examples": {
      "online_community": [
        "Linux military deployment",
        "Open-source database for asylum-seeker imprisonment"
      ],
      "workplace": [
        "Developer culture sexism and exclusion in FOSS communities"
      ]
    },
    "countering_governance_form_ids": [
      "governable-stacks"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "silicon-valley-employee-organizing-limit",
    "name": "Silicon Valley Employee Organizing: Impression of Reform Without Stack Change",
    "kind": "instance",
    "signature": "Tech employee campaigns against ethical outrages are limited because workers are invested — often literally through stock options — in the basic business models of their employers. Employee actions present the impression that protest cleanses colonial tools without actually replacing them. 'Decolonization is not an and.'",
    "example": "Employees' actions can present the impression that their protest cleanses the colonial tools they produce. But governable stacks do not seek merely to improve the occupier.",
    "pattern_ids": [
      "colonial-stack-imposition"
    ],
    "domain_examples": {
      "workplace": [
        "Google employee walkout",
        "Amazon warehouse organizing"
      ],
      "movement": [
        "Silicon Valley tech-worker campaigns"
      ]
    },
    "countering_governance_form_ids": [
      "governable-stacks"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "authoritarian-stack-capture",
    "name": "Authoritarian Stack Capture",
    "kind": "pattern",
    "signature": "Groups dedicated to racism and authoritarianism build intentional network stacks of their own, migrating to dedicated platforms as mainstream networks remove them. They govern these stacks around persecution and provocation rather than genuine self-governance. Self-governing is no guarantee of just outcomes; authoritarians govern their stacks as they see fit.",
    "example": "Groups dedicated to racism and authoritarianism have become particularly intentional about their network stacks, migrating to dedicated platforms such as Stormfront, Parler, and Gab as more mainstream networks remove them.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Stormfront white-nationalist network",
        "Parler deplatformed-right network",
        "Gab far-right social platform"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "paternalism-as-patriarchy-reconfigured",
    "name": "Paternalism as Reconfigured Patriarchy",
    "kind": "pattern",
    "signature": "Platform or government actor claims beneficent, protective rule over users on grounds of technical complexity or scale; positions top-down control as the only viable solution to social problems; obscures that self-governance is an available alternative; disproportionately burdens marginalized users while crediting technical systems and male entrepreneurs.",
    "example": "Silicon Valley CEOs defend platform monopoly power by arguing that only they can protect users from each other at scale, while the emotional and moderation labor enabling that protection is performed by underpaid offshore workers and volunteers who remain invisible.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Facebook Oversight Board as deflection from user power",
        "Twitter/X Musk control of discourse"
      ],
      "platform_cooperative": [
        "NursesCan cooperative blocked by investor-backed competitors"
      ],
      "dao": [
        "GitcoinDAO steward paralysis through information overload"
      ]
    },
    "countering_governance_form_ids": [
      "modular-politics",
      "subsidiarity-as-liability-condition",
      "exit-to-community"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "antitrust-as-coordination-suppressor",
    "name": "Antitrust Law as Suppressor of Worker Coordination",
    "kind": "pattern",
    "signature": "Antitrust doctrine, ostensibly targeting corporate monopoly, is applied asymmetrically to prevent workers and platform users from forming cooperatives or unions while leaving platform companies' own coordination rights intact; policy silently allocates coordination rights to capital over labor.",
    "example": "US antitrust law imposes legal barriers preventing platform gig workers from forming unions or cooperatives, while the same law is rarely wielded against large platform companies themselves — a pattern Sanjukta Paul calls policy as 'allocator of coordination rights.'",
    "pattern_ids": [],
    "domain_examples": {
      "platform_cooperative": [
        "NursesCan cooperative feasibility blocked",
        "California Cooperative Economy Act necessity"
      ],
      "workplace": [
        "Gig platform workers unable to collectively bargain"
      ],
      "state": [
        "Proposition 22 exempting platform drivers from employment rights"
      ]
    },
    "countering_governance_form_ids": [
      "cooperative-economy-act",
      "exit-to-community"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "infrastructure-mystification",
    "name": "Infrastructure Mystification",
    "kind": "pattern",
    "signature": "Technology infrastructure is designed or narrated to be incomprehensible to ordinary users — hidden underground, disguised, or rendered technically opaque — so that governance of it appears impossible for non-experts; mystification serves accumulation by preventing communities from perceiving, let alone governing, the value flows their participation enables.",
    "example": "Utility firms construct physical internet infrastructure to be invisible and incomprehensible — underground, overhead, or disguised as natural phenomena — requiring interventions like Ingrid Burrington's unofficial guidebook 'Networks of New York' to decode symbols intentionally obscure to non-employees.",
    "pattern_ids": [],
    "domain_examples": {
      "public_infrastructure": [
        "Corporate ISP infrastructure opacity",
        "Laws prohibiting municipal broadband competing with investor-owned firms"
      ],
      "federated_network": [
        "Free/open-source infrastructure that frustrates users without a culture of care"
      ],
      "dao": [
        "GitcoinDAO steward paralysis through opaque proposals"
      ]
    },
    "countering_governance_form_ids": [
      "community-broadband-cooperative",
      "commons-based-procurement",
      "discotech-model"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "municipal-broadband-prohibition",
    "name": "Municipal/Cooperative Broadband Prohibition Laws",
    "kind": "instance",
    "signature": "Corporate-backed state laws explicitly prohibit municipalities or cooperatives from building broadband networks that would compete with investor-owned telecom firms, blocking the formation of governable internet infrastructure.",
    "example": "Many US jurisdictions have acceded to corporate-backed laws that prohibit municipal or cooperative broadband services from competing with investor-owned firms, preventing communities from governing their own connectivity even where shared ownership would be technically and economically viable.",
    "pattern_ids": [
      "antitrust-as-coordination-suppressor",
      "infrastructure-mystification"
    ],
    "domain_examples": {
      "public_infrastructure": [
        "US state-level municipal broadband prohibition laws"
      ],
      "platform_cooperative": [
        "Community broadband co-ops blocked from forming"
      ]
    },
    "countering_governance_form_ids": [
      "community-broadband-cooperative"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "facebook-oversight-board-deflection",
    "name": "Meta Oversight Board as Power Deflection",
    "kind": "instance",
    "signature": "Platform creates external accountability body staffed by company-selected members, not user-elected representatives, to absorb criticism of moderation decisions without actually transferring governance power to users; board rulings create a check on company behavior but do not constitute democratic user self-governance.",
    "example": "Meta formed its Oversight Board seeking to deflect ongoing criticisms of its moderation decisions through an external organization; although the Oversight Board creates a meaningful check on company behavior, its members are chosen by the company or its designees, not by ordinary users.",
    "pattern_ids": [
      "democracy-theatre",
      "paternalism-as-patriarchy-reconfigured"
    ],
    "domain_examples": {
      "online_community": [
        "Meta/Facebook Oversight Board (2019–present)"
      ]
    },
    "countering_governance_form_ids": [
      "user-elected-oversight-board"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "securities-law-blocks-user-ownership",
    "name": "Securities Law Blocking User Ownership",
    "kind": "instance",
    "signature": "Existing securities regulation, designed for investors and employees, has no framework for distributing equity to platform users or gig workers; regulators say no to company requests to share ownership with user-workers, leaving communities unable to co-own the value they create.",
    "example": "In 2018, Uber and Airbnb requested SEC guidance on distributing company stock to their users ahead of public offerings; regulators effectively said no — securities law knows how to deal with investors and to some degree with employees, but not with users working over networks.",
    "pattern_ids": [
      "antitrust-as-coordination-suppressor",
      "paternalism-as-patriarchy-reconfigured"
    ],
    "domain_examples": {
      "platform_cooperative": [
        "Uber/Airbnb SEC request denied (2018)"
      ],
      "workplace": [
        "Gig workers unable to receive equity in platforms they power"
      ]
    },
    "countering_governance_form_ids": [
      "exit-to-community",
      "cooperative-economy-act"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "ethnonationalism-as-governance-failure-symptom",
    "name": "Ethnonationalism and Strongman Politics as Symptom of Governance Vacuum",
    "kind": "pattern",
    "signature": "When nation-states repeatedly fail to deliver accountable governance on large-scale problems (climate, inequality), populations turn to ethnonationalist fantasy and authoritarian leaders who can at least perform sovereignty — militarizing borders, scapegoating minorities — even if they cannot solve structural problems. Look for simultaneous governance incapacity + rising authoritarian populism.",
    "example": "Schneider writes: 'One way to understand the global turn to ethnonationalist fantasies and strongman-style leaders is as a symptom of the nation-state's weakness. If governments continually fail to deliver the governance we actually need, we can at least feel better by doubling down on what governments are capable of still.'",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "global-authoritarian-turn-2010s-2020s"
      ],
      "online_community": [
        "demagogic-exploitation-of-network-norms"
      ],
      "movement": [
        "governance-vacuum-fills-with-strongmanism"
      ]
    },
    "countering_governance_form_ids": [
      "non-exclusive-sovereignties",
      "governable-stack"
    ],
    "source_chapter": "Epilogue"
  }
];
