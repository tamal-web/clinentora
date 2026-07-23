import { AnimateOnView } from '@/components/ui/motion/animate-on-view'
import { StaggerContainer } from '@/components/ui/motion/stagger'
import { BookOpen, CheckSquare, Clock, Search } from 'lucide-react'
import Container from '../../container'

const FutureReadyLegal = () => {
    const features = [
        {
            icon: <Search className="w-5 h-5 text-orange-400" />,
            title: "Natural Language Search",
            description: "Ask in plain English: 'What motion deadlines does the trial team have this month?' and get structured results across all matters."
        },
        {
            icon: <Clock className="w-5 h-5 text-orange-400" />,
            title: "Risk & Anomaly Detection",
            description: "Flags inconsistencies, conflicting dates, approaching fatal deadlines, and matters with missing information before they become problems."
        },
        {
            icon: <CheckSquare className="w-5 h-5 text-orange-400" />,
            title: "Workload Distribution Analysis",
            description: "Surfaces imbalances across attorneys and flags when one attorney carries a disproportionate deadline load in any given period."
        },
        {
            icon: <BookOpen className="w-5 h-5 text-orange-400" />,
            title: "Conflict of Interest Screening",
            description: "New matter intake automatically triggers a check against existing matters for potential conflicts across all practice areas."
        }
    ]

    return (
        <section className="md:py-[60px] py-12">
            <Container className="md:space-y-20 space-y-8">
                <StaggerContainer className="text-center md:max-w-2xl max-w-xs mx-auto">
                    <AnimateOnView blur>
                        <h2 className="h2 md:mb-5 mb-3">
                            AI-Powered Practice Management
                        </h2>
                    </AnimateOnView>
                    <AnimateOnView blur delay={0.2}>
                        <p className="text-muted-foreground">
                            Clinentora's AI layer works on top of the core docketing engine, adding intelligence that surfaces risks, answers questions, and keeps every attorney informed without additional effort.
                        </p>
                    </AnimateOnView>
                </StaggerContainer>

                {/* Comparison Table */}
                <AnimateOnView delay={0.3} blur>
                    <div className="overflow-x-auto rounded-2xl border border-border">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border bg-white/5">
                                    <th className="text-left p-4 text-muted-foreground font-medium">Capability</th>
                                    <th className="text-center p-4 text-muted-foreground font-medium">Legacy / Generic Systems</th>
                                    <th className="text-center p-4 text-white font-semibold bg-primary/10">Clinentora</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Practice area coverage", "One or two domains natively", "All major practice areas natively"],
                                    ["Data entry", "Manual reading and typing still required", "Extracted automatically from documents"],
                                    ["Rules maintenance", "Manual updates when rules change", "Maintained and updated continuously"],
                                    ["Multi-practice firm support", "Workarounds required for other areas", "Native support for every practice area"],
                                    ["Interface", "Dated, often desktop-only", "Cloud-native, accessible from any device"],
                                    ["Document intake", "Upload then enter manually", "Read and pre-populated on receipt"],
                                    ["Support", "Ticket queues, slow response", "Dedicated onboarding and responsive support"],
                                ].map(([capability, legacy, clinentora], i) => (
                                    <tr key={i} className="border-b border-border last:border-0 hover:bg-white/2 transition-colors">
                                        <td className="p-4 text-white font-medium">{capability}</td>
                                        <td className="p-4 text-center text-muted-foreground">{legacy}</td>
                                        <td className="p-4 text-center text-primary font-medium bg-primary/5">{clinentora}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </AnimateOnView>

                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-8">
                    {features.map((feature, index) => (
                        <AnimateOnView key={index} delay={0.4 + index * 0.1} blur>
                            <div className="space-y-6">
                                <div className="w-12 h-12 rounded-full bg-orange-950/20 border border-orange-500/10 flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="h4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnView>
                    ))}
                </StaggerContainer>
            </Container>
        </section>
    )
}

export default FutureReadyLegal
