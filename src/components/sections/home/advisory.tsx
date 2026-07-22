import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Linkedin } from "lucide-react";

const advisors = [
    {
        name: "Karol Wilder",
        title: "IP Docketing Advisor",
        bio: "35+ years of IP docketing and paralegal experience across Eli Lilly, Bayer Crop Science, MilliporeSigma, and Pfizer. Has managed global portfolios of 1,500+ matters with 99.9–100% deadline compliance and deep hands-on experience with Anaqua and CPI. Brings practitioner knowledge of what docketing software must — and currently fails to — deliver.",
        linkedin: "https://linkedin.com/in/karol-wilder-b521ab10",
    },
];

const Advisory = () => {
    return (
        <section className="md:py-[60px] py-12">
            <Container className="md:space-y-20 space-y-8">
                <StaggerContainer className="text-center md:max-w-[630px] max-w-xs mx-auto">
                    <AnimateOnView blur>
                        <h2 className="h2 md:mb-5 mb-3">Advisory Board</h2>
                    </AnimateOnView>
                    <AnimateOnView blur delay={0.1}>
                        <p className="text-muted-foreground">
                            Senior IP practitioners shaping how Clinentora meets the reality of a firm's docket.
                        </p>
                    </AnimateOnView>
                </StaggerContainer>

                <div className="grid grid-cols-1 md:gap-6 gap-4 max-w-[720px] mx-auto">
                    {advisors.map((member, index) => (
                        <AnimateOnView
                            key={index}
                            className="p-8 rounded-2xl bg-card border border-border flex flex-col gap-4 transition-all duration-300 hover:bg-white/5"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="text-white font-medium text-lg">{member.name}</span>
                                <span className="text-sm text-muted-foreground">{member.title}</span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {member.bio}
                            </p>
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${member.name} on LinkedIn`}
                                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                        </AnimateOnView>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Advisory;