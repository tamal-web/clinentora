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
                            Works with the tools you already use
                        </h2>
                    </AnimateOnView>
                    <AnimateOnView blur delay={0.2}>
                        <p className="text-muted-foreground text-lg">
                            Our platforms integrate with your existing document storage, billing software, and case management systems — and connect directly to courts and legal authorities to keep your information accurate.
                        </p>
                    </AnimateOnView>
                </StaggerContainer>

                <AnimateOnView delay={0.3} className="pt-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 opacity-70">
                        <div className="flex items-center justify-center p-6 bg-card border border-border rounded-xl">
                            <span className="text-white/80 font-semibold">Document Storage</span>
                        </div>
                        <div className="flex items-center justify-center p-6 bg-card border border-border rounded-xl">
                            <span className="text-white/80 font-semibold">Billing Systems</span>
                        </div>
                        <div className="flex items-center justify-center p-6 bg-card border border-border rounded-xl">
                            <span className="text-white/80 font-semibold">Court Systems</span>
                        </div>
                        <div className="flex items-center justify-center p-6 bg-card border border-border rounded-xl">
                            <span className="text-white/80 font-semibold">Legal Authorities</span>
                        </div>
                    </div>
                </AnimateOnView>
            </Container>
        </section>
    )
}

export default FeatureIntegration
