
import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, BookText, Calendar, FileCheck, Scale, Shield } from "lucide-react";

const features = [
    {
        id: 1,
        title: "Multi-Practice Area Coverage",
        description: "IP prosecution, patent litigation, trademark, corporate M&A, immigration, regulatory, real estate. All natively supported.",
        icon: Scale,
    },
    {
        id: 2,
        title: "Deadline Calculation Engine",
        description: "Jurisdiction-specific deadline logic across federal and state courts, IP offices, and regulatory bodies, with automatic holiday adjustments.",
        icon: Calendar,
    },
    {
        id: 3,
        title: "AI Document Summarisation",
        description: "Incoming filings are automatically read and summarised: key dates, required actions, parties, and strategic context across all document types.",
        icon: Bot,
    },
    {
        id: 4,
        title: "Complete Audit Trail",
        description: "Every entry, edit, and deadline change logged permanently for compliance, supervision, and malpractice defence.",
        icon: Shield,
    },
    {
        id: 5,
        title: "Client Report Generation",
        description: "Generate professional status updates summarising matter history, recent activity, and upcoming deadlines in plain language.",
        icon: BookText,
    },
    {
        id: 6,
        title: "Docket Entry Pre-Population",
        description: "Every entry is presented for human review and confirmation before saving. Full professional control remains with your docketing team.",
        icon: FileCheck,
    },
]

const FeatureGrid = () => {

    return (
        <section className="md:py-[60px] py-12">
            <Container className="md:space-y-20 space-y-8">
                <StaggerContainer className="text-center md:max-w-xl max-w-sm mx-auto">
                    <AnimateOnView blur>
                        <h2 className="h2 md:mb-5 mb-3">
                            The Complete Docketing Platform
                        </h2>
                    </AnimateOnView>
                    <AnimateOnView blur delay={0.2}>
                        <p className="text-muted-foreground">
                            Every feature your firm needs to track deadlines across all practice areas, with the automation to remove manual work and the oversight to maintain professional control.
                        </p>
                    </AnimateOnView>
                </StaggerContainer>

                <StaggerContainer>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <AnimateOnView
                                key={feature.id}
                                delay={index * 0.08}
                                className="h-full"
                            >
                                <div className="border border-border bg-card rounded-[24px] p-6 flex flex-col gap-5 h-full hover:border-white/15 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="h4">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimateOnView>
                        ))}
                    </div>
                </StaggerContainer>
            </Container>
        </section>
    )
}

export default FeatureGrid
