import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import {
  Calendar,
  FileCheck,
  FolderOpen,
  Scale,
  Shield,
  Users,
  Bot,
  Search,
  Zap,
  FileText,
  Lock,
  Layers,
} from "lucide-react";

const qlerklyFeatures = [
  {
    id: 1,
    title: "Structured Case Files",
    description: "All matters in one organised place.",
    icon: FolderOpen,
  },
  {
    id: 2,
    title: "Deadline Tracking",
    description: "Never miss a critical date.",
    icon: Calendar,
  },
  {
    id: 3,
    title: "Multi-Practice Support",
    description: "Litigation, corporate, immigration, and more.",
    icon: Scale,
  },
  {
    id: 4,
    title: "Full Audit Trail",
    description: "Every change logged for compliance.",
    icon: Shield,
  },
  {
    id: 5,
    title: "Team Assignment",
    description: "Assign tasks and track ownership.",
    icon: Users,
  },
  {
    id: 6,
    title: "Human Review on Every Entry",
    description: "Your team approves before anything is saved.",
    icon: FileCheck,
  },
];

const lexoraFeatures = [
  {
    id: 1,
    title: "AI-powered Automations",
    description: "Automates workflows in plain language.",
    icon: Bot,
  },
  {
    id: 2,
    title: "E-Discovery",
    description: "Instant search across all documents.",
    icon: Search,
  },
  {
    id: 3,
    title: "Contract Lifecycle",
    description: "Draft to renewal, fully managed.",
    icon: FileText,
  },
  {
    id: 4,
    title: "Risk Detection",
    description: "Flags conflicts and missed deadlines early.",
    icon: Zap,
  },
  {
    id: 5,
    title: "Jurisdiction Sync",
    description: "Connected to courts, auto-updated rules.",
    icon: Layers,
  },
  {
    id: 6,
    title: "Privacy & Security",
    description: "Encrypted, role-based, zero data training.",
    icon: Lock,
  },
];

interface FeatureGridProps {
  product: "qlerkly" | "lexora";
}

const FeatureGrid = ({ product }: FeatureGridProps) => {
  const features = product === "lexora" ? lexoraFeatures : qlerklyFeatures;
  const heading =
    product === "lexora"
      ? "Everything intelligent legal work needs"
      : "Everything your firm needs to stay organised";
  const subheading =
    product === "lexora"
      ? "AI-powered tools that automate the routine so your team focuses on what matters."
      : "Simple, reliable tools to manage cases, deadlines, and documents — without the complexity.";

  return (
    <section className="md:py-[60px] py-12">
      <Container className="md:space-y-20 space-y-8">
        <StaggerContainer className="text-center md:max-w-xl max-w-sm mx-auto">
          <AnimateOnView blur>
            <h2 className="h2 md:mb-5 mb-3">{heading}</h2>
          </AnimateOnView>
          <AnimateOnView blur delay={0.2}>
            <p className="text-muted-foreground">{subheading}</p>
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
                <div className="border border-border bg-card rounded-[24px] p-6 flex flex-col gap-4 h-full hover:border-white/15 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="h4">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">
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
  );
};

export default FeatureGrid;
