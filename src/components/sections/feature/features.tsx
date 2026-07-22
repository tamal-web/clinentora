import { Link } from 'react-router-dom'
import Container from '../../container'
import { Button } from '../../ui/button'
import {
  FeatureCard,
  FeatureCardAction,
  FeatureCardBenefitItem,
  FeatureCardBenefits,
  FeatureCardContent,
  FeatureCardDescription,
  FeatureCardTitle
} from '../../ui/feature-card'

const Features = () => {

  return (
    <section className="md:py-[60px] py-12 bg-background">
      <Container className="md:space-y-16 space-y-8">
        {/* Card 1: Automatic Document Processing */}
        <FeatureCard imagePosition="right" className="border-0 bg-[rgba(20,20,20,1)] sticky top-24">
          <FeatureCardContent>
            <div className="bg-white/10 text-white px-5 py-2 rounded-full mb-5">Core Platform — Automatic Processing</div>
            <FeatureCardTitle className='mb-5'>
              From Document Received to Docket Entry — Automatically
            </FeatureCardTitle>
            <FeatureCardDescription className='mb-5'>
              Clinentora reads every filing the moment it arrives — via email, direct agency feed, or upload. Native PDFs, scanned documents, and image-based filings are all processed identically, with every governing date, case number, and party name extracted automatically.
            </FeatureCardDescription>
            <FeatureCardBenefits>
              <FeatureCardBenefitItem>
                Document intake via email, agency feed, or direct upload — all practice areas
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                OCR pipeline handles scanned, fax-quality, and handwritten annotations
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Every entry presented for human review before saving — your team retains full control
              </FeatureCardBenefitItem>
            </FeatureCardBenefits>
            <FeatureCardAction>
              <Button asChild>
                <Link to="/contact">
                  Request a Demo
                </Link>
              </Button>
            </FeatureCardAction>
          </FeatureCardContent>
          <div className="flex items-center justify-center bg-card rounded-2xl p-8 min-h-[320px]">
            <div className="text-center space-y-6 max-w-xs">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                <span className="text-3xl">📄</span>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-white/10 rounded-full w-full" />
                <div className="h-2 bg-white/10 rounded-full w-4/5 mx-auto" />
                <div className="h-2 bg-primary/30 rounded-full w-3/5 mx-auto" />
              </div>
              <div className="text-sm text-muted-foreground">Filing classified · Dates extracted · Entry pre-populated</div>
            </div>
          </div>
        </FeatureCard>

        {/* Card 2: AI-Powered Features */}
        <FeatureCard imagePosition="left" className="border-0 bg-[rgba(20,20,20,1)] sticky top-24">
          <div className="flex items-center justify-center bg-card rounded-2xl p-8 min-h-[320px]">
            <div className="text-center space-y-5 max-w-sm w-full">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                <span className="text-3xl">🤖</span>
              </div>
              <div className="text-left bg-black/30 rounded-xl p-4 border border-white/10 space-y-2">
                <p className="text-xs text-primary font-medium">Daily Briefing — 7:00 AM</p>
                <p className="text-sm text-white">3 deadlines today · 12 this week</p>
                <p className="text-xs text-muted-foreground">⚠ 1 matter flagged — response due in 48hrs</p>
              </div>
              <div className="text-sm text-muted-foreground">AI-generated, personalised by attorney</div>
            </div>
          </div>
          <FeatureCardContent>
            <div className="bg-white/10 text-white px-5 py-2 rounded-full mb-5">
              AI Layer — Intelligence Features
            </div>
            <FeatureCardTitle>
              AI That Works the Way Attorneys Think
            </FeatureCardTitle>
            <FeatureCardDescription className='mb-5'>
              Natural language search lets you ask "What motion deadlines does the trial team have this month?" and get structured results. Each attorney receives a personalised morning digest with deadlines today, this week, and risk flags — in priority order.
            </FeatureCardDescription>
            <FeatureCardBenefits>
              <FeatureCardBenefitItem>
                Natural language search across all matters and practice areas
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                AI document summarisation: key dates, required actions, strategic context
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Conflict of interest screening on every new matter intake
              </FeatureCardBenefitItem>
            </FeatureCardBenefits>
            <FeatureCardAction>
              <Button asChild>
                <Link to="/contact">
                  Request a Demo
                </Link>
              </Button>
            </FeatureCardAction>
          </FeatureCardContent>
        </FeatureCard>

        {/* Card 3: Security & Reliability */}
        <FeatureCard imagePosition="right" className="border-0 bg-[rgba(20,20,20,1)] sticky top-24">
          <FeatureCardContent>
            <div className="bg-white/10 text-white px-5 py-2 rounded-full mb-5">
              Security & Reliability
            </div>
            <FeatureCardTitle>
              Client Matter Data Protected at Every Level
            </FeatureCardTitle>
            <FeatureCardDescription className='mb-5'>
              Legal matter data is among the most sensitive information any firm handles. Clinentora encrypts all data in transit (TLS 1.3) and at rest (AES-256), with role-based access control, multi-factor authentication, and a complete audit trail of every access and change.
            </FeatureCardDescription>
            <FeatureCardBenefits>
              <FeatureCardBenefitItem>
                Your data is never used to train shared models or shared with other firms
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Daily automated backups with point-in-time recovery — no data loss risk
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Redundant infrastructure with continuous uptime monitoring — no scheduled downtime
              </FeatureCardBenefitItem>
            </FeatureCardBenefits>
            <FeatureCardAction>
              <Button asChild>
                <Link to="/contact">
                  Request a Demo
                </Link>
              </Button>
            </FeatureCardAction>
          </FeatureCardContent>
          <div className="flex items-center justify-center bg-card rounded-2xl p-8 min-h-[320px]">
            <div className="text-center space-y-5 max-w-xs">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                <span className="text-3xl">🔒</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-left">
                {["TLS 1.3", "AES-256", "MFA", "RBAC", "Audit Log", "Zero Downtime"].map((item) => (
                  <div key={item} className="bg-white/5 rounded-lg px-3 py-2 text-xs text-white/70 border border-white/10">
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FeatureCard>
      </Container>
    </section>
  )
}

export default Features