
import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Bot, BookText, Calendar, FileCheck, Scale, Shield } from "lucide-react";

const features = [
    {
        id: 1,
        title: "Multi-Practice Coverage",
        description: "Litigation, corporate, immigration, regulatory, real estate, tax, and more — all natively supported in one platform.",
        icon: Scale,
    },
    {
        id: 2,
        title: "Automatic Date Extraction",
        description: "Every incoming document is read and every important date is pulled out automatically — no typing required.",
        icon: Calendar,
    },
    {
        id: 3,
        title: "AI Document Summaries",
        description: "Incoming files are summarised instantly: key dates, required actions, and who needs to respond.",
        icon: Bot,
    },
    {
        id: 4,
        title: "Full Audit Trail",
        description: "Every entry, edit, and change is logged permanently for compliance and supervision.",
        icon: Shield,
    },
    {
        id: 5,
        title: "Client Status Reports",
        description: "Generate professional updates on any matter — recent activity, upcoming dates, and next steps in plain language.",
        icon: BookText,
    },
    {
        id: 6,
        title: "Human Review on Every Entry",
        description: "Everything is prepared for your team to approve before it's saved. Full control stays with your people.",
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
                            Everything your firm needs
                        </h2>
                    </AnimateOnView>
                    <AnimateOnView blur delay={0.2}>
                        <p className="text-muted-foreground">
                            Every tool your legal team needs to stay organised, move faster, and never miss what matters.
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
