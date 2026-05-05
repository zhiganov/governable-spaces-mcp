import type { Case } from '../types.js';

export const CASES: Case[] = [
  {
    "id": "mother-garden-club",
    "name": "Neighborhood Garden Club (Schneider's Mother's Club)",
    "domain": "online_community",
    "brief": "A long-running suburban garden club with formal eight-page bylaws that provide structured, legible paths for decision-making and conflict resolution among members.",
    "community": "Suburban homeowners and garden enthusiasts organized as a nonprofit civic association",
    "governance_form_ids": [
      "bylaws-based-governance",
      "elected-officer-roles"
    ],
    "democratic_features": [
      "The club's bylaws occupy eight pages in an annually printed handbook, providing a formal legal document with articles, sections, and enumerated subsections that members can consult when decisions or conflicts arise.",
      "Members elect officers — including a president — through recognized electoral procedures, distributing leadership through participatory selection rather than appointment from above.",
      "The bylaws serve as a shared constitutional reference that translates everyday social norms into enforceable procedural rules, making the club a governable space where members can find 'a path forward' in disputes.",
      "The organization has persisted since the 1960s, demonstrating that community-scale governance with legible rules can sustain collective life across decades."
    ],
    "lessons_or_failures": "Schneider uses this case as a foil for online communities: the garden club's simple, effective bylaws — unremarkable among countless similar organizations — represent a kind of civic self-governance that most online groups cannot match. The contrast reveals how thoroughly democratic infrastructure is absent from dominant online platforms, which provide no functionality for elections, dispute resolution, or even basic bylaws. The club's longevity underscores what online groups typically lack.",
    "source_chapter": "Introduction",
    "source_quote": "Few online groups I had been part of could hold a candle to the simple and effective set of rules that had governed the garden club since the 1960s, rules unremarkable among countless similar organizations with a vast range of purposes. Few online groups will last so long."
  },
  {
    "id": "chartist-cooperative-stores",
    "name": "Chartist Cooperative Stores (England)",
    "domain": "platform_cooperative",
    "brief": "English factory workers in the Chartist movement formed cooperative stores where every customer had a vote, using cooperative economic democracy to exercise and demonstrate their democratic capacities while demanding political suffrage.",
    "community": "English factory workers in the Chartist movement demanding the right to vote in national elections",
    "governance_form_ids": [
      "one-member-one-vote",
      "cooperative-ownership"
    ],
    "democratic_features": [
      "Every customer-member held a vote in the cooperative store, instituting direct economic democracy at the community scale as a deliberate exercise of democratic muscle.",
      "The cooperatives functioned simultaneously as economic enterprises and as political schools — sites where workers practiced collective decision-making in order to prove their fitness for political enfranchisement.",
      "The cooperative model spread transnationally, linking English cooperators to US abolitionist movements including Frederick Douglass, and later becoming a feature of Black liberation movements from civil rights to Black Lives Matter."
    ],
    "lessons_or_failures": "Schneider cites this case as a historical example of Tocqueville's insight that small-scale democratic association cultivates the capacities needed for larger-scale democratic politics. Cooperative stores were intentional 'spillover' infrastructure: practicing democracy at small scales as a strategy for building democratic power at the highest levels. The case also illustrates how cooperative democratic forms can travel across movements and liberation struggles.",
    "source_chapter": "Introduction",
    "source_quote": "The modern cooperative movement first took hold in England among Chartists, factory workers demanding the right to vote in elections. To exercise and prove their democratic skills, they formed cooperative stores where every customer had a vote."
  },
  {
    "id": "participatory-budgeting-porto-alegre",
    "name": "Participatory Budgeting, Porto Alegre, Brazil",
    "domain": "state",
    "brief": "Beginning in 1989, Porto Alegre introduced participatory budgeting processes that gave citizens direct voice in municipal spending decisions, becoming a globally influential model of government-level democratic innovation.",
    "community": "Residents of Porto Alegre, Brazil, participating in municipal budget deliberations",
    "governance_form_ids": [
      "participatory-budgeting",
      "direct-citizen-voice"
    ],
    "democratic_features": [
      "Citizens participate directly in deliberating and deciding how portions of the municipal budget are allocated, rather than delegating all such decisions to elected representatives.",
      "The process represents an institutional opening within territorial government to forms of citizen voice that go beyond periodic elections.",
      "Porto Alegre's model became a widely referenced proof-of-concept that democratic innovation inside existing government structures is possible and replicable."
    ],
    "lessons_or_failures": "Schneider presents Porto Alegre as one of several 'ruptures' within territorial governments that open opportunities for democratic experimentation. However, he notes that most such innovations — including participatory budgeting — perform 'merely advisory roles, granting citizens little in the way of new powers that are meaningfully binding,' disclosing the resistance of today's territorial governments to departing from rigid routine.",
    "source_chapter": "Introduction"
  },
  {
    "id": "barcelona-digital-deliberation",
    "name": "Barcelona Digital Deliberation Platform",
    "domain": "public_infrastructure",
    "brief": "The city of Barcelona adopted digital deliberation platforms enabling residents to participate in policy discussions and proposals, representing a municipal-scale experiment in technology-mediated democratic participation.",
    "community": "Residents of Barcelona engaging with municipal government through digital participation tools",
    "governance_form_ids": [
      "digital-deliberation",
      "direct-citizen-voice"
    ],
    "democratic_features": [
      "The platform opens channels for residents to propose and debate policy at the municipal level through digital interfaces, extending participation beyond periodic elections.",
      "Barcelona's adoption of deliberation software represents an attempt to use new media as an instrument of citizen voice within an existing governmental structure."
    ],
    "lessons_or_failures": "Schneider groups Barcelona with other governmental digital-democracy experiments as evidence of 'at least partial openness among governments to explore more information-rich feedback loops than periodic elections.' However, he cautions that these innovations typically remain advisory rather than binding, limiting their transformative democratic potential.",
    "source_chapter": "Introduction"
  },
  {
    "id": "taiwan-digital-democracy",
    "name": "Taiwan National Digital Deliberation Platform",
    "domain": "state",
    "brief": "Taiwan's national government adopted digital deliberation tools — including AI-assisted identification of consensus clusters — to enable citizen participation in policymaking independent of political parties.",
    "community": "Taiwan's national citizenry engaging in government-facilitated digital deliberation processes",
    "governance_form_ids": [
      "digital-deliberation",
      "ai-assisted-consensus",
      "direct-citizen-voice"
    ],
    "democratic_features": [
      "The government deployed tools using artificial intelligence to identify clusters of participant opinion that cut across party lines, surfacing areas of potential consensus in a highly polarized environment.",
      "Digital platforms invited citizens to weigh in on policy questions at the national scale, creating feedback loops between government and governed that supplement representative elections.",
      "The approach draws on a wiki-style, open-contribution ethos to make policy deliberation more participatory and transparent."
    ],
    "lessons_or_failures": "Taiwan is cited by Schneider as one of the more ambitious governmental experiments in democratic digital infrastructure. As with other state-level cases, he notes that these innovations still largely serve advisory rather than binding roles, reflecting broader resistance within territorial governments to genuinely redistributing power.",
    "source_chapter": "Introduction"
  },
  {
    "id": "picnic-group-chat",
    "name": "Picnic Group Chat (Opening Vignette)",
    "domain": "online_community",
    "brief": "An informal group chat formed among picnickers during a rainstorm, illustrating how the migration of social life online flattens relational texture, excludes certain participants, and concentrates power in unaccountable admins.",
    "community": "A group of friends and families who had gathered for a park picnic and then moved their coordination into a group chat",
    "governance_form_ids": [
      "admin-fiat",
      "informal-consensus"
    ],
    "democratic_features": [
      "The chat creates a nominally flat, instantaneous space for collective opinion — 'everyone is a speech bubble' — but this flattening erases the 'textured structures of relationship' that existed at the physical picnic.",
      "Some participants who were quiet in person feel more free to speak up in the chat, suggesting that digital text-based spaces can lower certain barriers to voice.",
      "Power over the space ultimately rests entirely with the person who created the chat, whom the software recognizes as admin — demonstrated when that person unilaterally removes a rude participant with no process or appeal."
    ],
    "lessons_or_failures": "Schneider uses this vignette to diagnose what is lost when social life migrates online: the absence of any mechanism for steering debate into decision, the exclusion of the youngest and oldest participants who lack the tools or skill to join, the concentration of power in an unaccountable admin, and the failure to establish shared criteria for what would count as a collective decision. The vignette is the book's opening illustration of implicit feudalism and the atrophy of democratic skills online.",
    "source_chapter": "Introduction",
    "source_quote": "In the chat, everyone is a speech bubble. There are some side chats among friends, but the main group flattens the textured structures of relationship. Disagreements fly by, but nobody is sure what would be the criteria for a decision or how to signal commitment."
  },
  {
    "id": "bbs-sysop-communities",
    "name": "Bulletin Board Systems (BBS) and Sysop Governance",
    "domain": "online_community",
    "brief": "Hobbyist-run bulletin board systems of the late 1970s–1980s, hosted on personal computers, where the system operator (sysop) held absolute authority over users as de facto lord of their own machine.",
    "community": "Computer hobbyists dialing in via phone lines to a sysop-hosted machine",
    "governance_form_ids": [
      "sysop-absolutism",
      "exit-as-dissent"
    ],
    "democratic_features": [
      "The FidoNet BBS network included a ballot-counting votemgr program enabling community-wide votes on decisions.",
      "The OneNet BBS network operated under a constitution and board structure, and its founder Scott Converse was at one point voted out of power by members.",
      "User exit — moving to a competing BBS — served as the primary check on sysop authority, creating a form of mutual accountability through market-like competition among systems."
    ],
    "lessons_or_failures": "BBS governance established the foundational pattern of implicit feudalism: absolute sysop authority grounded in physical ownership of the host machine and legal liability for content. Democratic options existed (FidoNet's votemgr, OneNet's constitution) but were exceptions. The sysop's 'not under my roof' logic translated directly into software feature sets, and this pattern persisted long after its original technical rationale disappeared.",
    "source_chapter": "Ch. 2",
    "source_quote": "They were the makers and enforcers of social policy. Ultimately, the sysop possessed a form of total authority because they lived under the same roof as the host PC. In a moment of frustration, the sysop could always pull the plug and shut down the whole system."
  },
  {
    "id": "lambdamoo",
    "name": "LambdaMOO",
    "domain": "online_community",
    "brief": "A text-based virtual world hosted at Xerox PARC in the 1990s that experimented with user self-governance but ultimately reinstituted administrative veto power due to real-world legal and jurisdictional constraints.",
    "community": "Users inhabiting a shared text-based virtual house; administrators employed by Xerox PARC",
    "governance_form_ids": [
      "petition-governance",
      "admin-veto",
      "sysop-absolutism"
    ],
    "democratic_features": [
      "Following a crisis of bad behavior (a documented 'rape in cyberspace'), LambdaMOO developed a petition-based system for users to set and enforce community rules.",
      "The petition system represented an experimental devolution of governance power to ordinary users, allowing collective rule-setting from below."
    ],
    "lessons_or_failures": "LambdaMOO's experiment in user self-governance was curtailed when administrators — citing real-world jurisdiction, legal liability, and physical hosting at a corporate research site — announced a return to 'wizardly fiat' with veto power over user decisions. Schneider treats this as a formative instance of implicit feudalism: regardless of virtual possibility, governance ends at what the server owner and their legal regime will tolerate.",
    "source_chapter": "Ch. 2",
    "source_quote": "So long as the MOO is located on a single RL [real-life] machine at a single RL site subject to RL laws and liabilities, there will be those deemed responsible for the use of that hardware."
  },
  {
    "id": "usenet-big8",
    "name": "Usenet and the Big 8 Board",
    "domain": "federated_network",
    "brief": "A distributed newsgroup network launched in 1980 that developed hierarchical governance through a self-perpetuating board (the Big 8) after the 'Great Renaming' of 1986, combining limited collective decision-making at the network level with feudal moderator authority at the newsgroup level.",
    "community": "University and corporate server operators, newsgroup moderators, and general users across interoperable Usenet servers",
    "governance_form_ids": [
      "self-perpetuating-board",
      "voting-non-binding",
      "sysop-absolutism"
    ],
    "democratic_features": [
      "Usenet has a voting system for adding new newsgroups, representing a collective decision-making mechanism at the network level.",
      "Newsgroup moderators are selected according to processes specified in group charters approved by the Big 8, providing a degree of procedural regularity.",
      "The distributed, multi-server architecture required governance mechanisms capable of some collective decision-making, unlike the single-machine BBS model."
    ],
    "lessons_or_failures": "Usenet's voting system for newsgroups is non-binding over technical power: sysadmins have refused to carry newsgroups approved by a vote. The Big 8 board is self-perpetuating, and moderators' authority within newsgroups is formally answerable to nobody. A study of Usenet's evolution found that its 'initial democracy and egalitarianism had been replaced by a feudal structure' in which administrators self-mockingly called themselves 'barons' and users 'serfs.' The case illustrates how a distributed architecture does not automatically produce democratic governance.",
    "source_chapter": "Ch. 2",
    "source_quote": "The system's initial democracy and egalitarianism had been replaced by a feudal structure, in which system administrators deliberately, if self-mockingly, referred to themselves as 'barons' (and to users as 'serfs')."
  },
  {
    "id": "irc-channel-governance",
    "name": "Internet Relay Chat (IRC)",
    "domain": "online_community",
    "brief": "A synchronous chat protocol dating to 1988, organized around networks of independently operated servers and channel operators (chanops) with moderation privileges, presaging the feudal governance of later commercial chat platforms like Slack and Discord.",
    "community": "Technologists, hobbyists, and topic-based communities on shared IRC networks",
    "governance_form_ids": [
      "chanop-authority",
      "bot-governance",
      "sysop-absolutism"
    ],
    "democratic_features": [
      "In principle, any user can create a new IRC network or a channel on a public network, providing a degree of openness to community formation.",
      "IRC permits the use of bots — software-defined users — that can assist operators in rule enforcement and channel management, representing an early form of algorithmic governance.",
      "Channel names become canonical over time (e.g., #quilters), which concentrates governance in the hands of incumbents and makes exit rarely feasible for users who care about the community's identity."
    ],
    "lessons_or_failures": "IRC illustrates how canonical channel names create exit barriers that concentrate effective power with existing chanops, regardless of their governance track records. Its '#' channel naming convention and 'server' terminology were directly adopted by Discord and Slack, carrying feudal governance norms forward into contemporary commercial platforms. IRC's bot infrastructure prefigured algorithmic moderation.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "linux-kernel-bdfl",
    "name": "Linux Kernel Project",
    "domain": "online_community",
    "brief": "The foundational open-source software project, governed by founder Linus Torvalds as 'benevolent dictator for life' (BDFL), whose unilateral control over canonical releases exemplifies how implicit feudalism fills governance vacuums in open-source communities.",
    "community": "Global community of software developers contributing to the Linux kernel",
    "governance_form_ids": [
      "bdfl",
      "email-list-governance"
    ],
    "democratic_features": [
      "In principle, any developer can contribute code to Linux, creating an open contribution model.",
      "Linux adopted Coraline Ada Ehmke's Contributor Covenant code of conduct following sustained advocacy, establishing some behavioral norms and responsibilities for project leaders.",
      "Linux development discussion and decision-making occurs through email lists, which in practice concentrate effective voice with the list's administrators."
    ],
    "lessons_or_failures": "Linux shows how the absence of explicit governance, treated by open-source culture as a mere distraction from coding, creates power vacuums that implicit feudalism fills. Torvalds' BDFL role emerged more from omission than ideology. The project's adoption of a code of conduct required years of external pressure and documented cases of harassment — illustrating that democratic structure does not emerge naturally from open contribution models.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "debian-project",
    "name": "Debian Project",
    "domain": "online_community",
    "brief": "A community-governed Linux-based operating system project that operates as a nonprofit liberal democracy, with an elected project leader, a formal constitution, and a meritocratic onboarding process for voting members.",
    "community": "Skilled software developers who join through a formal, meritocratic onboarding process and collectively govern the Debian operating system",
    "governance_form_ids": [
      "elected-leader",
      "constitutional-governance",
      "meritocratic-onboarding"
    ],
    "democratic_features": [
      "The Debian Constitution specifies procedures for electing a 'project leader' by the project's developers.",
      "Developers join as voting members through a detailed, meritocratic onboarding process that ties participation rights to demonstrated expertise.",
      "Debian operates as a nonprofit, which Schneider identifies as a factor enabling more democratic governance compared to projects beholden to corporate imperatives.",
      "Debian occupies a deliberate position in a layered software ecosystem, with its democratic, inclusive development process enabling support for older machines that lack commercial value."
    ],
    "lessons_or_failures": "Debian is Schneider's primary example of how democratic governance is possible in large open-source communities, but it has been 'mainly an outlier.' Its formal republicanism emerged through intentional effort, not default design. Schneider notes that Debian's democratic process enables a slower but more inclusive development cycle and that its nonprofit status appears to be a facilitating condition. The layered ecosystem context (Linux kernel below, Ubuntu above) suggests participatory self-governance may flourish at certain niches in the software supply chain but not others.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "apache-software-foundation",
    "name": "Apache Software Foundation",
    "domain": "online_community",
    "brief": "A nonprofit foundation governing a large portfolio of open-source projects whose developer-members elect the organization's board and whose hosted projects operate under an explicit rule against dictatorships or corporate overlords.",
    "community": "Developer-members of hosted open-source projects under the Apache umbrella",
    "governance_form_ids": [
      "elected-board",
      "constitutional-governance"
    ],
    "democratic_features": [
      "Developer-members of the Apache Software Foundation elect the nonprofit organization's board.",
      "Apache has an explicit rule for its hosted projects: 'No dictators or corporate overlords are allowed,' making democratic governance a condition of project participation rather than an optional add-on."
    ],
    "lessons_or_failures": "Like Debian, Apache demonstrates that democratic governance in open-source is possible but exceptional, associated with nonprofit organizational form and deliberate institutional design. The 'no dictators' rule shows that anti-feudal norms can be encoded as policy, not just culture.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "wikipedia",
    "name": "Wikipedia",
    "domain": "online_community",
    "brief": "A nonprofit encyclopedia governed through a layered system of open participation, elected roles, policy deliberation on wiki pages, and a founder's residual authority — representing one of the most developed examples of democratic self-governance in online peer production, though also one of the most labor-intensive.",
    "community": "Volunteer editors, administrators, stewards, and bureaucrats, overseen by the Wikimedia Foundation and founder Jimmy Wales",
    "governance_form_ids": [
      "peer-election",
      "constitutional-governance",
      "founder-seat",
      "wiki-policy-deliberation"
    ],
    "democratic_features": [
      "Users can be elected by their peers to tiered roles including administrator, steward, and bureaucrat, creating an open path from ordinary contributor to governance participant.",
      "Wikipedia's Five Pillars include the principle that 'Wikipedia has no firm rules,' but contributors have assembled extensive policy through deliberation on Talk pages and noticeboards.",
      "Governance occurs largely on the wiki itself, using the same editable pages as the encyclopedia — an instance of the organization using its product in the process of making that product.",
      "Jimmy Wales holds a 'founder's seat' on the Wikimedia Foundation board whose ad hoc powers have diminished over time following cases of overreach, illustrating how founder authority can be constrained through institutional evolution."
    ],
    "lessons_or_failures": "Wikipedia shows how much extra work departing from implicit feudalism requires. The underlying software (MediaWiki) defaults to full administrator control; without Wikipedia's cultivated norms and complex role system, deployments of the same software on commercial platforms trend toward oligarchic governance. Governance on Wikipedia itself has drifted toward less inclusivity over time. Wikipedia's democratic practices are the product of sustained, deliberate cultivation — not default design.",
    "source_chapter": "Ch. 2",
    "source_quote": "Wikipedia's governance also exemplifies how much extra work it can take to depart from the dominant pattern of implicit feudalism."
  },
  {
    "id": "github",
    "name": "GitHub",
    "domain": "online_community",
    "brief": "A commercial platform (acquired by Microsoft in 2018) that embeds Git's version-control into a social network using an owner/collaborator permissions system, filling the governance vacuum that Git itself leaves open with a familiar feudal structure.",
    "community": "Open-source developers and software teams hosting code repositories",
    "governance_form_ids": [
      "owner-collaborator-permissions",
      "exit-via-fork"
    ],
    "democratic_features": [
      "External users can 'fork' a copy of any project, edit it, and either submit changes back to the original or release a competing version, making exit technically available.",
      "GitHub encourages project owners to adopt a code of conduct, though adoption and enforcement depend entirely on the owner's willingness.",
      "Discussion threads called 'Issues' allow users to express voice, though effective power over the canonical repository remains with the owner and their delegates."
    ],
    "lessons_or_failures": "GitHub illustrates how a social layer built atop a neutral technical tool (Git) resolves the tool's power vacuum by defaulting to feudal permissions. Unlike Git itself — where no developer's version is intrinsically canonical — GitHub establishes a canonical version managed by its owner/collaborator system. Schneider treats GitHub as a case of 'fusing Git with a feudal governance model.' Code-of-conduct adoption is owner-dependent, meaning democratic norms remain optional add-ons rather than structural defaults.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "slashdot",
    "name": "Slashdot",
    "domain": "online_community",
    "brief": "An early tech-focused social-news website that developed a karma-based, fluid system of user moderation and meta-moderation, producing a functional culture of responsible voluntarism as an exception to the dominant pattern of implicit feudalism.",
    "community": "Tech-savvy users of a social-news and discussion platform, active in the late 1990s and 2000s",
    "governance_form_ids": [
      "karma-based-moderation",
      "meta-moderation"
    ],
    "democratic_features": [
      "Users accrued karma scores from other users, and as karma increased, they gained the power to moderate others' posts and evaluate others' moderation decisions.",
      "The meta-moderation layer allowed users to assess the quality of moderators' decisions, creating a feedback loop of mutual accountability.",
      "Slashdot employed a fluid system of mutual endorsement rather than fixed elected roles, distributing moderation capacity dynamically across the user base."
    ],
    "lessons_or_failures": "Slashdot is Schneider's key example that alternatives to implicit feudalism were technically and socially possible on large platforms. Its karma system showed that open, dynamic user empowerment could manage content in ways generally satisfying to users. Schneider speculates that Slashdot's model may have been 'too responsible,' failing to produce the provocation and engagement that commercial social networks thrive on — suggesting that implicit feudalism may be a feature, not a bug, for engagement-maximizing business models.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "facebook-groups",
    "name": "Facebook Groups",
    "domain": "online_community",
    "brief": "Facebook's community feature, active since 2005, in which group creators and their appointed successors hold near-absolute administrative authority over membership, posting rights, and moderation, under rules ultimately set by Facebook as platform owner.",
    "community": "Approximately 3 billion Facebook users organized into topic- and interest-based groups governed by volunteer admins",
    "governance_form_ids": [
      "founder-admin-succession",
      "ai-moderation",
      "affective-voting"
    ],
    "democratic_features": [
      "Facebook provides structured rule-making interfaces for group admins — an advance over blank text fields — allowing admins to define and publish community rules.",
      "Users can evaluate posts via the Like button and its sub-options, providing a form of affective voice over content visibility.",
      "AI tools such as Facebook's 'false news' detector offer to streamline moderation labor, representing algorithmic governance at scale.",
      "Facebook conducted a 2009 user referendum on proposed terms-of-service changes, though the quorum requirement (30% of over 1 billion users) was structurally unachievable, making the vote effectively advisory."
    ],
    "lessons_or_failures": "Facebook Groups exemplifies mature implicit feudalism: admin authority derives from founding and appointment, ordinary users' evaluative tools operate as assists to admin decisions rather than instruments of shared governance, and the platform's dual-class stock structure replicates feudal logic at the corporate level with Zuckerberg as monarch. The 2009 referendum is treated as 'democracy theatre' — a performance of participation with structurally foreclosed outcomes. Interviews with admins show they rarely consult non-admins on governance decisions.",
    "source_chapter": "Ch. 2",
    "source_quote": "For users' votes to be binding, the company stipulated that 30 percent of its over 1 billion users at the time would need to participate—a scale equivalent to the entire US population. As one might expect for an unprecedented process on a decision about complex legal language, well under a single percentage point of the quorum was reached."
  },
  {
    "id": "reddit-subreddits",
    "name": "Reddit Subreddits",
    "domain": "online_community",
    "brief": "User-created and user-governed communities on Reddit, organized around pseudonymous identity and karma scores, in which moderators hold feudal authority under site-wide policies ultimately enforced by Reddit's corporate ownership.",
    "community": "Pseudonymous Reddit users organized into topic-based subreddits governed by volunteer moderators",
    "governance_form_ids": [
      "founder-admin-succession",
      "upvote-downvote",
      "ai-moderation"
    ],
    "democratic_features": [
      "Users can upvote and downvote posts, collectively influencing which content rises to the top of a community's feed.",
      "Reddit's AutoModerator is a programmable AI tool allowing moderators to automate rule enforcement, extending the reach and consistency of community policies.",
      "The 2015 'Reddit revolt' saw moderators coordinate across subreddits — switching communities to private en masse — demonstrating a capacity for collective moderator action that produced real corporate accountability, including the resignation of interim CEO Ellen Pao."
    ],
    "lessons_or_failures": "The 2015 Reddit revolt shows that cross-community moderator solidarity can exercise meaningful power against platform ownership, but the aftermath brought heightened enforcement of site-wide policies that increased conformity between platform and moderator rules. Moderators can govern their fiefdoms but face consequences for organizing against the monarchy. Upvote/downvote tools operate as affective rather than effective voice — content rankings influence visibility but not the administrative powers of appointment, removal, or rule-making.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "python-governance-transition",
    "name": "Python Programming Language Governance Transition",
    "domain": "online_community",
    "brief": "Following the 2018 resignation of BDFL Guido van Rossum, the Python developer community used its existing Python Enhancement Proposal (PEP) process to deliberate among a wide range of governance models and ultimately adopt an elected five-person steering council.",
    "community": "Python programming language developers and contributors",
    "governance_form_ids": [
      "pep-process",
      "elected-steering-council",
      "bdfl-succession"
    ],
    "democratic_features": [
      "The Python Enhancement Proposal (PEP) system — an existing, community-recognized process for proposing and adopting language changes — was repurposed as the vehicle for deliberating on governance models.",
      "The community proposed a wide range of governance options, from new dictatorship to structurelessness to various voting systems, conducting an open deliberative process.",
      "The outcome was the adoption of an elected, five-person steering council, replacing a single BDFL with a representative collective body."
    ],
    "lessons_or_failures": "Python's transition demonstrates that the inertia of implicit feudalism can be overcome when a community possesses pre-existing, legitimate decision-making infrastructure. The PEP process provided procedural legitimacy that allowed the community to navigate from radical divergence to a workable outcome. Schneider argues that without such infrastructure, 'the habit of monarchy might have persisted.' The case also shows that governance transitions can be designed rather than left to accident or disruption.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "blm-global-network",
    "name": "Black Lives Matter Global Network",
    "domain": "movement",
    "brief": "The flagship organization of the Black Lives Matter movement, which in 2020 was found by ten chapters to have a single board member (also the executive director), raising questions about transparency, participation, and the flow of donations to local chapters.",
    "community": "Black Lives Matter chapters across the United States and Canada, alongside the global network organization",
    "governance_form_ids": [
      "sole-board-member",
      "founder-authority"
    ],
    "democratic_features": [
      "Ten BLM chapters published a public accountability statement calling for transparency and participation in decisions about the movement's shared direction.",
      "The chapters' collective public statement represents an exercise of affective voice — coordinated, public, and morally forceful — in the absence of formal mechanisms for effective voice over the parent organization."
    ],
    "lessons_or_failures": "Schneider opens the chapter with BLM as an example of how the logic of online founding (a hashtag becoming an organization) can produce governance structures that deviate from nonprofit norms. The case illustrates implicit feudalism's reach beyond software into social movements: the founder's singular authority, absent deliberate democratic structuring, persisted even as the organization absorbed tens of millions of dollars and became a global movement. The absence of institutional mechanisms for effective voice left chapters with only affective voice and exit.",
    "source_chapter": "Ch. 2"
  },
  {
    "id": "communityrule",
    "name": "CommunityRule",
    "domain": "online_community",
    "brief": "A web app that lets community members interactively design, publish, and fork governance rules using drag-and-drop modules, developed out of consultations with mutual aid groups and open-source software communities during the COVID-19 pandemic.",
    "community": "Online communities broadly — mutual aid groups, open-source software projects, and any group seeking to formalize governance without professional legal help.",
    "governance_form_ids": [
      "modular-governance-design",
      "rules-as-commons"
    ],
    "democratic_features": [
      "Users design governance arrangements interactively through draggable, nestable, and configurable modules rather than static text documents, lowering the barrier to explicit rule-making.",
      "Completed rules are published to a public library where other communities can read, learn from, and fork them — copying and modifying a prior community's rules as a starting point for their own.",
      "A set of simple templates reflecting several basic organizational designs is offered so rule authors can begin from established patterns rather than from a blank slate.",
      "The tool was developed through direct consultations with mutual aid groups and open-source communities, with design informed by those groups' actual governance needs."
    ],
    "lessons_or_failures": "Schneider frames CommunityRule as a direct counter to implicit feudalism: admin power expands where rules are absent, so democratic communities need accessible interfaces for articulating and sharing the rules they want. The case illustrates that governance tooling need not be legally expensive or overly formal to be effective — lightweight, modular, and forkable rule design can serve communities that traditional bylaws cannot reach. The popularity of the pre-built templates (leading to a published booklet in 2021) suggests that communities benefit from starting with recognizable patterns rather than designing from scratch.",
    "source_chapter": "Profile: CommunityRule",
    "source_quote": "Implicit feudalism thrives on an absence of rules; admin power fills the void. More democratic communities need ways to describe the rules they want to use. CommunityRule is an attempt to imagine interfaces that make governance arrangements easy to design and understand."
  },
  {
    "id": "the-well",
    "name": "The WELL (Whole Earth 'Lectronic Link)",
    "domain": "online_community",
    "brief": "Founded in 1985, The WELL was a text-only bulletin-board community for intellectual seekers, technology enthusiasts, and Grateful Dead fans that served as a decisive bridge from hobbyist online spaces to the commercial internet, encoding implicit feudalism beneath aspirations of self-governance.",
    "community": "Intellectual seekers, technology enthusiasts, Grateful Dead fans, journalists; later acquired by its own users in 2012",
    "governance_form_ids": [
      "implicit-feudalism",
      "benevolent-dictatorship"
    ],
    "democratic_features": [
      "The WELL listed 'It would be self-governing' among its design goals, though the aspiration was never fully resolved in practice.",
      "Group-level 'hosts' served as micro-dictators within individual conferences, while site-wide discussions labeled 'meta' remained structureless and open-ended.",
      "In 2012, a group of users acquired The WELL, opening a door to self-governance — though only long after the platform's period of greatest cultural influence.",
      "Former members of The Farm commune, experienced with intentional community governance, became The WELL's admins, bringing some communal sensibility to platform administration."
    ],
    "lessons_or_failures": "Schneider uses The WELL as the originating case of the homesteading pattern and implicit feudalism online. Despite an explicit design goal of self-governance, the platform operated as a 'benevolent dictatorship' from its earliest days. Its 1994 sale to a new owner without any user input exemplifies how feudal control outlasts communal aspiration. The WELL's later user acquisition shows democratic ownership is possible but typically arrives too late to shape a platform's cultural legacy.",
    "source_chapter": "Ch. 5",
    "source_quote": "The shortest, least specific of The WELL's 'design goals' stated, 'It would be self-governing . . . .' But the ellipsis never quite resolved. Rheingold later wrote, 'Technically, the early WELL was governed as a benevolent dictatorship.'"
  },
  {
    "id": "the-river-cooperative",
    "name": "The River",
    "domain": "platform_cooperative",
    "brief": "An online community formed by Howard Rheingold and other WELL veterans as a user-owned cooperative alternative to the commercially sold WELL, seeking genuine self-governance through cooperative ownership.",
    "community": "Former WELL members seeking a cooperatively owned online community",
    "governance_form_ids": [
      "platform-cooperative-ownership"
    ],
    "democratic_features": [
      "The River was owned by a cooperative of its users from founding, directly addressing the lack of user ownership that characterized The WELL's eventual commercial sale.",
      "It was formed explicitly in response to WELL users having no say in the platform's 1994 sale, embedding democratic ownership as its founding rationale."
    ],
    "lessons_or_failures": "Schneider notes The River as an attempt to realize the self-governing aspiration that The WELL never fulfilled — but it never flourished. This failure illustrates that cooperative ownership alone, without the network effects and cultural momentum of an established platform, is insufficient to sustain a democratic online community.",
    "source_chapter": "Ch. 5",
    "source_quote": "In search of real self-governing, Rheingold and other WELL dwellers later formed The River, an online community owned by a cooperative of its users. But it never flourished."
  },
  {
    "id": "occupy-wall-street-assemblies",
    "name": "Occupy Wall Street Assemblies and Digital Infrastructure",
    "domain": "movement",
    "brief": "The 2011 Occupy Wall Street protests developed face-to-face consensus assemblies supported by digital tools — including a website tracking assembly schedules and proposals — as a democratic alternative to the representative systems protesters rejected.",
    "community": "Anti-austerity and anti-inequality activists occupying public spaces in the United States and globally in 2011",
    "governance_form_ids": [
      "consensus-process",
      "direct-democracy"
    ],
    "democratic_features": [
      "Activists organized through consensus-based assemblies in physical public spaces, practicing direct participation explicitly in contrast to the representative systems they denounced.",
      "Participants developed new hand signals, facilitation techniques, and methods of persuasion through direct practice with masses of strangers.",
      "A website tracked the schedule of assemblies and the text of proposals to be discussed, providing a digital layer of transparency and participation support.",
      "Activists learned and taught skills for facilitating effective meetings, including how to disrupt them when necessary — treating governance as a learned craft."
    ],
    "lessons_or_failures": "Schneider presents Occupy's assemblies as an instance of everyday political skill-building that counters the implicit feudalism of digital platforms. However, he also notes the tension between activists' radically democratic offline processes and how outsiders defaulted to the feudal logic of social-media accounts — assuming whoever controlled a Twitter or Facebook page was the movement's leader. The assemblies themselves demonstrate that anti-feudal democratic practice is possible, but it requires deliberate cultivation outside of Californian software defaults.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "loomio",
    "name": "Loomio",
    "domain": "online_community",
    "brief": "Loomio is a decision-making app originated by Occupy activists in Wellington, New Zealand, that encodes offline consensus processes into software and has since been adopted by organizations and governments worldwide.",
    "community": "Occupy Wellington activists initially; later organizations and governments seeking structured digital deliberation",
    "governance_form_ids": [
      "consensus-process",
      "preference-ranking",
      "deliberative-voting"
    ],
    "democratic_features": [
      "Loomio began by encoding Occupy-style consensus processes into software, translating directly from activist offline governance practice rather than from business-model convenience.",
      "The platform has expanded to support a wide variety of techniques for reaching agreement, including ranked-choice preference ordering among options.",
      "Users can invite volunteers to indicate who will actually implement a decision, linking deliberation to accountability for follow-through.",
      "Its design originated from what users were already doing offline, reversing the typical Californian pattern of imposing technical defaults on social behavior."
    ],
    "lessons_or_failures": "Schneider holds up Loomio as a counter-example to implicit feudalism — a platform whose governance design was derived from democratic practice rather than feudal convenience. Its origins in the Occupy movement and subsequent adoption by governments illustrate Agre's principle that cultivating political skills should precede building technology to support them. Loomio also exemplifies Conway's Law working in a democratic direction: an organization practicing anti-feudal interactions encoded those interactions into its software.",
    "source_chapter": "Ch. 5",
    "source_quote": "Occupy activists in Wellington, New Zealand, encoded their governance practices into an app, Loomio, that has since been adopted by organizations and even governments far from their island. Although Loomio began by mimicking Occupy-style processes, it has come to support a wide variety of techniques for coming to agreement."
  },
  {
    "id": "adrienne-maree-brown-instagram-homeplace",
    "name": "adrienne maree brown's Instagram Private Thread",
    "domain": "online_community",
    "brief": "In 2016, activist and writer adrienne maree brown convened a small private Instagram group of women and gender-nonconforming friends to share daily self-portraits as a 'liberation technology,' which grew into an ongoing community and homeplace.",
    "community": "A small group of women and gender-nonconforming friends invited by adrienne maree brown",
    "governance_form_ids": [
      "homeplace-affective-governance"
    ],
    "democratic_features": [
      "The group was self-constituted through invitation and opt-in consent, with no platform-assigned authority structure determining membership or roles.",
      "The community functioned as a 'safe space' sustained by mutual affirmation and care rather than by administrative hierarchy.",
      "Power was shared through relational solidarity rather than through formal governance mechanisms, exemplifying the homeplace as a site of resistance within a feudally designed platform."
    ],
    "lessons_or_failures": "Schneider uses this case to illustrate bell hooks's concept of the homeplace — a site of resistance that emerges because of and despite implicitly feudal platform designs. Brown's community forms on Instagram, a homesteading machine, yet the homeplace becomes the subject; the platform recedes from view. This demonstrates that democratic and liberatory social forms can arise within feudal technical substrates, though they remain precarious and dependent on the care work of participants rather than on any structural guarantee.",
    "source_chapter": "Ch. 5",
    "source_quote": "What emerged was a community, a safe space, that is still very active today."
  },
  {
    "id": "minitel",
    "name": "Minitel (French State Network)",
    "domain": "public_infrastructure",
    "brief": "France's state-built Minitel system, launched in the early 1980s, is cited by Barbrook, Cameron, and Schneider as an alternative political-economic model for networked communication — one organized around public infrastructure rather than venture-capital homesteading.",
    "community": "French telecommunications users; the general French public accessing online services through state-provided terminals",
    "governance_form_ids": [
      "public-infrastructure-governance"
    ],
    "democratic_features": [
      "Minitel was built and operated as state infrastructure, decoupling network access from the venture-capital logic that required platforms to seek monopoly scale.",
      "Its model separated the provision of network infrastructure from the content and community services running on top of it, distributing economic control differently than the Californian model.",
      "As a public system, it did not rely on feudal permission-control logics driven by private platform owners seeking exit or acquisition."
    ],
    "lessons_or_failures": "Schneider invokes Minitel — as Barbrook and Cameron did before him — as evidence that 'there are alternatives' to the Californian ideology's political economy. The French model demonstrates that networked communication infrastructure can be organized through state investment and public provision rather than through VC-backed homesteading. Its limitation as a precedent is that it represents an alternative political economy without fully addressing the micropolitics of everyday governance within communities on the network.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "peoples-history-of-twitter",
    "name": "A People's History of Twitter",
    "domain": "movement",
    "brief": "A 2023 participatory project in which former Twitter users, workers, and researchers collectively documented and mourned the platform's civic history as a foundation for imagining democratic alternatives to corporate social media ownership.",
    "community": "Twitter users, former Twitter employees, technologists, journalists, and activists — nearly two hundred participants in the March 2023 online event, plus open chatbot contributors",
    "governance_form_ids": [
      "citizen-assembly",
      "collective-history-making"
    ],
    "democratic_features": [
      "The project organized a collective oral-history event in which users shared first-person accounts of what the platform had meant to them, treating that shared memory as a democratic resource rather than platform data.",
      "The team released an open chatbot that allowed any user to contribute their Twitter experiences asynchronously, widening participation beyond the live event.",
      "Former Twitter workers joined the process to reflect on the platform they had hoped to build, bridging insider knowledge with user experience.",
      "The project drew on citizen-assembly expertise from governments to explore what a representative assembly of Twitter users could look like and what kinds of proposals it might produce.",
      "A prior (2017) shareholder proposal effort aimed to decommodify Twitter by establishing a framework for users to become owners, situating the People's History within a longer arc of user-ownership advocacy."
    ],
    "lessons_or_failures": "Schneider uses this case to illustrate that democratic self-governance requires a prior step: a community must first see itself as a community through shared storytelling before it can begin to self-govern. The People's History served as a 'wake' — a way of mourning and cataloguing what a public-sphere platform had been — creating the collective identity and historical foundation that any future democratic takeover or alternative would need. The case also highlights how corporate acquisition (Musk's $44 billion purchase) dramatically forecloses user agency, underscoring why decommodification strategies must be built before, not after, a hostile takeover.",
    "source_chapter": "Profile: A People's History of Twitter",
    "source_quote": "Governance is not just about holding power and making decisions. Before a community can begin to self-govern, it needs to see itself as a community—through participants telling stories about themselves and having shared experiences. A People's History of Twitter was an attempt to begin that process, to initiate people's transition from being users of someone else's platform to being full citizens of the networks they live by."
  },
  {
    "id": "transformative-justice-accountability",
    "name": "Transformative Justice Community Accountability",
    "domain": "movement",
    "brief": "A movement-based practice, rooted in Black Lives Matter organizing, that addresses interpersonal harm through participatory community processes rather than policing or incarceration, aimed at repairing relationships and transforming root causes of harm.",
    "community": "Over-policed and marginalized communities, primarily Black, queer, and non-binary organizers and their neighbors; practitioners trained in facilitation and accountability work",
    "governance_form_ids": [
      "subsidiarity",
      "consensus-process",
      "restorative-circle"
    ],
    "democratic_features": [
      "Community members directly participate in accountability circles where those who caused harm take responsibility and affected parties co-develop responses, bypassing state arbiters entirely.",
      "Processes are context-sensitive and voluntary, proceeding at the pace of participants rather than at the speed of algorithmic or institutional enforcement.",
      "Facilitators are trained community members, not external authorities; the Creative Interventions Toolkit and Mariame Kaba's workbook distribute facilitation skills broadly rather than concentrating them in professionals.",
      "The One Million Experiments catalog and the Creative Interventions Toolkit explicitly resist institutionalization and fixed methods, treating ongoing reinvention as a feature of the practice.",
      "Communities hold themselves accountable, not only individual members — processes can surface how a community's own norms enabled harm, as in the Hollow Water documentary case involving the Ojibway village."
    ],
    "lessons_or_failures": "Schneider argues transformative justice models radical subsidiarity — accountability pushed to the level of neighborhoods and friend groups — and offers a template for how online communities could govern harm without scalable, context-collapsing automation. Its primary limitation for online spaces is that practitioners deliberately keep accountability processes out of corporate-controlled platforms, insisting on in-person temporality and resisting social media's viral pace. Kaba herself acknowledges this cannot hold forever as harm migrates online. The movement's relative invisibility in public discourse during 2020 illustrates how communities without institutional reach cannot displace dominant governance regimes even when their practices are more effective.",
    "source_chapter": "Ch. 4",
    "source_quote": "Taking inspiration from transformative justice activists, Hasinoff and I show how participant-centered systems can adopt subsidiarity: a principle that prioritizes appropriately local control wherever possible, within a larger system."
  },
  {
    "id": "molochdao",
    "name": "MolochDAO",
    "domain": "dao",
    "brief": "A collective grant fund on the Ethereum blockchain, first summoned in 2019, that pools digital contributions and allocates them to public-goods projects through member governance, organized around the mythology of slaying a 'god of coordination failure.'",
    "community": "Ethereum developers, entrepreneurs, and public-goods funders; initially convened at ETHDenver by Ameen Soleimani; expanded through the DAOhaus template",
    "governance_form_ids": [
      "token-voting",
      "quadratic-funding",
      "ragequit-exit"
    ],
    "democratic_features": [
      "Members contribute digital tokens as 'tributes' and hold governance rights over how the pooled funds are allocated to projects deemed worthy by the collective.",
      "Any member can 'ragequit' — withdraw their stake at any time in frustration or disagreement — a feature derived from gaming culture and encoded directly in the software contract.",
      "Governance debates are conducted in public chat threads and online forums rather than in closed boardrooms, making deliberation open to participants.",
      "The DAOhaus platform enables permissionless summoning of new entities on the MolochDAO template, distributing the organizational form beyond the original group.",
      "The mythology of Moloch-slaying — framing coordination failure as the enemy — provides a shared transcendent orientation that motivates participants to pursue public goods over individual gain."
    ],
    "lessons_or_failures": "Schneider treats MolochDAO as a productive rupture against implicit feudalism: because the smart contract lacks a single legal owner, user governance is the default rather than a concession from a feudal lord. The ragequit feature and open deliberation represent genuine democratic affordances unavailable in conventional platforms. However, Schneider warns that cryptoeconomic governance alone reproduces plutocracy (token concentration equals governance concentration), suppresses interests not visible to markets, and generates externalities (energy use, scams) the protocol ignores. MolochDAO illustrates both the generative potential of crypto experimentation and the need to envelop economics within political institutions capable of articulating the common good.",
    "source_chapter": "Ch. 4",
    "source_quote": "MolochDAO was meant to help move the world toward a new economic infrastructure in which networks and code, rather than police and armies, would be the basis of social order. In its more mundane practice, MolochDAO is a collective grant fund, a pool of digital money that participants contribute to and then allocate to projects they deem worthy."
  },
  {
    "id": "mastodon-federated-moderation",
    "name": "Mastodon Federated Moderation",
    "domain": "federated_network",
    "brief": "An open-source, self-hosted microblogging network whose polycentric structure allows individual server communities to govern themselves while coordinating cross-instance enforcement actions against bad actors at network scale.",
    "community": "Independent server administrators and their users across a decentralized network of Mastodon instances, connected through the ActivityPub protocol",
    "governance_form_ids": [
      "federated-subsidiarity",
      "instance-moderation",
      "defederation"
    ],
    "democratic_features": [
      "Each server instance is independently hosted and governed, enabling communities to set their own rules appropriate to their culture rather than deferring to a central corporate authority.",
      "Large-scale enforcement actions — such as coordinated defederation of the Islamic State and Gab — have demonstrated that polycentric networks can carry out meaningful collective enforcement without a central enforcer.",
      "The distributed architecture instantiates subsidiarity: scale is achieved through federation where necessary, while local control is preserved at the instance level where it matters most.",
      "Server administrators bear direct responsibility for their communities, creating accountability relationships absent in corporate platforms where moderation is handled by distant, opaque teams."
    ],
    "lessons_or_failures": "Schneider cites Mastodon as the paradigm case of polycentric subsidiarity in online infrastructure — contrasted with Slack's more feudalist, federalist hierarchy. Its capacity to enforce against Gab and IS without a central authority demonstrates that accountability at network scale does not require scalability in the venture-capital sense. The case supports Schneider's argument that deep subsidiarity requires reorganizing platform ownership and control, not just adding community features to centralized systems.",
    "source_chapter": "Ch. 4",
    "source_quote": "Another example of a polycentric network is Mastodon, an open-source microblogging platform that users can host on their own servers, while connecting to users on other servers. Even in the absence of a central company or other enforcer, Mastodon communities have shown the capacity to carry out large-scale enforcement actions against incursions from the Islamic State and Gab, a Mastodon-based platform friendly to White supremacists."
  },
  {
    "id": "hollow-water-ojibway-accountability",
    "name": "Hollow Water Ojibway Community Accountability Process",
    "domain": "movement",
    "brief": "A community accountability process in an Ojibway village in Canada, documented in the film Hollow Water, that addressed endemic sexual abuse through transformative justice methods operating within a multilevel accountability structure involving both First Nations networks and the Canadian legal system.",
    "community": "Ojibway village residents, neighboring First Nations communities in polycentric network, and the Canadian federalist legal system as outer layer of accountability",
    "governance_form_ids": [
      "federated-subsidiarity",
      "restorative-circle",
      "polycentric-accountability"
    ],
    "democratic_features": [
      "The process addressed harm at the community level rather than routing it entirely through state criminal justice, centering affected community members in accountability decisions.",
      "Accountability operated simultaneously across multiple scales: the local village process, polycentric First Nations community networks, and the outer federalist Canadian legal system — illustrating that subsidiarity is not limitless local autonomy but nested accountability.",
      "External pressure from both federalist and polycentric networks was applied when the community's own norms had enabled the harm, demonstrating that communities themselves must be held accountable, not only individual members."
    ],
    "lessons_or_failures": "Schneider uses Hollow Water to illustrate that subsidiarity requires not just self-governance within communities but accountability among communities and across networks. The case supports his argument that governable online spaces must similarly incorporate both local control and cross-community accountability mechanisms — neither pure local autonomy nor centralized platform enforcement suffices.",
    "source_chapter": "Ch. 4"
  },
  {
    "id": "cooperative-hardware-store",
    "name": "Locally Owned Hardware Store in Purchasing Cooperative",
    "domain": "workplace",
    "brief": "A locally owned hardware store participating in a national purchasing cooperative, used by Schneider as a concrete illustration of subsidiarity in practice — scale where necessary, local control where it matters.",
    "community": "Local store owners, employees, and customers; the national purchasing cooperative as shared infrastructure owned by member stores rather than distant investors",
    "governance_form_ids": [
      "cooperative-ownership",
      "federated-subsidiarity"
    ],
    "democratic_features": [
      "The cooperative structure pushes value and control to the edges of the network — to local store owners — rather than accumulating both at the center for distant investors.",
      "Joint purchasing with other stores achieves scale economies while local hiring, staffing levels, and community relationships remain under local control.",
      "Employee presence and helpfulness, contrasted with the thin staffing of the investor-owned chain, reflects how ownership structure shapes the everyday experience of governance at the ground level."
    ],
    "lessons_or_failures": "Schneider uses this case as a tangible analogy for what subsidiarity looks like in practice: neither pure localism nor scalable centralization, but scale at the infrastructure layer and local control at the community layer. The contrast with the investor-owned chain illustrates why implicit feudalism produces worse community outcomes even when both stores are technically 'managed' at the local level.",
    "source_chapter": "Ch. 4"
  },
  {
    "id": "ethereum-cryptoeconomic-governance",
    "name": "Ethereum Cryptoeconomic Governance Ecosystem",
    "domain": "dao",
    "brief": "The broader ecosystem of governance experiments built on the Ethereum blockchain, encompassing DAOs, token-voting systems, quadratic funding, conviction voting, liquid democracy, and other novel decision-making mechanisms stress-tested with real financial stakes.",
    "community": "Ethereum developers, token-holders, DAO participants, and public-goods funders globally; governed through combinations of on-chain token voting and off-chain social consensus",
    "governance_form_ids": [
      "token-voting",
      "quadratic-funding",
      "conviction-voting",
      "liquid-democracy",
      "decentralized-dispute-resolution"
    ],
    "democratic_features": [
      "Conviction voting continuously weights proposals based on both quantity of tokens staked and duration of staking, introducing temporal commitment as a governance variable unavailable in standard shareholder voting.",
      "Quadratic funding distributes matching grants based on a combination of donor count and donation amount, giving weight to breadth of popular support rather than concentration of wealth alone.",
      "Liquid democracy allows token-holders to delegate voting power to trusted others who can delegate further, with delegation revocable at any time — enabling representative proxies without fixed electoral mandates.",
      "Decentralized dispute resolution recruits random juries of staked-token holders who resolve disputes by independently predicting majority outcomes, enforcing accountability through economic incentive rather than institutional authority.",
      "Governance activity takes place through public on-chain records and open forums, making deliberation and outcomes transparent to all participants by default."
    ],
    "lessons_or_failures": "Schneider treats the Ethereum ecosystem as history's most concentrated site of governance experimentation, producing more diverse democratic mechanisms in a short period than any prior internet era. The high financial stakes and absence of external regulation have motivated serious investment in governance design, and because blockchain activity is public, successful experiments spread rapidly through code forking. However, Schneider identifies three structural limitations that cryptoeconomics alone cannot overcome: plutocracy (token concentration equals governance power), normative narrowing (participants learn to see themselves as economic actors, crowding out noneconomic values), and invisible externalities (energy consumption, public-goods underfunding, harmful activities the protocol ignores). His conclusion is that crypto needs to rediscover politics — enveloping economics within institutions capable of articulating the common good — and can learn from cooperative governance models to do so.",
    "source_chapter": "Ch. 4",
    "source_quote": "Regardless of any practical use value, crypto represents a rupture with respect to the particular argument I have been making: it can be an antidote to implicit feudalism. Previous internet technologies have presumed a central server, whose legal owner holds ultimate responsibility for what takes place on that server. A democracy among users will almost inevitably come into conflict with the underlying technical and legal reality. The distinguishing affordance of a blockchain, however, is enabling a system that lacks any single owner, that is user-governed by default."
  },
  {
    "id": "aragon-blockchain-governance-platform",
    "name": "Aragon",
    "domain": "dao",
    "brief": "A platform for blockchain-based organizational governance, co-founded by Luis Cuende, positioning itself as enabling new governance models to be tested without state violence as the enforcement mechanism.",
    "community": "DAO founders and participants building organizations on Ethereum using Aragon's governance tooling",
    "governance_form_ids": [
      "token-voting",
      "smart-contract-governance"
    ],
    "democratic_features": [
      "Aragon provides modular governance tooling that allows organizations to encode their own rules into smart contracts, making governance parameters explicit and auditable by all participants.",
      "Co-founder Cuende framed the platform as enabling governance experimentation without the threat of physical coercion, positioning cryptoeconomic enforcement through stake-and-slash as a substitute for state-backed violence."
    ],
    "lessons_or_failures": "Schneider cites Aragon primarily to illustrate the aspirational framing of cryptoeconomic governance — Cuende's claim that 'we can actually try out new governance models without the need of people getting killed' — while noting that this claim is less true than he thinks. The case illustrates how crypto's promotional mythology can obscure both the real harms the technology enables and the degree to which it remains embedded in state legal and financial systems.",
    "source_chapter": "Ch. 4",
    "source_quote": "In a 2018 sci-fi-drenched promotional video for Aragon, a platform for blockchain governance, co-founder Luis Cuende boasted, 'Today, we are in the first time in history that we can actually try out new governance models without the need of people getting killed.'"
  },
  {
    "id": "excavations-digital-exhibition",
    "name": "Excavations: Governance Archaeology for the Future of the Internet",
    "domain": "online_community",
    "brief": "An online artist residency and exhibition presented at the UN Internet Governance Forum, in which ten artists and collectives reflected on the history of human governance practices to inform the future of online governance.",
    "community": "Ten international artists and collectives participating remotely during COVID-19 lockdowns, with audiences at the UN Internet Governance Forum and online.",
    "governance_form_ids": [],
    "democratic_features": [
      "Artists collaborated across geographic distance in an online residency format, grounding their work in cross-cultural and historical governance practices drawn from a developing collective governance database.",
      "Exhibited works were linked to patterns in a preliminary taxonomy of historical, collective governance practices, making the database's concepts accessible through artistic and speculative lenses.",
      "Conversations between artists and researchers directly shaped the design and interpretation of the governance database, blending artistic sensibility with scholarly infrastructure.",
      "The residency foregrounded obligations to ancestral lineages and relational accountability, framing the database not as an act of appropriation but as an invitation to relationship and repair."
    ],
    "lessons_or_failures": "Schneider draws from the Excavations residency the lesson that a database of historical governance practices carries ethical weight: if it functions merely as appropriation, it should not exist. The artists' sense of ancestry and accountability reframed the database as a starting point for ongoing relationships and repair rather than a neutral archive. This shapes how the cross-cultural governance database is meant to be used — as an invitation, not an extraction.",
    "source_chapter": "Profile: Excavations",
    "source_quote": "If the database were simply another act of appropriation, the artists taught us, it should not exist at all. The information it contains must, rather, be an invitation and starting point for relationships, for accountability, for repair."
  },
  {
    "id": "may-first-movement-technology",
    "name": "May First Movement Technology",
    "domain": "platform_cooperative",
    "brief": "A cooperative providing Web hosting, cloud services, and public education to ~850 activist organizations in the United States and Mexico, enabling members to co-govern their digital infrastructure.",
    "community": "Activist organizations and individuals in the US and Mexico; roughly 850 members",
    "governance_form_ids": [
      "cooperative-membership-governance",
      "consensus-process"
    ],
    "democratic_features": [
      "Members participate in decision-making over bilingual conference calls and online ballots, giving non-English-dominant participants a voice in platform governance.",
      "The cooperative is a descendant of the Indymedia movement and runs exclusively on commons-based (free/open-source) software, keeping the technical stack legible and modifiable by members.",
      "Members form relationships with the people who maintain services and co-govern servers, making the infrastructure a shared political project rather than a vendor relationship.",
      "The organization sponsors public education events that teach people outside its membership to challenge big-tech power, extending its governance model outward."
    ],
    "lessons_or_failures": "Schneider presents May First as a lived proof-of-concept for governable stacks: small in scale but politically generative, unlocking 'political possibilities' for participants. He notes it is 'infinitesimally small by the standards of the online economy' yet argues that fractal logic means carefully chosen practices at small scale set patterns for larger systems. The cooperative demonstrates that 'slow computing' measured by social relationships rather than bandwidth is achievable, though Schneider acknowledges that friction and isolation make replication difficult.",
    "source_chapter": "Ch. 5",
    "source_quote": "Through the tools May First offers, I have been able to move much of my daily computing away from companies that surveil and extract and into servers I co-govern, running freely available software. I have formed relationships with the people who maintain these services and participated in decision-making over bilingual conference calls and online ballots."
  },
  {
    "id": "detroit-community-technology-project",
    "name": "Detroit Community Technology Project",
    "domain": "public_infrastructure",
    "brief": "An organization developed under Grace Lee Boggs's tutelage that trains majority-Black Detroit neighborhoods to deploy locally managed internet infrastructure as an act of self-governance and pedagogical empowerment.",
    "community": "Residents of majority Black, systemically underserved neighborhoods in Detroit",
    "governance_form_ids": [
      "cooperative-membership-governance"
    ],
    "democratic_features": [
      "Organizers train community members to deploy and manage local WiFi nodes on apartment buildings, making infrastructure governance a hands-on, neighborhood-level practice.",
      "The project follows Boggs's maxim of 'critical connections over critical mass,' prioritizing depth of participation and imagination over scale.",
      "The pedagogical model treats the stack itself as a medium of political education: touching a governable infrastructure introduces participants to the possibility of shared power and ruptures assumptions that telecom monopoly dominance is inevitable."
    ],
    "lessons_or_failures": "Schneider presents this project as evidence that small-scale stack interventions can do more for political imagination than scalable corporate telecoms ever could. The case shows that governable stacks are not only technical assemblages but pedagogical ones: 'whoever touches the governable stack risks recognizing that another kind of relationship with technology is possible.' The project translates Boggs's dialectical humanism into infrastructure practice.",
    "source_chapter": "Ch. 5",
    "source_quote": "While a stack run from above provides mere service, a governable stack can introduce experiences of shared power. Those experiences can shatter the telecom's claim that its dominance is inevitable. Whoever touches the governable stack risks recognizing that another kind of relationship with technology is possible."
  },
  {
    "id": "decidim-civic-participation",
    "name": "Decidim",
    "domain": "public_infrastructure",
    "brief": "A modular civic participation platform used largely by city governments for citizen feedback, featuring an evolving library of governance modules and a self-referential governance process that runs on the platform itself.",
    "community": "City governments and their citizens, primarily in Catalonia and other Spanish-speaking contexts; also international municipalities",
    "governance_form_ids": [
      "modular-politics",
      "participatory-budgeting"
    ],
    "democratic_features": [
      "Decidim's architecture is explicitly modular, with a growing library of components ranging from specific decision-making mechanisms to integrations with other platforms.",
      "The platform's own governance and evolution are conducted through a process that runs on Decidim itself, making the community of developers and users recursive co-governors of the tool.",
      "Modules can be combined and adapted, enabling cities to assemble governance processes suited to local contexts rather than accepting a one-size-fits-all design."
    ],
    "lessons_or_failures": "Schneider cites Decidim as an instance of modular politics coming to life beyond his own research group's experiments. It demonstrates that modular governance design is viable at civic scale. However, its primary deployment through city governments rather than directly by communities raises questions about who ultimately controls the platform and whether citizen participation translates into genuine self-governance.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "policykit-governance-platform",
    "name": "PolicyKit",
    "domain": "online_community",
    "brief": "A prototype governance platform developed by Amy X. Zhang that adds governance functionality to popular social platforms, later extended through the Metagovernance Project's Gateway prototype.",
    "community": "Online communities on mainstream social platforms seeking governance tools; researchers and builders in the Metagovernance Project",
    "governance_form_ids": [
      "modular-politics"
    ],
    "democratic_features": [
      "PolicyKit adds governance functionality — such as policy authoring, voting, and enforcement — to existing social platforms that otherwise lack democratic infrastructure.",
      "The Gateway prototype extended PolicyKit toward greater modularity and expressiveness, enabling integration between separate platforms (demonstrated by linking Open Collective payments to Loomio decisions at Social.coop).",
      "The system demonstrates that governance layers can be grafted onto implicitly feudal platforms rather than requiring communities to migrate to entirely new infrastructure."
    ],
    "lessons_or_failures": "Schneider presents PolicyKit and Gateway as early prototypes demonstrating the technical feasibility of modular politics. Their integration at Social.coop — where approved Loomio decisions trigger Open Collective payments automatically — provides a concrete 'inkling of a governable stack.' The work remains experimental and the tools have not achieved widespread adoption, but they show a path toward replacing implicit feudalism with composable governance.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "manufactured-home-cooperative",
    "name": "Manufactured-Home Park Cooperative (Schneider's Town)",
    "domain": "platform_cooperative",
    "brief": "A resident-organized housing cooperative formed when mobile-home-park residents bought out their landlord, now navigating a stack hostile to self-governance at every layer.",
    "community": "Low-income residents of a manufactured-home park who converted to cooperative ownership",
    "governance_form_ids": [
      "cooperative-membership-governance"
    ],
    "democratic_features": [
      "Residents organized collectively to purchase their park from a landlord, converting an exploitative tenancy into member ownership.",
      "The cooperative's governance aspirations — board accountability, working groups, data privacy — are described as the motivating use case for the modular politics framework.",
      "In Schneider's speculative redesign, residents would belong to a software cooperative providing self-governance-focused tools, have a member on the local internet cooperative's board, and use a modular platform that can swap governance structures (e.g., replacing a Board plugin with interconnected Circles)."
    ],
    "lessons_or_failures": "Schneider uses this case to show how implicit feudalism operates at every layer of the stack for communities with the least resources to fight it: telecoms with poor service records, cloud tools not designed for cooperative decision-making, and collaboration software without accountability features. The case motivates modular politics as a practical necessity, not merely an academic proposal.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "parler-user-juries",
    "name": "Parler User Juries",
    "domain": "online_community",
    "brief": "Parler, a platform that emerged as an alternative for users removed from mainstream networks, pioneered the use of user juries for content-moderation enforcement as part of its sparse policy framework.",
    "community": "Parler's user base, primarily drawn from groups removed or self-exiled from mainstream social platforms",
    "governance_form_ids": [
      "sortition",
      "jury-governance"
    ],
    "democratic_features": [
      "Parler implemented user juries as a mechanism for enforcing its content-moderation policies, giving ordinary users a formal adjudicatory role rather than leaving all decisions to administrators.",
      "The jury model introduced a participatory element into moderation that most mainstream platforms lack."
    ],
    "lessons_or_failures": "Schneider notes Parler as an example that not all intentional stacks are governable in a democratically meaningful sense: the platform built its community more around persecution and provocation than genuine self-governance, and its jury mechanism existed within a policy framework designed primarily to permit rather than to empower. The case illustrates that 'some self-governing is no guarantee that anything good will come of it' — the particulars of design and the political culture a community teaches matter as much as the formal mechanisms.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "league-of-revolutionary-black-workers",
    "name": "League of Revolutionary Black Workers",
    "domain": "movement",
    "brief": "A left-flank organization within Detroit's labor movement in the late 1960s and early 1970s that combined militant resistance with intentional media production and organizational infrastructure as tools of self-governance.",
    "community": "Black autoworkers in Detroit, affiliated with liberation movements across Africa",
    "governance_form_ids": [],
    "democratic_features": [
      "The League used intentional media — membership rolls, correspondence, leafletting — as integral to self-governance rather than treating communication as separate from organizing.",
      "The organization operated as a structured alternative to the United Auto Workers' leadership, maintaining its own offices, records, and organizational discipline."
    ],
    "lessons_or_failures": "Schneider uses the League, as depicted in the film 'Finally Got the News,' to open the chapter's argument that liberation movements have always understood self-governance and intentional media use as inseparable. The League exemplifies the chapter's thesis that 'self-governance coincides with intentional media use' — a pattern Schneider traces from Haiti through Detroit to contemporary digital organizing.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "feminist-servers-india",
    "name": "Feminist Servers (India)",
    "domain": "public_infrastructure",
    "brief": "Feminist server collectives in India that model digital infrastructure free of patriarchy, continuing and challenging Gandhi's legacy of self-governed technology while centering gender justice.",
    "community": "Feminist activists and technologists in India",
    "governance_form_ids": [],
    "democratic_features": [
      "Feminist servers operate infrastructure under community rather than corporate or state control, enacting the 'elsewhere' that governable stacks make possible.",
      "They center the experiences and governance needs of people that dominant platforms and the mainstream free-software movement have marginalized.",
      "By building and running their own servers, participants practice the technical self-sufficiency that Schneider identifies as essential to resisting digital colonialism."
    ],
    "lessons_or_failures": "Schneider cites feminist servers in India as an example of the spinning-wheel logic applied to digital infrastructure — choosing a governable tool to encode self-governance into a liberation project. They also represent the expansion of governance archaeology's canon: a non-Western, feminist instantiation of the governable-stack aspiration that both inherits and critiques Gandhi's legacy.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "metagovernance-project",
    "name": "Metagovernance Project",
    "domain": "movement",
    "brief": "An online network of researchers and builders that developed the modular politics framework and convened governance standards efforts such as DAOstar, operating as a collaborative R&D infrastructure for democratic online governance.",
    "community": "Researchers, platform designers, and governance technologists across academic and practitioner communities",
    "governance_form_ids": [
      "modular-politics",
      "metagovernance"
    ],
    "democratic_features": [
      "The project developed the modular politics framework collaboratively, articulating design goals (modularity, expressiveness, portability, interoperability) as a shared foundation for an emerging 'governance layer for the internet.'",
      "The project convened DAO builders across organizations in DAOstar to develop shared interoperability standards, practicing the multi-stakeholder coordination its framework theorizes.",
      "Prototypes like Gateway were developed and tested in real communities (Social.coop), making the research recursive: the project governs tools that govern communities the project participates in."
    ],
    "lessons_or_failures": "Schneider positions the Metagovernance Project as a practitioner-researcher hybrid that has moved the modular politics concept from theory toward implementation. Its governance archaeology work — building a database of collective-governance institutions across time and space with political scientist Federica Carugati — also attempts to ground new governance designs in diverse historical legacies rather than Silicon Valley defaults.",
    "source_chapter": "Ch. 5"
  },
  {
    "id": "common-st-thomas-ai-cooperative",
    "name": "Common (Cadwell Turnbull's fictional AI cooperative)",
    "domain": "public_infrastructure",
    "brief": "A speculative federally governed AI system from Turnbull's science fiction story, co-owned by residents of St. Thomas and operated as a public resource through democratic federation.",
    "community": "Residents of St. Thomas and a global federation of collective institutions",
    "governance_form_ids": [
      "federated-governance",
      "cooperative-ownership",
      "democratic-participation"
    ],
    "democratic_features": [
      "Common is governed by a worldwide federation of collective institutions devoted to the mission of AI as a public resource, giving communities direct say over its operation.",
      "Anyone can add knowledge to Common, and hardware decisions are made through a democratic process rather than by a single corporate owner.",
      "The system is decentralized and distributed across all devices running its software, with tech cooperatives creating vessels to hold the AI — preventing concentration of ownership.",
      "Residents trust Common precisely because they co-own it; when anxiety arises about its presence, they can collectively decide to reprogram it differently."
    ],
    "lessons_or_failures": "Schneider uses Common as a generative provocation: trust in AI systems can flow from co-ownership and democratic governance rather than from corporate paternalism. The story also illustrates how communities on the margins — rather than Silicon Valley or MIT — can lead in developing accountable technology when given the structural conditions to do so. It is offered as 'science fictional behavior' that seeds imagination for real policy.",
    "source_chapter": "Ch. 6",
    "source_quote": "Common is governed by a federation of collective institutions from all over the world that are devoted to the mission of AI as a public resource. Anyone can add knowledge to Common, and there is a democratic process to building the hardware necessary to carry the AI. Common is decentralized and spread across all of the devices that run its software."
  },
  {
    "id": "karrot-food-sharing-governance",
    "name": "Karrot (European food-sharing platform)",
    "domain": "online_community",
    "brief": "A European food-sharing platform whose governance design requires collective group process — rather than unilateral admin action — to remove a community member.",
    "community": "Local food-sharing community groups across Europe",
    "governance_form_ids": [
      "collective-decision-making",
      "consent-based-moderation"
    ],
    "democratic_features": [
      "Member removal requires a group process rather than the fiat of a single administrator, distributing moderation authority across the community.",
      "The design reflects a relational conception of the self: individuals are treated as a nexus of relationships rather than as isolated users subject to top-down control.",
      "Default settings assume decision-making is a collective affair, inverting the typical platform pattern of permission assignment to individual admins."
    ],
    "lessons_or_failures": "Schneider cites Karrot as evidence that modular politics is practically achievable: platforms can be designed so that power over membership is collective rather than feudal. The arrangement is 'well outside the norms of social-media systems' but demonstrates that democratic structuring in platform design is not merely theoretical.",
    "source_chapter": "Ch. 6",
    "source_quote": "For instance, the European food-sharing platform Karrot allows a local community to remove a member only through a group process, rather than by the fiat of a single administrator."
  },
  {
    "id": "nursescan-cooperative-platform",
    "name": "NursesCan (SEIU-UHW proposed gig cooperative)",
    "domain": "platform_cooperative",
    "brief": "A proposed worker-owned gig platform initiated by SEIU-UHW to connect patients with nurses for at-home healthcare, abandoned when investor-backed competitors proved insurmountable under existing capital structures.",
    "community": "SEIU-UHW healthcare workers in California",
    "governance_form_ids": [
      "worker-cooperative-ownership",
      "collective-bargaining"
    ],
    "democratic_features": [
      "The platform was designed so that union members would co-own it, aligning governance rights with the workers who perform the labor.",
      "Its failure to launch due to venture-capital competition directly motivated the broader Cooperative Economy Act proposal, illustrating how institutional context shapes the viability of democratic alternatives."
    ],
    "lessons_or_failures": "NursesCan failed not because of its design but because the surrounding policy environment — built for investor ownership and venture capital — denied it the capital necessary to compete. Schneider uses this case to show that platform cooperativism requires changed underlying rules, not just creative entrepreneurship.",
    "source_chapter": "Ch. 6"
  },
  {
    "id": "california-cooperative-economy-act",
    "name": "California Cooperative Economy Act",
    "domain": "state",
    "brief": "A proposed California state law, introduced in 2021, that would create a federation of tax-advantaged, employee-owned cooperatives able to collectively bargain with online labor platforms.",
    "community": "Platform workers in California, initially focused on SEIU-UHW nurses and other non-driver gig workers",
    "governance_form_ids": [
      "worker-cooperative-ownership",
      "federated-governance",
      "collective-bargaining"
    ],
    "democratic_features": [
      "Workers would elect their cooperatives' leaders, establishing democratic accountability within the federated structure.",
      "The federation model allows workers to collectively bargain over platform terms without requiring the platforms to employ them directly, preserving worker agency in the gig economy.",
      "The proposal draws on the Hollywood guild model — enabling workers to move across jobs while retaining union representation and profit-sharing — as a precedent for democratizing platform work.",
      "Tax advantages are structured to incentivize cooperative formation, provisioning democratic organization with public resources."
    ],
    "lessons_or_failures": "Schneider presents this as an example of how policy can reallocate coordination rights — currently structured to favor platform managerial control — toward workers. The proposal shows that governable work requires state-level provisioning; improvised worker self-organization (like Colombian driver chats) remains precarious without legal backing.",
    "source_chapter": "Ch. 6"
  },
  {
    "id": "colombian-driver-guild-chats",
    "name": "Colombian platform-driver guild networks",
    "domain": "online_community",
    "brief": "Informal guild-like clubs formed by ride-share drivers in Colombian cities, using group chats and peer-to-peer payment apps to reduce dependence on corporate platforms.",
    "community": "Platform-based drivers in Colombian cities",
    "governance_form_ids": [
      "peer-governance",
      "informal-commons"
    ],
    "democratic_features": [
      "Drivers have developed guild-like clubs with rules for membership and conduct, establishing norms outside corporate platform terms.",
      "Payments flow through peer-to-peer apps, partially bypassing platform intermediaries and their fee and rating structures.",
      "Group chats serve as coordination infrastructure for collective action and information-sharing, creating persistent relationships that corporate gig apps are designed to prevent."
    ],
    "lessons_or_failures": "Schneider acknowledges these as genuine instances of workers governing spaces of their own, but frames them as precarious and improvised. Without policy structures backed by state power, such self-governance cannot reliably hold its own against wealthy platform companies — illustrating that informal ingenuity is necessary but insufficient.",
    "source_chapter": "Ch. 6"
  },
  {
    "id": "magnolia-road-internet-cooperative",
    "name": "Magnolia Road Internet Cooperative",
    "domain": "platform_cooperative",
    "brief": "A member-owned internet service cooperative in the Rocky Mountain foothills of Colorado, where neighbors provide connectivity for each other using shared equipment they install and repair themselves.",
    "community": "Rural neighbors in the Colorado foothills",
    "governance_form_ids": [
      "cooperative-ownership",
      "commons-governance"
    ],
    "democratic_features": [
      "Consumer-members of the co-op learn to install, use, and repair the equipment themselves, building technical capacity that challenges the mystification of infrastructure.",
      "The cooperative is member-owned, meaning governance and service provision are unified in the same community of users.",
      "The co-op participates in a broader tradition of community-governed communications infrastructures, some over a century old, throughout rural Colorado."
    ],
    "lessons_or_failures": "Schneider uses this case to challenge the assumption that network infrastructure is comprehensible only to national telecom giants. Community-governed internet infrastructure has a long and successful track record that corporate monopoly logic systematically obscures. It also illustrates that bottom-up provisioning of infrastructure is not just possible but has historical precedent.",
    "source_chapter": "Ch. 6"
  },
  {
    "id": "fire-feminist-radio-internet-costa-rica",
    "name": "Feminist International Radio Endeavor (FIRE)",
    "domain": "public_infrastructure",
    "brief": "A Costa Rica-based feminist media organization that began with community radio and moved online with the early internet, exemplifying women-led governance of communications infrastructure as an act of resistance.",
    "community": "Women and feminist communities in Costa Rica and Latin America",
    "governance_form_ids": [
      "community-governance",
      "commons-governance"
    ],
    "democratic_features": [
      "FIRE began with community radio — a space for women to organize outside traditional gender roles — and extended that governance model to internet infrastructure.",
      "The project is part of a broader Latin American tradition of microtelcos and community media led by women, treating infrastructure governance as an ecofeminist practice of care.",
      "Governing the infrastructure was itself an act of resistance against others' expectations of what marginalized communities are capable of."
    ],
    "lessons_or_failures": "Schneider draws on FIRE and related Latin American cases to show that feminist and community-governed infrastructure has a long history of filling gaps left by corporate providers and of explicitly resisting patriarchal and extractive economies. This history provides a grounding for policy arguments that community infrastructure control is both feasible and transformative.",
    "source_chapter": "Ch. 6"
  },
  {
    "id": "france-citizens-convention-climate",
    "name": "France Citizens' Convention for Climate",
    "domain": "state",
    "brief": "A randomly selected citizen assembly convened by President Macron in 2019 following the Yellow Vest protests, tasked with devising equitable climate policies — but ultimately advisory and disconnected from actual flows of power.",
    "community": "Randomly selected French citizens, receiving payment for participation",
    "governance_form_ids": [
      "sortition",
      "citizen-assembly"
    ],
    "democratic_features": [
      "Participants were selected at random, following a sortition model rather than electoral representation, and received payment — a form of social provisioning — for their involvement.",
      "The assembly studied economics and climate change to develop policy proposals, combining deliberation with subject-matter learning.",
      "Some proposals from the assembly found their way to legislatures, showing that advisory assemblies can have downstream policy effects even without binding authority."
    ],
    "lessons_or_failures": "Schneider treats this as a cautionary example of governable space without real stakes. Because the assembly was largely advisory and disconnected from actual power flows, it was widely perceived as elite-driven performance rather than legitimate self-governance. It did not correct the power imbalances that provoked the Yellow Vest protests. The lesson is that provisioning a deliberative space is insufficient unless it comes with genuine decision-making authority — echoing Ostrom's insistence that self-governance arises from common resources with something at stake.",
    "source_chapter": "Ch. 6"
  },
  {
    "id": "gitcoindao-stewardship-governance",
    "name": "GitcoinDAO",
    "domain": "dao",
    "brief": "A DAO formed in 2021 to govern the Gitcoin cryptocurrency donation platform, using token-based delegative voting with elected stewards, scorecards, and an evolving culture of governance skill-building.",
    "community": "Workers, users, and investors who received tokens based on contributions; a global network of public-goods funders",
    "governance_form_ids": [
      "token-voting",
      "delegative-voting",
      "sortition"
    ],
    "democratic_features": [
      "Token-holders can delegate their voting power to stewards, creating a delegative representative structure within the DAO.",
      "A public website (daostewards.xyz) provides transparent scorecards on steward participation, making governance performance legible to the community.",
      "A Steward Council was created to support engaged stewards in being more informed and forward-thinking, layering representative structure on top of token-holder participation.",
      "Interactive primers and informal schools formed to train new contributors, treating governance skill-building as an ongoing community practice.",
      "The DAO has had to navigate both market boom and bust cycles, forcing the community to develop discipline and focus on human governance processes when technical and financial conditions changed."
    ],
    "lessons_or_failures": "Schneider draws on his own failed experience as a Gitcoin steward to illustrate the tension between transparency and mystification: well-intended openness can paralyze rather than empower when participants lack context. GitcoinDAO also demonstrates the ratchet dynamic of governable spaces — code and culture creating each other — where political skill development generates demand for better governance software. The case is framed as one example of thousands of network-native collectives searching out new organizational niches.",
    "source_chapter": "Ch. 6",
    "source_quote": "Watching GitcoinDAO—just one among thousands of such network-native collectives—is like seeing a new kind of organism searching out its niche. Code and culture are creating each other."
  },
  {
    "id": "exit-to-community",
    "name": "Exit to Community (E2C)",
    "domain": "platform_cooperative",
    "brief": "A movement and slogan coined by Schneider in 2019 proposing that venture-backed startups transition ownership and governance to their communities of users and workers, rather than exiting through acquisition or IPO.",
    "community": "Startup founders, platform workers, users, and cooperative organizers across the online economy",
    "governance_form_ids": [
      "cooperative-ownership",
      "democratic-ownership-transition"
    ],
    "democratic_features": [
      "E2C proposes that founders use mechanisms such as dual-class stock, purpose trusts, cooperatives, and nonprofits to bring direct participants into ownership and governance structures.",
      "The concept challenges the default startup logic of 'market dominance' and 'liquidity events,' reframing successful entrepreneurship as transition to community control rather than sale to the highest bidder.",
      "E2C has spread most widely in blockchain contexts, where conventional securities laws apply ambiguously and community ownership is at least a default aspiration, illustrating how regulatory environment shapes the viability of democratic exits."
    ],
    "lessons_or_failures": "Schneider reflects candidly that E2C is hard to implement under dominant policy regimes: securities law knows how to deal with investors and (to a degree) employees but not with users working over networks. Reaching a meaningful share of the economy requires changing underlying incorporation statutes and financial-system rules, not just creative entrepreneurship. The concept is presented as both a practical tool and a provocation for policy reform.",
    "source_chapter": "Ch. 6",
    "source_quote": "E2C is an invitation for startups to explore bringing their most direct participants into structures of ownership and governance. I have worked with dozens of founders attempting to implement it in their companies. They employ mechanisms such as dual-class stock, purpose trusts, cooperatives, nonprofits, and more."
  },
  {
    "id": "meta-oversight-board",
    "name": "Meta Oversight Board",
    "domain": "online_community",
    "brief": "An external quasi-judicial body formed by Meta in the late 2010s to review content moderation decisions, creating a meaningful check on company behavior while falling short of direct user accountability.",
    "community": "Facebook and Instagram users globally; members appointed by Meta and its designees",
    "governance_form_ids": [
      "oversight-board",
      "delegated-review"
    ],
    "democratic_features": [
      "The Oversight Board operates as an external organization, creating structural separation from Meta management and enabling rulings that create a meaningful check on company behavior.",
      "Its decisions establish precedent that the company is expected to follow, introducing rule-of-law logic into platform governance.",
      "Schneider notes the board's members are chosen by the company and its designees rather than by users, identifying this as a current limitation that future design might correct through user elections."
    ],
    "lessons_or_failures": "Schneider frames the Oversight Board as an incremental but limited step — democracy theatre replaced by something more substantive, but still not genuinely accountable to ordinary users. It demonstrates that large platforms can externalize power voluntarily when under public scrutiny, and that the path toward user-elected governance bodies is at least thinkable from this foundation.",
    "source_chapter": "Ch. 6"
  },
  {
    "id": "global-covenant-of-mayors",
    "name": "Global Covenant of Mayors for Climate & Energy",
    "domain": "state",
    "brief": "An international network enabling cities to link climate commitments across borders, independent of national governments, illustrating a cross-territorial governance layer that remaps political jurisdiction.",
    "community": "Municipal governments worldwide committed to climate action",
    "governance_form_ids": [
      "federated-governance",
      "peer-governance"
    ],
    "democratic_features": [
      "Cities can make and coordinate binding climate commitments independently of their national governments, creating a horizontal layer of governance that bypasses state-level political stalemates.",
      "The network exemplifies what Schneider calls remapping political terrain: finding governance jurisdictions more suited to the actual scale of a problem than existing territorial boundaries.",
      "Member cities share more in common with each other across national borders than with their own surrounding countrysides, reflecting an affinity-based rather than accident-of-birth model of political association."
    ],
    "lessons_or_failures": "Schneider uses the Global Covenant of Mayors as evidence that cross-territorial governance layers are already forming around problems that transcend national jurisdiction — climate, internet governance — and that ceding authority to such layers can unlock action blocked at the nation-state level. The analog for online platforms is that social-media users worldwide could govern their own platforms' codes of conduct rather than deferring to the country where servers happen to be located.",
    "source_chapter": "Ch. 6"
  },
  {
    "id": "germany-nextcloud-public-procurement",
    "name": "German government Nextcloud / French Matrix adoption",
    "domain": "public_infrastructure",
    "brief": "Public procurement decisions by the German and French governments favoring commons-based collaborative software (Nextcloud and Matrix), demonstrating how state purchasing power can seed governable stacks globally.",
    "community": "German and French government employees; downstream communities worldwide who deploy the same open-source tools",
    "governance_form_ids": [
      "commons-governance",
      "public-procurement"
    ],
    "democratic_features": [
      "By adopting commons-based software like Nextcloud (file-sharing) and Matrix (chat), these governments invest in tools that can then be self-managed by communities anywhere in the world.",
      "Public procurement of open-source infrastructure enables people to move more of their digital lives into more governable stacks, since the software remains open, forkable, and community-controllable.",
      "The investment creates a global commons of governable tools, linking state action to distributed community self-governance."
    ],
    "lessons_or_failures": "Schneider presents public procurement preference for commons-based software as a concrete policy lever: government adoption creates the investment, maintenance, and legitimacy that makes these tools viable at scale. FemProcomuns' use of Nextcloud in Barcelona's Commons Cloud illustrates how one government's procurement decision becomes another community's governable infrastructure.",
    "source_chapter": "Ch. 6"
  },
  {
    "id": "native-land-ca-overlapping-territories",
    "name": "Native-Land.ca Overlapping Indigenous Territories",
    "domain": "public_infrastructure",
    "brief": "A web-based map representing Indigenous territories as overlapping regions rather than exclusive bounded jurisdictions, visualizing non-exclusive sovereignties as an alternative model for thinking about co-governance.",
    "community": "Indigenous peoples and the general public engaging with questions of land, territory, and governance",
    "governance_form_ids": [
      "non-exclusive-sovereignty",
      "subsidiarity"
    ],
    "democratic_features": [
      "Territories are rendered as overlapping color regions rather than hard boundary lines, embodying the principle that multiple nations can hold stewardship over the same place simultaneously.",
      "The map refuses the colonial assumption of exclusive domain, reflecting Indigenous seasonal and migratory governance arrangements that permitted coexistence across shared lands.",
      "The visualization serves as a metagovernance artifact — shaping background conditions for how users conceptualize jurisdiction, sovereignty, and community."
    ],
    "lessons_or_failures": "Schneider uses Native-Land.ca as a closing image for the whole book's argument: that non-exclusive, overlapping jurisdictions are not utopian fantasies but documented historical practice, and that visualizing them is itself a governance act that conditions how we imagine online and offline co-governance.",
    "source_chapter": "Epilogue",
    "source_quote": "The territories appear not as the space between borderlines but as overlapping regions of color. Where I live, three regions intersect, those of the nations known in English as the Arapaho, Cheyenne, and Ute. All three have been stewards of this place. But they have not claimed exclusive domain over it, since their seasonal, migratory ways of life long permitted them to coexist."
  },
  {
    "id": "project-cybersyn-chile",
    "name": "Project Cybersyn (Chile, 1970s)",
    "domain": "public_infrastructure",
    "brief": "Salvador Allende's pre-internet computer network designed to give Chilean workers and government real-time economic information flows under democratic state control, operating from a stylized nerve-center in Santiago.",
    "community": "Chilean workers, factory managers, and the Allende government",
    "governance_form_ids": [
      "democratic-mediation",
      "governable-stack"
    ],
    "democratic_features": [
      "Cybersyn aggregated real-time production data from factories across Chile into a centralized but publicly oriented decision-support system, aiming to make economic governance transparent and participatory.",
      "The system was designed to route information upward from workers and downward from planners, creating a two-way flow rather than a top-down command structure.",
      "Schneider invokes it as an early instantiation of what a 'governable space' could look like at national scale — a convergence of transparent information flows and democratic control."
    ],
    "lessons_or_failures": "Schneider poses Cybersyn as an aspirational horizon: what would it look like if every community had such a convergence of transparent information and democratic decision-making? The project was cut short by the 1973 coup, underscoring that even well-designed democratic infrastructure requires supportive political conditions to survive.",
    "source_chapter": "Epilogue",
    "source_quote": "The Chilean president Salvador Allende attempted to make his country a governable space with Project Cybersyn, a pre-internet computer network headquartered at a stylized nerve center in the capital. How would the world look and feel if each of our communities were a Cybersyn, a convergence of transparent information flows and decisions, under democratic control?"
  }
];
