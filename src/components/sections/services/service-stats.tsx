import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import Container from "@/components/container";

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "98%", label: "On-time completion rate" },
  { value: "3", label: "Core service areas" },
];

const ServiceStats = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-card">
      <Container>
        {/* Header */}
        <AnimateOnView blur>
          <div className="mb-10">
            <span className="text-sm text-muted-foreground font-mono tracking-widest">
              [ By the Numbers ]
            </span>
            <h2 className="h3 text-white mt-4 max-w-3xl leading-tight">
              Real work. Real results.{" "}
              <span className="text-muted-foreground">
                Here's a snapshot of what we've built.
              </span>
            </h2>
          </div>
        </AnimateOnView>

        {/* 3-column grid — no images */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr] gap-6">
          {/* Column 1 — Big stat */}
          <AnimateOnView delay={0.05}>
            <div className="relative min-h-[320px] lg:min-h-[440px] border border-white/10 bg-background flex flex-col p-8 overflow-hidden">
              {/* Glow */}
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

              <span className="text-sm text-muted-foreground font-mono mb-auto">
                [ Projects ]
              </span>
              <div>
                <span
                  className="text-[7rem] md:text-[9rem] font-bold leading-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,137,117,0.3) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  50+
                </span>
                <p className="text-muted-foreground text-sm mt-2">
                  Projects delivered across web, mobile & software.
                </p>
              </div>
            </div>
          </AnimateOnView>

          {/* Column 2 — Stats list */}
          <AnimateOnView delay={0.1}>
            <div className="relative min-h-[320px] lg:min-h-[440px] border border-white/10 bg-background flex flex-col justify-between p-8 overflow-hidden">
              <span className="text-sm text-muted-foreground font-mono">
                [ Stats ]
              </span>

              <div className="flex flex-col gap-8 mt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="text-4xl md:text-5xl font-semibold"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <Button
                asChild
                variant="outline"
                className="mt-8 self-start px-6 hover:bg-neutral-900 hover:text-white"
              >
                <Link to="/contact">Work with us</Link>
              </Button>
            </div>
          </AnimateOnView>

          {/* Column 3 — Testimonial */}
          <AnimateOnView delay={0.15}>
            <div className="relative min-h-[320px] lg:min-h-[440px] border border-white/10 bg-background flex flex-col p-8">
              <div className="flex items-center gap-2 mb-auto">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground font-mono">
                  [ Client ]
                </span>
              </div>

              <div className="mt-8">
                <p className="text-xl md:text-2xl font-normal text-white/90 leading-relaxed mb-6">
                  "They delivered a product that was better than what we
                  imagined — on time and completely on brief."
                </p>
                <p className="text-sm text-muted-foreground">
                  — Founding team, legal-tech startup
                </p>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </Container>
    </section>
  );
};

export default ServiceStats;
