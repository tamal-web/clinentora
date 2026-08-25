import { AnimateOnView } from '@/components/ui/motion/animate-on-view'
import { StaggerContainer } from '@/components/ui/motion/stagger'
import { Bot, CheckSquare, Search, Zap } from 'lucide-react'
import Container from '../../container'

const aiFeatures = [
    {
        icon: <Search className="w-5 h-5 text-orange-400" />,
        title: "Natural Language Search",
        description: "Ask in plain English: 'What does the trial team have due this month?' and get structured results across all matters."
    },
    {
        icon: <Zap className="w-5 h-5 text-orange-400" />,
        title: "Risk Detection",
        description: "Flags conflicting dates, approaching deadlines, and missing information before they become problems."
    },
    {
        icon: <CheckSquare className="w-5 h-5 text-orange-400" />,
        title: "Workload Balancing",
        description: "Surfaces imbalances across attorneys and flags when one person carries a disproportionate load."
    },
    {
        icon: <Bot className="w-5 h-5 text-orange-400" />,
        title: "Conflict Screening",
        description: "New matter intake automatically checks for potential conflicts across all existing matters."
    }
]

const comparisonRows = [
    ["Case organisation", "Manual folders and spreadsheets", "Structured matters with full history"],
    ["Date tracking", "Manual entry, prone to error", "Extracted automatically from documents"],
    ["Document search", "Folder browsing or email search", "Instant full-text search across all files"],
    ["AI automation", "Not included", "Workflows, summaries, and task automation"],
    ["Contract management", "Not included", "Full lifecycle from draft to renewal"],
    ["E-Discovery", "Not included", "Built-in search and document surfacing"],
    ["Jurisdiction sync", "Not included", "Connected to courts and legal authorities"],
    ["Setup", "Ready in minutes", "Guided onboarding with your data"],
]

const ComparisonTable = () => {
    return (
        <section className="md:py-[60px] py-12">
            <Container className="md:space-y-20 space-y-8">
                <StaggerContainer className="text-center md:max-w-2xl max-w-xs mx-auto">
                    <AnimateOnView blur>
                        <h2 className="h2 md:mb-5 mb-3">
                            Qlerkly or Legalis?
                        </h2>
                    </AnimateOnView>
                    <AnimateOnView blur delay={0.2}>
                        <p className="text-muted-foreground">
                            Both platforms are built by Clinentora. Choose based on how much automation your team needs.
                        </p>
                    </AnimateOnView>
                </StaggerContainer>

                {/* Comparison Table */}
                <AnimateOnView delay={0.3} blur>
                    <div className="overflow-x-auto rounded-2xl border border-border">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border bg-white/5">
                                    <th className="text-left p-4 text-muted-foreground font-medium">Feature</th>
                                    <th className="text-center p-4 text-white font-semibold">Qlerkly</th>
                                    <th className="text-center p-4 text-white font-semibold bg-primary/10">Legalis</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map(([feature, qlerkly, legalis], i) => (
                                    <tr key={i} className="border-b border-border last:border-0 hover:bg-white/2 transition-colors">
                                        <td className="p-4 text-white font-medium">{feature}</td>
                                        <td className="p-4 text-center text-muted-foreground">{qlerkly}</td>
                                        <td className="p-4 text-center text-primary font-medium bg-primary/5">{legalis}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </AnimateOnView>

                {/* AI Features Grid */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-8">
                    {aiFeatures.map((feature, index) => (
                        <AnimateOnView key={index} delay={0.4 + index * 0.1} blur>
                            <div className="space-y-6">
                                <div className="w-12 h-12 rounded-full bg-orange-950/20 border border-orange-500/10 flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="h4">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            </div>
                        </AnimateOnView>
                    ))}
                </StaggerContainer>
            </Container>
        </section>
    )
}

export default ComparisonTable
