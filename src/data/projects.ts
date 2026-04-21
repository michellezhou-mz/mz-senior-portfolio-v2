import petpals from "@/assets/work-petpals.png";
import google from "@/assets/work-google.png";
import catalogue from "@/assets/work-catalogue.png";
import ceba from "@/assets/work-ceba.jpg";
import deceased from "@/assets/work-deceased.jpg";

export type CaseStudySection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string; // strategic one-liner
  tagline: string; // legacy short summary (kept for compatibility)
  discipline: string;
  tags: string[];
  impact: string; // short outcome statement
  year: string;
  context: string;
  role: string;
  image: string;
  accent: "forest" | "plum" | "sand";
  featured?: boolean;
  caseStudy: {
    heroSummary: string;
    snapshot: {
      industry: string;
      teamSize: string;
      role: string;
      scope: string;
      constraints: string;
    };
    sections: CaseStudySection[];
  };
};

export const projects: Project[] = [
  {
    slug: "ceba",
    title: "Ceba",
    subtitle:
      "Designing smarter support journeys for millions of banking customers.",
    tagline:
      "Leading design of a consumer-facing AI assistant across multiple initiatives.",
    discipline: "E2E Product Design · Strategy · Discovery",
    tags: ["AI / Conversational UX", "Product Strategy", "Enterprise"],
    impact:
      "Reframed the assistant from FAQ bot to trusted in-app guide — adopted across multiple customer journeys at national scale.",
    year: "2023 — 2024",
    context: "CommBank",
    role: "Lead Product Designer",
    image: ceba,
    accent: "forest",
    featured: true,
    caseStudy: {
      heroSummary:
        "Leading design of Australia's most-used banking AI assistant — moving from reactive answers to proactive, trusted in-app guidance for millions of customers.",
      snapshot: {
        industry: "Financial Services",
        teamSize: "Cross-functional pod of 12 (Design, PM, Eng, Data, Risk)",
        role: "Lead Product Designer — strategy, discovery & E2E design",
        scope: "Multi-initiative across app, web and contact centre",
        constraints:
          "Regulated environment, legacy NLU stack, high-trust customer base, brand & risk guardrails",
      },
      sections: [
        {
          heading: "Context",
          body: "Ceba had grown into a household name but was hitting a ceiling — solving narrow tasks while customer expectations of AI accelerated. Leadership wanted a step-change: from a reactive answer engine into a strategic surface that could carry intent across the bank.",
        },
        {
          heading: "Problem",
          body: "Customers were dropping out at moments of complexity — life events, money stress, fraud worry — exactly where the bank had the most to offer. The assistant looked smart but felt shallow, and teams across the bank were building competing point solutions.",
        },
        {
          heading: "My Contribution",
          body: "I led design across three concurrent initiatives, set the experience principles for the assistant, and partnered with PM and Engineering leadership to align a shared roadmap. I was the connective tissue between conversational, app and contact-centre teams — and the design voice in executive forums.",
        },
        {
          heading: "Approach",
          body: "I ran a discovery sprint with research, data and frontline staff to map where the assistant earned or lost trust. From that, I shaped a north-star journey, a reusable conversational pattern library, and a decision framework for when the bot should answer, hand off, or stay silent. We validated through prototype testing, contact-centre shadowing and staged rollouts.",
        },
        {
          heading: "Key Decisions",
          body: "Choosing graceful hand-off over forced containment. Investing in a shared pattern system rather than bespoke flows per squad. Treating silence and disclosure as first-class design choices. Each call traded short-term metrics for long-term trust — and I made the case to leadership accordingly.",
        },
        {
          heading: "Outcomes",
          body: "Adopted across multiple priority journeys, with measurable lifts in resolution and customer-effort scores, reduced duplicate effort across squads, and a shared design language other teams now build on. More importantly, the assistant became a credible strategic surface — not a side feature.",
        },
        {
          heading: "Reflection",
          body: "This work taught me that AI design at scale is mostly leadership work — getting many teams to agree on what 'good' looks like, and protecting the experience from the gravity of internal metrics.",
        },
      ],
    },
  },
  {
    slug: "deceased-estates",
    title: "Deceased Estates",
    subtitle:
      "Navigating a final journey with care, clarity and dignity.",
    tagline: "Navigating a final journey with care, clarity, and dignity.",
    discipline: "E2E Product Design · Service Design",
    tags: ["Service Design", "E2E Product", "Enterprise"],
    impact:
      "Reduced time-to-resolution and emotional load for grieving customers, while simplifying a high-risk operational process for the bank.",
    year: "2023",
    context: "CommBank",
    role: "Senior Product Designer",
    image: deceased,
    accent: "sand",
    featured: true,
    caseStudy: {
      heroSummary:
        "Reshaping how a major bank supports families after a loss — turning a fragmented, paperwork-heavy process into a humane, guided journey.",
      snapshot: {
        industry: "Financial Services",
        teamSize: "Pod of 8 across Design, PM, Ops & Legal",
        role: "Senior Product Designer — discovery to delivery",
        scope: "End-to-end estate notification, verification and settlement",
        constraints:
          "Regulatory and probate complexity, sensitive customer state, multi-channel (branch, phone, digital)",
      },
      sections: [
        {
          heading: "Context",
          body: "Notifying a bank of a death was one of the lowest-rated experiences in the organisation — slow, repetitive, and emotionally draining. Leadership wanted a more humane, defensible process that could also reduce operational risk.",
        },
        {
          heading: "Problem",
          body: "Families were forced to retell their story across channels, chase paperwork, and wait weeks for clarity. Internally, the work was spread across teams with no single owner of the journey.",
        },
        {
          heading: "My Contribution",
          body: "I led the end-to-end design, partnered with legal and ops to redesign the underlying service, and set the tone-of-voice principles the team still uses. I represented the customer in tough trade-off conversations — especially where compliance instincts conflicted with care.",
        },
        {
          heading: "Approach",
          body: "Deep ethnographic research with grieving families and frontline staff, service blueprinting across channels, and iterative co-design with legal and ops. We prototyped both the digital experience and the conversation scripts together.",
        },
        {
          heading: "Key Decisions",
          body: "Designing for the worst day, not the average day. Prioritising one trusted human contact over channel optimisation. Choosing plain language over legal hedging — and getting legal to co-author it.",
        },
        {
          heading: "Outcomes",
          body: "Significant reduction in time-to-resolution, fewer repeat contacts, measurable improvements in customer-effort and sentiment, and a service model adopted as the template for other sensitive journeys.",
        },
        {
          heading: "Reflection",
          body: "The hardest design problems are rarely interface problems. This one taught me how to lead with empathy in environments wired for risk, and how to make care operationally defensible.",
        },
      ],
    },
  },
  {
    slug: "the-catalogue",
    title: "The Catalogue",
    subtitle:
      "Launching a new online marketplace driven by expert advice.",
    tagline: "Launching a new online marketplace driven by expert advice.",
    discipline: "Product Design · 0→1",
    tags: ["0→1 Product", "Marketplace", "Startup"],
    impact:
      "Took a founder hypothesis to a live marketplace with paying experts and customers in under six months.",
    year: "2022",
    context: "Startup",
    role: "Product Designer",
    image: catalogue,
    accent: "plum",
    caseStudy: {
      heroSummary:
        "Helping a founding team prove a new model for commerce — where trusted experts curate what people actually buy.",
      snapshot: {
        industry: "Consumer / Marketplace",
        teamSize: "Founding team of 5",
        role: "Product Designer — sole designer across both sides of the marketplace",
        scope: "Brand, web, expert tooling and buyer experience",
        constraints: "Pre-revenue, fast iteration, two-sided trust to build",
      },
      sections: [
        {
          heading: "Context",
          body: "The founders believed people were tired of algorithmic recommendations and wanted human curation back. My job was to help shape that belief into a product people would use and pay for.",
        },
        {
          heading: "Problem",
          body: "Two-sided marketplaces fail when neither side trusts the other. We needed experts to feel proud of their storefront and buyers to feel confident the advice was real.",
        },
        {
          heading: "My Contribution",
          body: "End-to-end product design, brand expression, and the early design system. I also shaped the onboarding model that became central to expert retention.",
        },
        {
          heading: "Approach",
          body: "Continuous discovery with both audiences in parallel, weekly prototype tests, and a deliberately editorial visual language to signal taste over volume.",
        },
        {
          heading: "Key Decisions",
          body: "Curate hard, not soft. Make experts the heroes of the brand. Resist marketplace clichés (stars, badges, urgency) in favour of confident editorial design.",
        },
        {
          heading: "Outcomes",
          body: "Launched to market with a roster of paying experts, strong early engagement, and a brand that punched well above the team's size.",
        },
        {
          heading: "Reflection",
          body: "0→1 work rewards conviction. The job isn't to design every option — it's to make the strongest possible bet visible and testable.",
        },
      ],
    },
  },
  {
    slug: "google-certificates-community",
    title: "Google Certificates Community",
    subtitle:
      "Connecting online learners during their portfolio projects.",
    tagline: "Connecting online learners during their portfolio projects.",
    discipline: "Product Design · Research",
    tags: ["Product Design", "Community", "Education"],
    impact:
      "Designed a peer-support model that lifted learner confidence and completion across the certificate program.",
    year: "2022",
    context: "Google",
    role: "Product Designer",
    image: google,
    accent: "forest",
    caseStudy: {
      heroSummary:
        "Helping global learners feel less alone during the hardest part of an online certificate — the portfolio project.",
      snapshot: {
        industry: "Education / EdTech",
        teamSize: "Pod of 6 with Research, PM and Eng",
        role: "Product Designer — discovery through prototype",
        scope: "Community model, matching and in-product surfaces",
        constraints:
          "Global learner base, varied tech literacy, brand and trust guardrails",
      },
      sections: [
        {
          heading: "Context",
          body: "Learners were dropping out at the portfolio stage — not because the content was too hard, but because they felt isolated and unsure their work was 'good enough'.",
        },
        {
          heading: "Problem",
          body: "How might we create a sense of cohort and feedback without overwhelming learners or compromising trust and safety at scale?",
        },
        {
          heading: "My Contribution",
          body: "I led the design exploration end-to-end and partnered closely with research to shape the community model and the matching logic behind it.",
        },
        {
          heading: "Approach",
          body: "Diary studies with learners, lightweight concept tests, and rapid prototyping of low-pressure peer-feedback rituals.",
        },
        {
          heading: "Key Decisions",
          body: "Optimise for psychological safety over volume. Default to small groups. Make giving feedback feel as valuable as receiving it.",
        },
        {
          heading: "Outcomes",
          body: "Validated a model that lifted confidence and completion in testing, shaping the team's roadmap for community at scale.",
        },
        {
          heading: "Reflection",
          body: "Learning is emotional infrastructure. The smallest design choices around tone and group size carry more weight than any feature.",
        },
      ],
    },
  },
  {
    slug: "pet-pals",
    title: "Pet Pals",
    subtitle: "The best for your pet, at your fingertips.",
    tagline: "The best for your pet, at your fingertips.",
    discipline: "Service Design · CX Strategy",
    tags: ["Service Design", "CX Strategy", "Self-initiated"],
    impact:
      "A self-initiated service concept that became a portfolio centrepiece for thinking in systems, not screens.",
    year: "2021",
    context: "Self-initiated",
    role: "Service Designer",
    image: petpals,
    accent: "sand",
    caseStudy: {
      heroSummary:
        "A service-design exploration of how fragmented pet care could become one calm, connected experience for owners.",
      snapshot: {
        industry: "Consumer / Services",
        teamSize: "Solo, with peer critique",
        role: "Service Designer",
        scope: "Service blueprint, brand and key digital surfaces",
        constraints: "Self-initiated — no client, no budget, ruthless scope",
      },
      sections: [
        {
          heading: "Context",
          body: "Pet ownership had exploded but the surrounding services hadn't kept up — owners were juggling vets, sitters, food, insurance and advice across disconnected channels.",
        },
        {
          heading: "Problem",
          body: "How might a single service reduce the cognitive load of caring well for a pet, without becoming yet another generic super-app?",
        },
        {
          heading: "My Contribution",
          body: "Everything — research, service blueprint, brand, and the digital touchpoints that brought it to life.",
        },
        {
          heading: "Approach",
          body: "Owner interviews, a service blueprint mapping moments of need, and a deliberately warm visual identity to balance the operational complexity underneath.",
        },
        {
          heading: "Key Decisions",
          body: "Treat the human, not just the pet, as the user. Anchor the service around moments of worry, not features.",
        },
        {
          heading: "Outcomes",
          body: "A coherent service concept and portfolio piece that has consistently opened conversations about systems-level design thinking.",
        },
        {
          heading: "Reflection",
          body: "Self-initiated work is where I sharpen the muscles client work doesn't always exercise — particularly framing and restraint.",
        },
      ],
    },
  },
];
