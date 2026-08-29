import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "website-development",
    label: "01",
    title: "Website Development",
    subtitle: "From landing pages to full-scale web apps",
    description:
      "High-performance websites built around your goals — fast, accessible, and built to convert.",
    highlights: [
      "Responsive, mobile-first design",
      "SEO-optimised architecture",
      "CMS integration (Sanity, Contentful, WordPress)",
      "Performance & Core Web Vitals optimisation",
      "Custom animations & interactions",
    ],
    cta: "Get a Website Quote",
    href: "/contact",
  },
  {
    id: "app-development",
    label: "02",
    title: "App Development",
    subtitle: "Native & cross-platform mobile experiences",
    description:
      "iOS and Android apps — fluid, reliable, and built for real users.",
    highlights: [
      "iOS & Android native apps",
      "Cross-platform React Native builds",
      "Offline-first & real-time features",
      "App Store & Play Store submission",
      "Ongoing maintenance & updates",
    ],
    cta: "Build Your App",
    href: "/contact",
  },
  {
    id: "custom-software",
    label: "03",
    title: "Custom Software Solutions",
    subtitle: "Tailored systems that fit exactly how you work",
    description:
      "Bespoke tools, automation, and AI integrations designed around your workflow.",
    highlights: [
      "AI & ML integration",
      "Internal dashboards & admin tools",
      "API design & third-party integrations",
      "Workflow automation & process digitisation",
      "Scalable cloud architecture (AWS, GCP, Azure)",
    ],
    cta: "Discuss Your Project",
    href: "/contact",
  },
];

const ServicesCards = () => {
  return (
    <section className="py-16 md:py-28 bg-background">
      <Container className="space-y-24 md:space-y-32">
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <AnimateOnView
              key={service.id}
              delay={index * 0.05}
              className="scroll-mt-24"
            >
              <div
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-20 items-center`}
              >
                {/* Text Content */}
                <StaggerContainer className="flex-1 space-y-6">
                  <AnimateOnView blur delay={0.05}>
                    <h2 className="h3 text-white">{service.title}</h2>
                    <p className="text-primary/80 text-sm font-medium mt-1">
                      {service.subtitle}
                    </p>
                  </AnimateOnView>

                  <AnimateOnView blur delay={0.1}>
                    <p className="text-muted-foreground leading-relaxed text-body-sm">
                      {service.description}
                    </p>
                  </AnimateOnView>

                  <AnimateOnView delay={0.15}>
                    <ul className="space-y-3">
                      {service.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-white/80"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </AnimateOnView>

                  <AnimateOnView delay={0.2}>
                    <Button asChild className="group mt-2">
                      <Link to={service.href}>
                        {service.cta}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </AnimateOnView>
                </StaggerContainer>

                {/* Big Index Number */}
                <AnimateOnView delay={0.1} className="flex-1 flex justify-center lg:justify-end items-center select-none">
                  <span
                    className="font-semibold leading-none tracking-tighter pointer-events-none"
                    style={{
                      fontSize: "clamp(9rem, 22vw, 18rem)",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {service.label}
                  </span>
                </AnimateOnView>
              </div>

              {/* Separator */}
              {index < services.length - 1 && (
                <div className="mt-24 md:mt-32 h-px w-full bg-white/5" />
              )}
            </AnimateOnView>
          );
        })}
      </Container>
    </section>
  );
};

export default ServicesCards;
