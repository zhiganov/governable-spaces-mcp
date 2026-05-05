import type { FailureMode } from '../types.js';

export const FAILURE_MODES: FailureMode[] = [
  {
    "id": "implicit-feudalism",
    "name": "Implicit Feudalism",
    "kind": "pattern",
    "signature": "All power derives from founders and admins; most users lack opportunities for direct, instrumental, effective voice. No mechanisms for elections, dispute resolution, or community-set ground rules. Admin accounts hold ultimate authority with no meaningful user accountability.",
    "example": "Online spaces typically provide no functionality for elections, no mechanisms for dispute resolution, no template for bylaws. Power rests with whoever holds admin privileges, with no basis for other users to hold admins accountable.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "email discussion groups",
        "open-source software communities",
        "hashtag protest movement group chats"
      ],
      "federated_network": [
        "dominant social networks"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Introduction"
  },
  {
    "id": "democratic-skills-atrophy",
    "name": "Atrophy of Everyday Democratic Skills",
    "kind": "pattern",
    "signature": "Online social space design systematically deskills users in self-governance. Platforms teach behaviors incompatible with collective governance. Users who migrate civic life online find no analog to bylaws, voting, or dispute resolution, losing the muscle memory of democratic practice.",
    "example": "Tocqueville's insight that democratic muscles need exercise is inverted online: dominant design patterns provide no practice in self-governance, leaving people less capable of and less confident in democratic participation at any scale.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "group chats",
        "social media platforms"
      ],
      "movement": [
        "viral protest mobilizations of 2011 wave"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Introduction"
  },
  {
    "id": "politics-of-no-politics",
    "name": "Counter-Democratic Platform Design (No Governance Infrastructure)",
    "kind": "pattern",
    "signature": "Online interfaces provide no functionality for collective decision-making: no elections, no dispute resolution, no bylaw templates, no way to signal commitment or define decision criteria. The design naturalizes admin fiat and renders governance invisible or impossible.",
    "example": "Running a five-hundred-person email discussion group or open-source community, Schneider found no interface guidance for democratic practices — no vote functionality with defined thresholds, no jury mechanisms, no ground-rule templates — in contrast to the garden club's eight-page bylaws.",
    "pattern_ids": [
      "implicit-feudalism"
    ],
    "domain_examples": {
      "online_community": [
        "email discussion lists",
        "open-source software communities"
      ],
      "movement": [
        "group chat governance during 2011 protest wave"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Introduction"
  },
  {
    "id": "group-chat-governance-collapse",
    "name": "Group Chat Admin Removal (Picnic Group Chat)",
    "kind": "instance",
    "signature": "A single admin silences a dissenting voice by removal, with no process, appeal, or criteria — illustrating implicit feudalism in miniature.",
    "example": "In the picnic group chat, one person complains crudely and is immediately removed by the person who started the chat, whom the software regards as its admin — no process, no appeal, power resting entirely with the account holder.",
    "pattern_ids": [
      "implicit-feudalism",
      "politics-of-no-politics"
    ],
    "domain_examples": {
      "online_community": [
        "picnic group chat"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Introduction"
  },
  {
    "id": "tyranny-of-structurelessness",
    "name": "Tyranny of Structurelessness",
    "kind": "pattern",
    "signature": "A group explicitly rejects formal hierarchy or governance as unnecessary or oppressive, but in the absence of explicit structure, informal power concentrates among those with the most social capital, time, or technical access — often reproducing existing privilege. The resulting hierarchy is harder to challenge than an explicit one because it is unacknowledged.",
    "example": "Jo Freeman first described this dynamic in feminist 'rap groups' of the early 1970s, where the absence of explicit hierarchy allowed well-connected insiders to dominate. Zeynep Tufekci later observed that 'the tyranny of structurelessness has merged with the tyranny of platforms,' as open-source 'do-ocracy' norms similarly mask entrenched informal power.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "open-source do-ocracy",
        "Double Union feminist hackerspace critique"
      ],
      "dao": [
        "structureless DAO governance vacuums"
      ],
      "movement": [
        "feminist rap groups (Freeman)",
        "cancel culture dynamics without dispute infrastructure"
      ]
    },
    "countering_governance_form_ids": [
      "democratic-structuring",
      "contributor-covenant-codes-of-conduct"
    ],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "affective-vs-effective-voice",
    "name": "Affective Voice Without Effective Voice",
    "kind": "pattern",
    "signature": "Users have abundant expressive channels — comments, reactions, call-outs, viral posts — giving the appearance of participatory power. But none of these produce binding outcomes. No mechanism exists for users to compel administrators to act, change rules, or be removed. The result is a maelstrom of online emotion that administrators can heed or ignore at will, while users mistake the experience of being heard for the power to make change.",
    "example": "Schneider and Seth Frey distinguish affective voice — 'individual or collective speech' that generates feeling — from effective voice: 'individual or collective speech that brings about a binding effect according to transparent processes.' The 'cancel culture' episode involving 'Miguel' illustrates this: critics had abundant affective tools (call-outs, disassociation letters) but no binding dispute-resolution mechanism, no way to remove him from admin roles, and no pathway to reconciliation.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Facebook Like/reaction system",
        "Reddit upvote/downvote without binding power",
        "cancel culture call-outs without dispute infrastructure"
      ],
      "platform_cooperative": [
        "Facebook 2009 user referendum (quorum designed to fail)"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "legal-liability-as-feudalism-driver",
    "name": "Legal Liability as Driver of Feudal Control",
    "kind": "pattern",
    "signature": "Administrators or platform owners justify or extend absolutist control over online communities by citing real-world legal exposure for user-generated content. The argument is that because someone owns the physical server, that person bears legal responsibility for what users post — and therefore must retain unchecked power to remove content and users. This dynamic recurs across eras: BBS sysops, Usenet backbone administrators, and corporate platform owners all invoke it to foreclose more participatory governance arrangements.",
    "example": "LambdaMOO, an all-text virtual world hosted at Xerox PARC, experimented with user self-governance including a petition-based rule-setting system. But in 1996, admins announced they were 'reintroducing wizardly fiat' with veto power, citing the realities of non-virtual jurisdiction: 'So long as the MOO is located on a single RL machine at a single RL site subject to RL laws and liabilities, there will be those deemed responsible for the use of that hardware.'",
    "pattern_ids": [
      "implicit-feudalism"
    ],
    "domain_examples": {
      "online_community": [
        "LambdaMOO 1996 reintroduction of wizardly fiat",
        "BBS sysop identity verification norms",
        "Usenet Backbone Cabal disciplinary reform"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "moderation-labor-as-feudal-perk",
    "name": "Unchecked Power as Compensation for Moderation Labor",
    "kind": "pattern",
    "signature": "Platforms avoid paying community moderators by substituting the allure of absolute authority over a community as a non-monetary incentive. This structurally locks in feudal governance: the unpaid labor that sustains the platform is recruited and retained specifically by granting moderators powers that a more democratic design would distribute or constrain. Questioning the feudal design thus threatens the platform's labor model.",
    "example": "America Online's early 'community leader' program, which compensated volunteer moderators with reduced access costs, drew Department of Labor scrutiny as under-compensated work. Platforms thereafter avoided wage-like compensation. As Schneider observes, 'Rather than criminally low wages, platforms offer moderators the perk of unchecked power.'",
    "pattern_ids": [
      "implicit-feudalism"
    ],
    "domain_examples": {
      "online_community": [
        "AOL community leaders program",
        "Reddit moderator volunteer system",
        "Facebook Group admin incentive structure"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "bbs-sysop-absolutism",
    "name": "BBS Sysop Absolutism",
    "kind": "instance",
    "signature": "A single individual owns the physical hardware running a bulletin board system and therefore claims total authority over the community it hosts — setting rules, removing users, and retaining the nuclear option of shutting the entire system down. User recourse is limited to exit.",
    "example": "BBS sysops described themselves as 'the ultimate judge, jury, and executioner.' Media historian Kevin Driscoll notes that 'the sysop possessed a form of total authority because they lived under the same roof as the host PC.' The governance logic: 'If you don't like it, get off my computer, get out of my phone lines!'",
    "pattern_ids": [
      "implicit-feudalism",
      "legal-liability-as-feudalism-driver"
    ],
    "domain_examples": {
      "online_community": [
        "BBS sysop governance (late 1970s–1990s)"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "usenet-backbone-cabal",
    "name": "Usenet Backbone Cabal and Big 8 Self-Perpetuating Governance",
    "kind": "instance",
    "signature": "A small group of central server administrators gains de facto control over a distributed network, formalizes this into a self-perpetuating board that chooses its own successors, and retains technical veto power that overrides any democratic voting process for network governance.",
    "example": "The 'Backbone Cabal' of Usenet sysadmins instituted the 'Great Renaming' of 1986, bringing most public Usenet spaces under the authority of an organization eventually known as the Big 8. The Big 8 board is self-perpetuating. Though there is a voting system for new newsgroups, 'in some instances, sysadmins have simply refused to carry newsgroups approved by a vote.' Of moderators: 'Who can force the moderators to change their policies? Nobody.'",
    "pattern_ids": [
      "implicit-feudalism"
    ],
    "domain_examples": {
      "federated_network": [
        "Usenet Big 8 governance",
        "Usenet Backbone Cabal Great Renaming 1986"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "lambdamoo-governance-experiment",
    "name": "LambdaMOO Governance Experiment and Reversion",
    "kind": "instance",
    "signature": "An online community develops participatory self-governance mechanisms in response to crises of bad behavior, only to have administrators reassert top-down control when the participatory experiment conflicts with institutional liability and host-organization authority.",
    "example": "LambdaMOO, a text-based virtual world hosted at Xerox PARC, developed a petition-based system for setting and enforcing rules after a high-profile case of textual sexual assault. But in 1996 the admins announced they were 'reintroducing wizardly fiat' with veto power over user self-governance, citing legal liability tied to the physical server's location.",
    "pattern_ids": [
      "implicit-feudalism",
      "legal-liability-as-feudalism-driver"
    ],
    "domain_examples": {
      "online_community": [
        "LambdaMOO virtual world (Xerox PARC, 1996)"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "linux-bdfl-model",
    "name": "Linux / Linus Torvalds BDFL Model",
    "kind": "instance",
    "signature": "The founder of a major open-source project retains ultimate merge authority indefinitely, with no formal mechanism for the contributor community to remove or constrain him, making explicit dictatorship the cultural norm in a domain that frames itself as meritocratic and open.",
    "example": "Linus Torvalds, popularly referred to as the project's 'benevolent dictator for life,' wrote the first version of Linux in 1991 and has retained ultimate power over what ends up in releases ever since, despite a 2018 sabbatical. As Schneider notes, his role 'is indicative of how implicit feudalism has helped produce a culture of explicit dictatorship.'",
    "pattern_ids": [
      "implicit-feudalism",
      "power-vacuum-feudalism"
    ],
    "domain_examples": {
      "online_community": [
        "Linux kernel project",
        "GitHub owner/collaborator permissions system"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "facebook-2009-referendum",
    "name": "Facebook 2009 Terms-of-Service User Referendum",
    "kind": "instance",
    "signature": "A platform stages a binding-seeming vote on governance changes with a quorum threshold set so high it is structurally impossible to reach, then declares the result advisory and proceeds regardless — a canonical instance of democracy theatre.",
    "example": "Facebook's 2009 user referendum stipulated that 30 percent of its over 1 billion users must participate for votes to be binding — equivalent to the entire US population voting on complex legal language with no organizing support. Well under one percent of the quorum participated. Facebook called the vote 'advisory' and implemented the rule change as planned.",
    "pattern_ids": [
      "implicit-feudalism",
      "democracy-theatre"
    ],
    "domain_examples": {
      "online_community": [
        "Facebook 2009 terms-of-service referendum"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "reddit-2015-revolt",
    "name": "Reddit 2015 Moderator Revolt",
    "kind": "instance",
    "signature": "Volunteer moderators collectively exercise their limited feudal power (making subreddits private en masse) to force platform-level change, succeed in ousting a CEO, but find that victory results in tighter top-down enforcement of platform-wide policies — demonstrating that moderator power operates only within the monarch's tolerance.",
    "example": "In 2015, Reddit moderators galvanized by Gamergate-era crackdowns switched their subreddits to private en masse, creating a widespread content blackout and forcing the resignation of interim CEO Ellen Pao. But the victory brought 'heightened enforcement of site-wide policies that brought about more conformity between the platform's policies and moderator policies at the subreddit level.' As Schneider notes, 'The moderators can lord over their fiefdoms, but they face consequences if they try to band together against the monarchy.'",
    "pattern_ids": [
      "implicit-feudalism"
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
    "id": "black-lives-matter-governance-crisis",
    "name": "Black Lives Matter Global Network Single-Board-Member Crisis",
    "kind": "instance",
    "signature": "A social-movement organization that grew from a hashtag into a major nonprofit absorbs tens of millions of dollars in donations while concentrating all formal governance authority in a single founding individual, replicating the foundry logic of platform governance in a civil-society context.",
    "example": "In November 2020, ten Black Lives Matter chapters published a statement noting that Patrisse Cullors had become both the sole board member and executive director of the Black Lives Matter Global Network — a 'flagrant deviation from the norm of nonprofit board governance' — in the same year the movement absorbed tens of millions in donations during a historic anti-racist uprising.",
    "pattern_ids": [
      "implicit-feudalism"
    ],
    "domain_examples": {
      "movement": [
        "Black Lives Matter Global Network governance (2020)"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "python-governance-transition",
    "name": "Python Steering Council Transition",
    "kind": "instance",
    "signature": "A major open-source community uses a pre-existing, legitimate decision-making infrastructure (the Python Enhancement Proposal system) to navigate a sudden BDFL resignation and converge on a democratic governance model — illustrating that feudal-to-democratic transitions are possible when social infrastructure for collective decision-making already exists.",
    "example": "When Guido van Rossum abruptly resigned as Python's BDFL in 2018 after nearly thirty years, Python developers used the Python Enhancement Proposal (PEP) system — 'a set of processes and tools designed for proposing and adopting changes to the programming language' — to evaluate a wide range of possible governance models and ultimately adopt an elected five-person 'steering council.'",
    "pattern_ids": [
      "implicit-feudalism",
      "power-vacuum-feudalism"
    ],
    "domain_examples": {
      "online_community": [
        "Python programming language governance transition 2018"
      ]
    },
    "countering_governance_form_ids": [
      "python-enhancement-proposal-system"
    ],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "homesteading-ideology",
    "name": "Homesteading Ideology",
    "kind": "pattern",
    "signature": "Platform or community framed as a 'frontier' or 'virgin territory' to be claimed; individual users treated as sovereign within their bounded space; exit rather than voice positioned as the democratic mechanism; scalability and colonization treated as neutral or positive goods; founding metaphors draw on settler-conquest vocabulary (frontier, homestead, evangelist).",
    "example": "Howard Rheingold subtitled his 1993 book on The WELL 'Homesteading on the Electronic Frontier,' and the blockchain protocol Ethereum named its first two major versions Frontier and Homestead — perpetuating a settler-conquest imaginary in which claiming digital territory is the default mode of online community formation.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "The WELL homesteading framing",
        "GeoCities terrestrial-conquest metaphor",
        "eWorld spiritual-conquest branding"
      ],
      "dao": [
        "Ethereum Frontier and Homestead protocol versions"
      ],
      "federated_network": [
        "Seasteading colony proposals as federated homestead archipelago"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "exit-as-pseudo-democracy",
    "name": "Exit as Pseudo-Democracy",
    "kind": "pattern",
    "signature": "The availability of exit (leaving a platform, joining another community, founding a new server) is cited as sufficient justification for feudal internal governance. No mechanisms for collective voice, accountability, or shared rule-making are provided; the implicit argument is that free exit makes governance moot. Investors, founders, and ideologues invoke exit to deflect demands for democratic participation.",
    "example": "The libertarian philosopher Robert Nozick's claim that the only utopia is the ability to exit one utopia for another became the implicit justification of implicit feudalism online: if a community is exit-able, that is presented as enough to call it democratic.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "The WELL sold to Bruce Katz with no user voice",
        "Reddit revolts resolved by users leaving"
      ],
      "dao": [
        "Token-exit as substitute for governance reform"
      ],
      "platform_cooperative": [
        "The River as exit-born cooperative that never flourished"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "feudal-soteriology",
    "name": "Feudal Soteriology",
    "kind": "pattern",
    "signature": "A political or technological movement promises salvation — social, spiritual, or civilizational — through submission to a supreme authority (platform owner, caliph, prophet-admin, monarch-CEO). The salvific order is hierarchical and absolute; the everyday imagery of the good life under the regime circulates virally to recruit members. Democratic accountability is explicitly or implicitly framed as an obstacle to salvation.",
    "example": "Curtis Yarvin applied the commonplace structure of startup companies to politics, producing outright monarchism: the platform CEO as sovereign, backed by Silicon Valley investor Peter Thiel, articulating a soteriology in which salvation comes from ceding all power to the sysadmin rather than from democratic participation.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "QAnon's digital gnosticism on 8chan under Ron Watkins as sysadmin-prophet",
        "Curtis Yarvin's monarchist tech-politics"
      ],
      "state": [
        "Islamic State caliphate as networked feudal soteriology",
        "Trump's Twitter-based movement-building and governance"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "the-well-benevolent-dictatorship",
    "name": "The WELL — Benevolent Dictatorship",
    "kind": "instance",
    "signature": "A community articulates self-governance as a design goal but encodes admin absolutism in its technical architecture; group-level hosts function as micro-dictators beneath a platform owner; users have no formal say when ownership changes; the gap between stated ideals and actual power structure is papered over by exit availability.",
    "example": "The WELL listed 'It would be self-governing . . .' among its design goals, but Rheingold later acknowledged it 'was governed as a benevolent dictatorship.' In 1994 it was sold to shoe magnate Bruce Katz; users had no say in the matter.",
    "pattern_ids": [
      "implicit-feudalism",
      "politics-of-no-politics",
      "homesteading-ideology",
      "exit-as-pseudo-democracy"
    ],
    "domain_examples": {
      "online_community": [
        "The WELL 1985–2012 ownership history",
        "The WELL user-acquisition in 2012"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "the-river-cooperative",
    "name": "The River — User-Owned Cooperative Successor to The WELL",
    "kind": "instance",
    "signature": "Users who experienced feudal governance attempt to exit into a cooperatively owned alternative; the cooperative form is adopted in reaction to platform sale without user voice, but the new community never achieves the scale or influence of its predecessor.",
    "example": "In search of real self-governing, Rheingold and other WELL dwellers later formed The River, an online community owned by a cooperative of its users. But it never flourished — an instance of the difficulty of building democratic alternatives once homesteading norms are established.",
    "pattern_ids": [
      "exit-as-pseudo-democracy",
      "homesteading-ideology"
    ],
    "domain_examples": {
      "platform_cooperative": [
        "The River cooperative online community"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "islamic-state-networked-feudalism",
    "name": "Islamic State — Networked Feudal Soteriology",
    "kind": "instance",
    "signature": "A transnational movement uses Californian social-media tools to recruit through opt-in hashtag membership and viral spectacle while imposing absolutist territorial order in its domains; the implicit feudalism of the network decodes into explicit territorial feudalism; salvific imagery of ordinary life under the caliphate circulates to sustain recruitment.",
    "example": "From Syria's 2011 civil war emerged the Islamic State — not a Westphalian nation-state but a networked umma operating through the opt-in membership of hashtags and the imposition of absolutist order in its domains. The founding caliph appeared publicly only in choreographed viral events; the rest of the time his regime portrayed itself with a virtual reality of ordinary life under a clerical sysadmin.",
    "pattern_ids": [
      "feudal-soteriology",
      "homesteading-ideology",
      "implicit-feudalism"
    ],
    "domain_examples": {
      "movement": [
        "Islamic State caliphate media strategy 2013–2019"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "qanon-8chan-sysadmin-prophet",
    "name": "QAnon / 8chan — Sysadmin as Prophet",
    "kind": "instance",
    "signature": "A platform administrator's technical access to server infrastructure becomes indistinguishable from prophetic authority within a digital-gnostic movement; the admin's privileged knowledge of system workings reads as insider revelation; the movement promises a salvific coup that would install feudal platform order over democratic governance.",
    "example": "Documentary evidence suggests Ron Watkins, the sysadmin of 8chan, was also the author of Q's prophetic 'drops.' His insider knowledge of server workings appeared as political prophecy; he later claimed contact with the Trump White House around the contested 2020 election — a conjunction of technical administration and geopolitical power grab.",
    "pattern_ids": [
      "feudal-soteriology",
      "implicit-feudalism",
      "politics-of-no-politics"
    ],
    "domain_examples": {
      "online_community": [
        "8chan / QAnon movement 2017–2021"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "californian-ideology-monarchism",
    "name": "Curtis Yarvin / Neoreaction — Explicit Monarchism from Startup Logic",
    "kind": "instance",
    "signature": "A technologist applies the CEO-as-sovereign logic of startup companies directly to state governance, dispensing with the fiction that platform design inclines toward democracy and arriving openly at monarchism; backed by major Silicon Valley investors; influencing political advisors in authoritarian-adjacent administrations.",
    "example": "Curtis Yarvin applied the commonplace structure of startup companies to politics, producing outright monarchism. His benefactor was Silicon Valley investor Peter Thiel; Trump advisor Steve Bannon was a Yarvin reader; Yarvin reportedly communicated with the Trump White House — making explicit the feudal soteriology implicit in Californian platform design.",
    "pattern_ids": [
      "feudal-soteriology",
      "politics-of-no-politics",
      "implicit-feudalism"
    ],
    "domain_examples": {
      "state": [
        "Curtis Yarvin neoreactionary monarchism",
        "Peter Thiel political investments"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "platform-diktat-turn",
    "name": "Platform Diktat Turn",
    "kind": "pattern",
    "signature": "Platform administrators, having previously maintained a fiction of neutral infrastructure, begin exercising overt political power — de-platforming heads of state, determining electoral outcomes, or aligning server control with geopolitical agendas. The earlier 'no politics' posture gives way to undisguised admin sovereignty. Faux-democratic performances (polls, consultations) are deployed to legitimize unilateral decisions.",
    "example": "When CEOs of corporate social media de-platformed Donald Trump in the last days of his presidency, and when Elon Musk acquired Twitter and claimed he would abide by user polls while employees warned those polls were insecure, the earlier story of neutral platform administration gave way to regimes of platform diktat — the minutiae of technical administration becoming coterminous with geopolitics.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Twitter/X de-platforming of Trump 2021",
        "Elon Musk Twitter acquisition and poll governance 2022"
      ],
      "state": [
        "Trump's Truth Social as feudal homestead after de-platforming"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "occupy-loomio-political-skills",
    "name": "Occupy Wellington — Loomio App from Protest Governance Practice",
    "kind": "instance",
    "signature": "Activists encode their offline consensus-governance practices into software rather than adopting pre-existing platform designs; the resulting tool reflects democratic process needs (ranked choice, proposal tracking, volunteer solicitation) derived from lived political skill-building, not business-model convenience. The tool subsequently spreads to organizations and governments beyond its origin.",
    "example": "Occupy activists in Wellington, New Zealand, encoded their governance practices into an app, Loomio, that has since been adopted by organizations and even governments far from their island. Although Loomio began by mimicking Occupy-style processes, it came to support a wide variety of techniques for coming to agreement — an instance of political skills preceding and shaping technology design.",
    "pattern_ids": [],
    "domain_examples": {
      "movement": [
        "Occupy Wellington 2011 consensus process"
      ],
      "online_community": [
        "Loomio adoption by organizations and governments"
      ],
      "public_infrastructure": [
        "Loomio adoption by government bodies"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "chinese-platform-subsidiary-bureaucracy",
    "name": "Chinese Platform Admins as Subsidiary Bureaucracy",
    "kind": "instance",
    "signature": "Under threat of state crackdown, platform admins and community moderators act as pre-emptive censors, internalizing the state's concept of 'harmony' to protect their right to exist; implicit feudalism nests inside authoritarian state governance, producing a layered hierarchy of admin compliance that operates without explicit orders.",
    "example": "Under the fear of state crackdowns, the admins of Chinese social-media platforms and of their user communities act as subsidiary bureaucracies, protecting their right to exist by imposing their best guess of what harmony will allow — a localized expression of implicit feudalism nested within authoritarian state power.",
    "pattern_ids": [
      "implicit-feudalism",
      "politics-of-no-politics"
    ],
    "domain_examples": {
      "online_community": [
        "Chinese social-media platform moderation under Party harmony doctrine"
      ],
      "state": [
        "CCP 'harmony' discourse applied to platform governance"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "platform-commodification",
    "name": "Platform Commodification",
    "kind": "pattern",
    "signature": "A platform serving as civic infrastructure can be bought and sold as a private commodity, severing users' relationships to the space without their consent. Visible when an acquisition triggers mass layoffs, abrupt policy reversals, and user exodus — revealing that the 'community' had no legal standing in the transaction.",
    "example": "Elon Musk's $44 billion acquisition of Twitter in October 2022, after which scorched-earth layoffs and disorienting policy changes prompted users to flee, illustrating that online civic spaces are commodities that can be bought and sold.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "twitter-musk-acquisition-2022"
      ]
    },
    "countering_governance_form_ids": [
      "shareholder-proposal-user-ownership",
      "citizen-assembly-user-governance"
    ],
    "source_chapter": "Profile: A People's History of Twitter"
  },
  {
    "id": "twitter-musk-acquisition-2022",
    "name": "Twitter / Musk Acquisition (2022)",
    "kind": "instance",
    "signature": "Single billionaire purchases a globally significant public-discourse platform, immediately imposing layoffs, targeting journalists with policy changes, and renaming the platform — with zero user voice in the transaction.",
    "example": "When Elon Musk acquired Twitter for $44 billion in October 2022, early weeks brought scorched-earth layoffs and disorienting policy changes including ones that targeted journalists, prompting users to flee and foregrounding the platform's status as a private commodity rather than a common good.",
    "pattern_ids": [
      "platform-commodification",
      "implicit-feudalism"
    ],
    "domain_examples": {
      "online_community": [
        "twitter-musk-acquisition-2022"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Profile: A People's History of Twitter"
  },
  {
    "id": "crypto-plutocracy",
    "name": "Cryptoeconomic Plutocracy",
    "kind": "pattern",
    "signature": "Governance rights derive from token holdings or computational stake rather than personhood; wealth concentrations feedback into governance power, producing outcomes that systematically favor large holders over ordinary participants. Look for: one-token-one-vote structures, VC-dominated DAOs, absence of counter-plutocratic mechanisms like progressive weighting or personhood verification.",
    "example": "Venture capitalists hold large stakes in important DAOs and protocols through which they can dominate governance processes; governance by economics rather than personhood reproduces joint-stock corporate plutocracy without the state-based counter-pressures (taxation, collective bargaining, antitrust) that normally constrain it.",
    "pattern_ids": [],
    "domain_examples": {
      "dao": [
        "MolochDAO VC stake concentration",
        "Ethereum governance whale dominance"
      ],
      "federated_network": [
        "Proof-of-stake validator concentration"
      ]
    },
    "countering_governance_form_ids": [
      "quadratic-voting",
      "cooperative-one-member-one-vote",
      "soulbound-token-identity"
    ],
    "source_chapter": "Ch. 4"
  },
  {
    "id": "scalability-over-subsidiarity",
    "name": "Scalability-over-Subsidiarity Design",
    "kind": "pattern",
    "signature": "Platforms are architected to expand user count without rethinking basic governance elements, producing global rule books, algorithmic enforcement, and opaque human moderation that are context-blind. Recognizable by: one-size-fits-all community standards, absence of local community control over conflict resolution, automation of moderation at the expense of due process, continual complaints of both over- and under-enforcement.",
    "example": "Venture-capital investment underwrites corporate social media on the premise of adding users at ever-declining per-user cost. Platforms therefore govern harm through software-enabled automation: global rule books, algorithmic enforcement, and opaque human decision-making. The result is a regime provoking continual complaints of both overreaction and underreaction, born of blindness to context and lack of due process.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Reddit global content policy enforcement",
        "Facebook automated moderation"
      ],
      "federated_network": [
        "Centralized platform moderation vs. Mastodon instance autonomy"
      ],
      "platform_cooperative": [
        "Co-op hardware store vs. national chain as subsidiarity contrast"
      ]
    },
    "countering_governance_form_ids": [
      "federated-subsidiarity",
      "community-accountability-process"
    ],
    "source_chapter": "Ch. 4"
  },
  {
    "id": "salvador-bitcoin-authoritarian-adoption",
    "name": "El Salvador Bitcoin Adoption Under Bukele",
    "kind": "instance",
    "signature": "A would-be authoritarian ruler adopts crypto technology not to decentralize power but to concentrate it, demonstrating that user-governed-by-default technical design does not guarantee democratic social outcomes.",
    "example": "Crypto has been a tool for aspiring authoritarians, like El Salvador's Bitcoin-enthused president Nayib Bukele — illustrating that the blockchain's technical design to avoid feudal power concentrations does not prevent those concentrations from occurring at the social and political level.",
    "pattern_ids": [
      "crypto-plutocracy",
      "cryptoeconomics-crowding-out-politics"
    ],
    "domain_examples": {
      "state": [
        "El Salvador Legal Tender Bitcoin Law 2021"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 4"
  },
  {
    "id": "crypto-externalities-blindness",
    "name": "Cryptoeconomic Externalities Blindness",
    "kind": "pattern",
    "signature": "Blockchain governance mechanisms are structurally unable to perceive or act on harms that fall outside their internal incentive accounting: energy consumption, carbon emissions, money laundering, ransomware facilitation, ecological damage. Participants with governance power (miners, large stakers) often benefit from ignoring these externalities. Recognizable when protocol governance debates never surface environmental or social harm costs.",
    "example": "Bitcoin miners consume energy at the scale of a mid-sized industrialized country and often stand to benefit from ignoring their carbon footprint — a busier network increases both energy consumption and trading price, raising miners' rewards. Other externalities include money laundering, dangerous drug markets, tax evasion, and ransomware attacks on public infrastructure, all invisible to the protocol's internal governance.",
    "pattern_ids": [],
    "domain_examples": {
      "dao": [
        "Bitcoin mining carbon footprint governance failure",
        "Crypto ransomware facilitation"
      ],
      "public_infrastructure": [
        "Ransomware attacks on public infrastructure enabled by crypto rails"
      ]
    },
    "countering_governance_form_ids": [
      "rights-based-protocol-design"
    ],
    "source_chapter": "Ch. 4"
  },
  {
    "id": "digital-colonialism",
    "name": "Digital Colonialism",
    "kind": "pattern",
    "signature": "Governments and corporations exercise domination through control over internet technologies — surveilling users, extracting data from communities without their consent, imposing developers' cultural norms as false universals, enabling algorithmic discrimination, and suppressing collective organizing capacity. Colonial stacks fill the layers of community, interface, infrastructure, and ecology with dependencies that communities cannot govern.",
    "example": "Humanitarian organizations collect data about refugees that the refugees themselves cannot access, while using it for future fundraising. Micro-targeted discrimination singles out individuals for exploitative ads while inhibiting public outcry. Platforms impose developers' cultural norms, leaving little space for user communities to practice their own cultures.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Instagram's viral-image architecture displacing labor-organizer group communication"
      ],
      "public_infrastructure": [
        "Detroit neighborhood telecom monopolies underserving majority-Black communities"
      ],
      "movement": [
        "2011 Arab Spring and Occupy movements relying on colonial platforms that failed to support persistent organizations"
      ]
    },
    "countering_governance_form_ids": [
      "governable-stacks",
      "modular-politics"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "virality-as-colonizing-strategy",
    "name": "Virality as Colonizing Strategy",
    "kind": "pattern",
    "signature": "Platforms optimize for viral 'engagement' — affective circulation of images and outrage — rather than decision, resolution, or consensus. Movements riding viral waves gain momentary signal but lack organizational capacity to translate it into durable leverage. The economy of virality does not support persistent self-governing structures; it recapitulates the colonial logic of divide et impera by binding users to non-transferable platform reputation.",
    "example": "A labor organizer finds her workers migrating to Instagram, where every message must be 'hilarious or enraging or gorgeous' to reach them — ill-suited for union meeting announcements. After 2011's digitally mediated uprisings, nearly all succumbed to emboldened versions of the forces they opposed, because networked signal lacked organizational capacity.",
    "pattern_ids": [],
    "domain_examples": {
      "movement": [
        "Occupy Wall Street media-center virality fading by early 2012",
        "2011 Arab Spring movements relying on viral social media without durable organizations"
      ],
      "online_community": [
        "Instagram displacing Facebook groups for labor organizing"
      ]
    },
    "countering_governance_form_ids": [
      "governable-stacks",
      "modular-politics"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "far-right-intentional-stacks",
    "name": "Far-Right Intentional Stacks",
    "kind": "instance",
    "signature": "Communities organized around racism and authoritarianism that have built intentional network stacks — migrating to dedicated platforms like Stormfront, Parler, and Gab after removal from mainstream networks — demonstrating that intentional stack-building is not sufficient for democratic outcomes; the particulars of design and the political culture communities teach each other matter immensely.",
    "example": "Groups dedicated to racism and authoritarianism migrated to dedicated platforms such as Stormfront, Parler, and Gab as more mainstream networks removed them. These communities built around appeals of persecution and provocation rather than self-governance, though Parler pioneered user juries for content-moderation enforcement.",
    "pattern_ids": [
      "ungovernable-stack"
    ],
    "domain_examples": {
      "online_community": [
        "Stormfront",
        "Parler user-jury content moderation",
        "Gab"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "occupy-2011-virality-collapse",
    "name": "Occupy Wall Street / 2011 Uprisings: Viral Signal without Organizational Capacity",
    "kind": "instance",
    "signature": "The 2011 wave of digitally mediated uprisings — Occupy Wall Street, Arab Spring, and others — achieved massive viral signal but lacked durable organizational capacity to sustain leverage. Media centers became the perceived nerve centers of power, but when viral attention waned, so did influence. A decade later, nearly all had succumbed to emboldened versions of the forces they opposed.",
    "example": "At the Occupy Wall Street encampment, reporters were transfixed by the media center as the center of power. By early 2012, 'riot porn is losing its luster for mass online consumption.' A decade later, nearly all the viral movements of 2011 had succumbed to emboldened versions of the forces they had opposed.",
    "pattern_ids": [
      "virality-as-colonizing-strategy",
      "digital-colonialism"
    ],
    "domain_examples": {
      "movement": [
        "Occupy Wall Street 2011–2012",
        "Arab Spring 2011 movements",
        "Pirate parties collapsing on first encounter with power"
      ]
    },
    "countering_governance_form_ids": [
      "governable-stacks"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "paternalism-as-reconfigured-patriarchy",
    "name": "Paternalism as Reconfigured Patriarchy",
    "kind": "pattern",
    "signature": "Platform companies claim that scale and technical expertise make them uniquely suited to solve social problems of their own making; top-down control is framed as beneficent rather than coercive, foreclosing self-governance as an option. Male-dominated tech leadership insists that marginalized users accept managerial solutions rather than develop power of their own.",
    "example": "Silicon Valley platform leaders defend their companies' size and power on the reasoning that scale is necessary to protect users from each other, positioning themselves as the only viable solvers of problems they created.",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "Facebook content moderation paternalism",
        "Silicon Valley platform leader defenses of centralized scale"
      ],
      "platform_cooperative": [
        "NursesCan cooperative blocked by investor-backed competition"
      ],
      "public_infrastructure": [
        "corporate broadband monopoly blocking municipal alternatives"
      ]
    },
    "countering_governance_form_ids": [
      "social-provisioning",
      "partner-state-policy",
      "exit-to-community"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "coordination-rights-suppression",
    "name": "Suppression of Worker Coordination Rights",
    "kind": "pattern",
    "signature": "Antitrust law and platform design work together to prevent workers from forming unions, cooperatives, or persistent peer relationships. Gig app UX discourages durable connections among workers; legal frameworks impose barriers on collective organizing. The effect is a fragmented, atomized workforce available for precarious platform employment.",
    "example": "US antitrust doctrine has in many contexts prevented platform workers from forming unions or cooperatives, while gig apps deliberately discourage persistent relationships among workers, establishing platform-controlled coordination rights.",
    "pattern_ids": [],
    "domain_examples": {
      "workplace": [
        "gig platform driver fragmentation",
        "NursesCan cooperative blocked by venture-capital competitors"
      ],
      "platform_cooperative": [
        "California Proposition 22 exempting platform drivers from employment rights"
      ],
      "state": [
        "US antitrust law narrowing labor organizing options for platform workers"
      ]
    },
    "countering_governance_form_ids": [
      "cooperative-economy-act",
      "exit-to-community"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "infrastructure-mystification",
    "name": "Infrastructure Mystification",
    "kind": "pattern",
    "signature": "Utility firms and platform companies design infrastructure to be incomprehensible and invisible — buried underground, disguised, or surrounded by technical jargon — so that ordinary users cannot understand, notice, or govern it. The mystification hides extractive economics behind a veneer of marvelous innovation.",
    "example": "Utility firms construct infrastructure to be not only incomprehensible but invisible — underground, overhead, or disguised as natural phenomena like trees or rocks — requiring interventions like artist Ingrid Burrington's unofficial guidebook Networks of New York to make legible what is intentionally obscure.",
    "pattern_ids": [],
    "domain_examples": {
      "public_infrastructure": [
        "utility firm infrastructure invisibility",
        "corporate broadband opacity"
      ],
      "federated_network": [
        "free and open-source infrastructure complexity mystifying even technically literate users"
      ],
      "dao": [
        "GitcoinDAO governance complexity paralyzing token-holder stewards"
      ]
    },
    "countering_governance_form_ids": [
      "discotech-model",
      "commons-based-infrastructure"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "section-230-liability-shield-as-platform-empowerment",
    "name": "Section 230 as Platform-Centric Governance Regime",
    "kind": "instance",
    "signature": "The legal safe harbor created by Section 230 of the 1996 Communications Decency Act pins liability on users rather than platforms, enabling platform companies to become autonomous governors without democratic accountability to users. Reform proposals remain platform-centric rather than community-governance-centric.",
    "example": "Section 230 cleared the way for a new governance order in which platform companies became 'the new governors' — not merely moderators but architects of meaningfully autonomous polities — wielding power over users and the public sphere without accountability to those they govern.",
    "pattern_ids": [
      "implicit-feudalism",
      "legal-liability-as-feudalism-driver"
    ],
    "domain_examples": {
      "online_community": [
        "Section 230 enabling feudal platform governance",
        "splinternet of conflicting jurisdictional regimes"
      ],
      "state": [
        "Trump's 2020 NDAA Section 230 repeal threat",
        "EU GDPR's platform-bureaucracy privacy model"
      ]
    },
    "countering_governance_form_ids": [
      "subsidiarity-for-platform-immunity",
      "modular-politics"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "meta-oversight-board-partial-accountability",
    "name": "Meta Oversight Board as Partial Externalization",
    "kind": "instance",
    "signature": "Facebook/Meta created an external Oversight Board to deflect moderation criticism, establishing a meaningful check on company behavior without direct user accountability. Members are chosen by the company rather than by users, limiting democratic legitimacy while providing some constraint on top-down power.",
    "example": "When Meta formed its Oversight Board, seeking to deflect ongoing criticisms of its moderation decisions, it did so through an external organization whose members were chosen by the company — not by ordinary users — creating a check on behavior without genuine user governance.",
    "pattern_ids": [
      "democracy-theatre"
    ],
    "domain_examples": {
      "online_community": [
        "Meta Oversight Board moderation review"
      ],
      "platform_cooperative": [
        "Airbnb host advisory board created after SEC blocked user stock distribution"
      ]
    },
    "countering_governance_form_ids": [
      "user-elected-board-representation"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "bitnation-blockchain-passport-failure",
    "name": "Bitnation and Network-State Pseudodemocracy",
    "kind": "instance",
    "signature": "Blockchain-based 'network state' projects promise to displace territorial governments with token-governed polities, but their actual power flows replicate Silicon Valley startup hierarchies. Ownership concentrates among investors and early insiders; governance resembles top-down corporate control dressed in decentralization rhetoric.",
    "example": "In 2014, Bitnation promised blockchain passports and health insurance; more recently Balaji Srinivasan's The Network State envisions token-holders acquiring land 'like a corporate retail chain,' but the mechanism for how power flows 'looks suspiciously like the top-down structure of a Silicon Valley startup.'",
    "pattern_ids": [
      "crypto-plutocracy",
      "feudal-soteriology"
    ],
    "domain_examples": {
      "dao": [
        "Bitnation blockchain passports 2014",
        "Balaji Srinivasan Network State proposal"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "macron-citizens-convention-advisory-capture",
    "name": "Macron's Citizens' Convention for Climate as Elite-Driven Show",
    "kind": "instance",
    "signature": "After the Yellow Vest protests, the French government convened a nationally representative citizen assembly on climate — but kept it advisory and disconnected from normal flows of power, using it as an escape hatch from political pressure rather than a genuine transfer of authority. The public perceived it as elite-driven performance rather than legitimate self-governance.",
    "example": "Macron's Citizens Convention for Climate was largely advisory, disconnected from the normal flows of power; as one study noted, 'interactions between the citizens [in the assemblies] and the broader public were characterized by mutual scepticism,' and the process gave Macron an escape hatch rather than correcting the power imbalances that provoked the protests.",
    "pattern_ids": [
      "democracy-theatre",
      "affective-vs-effective-voice"
    ],
    "domain_examples": {
      "state": [
        "France Citizens' Convention for Climate 2019",
        "citizen assemblies without binding authority"
      ]
    },
    "countering_governance_form_ids": [
      "participatory-budgeting",
      "citizen-assembly-with-binding-power"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "metagovernance-as-hidden-feudal-design",
    "name": "Metagovernance as Hidden Feudal Design",
    "kind": "pattern",
    "signature": "Background conditions of governance — protocols, norms, liability regimes, default platform architectures — are themselves governance acts, but they operate beneath ordinary notice. When those background conditions systematically favor hierarchical or feudal arrangements, the resulting metagovernance constrains all lower-level governance without appearing to do so at all.",
    "example": "Schneider identifies implicit feudalism itself as a form of metagovernance: 'Implicit feudalism has been a kind of metagovernance, and like so much metagovernance, it too often hides beneath our notice. But changing how we govern requires being attentive to the metagovernance at work. Shaping the background conditions of governance is itself a form of governance.'",
    "pattern_ids": [],
    "domain_examples": {
      "online_community": [
        "implicit feudalism encoded in platform default architectures"
      ],
      "federated_network": [
        "network protocols constraining federated self-governance"
      ],
      "dao": [
        "DAO token-swap metagovernance cascading votes across ecosystems"
      ]
    },
    "countering_governance_form_ids": [
      "governable-stack",
      "modular-politics",
      "subsidiarity"
    ],
    "source_chapter": "Epilogue"
  },
  {
    "id": "non-exclusive-sovereignties",
    "name": "Non-Exclusive Sovereignties",
    "kind": "pattern",
    "signature": "Governance regimes that claim singular, exclusive jurisdiction over a territory or population — whether nation-states, platform owner-operators, or ethnonationalist movements — crowd out overlapping, concurrent, and more accountable forms of co-governance. The pattern is visible when a single authority treats shared or contested space as its exclusive domain rather than as a site of layered, negotiated stewardship.",
    "example": "Drawing on Coulthard and Hern's reading of Indigenous North American practice, Schneider contrasts the overlapping seasonal territories of the Arapaho, Cheyenne, and Ute with the exclusive-sovereignty logic of the nation-state, arguing that online governable spaces could similarly embody 'non-exclusive sovereignties' and 'concurrent layers of governance that are more tailored and accountable in their domains.'",
    "pattern_ids": [],
    "domain_examples": {
      "state": [
        "nation-state exclusivity crowding out concurrent jurisdictions",
        "ethnonationalist border militarization as governance failure symptom"
      ],
      "online_community": [
        "platform owner claiming exclusive authority over community space"
      ],
      "federated_network": [
        "federated governance as practical instantiation of overlapping sovereignties"
      ]
    },
    "countering_governance_form_ids": [
      "subsidiarity",
      "modular-politics"
    ],
    "source_chapter": "Epilogue"
  },
  {
    "id": "dao-cross-ecosystem-metagovernance",
    "name": "DAO Cross-Ecosystem Metagovernance (Token-Cascade Capture)",
    "kind": "pattern",
    "signature": "When one DAO holds governance tokens from other DAOs, a proposal vote in the first can cascade effects across the wider ecosystem — and potentially back again — in ways that are difficult to trace or contest. Power concentrates in whichever entity accumulates the largest cross-DAO token portfolio, with governance influence propagating through token-swap relationships that were negotiated bilaterally rather than through any accountable multi-stakeholder process.",
    "example": "Schneider notes that in crypto practice 'metagovernance happens when one DAO, for instance, holds tokens from other DAOs. That means a proposal vote in that first DAO might cascade to other DAOs, across the ecosystem and potentially back again.' DAOs engage in token swaps to solidify collaborations, exchanging power in each other, with dashboards and voting tools emerging to manage the 'bewildering integration' that results.",
    "pattern_ids": [],
    "domain_examples": {
      "dao": [
        "DAO token-swap arrangements creating cascading cross-ecosystem votes",
        "multi-DAO dashboard governance products"
      ]
    },
    "countering_governance_form_ids": [],
    "source_chapter": "Epilogue"
  }
];
