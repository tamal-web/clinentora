
import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeatureHero = () => {
    return (
        <section className="relative overflow-hidden hero-padding-top pb-12 md:pb-20 md:space-y-[80px] space-y-8">
            <Container className="relative z-10">
                <StaggerContainer className="flex flex-col items-center text-center max-w-[760px] mx-auto">
                    <AnimateOnView once blur>
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-sm text-white/80 mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Legal Docketing Platform
                        </div>
                        <h1 className="h1 mb-5">
                            Every Practice Area. One Platform. Zero Missed Deadlines.
                        </h1>
                    </AnimateOnView>

                    <AnimateOnView once blur delay={0.1}>
                        <p className="text-lg text-muted-foreground mb-8">
                            Clinentora reads every filing the moment it arrives, calculates every deadline automatically, and keeps every attorney informed across IP, litigation, corporate, immigration, regulatory, and more.
                        </p>
                    </AnimateOnView>

                    <AnimateOnView once blur delay={0.2}>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button asChild size="lg">
                                <Link to="/contact">Request a Demo</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link to="/pricing">View Pricing</Link>
                            </Button>
                        </div>
                    </AnimateOnView>
                </StaggerContainer>
            </Container>

            {/* Practice Area Pills Ticker */}
            <AnimateOnView y={40} delay={0.3} className="relative w-full overflow-hidden">
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-6 max-w-4xl mx-auto">
                    {[
                        "IP Prosecution", "Patent Litigation", "Trademark", "Copyright",
                        "Corporate M&A", "Commercial Contracts", "Immigration", "Regulatory",
                        "Real Estate", "Tax Controversy", "Environmental", "Healthcare",
                    ].map((area) => (
                        <span
                            key={area}
                            className="px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground whitespace-nowrap hover:border-white/20 hover:text-white transition-all duration-300"
                        >
                            {area}
                        </span>
                    ))}
                </div>
            </AnimateOnView>
        </section>
    )
}

export default FeatureHero
