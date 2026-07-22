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
                            Switching Is Simpler Than You Think
                        </h2>
                    </AnimateOnView>
                    <AnimateOnView blur delay={0.2}>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            The biggest barrier to changing docketing systems is the transition. Clinentora is designed to make switching the easy decision, not the hard one.
                        </p>
                    </AnimateOnView>
                </StaggerContainer>

                <AnimateOnView delay={0.3}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                emoji: "📂",
                                title: "Data Import",
                                description: "Active matters, historical deadlines, and document records are imported from your existing system. Supports common export formats from major docketing platforms.",
                            },
                            {
                                emoji: "⌨️",
                                title: "No Re-Keying",
                                description: "Your team should never have to manually re-enter a deadline that already exists somewhere else. We handle the migration, not you.",
                            },
                            {
                                emoji: "🔄",
                                title: "Parallel Run Period",
                                description: "Run Clinentora alongside your current system during a transition window, so matters are never tracked in only one place during the changeover.",
                            },
                            {
                                emoji: "👥",
                                title: "Dedicated Onboarding",
                                description: "A Clinentora specialist works with your docketing staff through setup, data validation, rule configuration for your specific practice areas, and go-live.",
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
                            "Every practice area. One platform. Zero missed deadlines. Whether your firm handles one practice area or ten, we'd welcome the chance to show you Clinentora working with the kinds of documents your team receives every day."
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
