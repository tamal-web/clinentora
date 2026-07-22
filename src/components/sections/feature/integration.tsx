import { AnimateOnView } from '@/components/ui/motion/animate-on-view'
import { StaggerContainer } from '@/components/ui/motion/stagger'
import Container from '../../container'

const FeatureIntegration = () => {

    return (
        <section className="md:py-[60px] py-12 bg-background border-t border-border">
            <Container className="md:space-y-16 space-y-8">
                <StaggerContainer className="text-center md:max-w-3xl mx-auto">
                    <AnimateOnView blur>
                        <h2 className="h2 md:mb-5 mb-3">
                            Seamless Integration with Your Firm's Ecosystem
                        </h2>
                    </AnimateOnView>
                    <AnimateOnView blur delay={0.2}>
                        <p className="text-muted-foreground text-lg">
                            Clinentora is built to work alongside your existing practice management tools, document management systems, and billing platforms. We integrate directly with court APIs and patent office databases to ensure your data is always synchronized and accurate across all your firm's systems.
                        </p>
                    </AnimateOnView>
                </StaggerContainer>
                
                <AnimateOnView delay={0.3} className="pt-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 opacity-70">
                        {/* Placeholder for integration logos */}
                        <div className="flex items-center justify-center p-6 bg-card border border-border rounded-xl">
                            <span className="text-white/80 font-semibold">Document Mgmt</span>
                        </div>
                        <div className="flex items-center justify-center p-6 bg-card border border-border rounded-xl">
                            <span className="text-white/80 font-semibold">Billing Systems</span>
                        </div>
                        <div className="flex items-center justify-center p-6 bg-card border border-border rounded-xl">
                            <span className="text-white/80 font-semibold">Court APIs</span>
                        </div>
                        <div className="flex items-center justify-center p-6 bg-card border border-border rounded-xl">
                            <span className="text-white/80 font-semibold">Patent Offices</span>
                        </div>
                    </div>
                </AnimateOnView>
            </Container>
        </section>
    )
}

export default FeatureIntegration
