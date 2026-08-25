import { AnimateOnView } from '@/components/ui/motion/animate-on-view'
import { StaggerContainer } from '@/components/ui/motion/stagger'
import Container from '../../container'
import { Button } from '../../ui/button'
import { Link } from 'react-router-dom'

const FeatureGrowth = () => {

    return (
        <section className="md:py-[60px] py-12">
            <Container className="md:space-y-16 space-y-8">
                <StaggerContainer className="text-center md:max-w-none max-w-xs mx-auto">
                    <AnimateOnView blur>
                        <h2 className="h2 md:mb-5 mb-3">
                            Getting started is easier than you think
                        </h2>
                    </AnimateOnView>
                    <AnimateOnView blur delay={0.2}>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We handle your data migration, configuration, and onboarding — so your team can hit the ground running without disruption.
                        </p>
                    </AnimateOnView>
                </StaggerContainer>

                <AnimateOnView delay={0.3}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                emoji: "📂",
                                title: "Data Migration",
                                description: "We import your existing cases, files, and records. Your history moves with you — nothing gets left behind.",
                            },
                            {
                                emoji: "⌨️",
                                title: "No Re-Entering Data",
                                description: "Your team never manually re-enters information that already exists. We handle the transfer.",
                            },
                            {
                                emoji: "🔄",
                                title: "Run Both Systems in Parallel",
                                description: "Keep your current tools running alongside ours during the transition, so nothing falls through the cracks.",
                            },
                            {
                                emoji: "👥",
                                title: "Dedicated Onboarding",
                                description: "A Clinentora specialist works with your team through setup, configuration, and go-live.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="bg-card border border-border rounded-2xl p-6 flex gap-4">
                                <div className="text-3xl flex-shrink-0 mt-1">{item.emoji}</div>
                                <div>
                                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimateOnView>

                <AnimateOnView blur delay={0.4} className="text-center">
                    <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
                        <p className="text-lg text-muted-foreground italic leading-relaxed mb-6">
                            "Whether your firm handles one practice area or ten, we'd love to show you how it works on the kinds of documents your team deals with every day."
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button asChild>
                                <Link to="/contact">Get in Touch</Link>
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">hello@clinentora.com · clinentora.com</p>
                    </div>
                </AnimateOnView>
            </Container>
        </section>
    )
}

export default FeatureGrowth
