import Container from '@/components/container'
import { AnimateOnView } from '@/components/ui/motion/animate-on-view'
import { StaggerContainer } from '@/components/ui/motion/stagger'

interface FeatureSectionProps {
  badge?: string
  title: string
  description: string
  bullets?: string[]
  imageSrc?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
}

const FeatureSection = ({
  badge,
  title,
  description,
  bullets,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
}: FeatureSectionProps) => {
  const content = (
    <div className="flex flex-col justify-center gap-4">
      {badge && (
        <span className="inline-flex self-start bg-white/10 text-white text-sm px-4 py-1.5 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="h3 text-white">{title}</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      {bullets && bullets.length > 0 && (
        <ul className="space-y-2 mt-1">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-0.5">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )

  const image = (
    <div className="flex items-center justify-center rounded-2xl overflow-hidden border border-border bg-card/40 min-h-[240px]">
      {imageSrc ? (
        <img src={imageSrc} alt={imageAlt || title} className="w-full h-full object-cover" />
      ) : (
        <p className="text-muted-foreground text-sm p-8 text-center">Screenshot coming soon</p>
      )}
    </div>
  )

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center`}>
      {imagePosition === 'left' ? (
        <>
          <AnimateOnView blur delay={0.1}>{image}</AnimateOnView>
          <AnimateOnView blur delay={0.2}>{content}</AnimateOnView>
        </>
      ) : (
        <>
          <AnimateOnView blur delay={0.1}>{content}</AnimateOnView>
          <AnimateOnView blur delay={0.2}>{image}</AnimateOnView>
        </>
      )}
    </div>
  )
}

// ─── Qlerkly feature sections ─────────────────────────────────────────────────

const QlerklyFeatures = () => (
  <section className="md:py-[60px] py-12 bg-background">
    <Container className="space-y-20 md:space-y-32">

      <FeatureSection
        badge="Case Management"
        title="All your cases, in one place"
        description="Create matters, assign teams, and track every case from intake to close — no switching between tools."
        bullets={[
          "Full matter history, notes, and documents in one view",
          "Assign tasks and track who's responsible",
          "Status visible to the whole team instantly",
        ]}
        imagePosition="right"
      />

      <FeatureSection
        badge="Deadline Tracking"
        title="Never miss a critical date"
        description="Manually log key dates and let Qlerkly surface what's coming up — so nothing slips through."
        bullets={[
          "Centralised deadline calendar per matter",
          "Alert rules for upcoming and overdue dates",
          "Reminders routed to the right team member",
        ]}
        imagePosition="left"
      />

      <FeatureSection
        badge="Document Management"
        title="Documents where you need them"
        description="Upload, organise, and access every file tied to a matter — no more searching email threads."
        bullets={[
          "Files attached directly to matters and tasks",
          "Version history and download access",
          "Role-based visibility per team member",
        ]}
        imagePosition="right"
      />

      <FeatureSection
        badge="Audit & Compliance"
        title="Full control, always"
        description="Every entry, edit, and change is logged. Your team reviews and approves before anything is saved."
        bullets={[
          "Permanent audit trail for every action",
          "Human sign-off before entries go live",
          "Export-ready logs for supervisory review",
        ]}
        imagePosition="left"
      />

    </Container>
  </section>
)

// ─── Lexora feature sections ───────────────────────────────────────────────────

const LexoraFeatures = () => (
  <section className="md:py-[60px] py-12 bg-background">
    <Container className="space-y-20 md:space-y-32">

      <FeatureSection
        badge="Agentic AI"
        title="Tell it what to do. It handles the rest."
        description="Type a request in plain language — the AI reads emails, extracts dates, runs workflows, and summarises documents."
        bullets={[
          "Natural language commands for any task",
          "Reads incoming emails and pulls key information",
          "Multi-step workflows without manual triggers",
        ]}
        imagePosition="right"
      />

      <FeatureSection
        badge="E-Discovery"
        title="Find anything, instantly"
        description="Full-text search across every document, email, and case file. Surface evidence without manual review."
        bullets={[
          "Search across all uploaded documents",
          "Filter by matter, date, type, or keyword",
          "Instant results, no manual indexing",
        ]}
        imagePosition="left"
      />

      <FeatureSection
        badge="Contract Lifecycle"
        title="Contracts from draft to renewal"
        description="Track every contract through drafting, review, signing, and expiry — with automatic alerts before anything lapses."
        bullets={[
          "Status visible at every contract stage",
          "Alerts before expiry and renewal dates",
          "All versions and approvals in one place",
        ]}
        imagePosition="right"
      />

      <FeatureSection
        badge="Jurisdiction Integration"
        title="Connected to courts and authorities"
        description="Integrated with federal courts, state courts, and legal bodies. Deadline rules update automatically."
        bullets={[
          "Synced with local and international authorities",
          "Rules update when they change — no manual work",
          "Holiday and weekend adjustments handled",
        ]}
        imagePosition="left"
      />

      <FeatureSection
        badge="Security & Privacy"
        title="Your client data stays private"
        description="Encrypted in transit and at rest. Role-based access and full audit logs — your data is never used to train shared models."
        bullets={[
          "Data never used for shared AI training",
          "Role-based access per team member",
          "Complete audit trail of every change",
        ]}
        imagePosition="right"
      />

    </Container>
  </section>
)

// ─── Exported component ───────────────────────────────────────────────────────

interface FeaturesProps {
  product: 'qlerkly' | 'lexora'
}

const Features = ({ product }: FeaturesProps) => {
  return product === 'lexora' ? <LexoraFeatures /> : <QlerklyFeatures />
}

export default Features