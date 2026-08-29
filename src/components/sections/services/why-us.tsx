import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import {
  Code2,
  Layers,
  LifeBuoy,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Fast, Iterative Delivery",
    description: "Ship early, adapt fast.",
  },
  {
    icon: Layers,
    title: "Full-Stack Capability",
    description: "Design to DevOps — one team.",
  },
  {
    icon: ShieldCheck,
    title: "Quality You Can Rely On",
    description: "Testing & reviews by default.",
  },
  {
    icon: Users,
    title: "Collaborative Process",
    description: "You're in the loop, always.",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description: "Future-ready, maintainable code.",
  },
  {
    icon: LifeBuoy,
    title: "Post-Launch Support",
    description: "We stay after go-live.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-16 md:py-28 bg-[#0A0A0A]">
      <Container>
        <StaggerContainer className="text-center max-w-2xl mx-auto mb-16">
          <AnimateOnView blur>
            <p className="text-primary text-sm font-medium uppercase tracking-[0.15em] mb-3">
              Why Clinentora
            </p>
          </AnimateOnView>
          <AnimateOnView blur delay={0.1}>
            <h2 className="h2 text-white mb-5">Why teams choose us</h2>
          </AnimateOnView>
          <AnimateOnView blur delay={0.2}>
            <p className="text-muted-foreground">
              Startups to enterprises — here's what consistently matters most.
            </p>
          </AnimateOnView>
        </StaggerContainer>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <AnimateOnView key={reason.title} delay={index * 0.08}>
                <div className="group relative h-full p-6 rounded-2xl border border-white/8 bg-card hover:border-primary/30 transition-all duration-300">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-[1rem] mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground/90 text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnView>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;
