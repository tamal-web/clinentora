
import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
    {
        name: "Sukhmanjeet Singh",
        title: "Co-Founder & Chief Executive Officer",
        avatar: "/images/common/members/sukhman.webp",
        email: "sukhman@clinentora.com",
        linkedin: "https://linkedin.com/in/sukhmanjeet-singh-642a63258",
        bio: "Leads Clinentora's product vision and firm relationships. Responsible for strategy, partnerships, and ensuring the platform solves the real operational problems of legal practice.",
    },
    {
        name: "Tamal Krishna Chhabra",
        title: "Co-Founder & Chief Technology Officer",
        avatar: "/images/common/members/tamal.webp",
        email: "tamal@clinentora.com",
        linkedin: "https://linkedin.com/in/tamalkrishn",
        bio: "Leads the architecture and engineering behind Clinentora's document intelligence engine, multi-domain rules system, and security infrastructure.",
    },
    {
        name: "Karol Wilder",
        title: "Legal Docketing Advisor",
        avatar: "/images/common/members/karol.webp",
        linkedin: "https://linkedin.com/in/karol-wilder-b521ab103",
        bio: "35+ years of docketing and paralegal experience across major pharmaceutical and life sciences companies, including Eli Lilly, Bayer, MilliporeSigma, and Pfizer.",
    },
];

const TeamGrid = () => {
    return (
        <section className="md:py-[60px] py-12">
            <Container className="md:space-y-20 space-y-8">
                <StaggerContainer className="text-center md:max-w-[630px] max-w-xs mx-auto">
                    <AnimateOnView blur>
                        <h2 className="h2 md:mb-5 mb-3">
                            The Team Behind Clinentora
                        </h2>
                    </AnimateOnView>

                    <AnimateOnView blur delay={0.1}>
                        <p className="text-muted-foreground">
                            Built by practitioners who spoke directly with attorneys, docketing specialists, and paralegals about where existing tools consistently fell short.
                        </p>
                    </AnimateOnView>
                </StaggerContainer>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-6">
                    {teamMembers.map((member, index) => (
                        <AnimateOnView
                            key={index}
                            className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-5 transition-all duration-300 hover:border-white/10 group"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-16 h-16 rounded-xl object-cover object-top"
                                />
                                <div className="flex flex-col min-w-0">
                                    <span className="text-white font-semibold">{member.name}</span>
                                    <span className="text-xs text-muted-foreground leading-snug mt-0.5">{member.title}</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                            <div className="flex items-center gap-3 mt-auto pt-2 border-t border-border">
                                {member.email && (
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white transition-colors"
                                    >
                                        <Mail className="w-3.5 h-3.5" />
                                        {member.email}
                                    </a>
                                )}
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-auto w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                                    aria-label={`${member.name} LinkedIn`}
                                >
                                    <Linkedin className="w-3.5 h-3.5 text-white/70" />
                                </a>
                            </div>
                        </AnimateOnView>
                    ))}
                </div>

                {/* Quote */}
                <AnimateOnView blur delay={0.2}>
                    <blockquote className="text-center max-w-2xl mx-auto border border-border rounded-2xl p-8 bg-card">
                        <p className="text-lg text-muted-foreground italic leading-relaxed mb-4">
                            "We built Clinentora because we kept hearing the same thing from attorneys across every kind of practice: the tools they had were either too narrow, or still required too much manual work. We built the platform we wished existed."
                        </p>
                        <cite className="text-sm text-white font-medium not-italic">— Clinentora Co-Founders</cite>
                    </blockquote>
                </AnimateOnView>
            </Container>
        </section>
    );
};

export default TeamGrid;
