
import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { cn } from "@/lib/utils";
import { Bot, Calendar, FileSearch, Globe, Lock, ScanLine } from "lucide-react";

const features = [
    {
        title: "Automatic Document Processing",
        description: "Accepts filings via email, agency feed, or upload. Identifies document type, extracts dates, case numbers, and parties automatically — across all practice areas.",
        icon: ScanLine,
    },
    {
        title: "AI-Powered Daily Briefings",
        description: "Each attorney receives a personalised morning digest: deadlines today, this week, and risk flags — in priority order. Plain-English queries return structured results.",
        icon: Bot,
    },
    {
        title: "Jurisdiction-Specific Rules Engine",
        description: "Federal and state courts, federal agencies, international IP offices, regulatory bodies. Deadlines falling on non-business days automatically shift per applicable rules.",
        icon: Globe,
    },
    {
        title: "Multi-Practice Area Coverage",
        description: "IP prosecution, patent litigation, trademark, corporate M&A, immigration, real estate, regulatory — all natively supported without workarounds or gaps.",
        icon: FileSearch,
    },
    {
        title: "Complete Audit Trail",
        description: "Every entry, edit, and deadline change is logged with full history for compliance, supervision, and malpractice defence. Human review before saving is always required.",
        icon: Calendar,
        highlight: true,
    },
    {
        title: "Enterprise-Grade Security",
        description: "TLS 1.3 in transit, AES-256 at rest, role-based access control, multi-factor authentication. Your matter data is never used to train shared models.",
        icon: Lock,
    },
];

const InnovationSection = () => {
    return (
        <section className="py-12 md:py-[60px]">
            <Container className="md:space-y-20 space-y-12">
                <StaggerContainer className="text-center md:max-w-none max-w-sm mx-auto">
                    <AnimateOnView blur once>
                        <h2 className="h2 md:mb-5 mb-3">
                            Built for Every Practice Area
                        </h2>
                    </AnimateOnView>

                    <AnimateOnView blur once delay={0.1}>
                        <p className="text-muted-foreground max-w-[660px] mx-auto">
                            From automatic document intake to AI-powered daily briefings — Clinentora handles the complete docketing workflow so your legal team can focus on the work that matters.
                        </p>
                    </AnimateOnView>
                </StaggerContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <AnimateOnView
                            key={index}
                            className={cn(
                                "relative md:p-8 p-6 rounded-[20px] bg-card border border-border flex flex-col gap-6 overflow-hidden transition-all duration-300 hover:border-white/10 group"
                            )}
                        >
                            {/* Highlight Glow Effect */}
                            {feature.highlight && (
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full -mr-16 -mt-16 pointer-events-none" />
                            )}

                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="h4">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        </AnimateOnView>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default InnovationSection;
