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
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      {bullets && bullets.length > 0 && (
        <ul className="space-y-2 mt-2">
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
    <div className="flex items-center justify-center rounded-2xl overflow-hidden border border-border bg-card/40 min-h-[260px]">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="w-full h-full object-cover"
        />
      ) : (
        <p className="text-muted-foreground text-sm p-8 text-center">Image placeholder — drop your screenshot here</p>
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

interface FeaturesProps {
  showAllFeatures?: boolean
}

const Features = ({ showAllFeatures = true }: FeaturesProps) => {
  return (
    <section className="md:py-[60px] py-12 bg-background">
      <Container className="space-y-20 md:space-y-32">

        {/* Matter & Case Management */}
        <FeatureSection
          badge="Case Management"
          title="All your cases, organised in one place"
          description="Create matters, assign teams, upload documents, and track every case from intake to close — without switching between tools."
          bullets={[
            "Full matter history, notes, and documents in one view",
            "Assign tasks and track who's responsible for what",
            "Status updates visible to the whole team instantly",
          ]}
          imagePosition="right"
        />

        {/* Agentic AI */}
        <FeatureSection
          badge="Agentic AI"
          title="Tell it what to do. It handles the rest."
          description="Type a request in plain language — the AI reads emails, extracts dates, assigns tasks, triggers workflows, and summarises documents automatically."
          bullets={[
            "Natural language commands to automate any task",
            "Reads incoming emails and pulls out key information",
            "Runs multi-step workflows without manual triggers",
          ]}
          imagePosition="left"
        />

        {/* E-Discovery */}
        <FeatureSection
          badge="E-Discovery"
          title="Find anything across all your matters"
          description="Search every document, email, and case file instantly. Surface the right evidence without hours of manual review."
          bullets={[
            "Full-text search across all uploaded documents",
            "Filter by matter, date range, document type, or keyword",
            "Instant results — no waiting, no manual indexing",
          ]}
          imagePosition="right"
        />

        {/* Contract Lifecycle */}
        <FeatureSection
          badge="Contract Lifecycle Management"
          title="Contracts from draft to renewal"
          description="Track every contract in your firm — drafting, review, signing, and expiry. Get alerts before renewals so nothing lapses quietly."
          bullets={[
            "Contract status visible at every stage",
            "Automatic alerts before expiry and renewal dates",
            "All versions and approvals stored in one place",
          ]}
          imagePosition="left"
        />

        {/* Jurisdiction Integration */}
        <FeatureSection
          badge="Jurisdiction Integration"
          title="Connected to courts and legal authorities"
          description="Directly integrated with federal courts, state courts, and major legal bodies. Deadline rules update automatically — no manual maintenance needed."
          bullets={[
            "Synced with local and international legal authorities",
            "Rules update automatically when they change",
            "Holiday and weekend adjustments handled for you",
          ]}
          imagePosition="right"
        />

        {/* Security */}
        {showAllFeatures && (
          <FeatureSection
            badge="Security & Privacy"
            title="Your client data stays private"
            description="All data is encrypted in transit and at rest. Role-based access, full audit logs, and daily backups ensure your firm's information is always protected."
            bullets={[
              "Your data is never used to train shared AI models",
              "Role-based access — every team member sees only what they need",
              "Complete audit trail of every change and access",
            ]}
            imagePosition="left"
          />
        )}

      </Container>
    </section>
  )
}

export default Features