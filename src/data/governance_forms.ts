import type { GovernanceForm } from '../types.js';

export const GOVERNANCE_FORMS: GovernanceForm[] = [
  {
    "id": "rough-consensus",
    "name": "Rough Consensus",
    "description": "Rough consensus is an informal, embodied process of collective decision-making in which participants signal assent or dissent through social cues, body language, and networked communication rather than formal voting. Schneider opens the book with a picnic-under-a-tree scene where families assess weather conditions and each other's reactions, arriving at a shared decision to leave without any explicit vote or designated authority. The process relies on cross-pollinating information across social clusters, reading the critical mass of sentiment, and allowing informal leaders within subgroups to make calls that others follow. Schneider contrasts this with the flattened, indecisive chatter of a group chat, where the textured topology of relationship collapses and no mechanism exists to steer debate into decision.",
    "diagnostic_questions": [
      "Does the group have shared social context and embodied cues that allow members to read each other's dispositions without formal voting?",
      "Are there recognizable informal leaders or trusted nodes within subgroups whose signals others follow?",
      "Is there a mechanism — even informal — for registering when critical mass has shifted and a decision has effectively been made?",
      "Does the move to an online medium flatten or destroy the relational topology that rough consensus depends on?"
    ],
    "countered_failure_mode_ids": [],
    "example_case_ids": [
      "picnic-group-chat"
    ],
    "source_chapter": "Introduction"
  },
  {
    "id": "bylaws-based-self-governance",
    "name": "Bylaws-Based Community Self-Governance",
    "description": "Bylaws-based self-governance is a form of associational governance in which a community codifies its rules, roles, and dispute-resolution procedures in a formal written document that members can consult when decisions need to be made or conflicts arise. Schneider illustrates this through his mother's neighborhood garden club, whose eight-page bylaws — with articles, sections, and enumerated subsections — have governed the club since the 1960s. Though members do not speak in the formal register of the bylaws in daily interaction, the document provides a reliable, shared path forward when the community faces contested decisions. Schneider contrasts this durable infrastructure with the absence of equivalent mechanisms in most online spaces, where admins hold unilateral power and no template for elections, dispute resolution, or ground rules exists.",
    "diagnostic_questions": [
      "Does the community have a written governance document that members can consult when conflicts arise?",
      "Are roles such as officers or decision-makers defined by the document rather than by platform-assigned admin privileges?",
      "Does the governance document include mechanisms for elections, dispute resolution, and amendment?",
      "Has the governance structure persisted across leadership transitions over years or decades?"
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
    "id": "sortition",
    "name": "Sortition (Random Selection of Officeholders)",
    "description": "Sortition is a form of democratic selection in which officeholders or decision-makers are chosen at random from the eligible community rather than through competitive election or appointment. Schneider invokes C. L. R. James's 1950s essay 'Every Cook Can Govern,' which imagines labor unions reviving ancient Greek direct democracy by appointing officeholders at random, as a provocation about what politics would look like if every person were trusted with the right and ability to self-govern. Schneider later flags sortition — described as 'jury-like sortition' — as one of several governance forms appropriate to different contexts within a broader framework of governable spaces, alongside more participatory, representative, and market-based alternatives. The form embodies a radical faith in ordinary people's capacity for self-governance.",
    "diagnostic_questions": [
      "Is the community large enough that random selection would produce a representative cross-section of members?",
      "Does the decision-making task require legitimacy grounded in popular trust rather than specialized expertise?",
      "Would competitive election or appointment tend to concentrate power among the already-powerful?",
      "Is there a defined scope and term for the randomly selected body so that participation is bounded and manageable?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism"
    ],
    "example_case_ids": [],
    "source_chapter": "Introduction"
  },
  {
    "id": "participatory-budgeting",
    "name": "Participatory Budgeting",
    "description": "Participatory budgeting is a governance form in which residents or community members directly decide how to allocate a portion of a public budget, giving citizens binding voice over resource allocation rather than merely advisory input. Schneider cites the advent of participatory budgeting in Porto Alegre, Brazil in 1989 as one of several 'ruptures' in territorial governance that have introduced new forms of citizen voice, often with digital media in hand. He treats it as part of a broader category of experiments — alongside digital deliberation platforms in Barcelona and Taiwan, wiki-style constitution-drafting, and citizens' assemblies — that suggest partial openness among some governments to richer feedback loops than periodic elections. Schneider notes, however, that most such innovations remain advisory rather than meaningfully binding, revealing the resistance of existing governments to departing from their 'rigid routine.'",
    "diagnostic_questions": [
      "Is there a defined pool of public resources over which community members can exercise binding rather than merely advisory decision-making authority?",
      "Are the participants representative of the affected community, including those who would not typically engage in formal political processes?",
      "Does the process include deliberative stages — not just voting — so that participants can learn about trade-offs before deciding?",
      "Is the outcome actually implemented, or does it feed back into a technocratic or representative decision-making process that can override it?"
    ],
    "countered_failure_mode_ids": [],
    "example_case_ids": [
      "porto-alegre-participatory-budgeting"
    ],
    "source_chapter": "Introduction"
  },
  {
    "id": "cooperative-governance",
    "name": "Cooperative Democratic Governance (One Member, One Vote)",
    "description": "Cooperative governance is a form of economic democracy in which every member — whether worker, customer, or user — holds an equal vote in the organization's decisions, enacting democratic principles within the structure of an enterprise rather than a governmental body. Schneider traces this form to the Chartist movement in nineteenth-century England, where factory workers demanding electoral rights formed cooperative stores with equal customer votes as a way of exercising and proving their democratic capacities. He connects this lineage through abolitionist allies like Frederick Douglass, Black liberation movements, and Populist organizers in the American West, who saw cooperatives as a defense against demagogic appeals to exploited farmers. Schneider frames cooperative governance as a paradigmatic 'offline governable space' that cultivates democratic muscle through everyday economic practice, with spillover effects into broader political life.",
    "diagnostic_questions": [
      "Do all members of the organization — workers, users, or customers — hold equal formal voting rights over key decisions?",
      "Are governance documents (bylaws, articles of incorporation) structured to prevent concentration of control among founders or investors?",
      "Is there a regular democratic process — meetings, elections, referenda — through which members exercise their voice on substantive matters?",
      "Does participation in cooperative governance demonstrably build members' capacity for broader civic and political engagement?"
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
    "id": "town-meeting-governance",
    "name": "Town Meeting / Direct Community Rule-Setting",
    "description": "Town meeting governance is a direct-democratic form in which all members of a community gather regularly to set rules, deliberate on policy, and make binding decisions collectively rather than delegating authority to representatives or administrators. Schneider illustrates this form autobiographically, describing the weekly town meetings at his democratic public high school where students participated in setting the school's rules and led the design of a new admissions policy. He presents this experience as formative evidence that when people are given a real chance to self-govern — with the guidance and infrastructures they need — they rise to the occasion, and that such experiences leave a lasting impression of democracy's possibility. The form resonates with Tocqueville's account of American civic association and with C. L. R. James's call for direct democracy in everyday institutions.",
    "diagnostic_questions": [
      "Is the community small enough that all members can meaningfully participate in a single deliberative forum?",
      "Are decisions made in the town meeting binding rather than merely advisory to an administrative authority?",
      "Is there a regular schedule and clear agenda process that makes participation predictable and accessible?",
      "Are facilitators or structures in place to ensure that less powerful or less confident members can participate on equal terms with more vocal ones?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism"
    ],
    "example_case_ids": [
      "democratic-high-school-town-meeting"
    ],
    "source_chapter": "Introduction"
  },
  {
    "id": "benevolent-dictator-for-life",
    "name": "Benevolent Dictator for Life (BDFL)",
    "description": "A governance form in which a single founding individual retains ultimate, indefinite authority over a project or community — accepting contributions from many participants but holding final say over canonical decisions. The Linux kernel under Linus Torvalds and the Python language under Guido van Rossum are canonical examples. The BDFL model frequently emerges not from explicit ideological choice but from a power vacuum left by absent governance structures, which implicit feudalism stands ready to fill. Schneider frames it as 'explicit dictatorship' produced by a 'culture of omission' rather than intention.",
    "diagnostic_questions": [
      "Is there a single named individual whose approval is required before any official release, policy change, or major decision takes effect?",
      "Does that individual's authority derive from founding the project rather than from any electoral or consent-based process?",
      "Is there a documented succession mechanism, or does the community lack any plan for what happens when the founder steps back?",
      "Have community members attempted to introduce codes of conduct or explicit governance rules, and has that been resisted as a distraction from the core work?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "tyranny-of-structurelessness"
    ],
    "example_case_ids": [
      "linux-kernel-bdfl",
      "python-bdfl-to-steering-council",
      "wikipedia-jimmy-wales-founder-role",
      "ubuntu-sabdfl"
    ],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "elected-steering-council",
    "name": "Elected Steering Council",
    "description": "A governance form in which community members elect a small, fixed-size body — typically five or so people — to hold collective authority over a project's direction in place of a single dictator. Python's adoption of a five-person elected steering council after Guido van Rossum's 2018 resignation is Schneider's central example. The transition was made possible by an existing, legitimate decision-making infrastructure (the Python Enhancement Proposal system) that gave the community a recognized process for evaluating radically divergent governance proposals and converging on a conventional result. Schneider presents it as evidence that the end of feudal governance is possible with adequate institutional scaffolding.",
    "diagnostic_questions": [
      "Does the community already have a recognized, legitimate process — such as a proposal system or constitution — through which governance changes can be deliberated?",
      "Is there a defined electorate (e.g., active developers or contributors) whose votes would be considered binding?",
      "Is the community large and developed enough that distributing authority across several elected people reduces single-point-of-failure risk?",
      "Has a disruption (e.g., a founder's resignation or a crisis) created an opening for governance redesign that the community is motivated to use?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "bdfl-power-vacuum",
      "tyranny-of-structurelessness"
    ],
    "example_case_ids": [
      "python-bdfl-to-steering-council"
    ],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "meritocratic-electoral-republic",
    "name": "Meritocratic Electoral Republic",
    "description": "A governance form that combines open electoral processes with meritocratic barriers to participation, so that leaders must demonstrate both popular support and substantive expertise. Schneider points to Debian and Wikipedia as exemplars: Debian developers join through a detailed on-boarding process and then elect a 'project leader,' while Wikipedia users ascend tiered roles — administrator, steward, bureaucrat — through peer election. The combination is presented as a 'mixed constitution' logic that prevents any single entity from becoming too powerful and creates multiple pathways for participants with heterogeneous skills to exercise effective voice.",
    "diagnostic_questions": [
      "Does the community have a defined membership or contributor class whose qualifications can be evaluated prior to granting voting rights?",
      "Are leadership roles filled by election among that qualified membership, rather than by founder appointment or self-perpetuating succession?",
      "Are there multiple tiers of role and responsibility so that participants with different skill sets — technical, social, administrative — can each find a legitimate pathway to influence?",
      "Does the community operate under a nonprofit or user-owned structure that reduces pressure to subordinate governance to commercial imperatives?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "bdfl-power-vacuum",
      "self-perpetuating-succession"
    ],
    "example_case_ids": [
      "debian-project-governance",
      "wikipedia-governance",
      "apache-software-foundation-governance"
    ],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "karma-based-fluid-moderation",
    "name": "Karma-Based Fluid Moderation",
    "description": "A governance form in which moderation authority is not fixed in appointed admins but is distributed fluidly among users based on reputation scores accrued through peer endorsement. Slashdot's system — in which users gained moderation and 'metamoderation' powers as their karma rose — is Schneider's primary example. Rather than a Debian-style electoral republic, this approach uses mutual endorsement as a dynamic, continuous form of legitimation. Schneider treats it as an 'exception that proves the rule' of implicit feudalism among early commercial platforms, demonstrating that open, dynamic user empowerment can manage large-platform content in ways users generally find satisfactory.",
    "diagnostic_questions": [
      "Is there a transparent, publicly visible reputation or karma score that accrues from peer evaluations of a user's contributions?",
      "Do moderation or curation powers scale with that score rather than being assigned once by a founder or admin?",
      "Is there a metamoderation or appeals layer that allows the community to evaluate the quality of moderation decisions themselves?",
      "Does the community have a sufficiently tech-savvy or invested user base willing to engage with a multi-layered reputation system?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "admin-appointed-moderation"
    ],
    "example_case_ids": [
      "slashdot-karma-moderation"
    ],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "proposal-based-policy-system",
    "name": "Proposal-Based Policy System",
    "description": "A governance form in which community members submit, discuss, and formally adopt changes to rules, norms, or technical decisions through a structured proposal process — rather than through ad hoc admin decree. The Python Enhancement Proposal (PEP) system is Schneider's key example: a set of processes and tools designed for proposing and adopting changes that the community perceives as both familiar and legitimate. Schneider argues that such a system can fill the power vacuum left by a departing dictator, because it gives the community an existing decision-making infrastructure capable of ushering participants from radically divergent options to a sensible collective result. Wikipedia's governance through editable policy pages and 'Talk' pages represents an analogous, if less formalized, instantiation.",
    "diagnostic_questions": [
      "Does the community have an established, recognized format and venue for submitting and discussing proposed changes to rules or direction?",
      "Are proposals subject to a defined deliberation period and some form of community input before being adopted or rejected?",
      "Is the proposal process itself perceived as legitimate by the community, such that its outcomes are treated as binding or near-binding?",
      "Does the system provide a paper trail of reasoning that helps later participants understand why current norms exist?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "bdfl-power-vacuum",
      "opacity-of-policymaking"
    ],
    "example_case_ids": [
      "python-bdfl-to-steering-council",
      "wikipedia-governance"
    ],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "mixed-constitution-layered-governance",
    "name": "Mixed-Constitution / Layered Governance",
    "description": "A governance form that deliberately combines multiple power structures — electoral, meritocratic, dictatorial, and federated — into a single system or ecosystem, drawing on the classical idea of a 'mixed constitution.' Schneider illustrates this with the Debian-Ubuntu-Linux onion: the Linux kernel's rigid BDFL sits at the center; Debian's democratic, inclusive process holds a middle layer; Ubuntu's for-profit, founder-led structure sits above, benefiting from Debian's inclusiveness while maintaining a faster release cycle. Usenet similarly combines board-level shared governance with considerable autonomy among individual newsgroups. The logic is that integrating multiple governance mechanisms prevents any one entity from becoming too powerful and accommodates participants with heterogeneous skills and needs.",
    "diagnostic_questions": [
      "Does the system operate at multiple layers or scales, each of which might warrant a different governance logic?",
      "Are there identifiable niches in the supply chain or organizational stack where democratic participation is more feasible than at others?",
      "Does the community include participants with very different skill sets — technical, social, administrative — who need distinct pathways to effective voice?",
      "Is there a risk that a single governance form would be captured by one faction, which a mixed structure could mitigate?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "bdfl-power-vacuum",
      "self-perpetuating-succession"
    ],
    "example_case_ids": [
      "debian-project-governance",
      "linux-kernel-bdfl",
      "ubuntu-sabdfl",
      "usenet-big8-governance"
    ],
    "source_chapter": "Ch. 2"
  },
  {
    "id": "political-skills-everyday-governance",
    "name": "Political Skills as Everyday Governance",
    "description": "Political skills as everyday governance is a framework, drawing on Philip Agre's lattice model and adrienne maree brown's fractal organizing, in which democratic capacity is understood as arising from the cumulative, mundane practices of community life rather than from formal institutional design. Schneider presents Agre's four dimensions — vertical, geographic, institutional, and ideological — as the intersecting scales at which skills developed in small everyday interactions propagate into larger political structures. Governance here is not a constitutional arrangement but a disposition cultivated through repeated practice: facilitation, consensus-making, deliberate interdependence, and accountable association.",
    "diagnostic_questions": [
      "Are governance practices developed through repeated small-scale interactions before being formalized or scaled?",
      "Do participants actively develop facilitation, deliberation, and persuasion skills as part of normal community participation?",
      "Does the governance design emerge from what participants are already doing offline, rather than from technical convenience or a business model?",
      "Are the skills exercised across multiple scales — local to global, institutional to ideological — rather than confined to a single register?",
      "Does the community treat everyday relational practice as the primary site of democratic accountability?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "politics-of-no-politics"
    ],
    "example_case_ids": [
      "occupy-wall-street-assembly",
      "loomio-consensus-decision-making",
      "adrienne-maree-brown-instagram-thread"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "peoples-history-assembly",
    "name": "People's History Assembly",
    "description": "A collective memory-gathering event and process through which a dispersed user community builds shared identity by narrating its own past before attempting any formal self-governance. Schneider's 'A People's History of Twitter' project organized an online event, a chatbot for experience-sharing, and collaboration with former workers and citizen-assembly practitioners to ground governance imagination in lived history. The premise is that a community needs to see itself as a community—through storytelling and shared experience—before it can begin to self-govern.",
    "diagnostic_questions": [
      "Does the community have a shared account of its own history, or are users only aware of the platform owner's narrative?",
      "Have participants had structured opportunities to articulate what they valued and what they felt was betrayed about the space?",
      "Is there a foundation of collective memory that could anchor expectations for future governance?",
      "Have former builders or workers of the platform been included in the historical reflection?",
      "Is the community at a transitional moment—moving from being users of someone else's platform toward claiming citizenship in the network?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "politics-of-no-politics"
    ],
    "example_case_ids": [
      "peoples-history-of-twitter"
    ],
    "source_chapter": "Profile: A People's History of Twitter"
  },
  {
    "id": "subsidiarity-local-control",
    "name": "Subsidiarity: Prioritizing Appropriately Local Control",
    "description": "Subsidiarity is a governance principle that prioritizes local control wherever possible within a larger system, scaling only what genuinely benefits from scale. First articulated in Calvinist and Catholic theology and later incorporated into the European Union's founding documents, subsidiarity appears across durable forms of social order — from common-law judicial systems to the distributed authority structure of Sunni Islam. Schneider contrasts subsidiarity with scalability (the venture-capital logic of expanding without rethinking basic elements), arguing that online spaces built with deep subsidiarity push value and governance power to the edges of a network rather than accumulating both at a central server or corporate owner. Subsidiarity can be federalist (smaller units nested within bigger ones) or polycentric (smaller units connected laterally across a network).",
    "diagnostic_questions": [
      "Does the platform or network push governance power and value to its edges — to local communities and individual users — rather than concentrating them in a central owner or server?",
      "Are there mechanisms for communities at different scales (neighborhood, network, federation) to develop context-sensitive processes appropriate to their culture?",
      "Is local autonomy balanced with accountability relationships to larger systems, so that communities can also hold each other accountable?",
      "Does the governance structure allow smaller units to seek mutual help from peers laterally (polycentric) as well as from higher levels (federalist)?",
      "Can facilitators and community members customize processes without requiring approval from a distant corporate office or algorithmic enforcer?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "scalability-over-subsidiarity",
      "politics-of-no-politics"
    ],
    "example_case_ids": [
      "mastodon-federated-moderation",
      "slack-federalist-workspace",
      "hollow-water-ojibway-accountability"
    ],
    "source_chapter": "Ch. 3"
  },
  {
    "id": "community-accountability-process",
    "name": "Community Accountability Process (Transformative Justice)",
    "description": "Community accountability processes are participant-centered practices developed within transformative justice that address harm through conversation, circle-based dialogue, and shared responsibility among affected community members — rather than through punitive enforcement by police or courts. Rooted in the work of practitioners like Mariame Kaba and the Creative Interventions Toolkit, these processes involve trusted facilitators, voluntary participation, and attention to the root causes of harm (including structural injustices) alongside the immediate incident. The goal is to repair harm and enable healthier relationships, not to punish and coerce. Practitioners deliberately keep these processes out of corporate-controlled social media, stressing that community accountability inhabits a temporality distinct from viral social-media time.",
    "diagnostic_questions": [
      "Are affected community members — rather than external authorities — the primary agents in designing and running the accountability process?",
      "Is participation voluntary, and does the process allow affected parties to move at their own pace rather than conforming to algorithmic or institutional timelines?",
      "Does the process address root causes and structural contexts of harm, not just the immediate incident?",
      "Are facilitators present who have cultivated specific skills for running accountability processes, including personal development and self-reflection?",
      "Is the process shielded from external enforcement mechanisms (corporate platforms, algorithmic moderation) that would impose context-blind rules?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "scalability-over-subsidiarity",
      "punitive-platform-enforcement"
    ],
    "example_case_ids": [
      "hollow-water-ojibway-accountability",
      "creative-interventions-toolkit",
      "one-million-experiments"
    ],
    "source_chapter": "Ch. 3"
  },
  {
    "id": "liquid-democracy-delegation",
    "name": "Liquid Democracy (Delegative Voting)",
    "description": "Liquid democracy is a voting arrangement in which token-holders can delegate their voting power to other trusted holders, who can in turn delegate further — creating chains of proxy representation. Crucially, delegation can be withdrawn at any time, allowing participants to reclaim their vote when they disagree with their delegate's choices. Schneider notes that in crypto contexts, this form has been relabeled 'stewardship,' which has occasioned new kinds of web interfaces for evaluating delegate behavior, and that the one-share-one-vote norm of corporations is beginning to wane in favor of algorithms that balance economic stake with dimensions such as temporal commitment or breadth of support.",
    "diagnostic_questions": [
      "Can participants delegate their voting power to trusted peers rather than voting directly on every proposal?",
      "Is delegation revocable at any time, so participants retain ultimate sovereignty over their vote?",
      "Are there interfaces or tools that make it easy to evaluate how delegates have exercised delegated votes?",
      "Does the system allow multi-hop delegation (delegates who delegate to others) while preserving accountability at each step?"
    ],
    "countered_failure_mode_ids": [
      "voter-apathy-governance-capture",
      "plutocratic-token-governance"
    ],
    "example_case_ids": [
      "ethereum-governance-experiments",
      "daos-cooperative-design"
    ],
    "source_chapter": "Ch. 3"
  },
  {
    "id": "quadratic-funding",
    "name": "Quadratic Funding",
    "description": "Quadratic funding is a public-goods financing mechanism in which matching grants are distributed according to a formula that combines the number of individual donors to a cause with the amounts they give. Because the matching formula squares the sum of square roots of contributions, a project with many small donors receives proportionally more matching than one with a few large donors — partially counteracting plutocratic concentration in resource allocation. Schneider presents quadratic funding as one of the governance innovations that crypto has made available that have little or no precedent in conventional politics or corporate governance.",
    "diagnostic_questions": [
      "Does the funding or resource-allocation mechanism reward breadth of support (number of contributors) as well as depth (amount contributed)?",
      "Is there a matching pool whose distribution is determined by the pattern of community donations rather than by a central authority?",
      "Does the mechanism create incentives for contributors with smaller amounts to participate, knowing their participation has multiplicative matching value?",
      "Is the goal to fund public goods or shared infrastructure that market mechanisms alone tend to underprovide?"
    ],
    "countered_failure_mode_ids": [
      "plutocratic-token-governance",
      "public-goods-underfunding"
    ],
    "example_case_ids": [
      "ethereum-governance-experiments",
      "moloch-dao"
    ],
    "source_chapter": "Ch. 3"
  },
  {
    "id": "lazy-consensus-crypto",
    "name": "Lazy Consensus (Reputation-Gated Auto-Pass)",
    "description": "Lazy consensus is a governance mechanism in which users with sufficient reputation from past activity can make proposals that pass automatically in the absence of objections within a defined period. Rather than requiring active ratification by a majority, the burden shifts to dissenters to mobilize opposition. Schneider identifies this as one of several novel decision-making processes emerging from crypto governance that have little direct precedent in conventional democratic or corporate practice, suited to high-volume, low-controversy decisions in communities where most participants trust established contributors.",
    "diagnostic_questions": [
      "Does the community have a reputation or contribution-tracking system that distinguishes established participants from newcomers?",
      "Are most routine proposals expected to pass without active opposition, making full votes an unnecessary friction?",
      "Is there a clear, accessible mechanism for any participant to object and trigger a full deliberation when they disagree with a lazy-consensus proposal?",
      "Is the scope of lazy consensus bounded — applying to lower-stakes decisions while reserving full deliberation for major changes?"
    ],
    "countered_failure_mode_ids": [
      "voter-apathy-governance-capture",
      "governance-overhead-paralysis"
    ],
    "example_case_ids": [
      "ethereum-governance-experiments"
    ],
    "source_chapter": "Ch. 3"
  },
  {
    "id": "splitdao-fork-exit",
    "name": "SplitDAO / Governance Fork-and-Exit",
    "description": "SplitDAO is a governance mechanism that allows a subset of users in a DAO to withdraw their tokens and move them to a duplicate or forked entity when they disagree with the direction of the parent organization. Schneider relates this to MolochDAO's 'ragequit' feature — the ability for any contributor to withdraw their stake at any time — which he describes as a distinctive affordance that conventional charities and investment vehicles do not offer. Fork-and-exit mechanisms instantiate the right of minority factions to self-organize rather than remain subject to majority decisions they find unacceptable, operationalizing voice-plus-exit in governance design.",
    "diagnostic_questions": [
      "Can a minority faction exit the organization with their proportional share of assets rather than being locked in by majority decisions?",
      "Is the fork mechanism technically accessible to ordinary participants, or does it require privileged technical access?",
      "Does the possibility of exit create competitive pressure on the majority to take minority interests seriously in deliberation?",
      "Are the costs and procedures for forking transparent and known in advance, so they function as a credible governance option rather than a last resort?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "plutocratic-token-governance",
      "captured-dao"
    ],
    "example_case_ids": [
      "moloch-dao",
      "daos-cooperative-design"
    ],
    "source_chapter": "Ch. 3"
  },
  {
    "id": "soulbound-identity-governance",
    "name": "Soulbound Token / Person-Centric Identity in Blockchain Governance",
    "description": "Soulbound tokens are non-transferable blockchain tokens that remain permanently associated with a particular user's wallet rather than being tradeable on markets. Proposed by Vitalik Buterin and discussed by Schneider as a response to the persistent inability of cryptoeconomic systems to recognize human identity, soulbound tokens represent an attempt to anchor governance rights and reputation to personhood rather than to economic stake. Schneider frames this as crypto 'needing to rediscover politics' — enveloping economic incentives within institutions capable of recognizing individual human beings and articulating the common good.",
    "diagnostic_questions": [
      "Does the governance system have a way to distinguish between one human being and the tokens or resources they hold, so that governance power tracks personhood rather than wealth?",
      "Are there identity or reputation credentials that cannot be bought or sold, and that therefore resist plutocratic capture?",
      "Does the system allow for non-economic dimensions of membership — such as contribution history, community standing, or role — to influence governance rights?",
      "Is the identity layer designed to be under user control rather than dependent on state identity systems or corporate databases?"
    ],
    "countered_failure_mode_ids": [
      "plutocratic-token-governance",
      "cryptoeconomic-identity-blindness"
    ],
    "example_case_ids": [
      "ethereum-governance-experiments",
      "daos-cooperative-design"
    ],
    "source_chapter": "Ch. 3"
  },
  {
    "id": "governable-stack-assembly",
    "name": "Governable Stack Assembly",
    "description": "A governable stack is a web of interoperating technologies and social practices—spanning community, interface, infrastructure, and ecology layers—deliberately assembled so that participants co-govern the tools they depend on rather than being governed through them. Schneider describes it as a 'cyborg assemblage of interoperating technology in symbiosis with human relationships,' in which power is organized in partnership with technology rather than through domination over it. The assembly process is iterative and pedagogical: communities learn with each other and with their machines, adjusting layers over time to increase sovereignty, democracy, and liberation. May First Movement Technology and the Detroit Community Technology Project are offered as lived examples.",
    "diagnostic_questions": [
      "Do participants have meaningful input into the tools and infrastructure their community depends on, or do those decisions rest entirely with external corporate or state actors?",
      "Does the stack span community, interface, infrastructure, and ecology layers, and are democratic norms present at more than one layer?",
      "Is there a process by which the community can change, replace, or exit from components of the stack when those components conflict with its self-governance?",
      "Does using the stack teach participants something about shared power that they could not learn from a commercially managed service?",
      "Are dependencies on external resources audited for sovereignty risks, including surveillance, data extraction, or loss of exit rights?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "digital-colonialism",
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
    "id": "modular-politics-governance-design",
    "name": "Modular Politics",
    "description": "Modular politics is a design paradigm for online governance, developed by Schneider and collaborators in the Metagovernance Project, that replaces implicit feudalism with a composable, portable, interoperable, and expressive governance layer. Platform operators and community members can construct governance systems by creating, importing, and arranging composable parts—voting modules, codes of conduct, payment triggers, circle structures—so the governance architecture can evolve with the community rather than being fixed by platform owners. Portability allows tools built for one platform to be reused elsewhere; interoperability allows governance systems on different platforms to share data and influence each other's processes. The framework has been prototyped in PolicyKit, Gateway, Decidim, and DAO tooling such as Zodiac and Aragon.",
    "diagnostic_questions": [
      "Can community members import, swap, or combine governance modules without rebuilding the platform from scratch?",
      "Are governance tools portable across different technical and social contexts, or are they locked to a single platform?",
      "Can governance systems on this platform interact with—or trigger actions on—governance systems elsewhere?",
      "Does the platform's expressiveness allow governance processes that reflect diverse cultural traditions rather than only the defaults of its builders?",
      "Is the governance layer itself subject to community decision-making, as it is on Decidim?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "digital-colonialism"
    ],
    "example_case_ids": [
      "social-coop",
      "decidim-participatory-platform",
      "dao-zodiac-aragon"
    ],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "governance-archaeology",
    "name": "Governance Archaeology",
    "description": "Governance archaeology is a practice of intentionally crafting relationships between new governance designs and preexisting historical and cross-cultural legacies. Schneider and political scientist Federica Carugati developed the concept while assembling a database of collective-governance institutions across time and space, seeking ideas applicable to present challenges in the online economy. The practice involves two decolonial steps: expanding the canon of democratic legacies beyond the Western classical tradition, and repairing relationships with legacies that have suffered violence, ignorance, or subjugation—cultivating what Schneider calls 'ancestry,' in which designers become good descendants of the communities they learn from and practice reciprocity rather than extraction. Governance archaeology treats historical precedents as active sources of meaning rather than passive objects of study.",
    "diagnostic_questions": [
      "Does the governance design draw on a range of cultural and historical precedents, or primarily on Western classical and Silicon Valley defaults?",
      "Have the communities whose governance practices are being adapted been consulted, and is there a mechanism for reciprocity or reparation?",
      "Are designers aware of which colonial relations may have distorted their knowledge of the historical record they are drawing on?",
      "Is the relationship with historical precedents treated as active and relational—'ancestry'—rather than as passive borrowing?",
      "Could the governance design benefit from a 'radical copresence' exercise, juxtaposing non-Western and Western precedents to challenge dominant narratives?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "digital-colonialism"
    ],
    "example_case_ids": [],
    "source_chapter": "Ch. 5"
  },
  {
    "id": "exit-to-community",
    "name": "Exit to Community (E2C)",
    "description": "Exit to Community is a governance transition strategy coined by Schneider in 2019 in which a startup, rather than exiting through acquisition or IPO, transfers ownership and governance to its most direct participants—users, workers, and contributors. Mechanisms include dual-class stock, purpose trusts, cooperatives, and nonprofits. The strategy reframes the startup 'exit' not as a sale to the highest bidder but as a handoff to the community whose labor and participation created the platform's value. Schneider notes that E2C has spread most widely in blockchain contexts, where conventional securities law applies ambiguously and community ownership is at least the default aspiration.",
    "diagnostic_questions": [
      "Is the platform approaching a liquidity event (acquisition or IPO) that would convert community relationships into commodities for investors?",
      "Are there users, workers, or contributors whose ongoing participation generates the platform's core value but who have no formal ownership or governance stake?",
      "Does the current corporate structure allow for gradual transfer of ownership to participants, or do securities and incorporation laws block it?",
      "Has the founding team expressed interest in aligning incentives with the community rather than maximizing investor returns?",
      "Are there existing legal vehicles—cooperatives, purpose trusts, dual-class shares—available in the relevant jurisdiction that could support the transition?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "democracy-theatre"
    ],
    "example_case_ids": [
      "gitcoin-dao-stewardship",
      "airbnb-host-advisory-board",
      "nurses-can-cooperative-platform"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "community-owned-infrastructure-cooperative",
    "name": "Community-Owned Infrastructure Cooperative",
    "description": "A community-owned infrastructure cooperative is a governance form in which residents collectively own and operate communications or utility infrastructure—such as broadband, telephone, or electricity networks—that corporate providers have failed or declined to serve. Members learn to install, maintain, and repair equipment themselves, converting technical mystification into shared competence. Schneider traces this form through rural electric cooperatives financed by the US government in the 1930s, Latin American microtelcos, feminist community radio stations, and contemporary cooperative broadband efforts from Colorado to Catalonia, arguing that user-governed networks consistently outperform investor ownership on cost and quality where corporate providers have left gaps.",
    "diagnostic_questions": [
      "Has investor-owned infrastructure failed to reach or adequately serve the community, creating a market-failure gap?",
      "Are there legal prohibitions—often backed by corporate incumbents—that prevent municipal or cooperative alternatives from competing?",
      "Do community members have, or could they develop, the technical skills to install and maintain infrastructure themselves?",
      "Is there access to patient capital (public financing, grants, community bonds) that could substitute for venture capital unavailable to cooperatives?",
      "Does the community have prior experience with collective self-governance (mutual aid, cooperative associations) that could seed infrastructure governance?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "infrastructure-mystification"
    ],
    "example_case_ids": [
      "magnolia-road-internet-cooperative",
      "latin-american-microtelcos",
      "rural-electric-cooperatives",
      "femprocomuns-commons-cloud"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "user-codetermination-board-representation",
    "name": "User Codetermination / Board Representation",
    "description": "User codetermination is a governance form in which platform users or gig workers hold elected seats on corporate boards or moderation bodies, drawing on the model of Germany's worker codetermination law (Mitbestimmung). Schneider proposes this as a policy that governments could impose on platforms above a certain size, ensuring that the communities whose participation generates platform value have a structural voice in governance rather than merely advisory input. He contrasts this with Meta's Oversight Board—which he regards as a step toward accountability but notes that its members are chosen by the company rather than by users—and with Airbnb's host advisory board, created after the company could not issue stock directly to hosts.",
    "diagnostic_questions": [
      "Does the platform's scale mean that its moderation and policy decisions function as de facto public governance, warranting democratic accountability?",
      "Are there existing legal frameworks (corporate law, securities regulation) that could be adapted to mandate user-elected board seats?",
      "Is the platform's current governance structure—such as a company-appointed oversight body—already a partial concession to accountability demands that could be expanded?",
      "Would user board representatives have meaningful information and procedural power, or would management retain effective control through information asymmetry?",
      "Does the platform have a distinct, identifiable user or worker community whose interests are separable enough from investor interests to justify dedicated representation?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "democracy-theatre"
    ],
    "example_case_ids": [
      "meta-oversight-board",
      "airbnb-host-advisory-board",
      "germany-codetermination"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "digital-deliberation-listening-at-scale",
    "name": "Digital Deliberation / Listening at Scale",
    "description": "Digital deliberation at scale is a governance form pioneered in Taiwan under Digital Minister Audrey Tang, in which government identifies clusters of public opinion through digital tools and crowdsources policy proposals that enjoy broad, cross-partisan support. The process aims to bypass conventional partisan dividing lines by surfacing areas of genuine consensus rather than amplifying conflict. Schneider highlights its application to ridesharing regulation and COVID-19 policy as cases where the subject matter—platforms and viruses that transcend borders—invited governance approaches capable of remapping political terrain. He situates this alongside Decidim, Iceland's crowdsourced constitution, and Mexico City's participatory processes as instances of digital tools enabling new forms of legitimate collective decision-making.",
    "diagnostic_questions": [
      "Is the policy domain one where conventional partisan politics generates more heat than light, suggesting value in surfacing cross-cutting consensus?",
      "Does the subject matter (a platform, a protocol, a virus) transcend territorial boundaries in ways that make traditional jurisdictions a poor fit?",
      "Are there digital tools available that can identify genuine opinion clusters rather than merely amplifying the loudest voices?",
      "Is the convening authority willing to treat the outputs of digital deliberation as inputs to real decisions, not just as public relations?",
      "Does the process include mechanisms to prevent capture by well-organized minorities or by those with the most digital access?"
    ],
    "countered_failure_mode_ids": [
      "top-down-regulatory-capture",
      "politics-of-no-politics"
    ],
    "example_case_ids": [
      "taiwan-digital-deliberation-tang",
      "decidim-barcelona",
      "iceland-crowdsourced-constitution"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "section-230-subsidiarity-reform",
    "name": "Section 230 Subsidiarity Reform",
    "description": "Section 230 subsidiarity reform is a policy strategy in which liability protection for online platforms is conditioned on the platform's active support for user self-governance at the community scale, rather than being granted unconditionally or revoked entirely. Under this approach, platforms gain immunity only by sharing power—providing modular governance tools such as elections, petitions, boards, and juries—and by expecting subsidiarity as a prerequisite for protection. Schneider presents this as an alternative to both the status quo of unconditional safe harbor and proposals focused on penalizing 'bad Samaritan' platforms, arguing that neither adequately centers the governance that user communities might conduct for themselves.",
    "diagnostic_questions": [
      "Does the current liability regime encourage platforms to govern from the top down, hoarding both power and blame?",
      "Are there community-scale governance practices already emerging on the platform that policy could recognize and incentivize rather than ignore?",
      "Would requiring modular governance tools as a condition of immunity be technically feasible given the platform's architecture?",
      "Is there political will to move beyond the company-customer regulatory logic toward one that recognizes peer-to-peer community relations?",
      "Could subsidiarity requirements be structured so that they apply proportionally to platform scale, protecting small communities while imposing obligations on large ones?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "top-down-regulatory-capture"
    ],
    "example_case_ids": [
      "karrot-food-sharing-platform",
      "section-230-reform-debate"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "commons-based-software-procurement",
    "name": "Commons-Based Software Procurement",
    "description": "Commons-based software procurement is a policy strategy in which governments adopt procurement preferences for open-source, commons-governed software platforms and protocols, thereby financing the development of governable infrastructure that can then be self-managed by communities worldwide. Schneider cites the German government's adoption of Nextcloud for collaborative file-sharing and France's adoption of the Matrix chat protocol as examples, noting that the same software can then be deployed by communities such as FemProcomuns' Commons Cloud in Barcelona. The strategy links public investment to community control, creating a supply of governable stacks that would not be built under purely commercial incentives.",
    "diagnostic_questions": [
      "Does the government's current software procurement reinforce dependence on proprietary platforms governed by implicit feudalism?",
      "Are there open-source alternatives with active governance communities that could serve equivalent functions?",
      "Would public investment in commons-based software produce infrastructure that communities beyond the procuring government could also use and govern?",
      "Does the procurement preference come with support for the culture of care and pedagogy needed to make commons-based tools genuinely accessible?",
      "Are there existing examples (Nextcloud, Matrix, Decidim) that could serve as models for the specific infrastructure need in question?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "infrastructure-mystification"
    ],
    "example_case_ids": [
      "germany-nextcloud-procurement",
      "france-matrix-protocol",
      "femprocomuns-commons-cloud",
      "decidim-barcelona"
    ],
    "source_chapter": "Ch. 6"
  },
  {
    "id": "metagovernance-democratic-design",
    "name": "Metagovernance as Democratic Design",
    "description": "Metagovernance, as Schneider draws from Bob Jessop, refers to the 'organization of the conditions for governance in its broadest sense' — the 'organization of self-organization.' Rather than addressing a particular governance situation in isolation, metagovernance attends to the broader background conditions that shape the range of possible governance arrangements. Schneider argues that implicit feudalism has itself functioned as a kind of metagovernance, encoding feudal defaults into platforms, protocols, and norms in ways that mostly escape notice. More intentional metagovernance — shaping background conditions to support democratic communities, non-exclusive sovereignties, and community self-governance — can counteract this drift and orient online spaces toward accountable connectivity.",
    "diagnostic_questions": [
      "Are the background conditions (protocols, defaults, liability rules, network norms) shaping governance outcomes visible and legible to participants, or do they operate beneath notice?",
      "Does the governance arrangement account for how decisions and power in one community or DAO cascade into others through token swaps, shared infrastructure, or inherited rules?",
      "Is there an explicit effort to shape the metagovernance layer — the conditions for governance — rather than only addressing individual governance situations in isolation?",
      "Do the design choices at the infrastructural level (stack, protocols, modular defaults) embed democratic or feudal assumptions?",
      "Is the community building political skills through everyday practice, so that the metagovernance layer is inhabited rather than merely inherited?"
    ],
    "countered_failure_mode_ids": [
      "implicit-feudalism",
      "politics-of-no-politics",
      "feudal-platform-default"
    ],
    "example_case_ids": [
      "dao-token-swap-metagovernance",
      "project-cybersyn",
      "native-land-ca"
    ],
    "source_chapter": "Epilogue"
  }
];
