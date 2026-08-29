import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="relative md:h-screen flex items-center justify-start overflow-hidden pt-32 pb-20 bg-[url(/images/about/about-hero.png)] bg-cover bg-center">
      {/* Background Placeholder */}
      <div className="absolute inset-0 bg-black/55"></div>

      <Container className="w-full">
        <StaggerContainer className="max-w-[760px]">
          {/* Headline */}
          <AnimateOnView blur once>
            <h1 className="h1 mb-4">
              Every Practice Area. One Platform. Zero Missed Deadlines.
            </h1>
          </AnimateOnView>

          {/* Subheadline */}
          <AnimateOnView blur once delay={0.1}>
            <p className="text-lg mb-[21px] text-white/80">
              Clinentora is a legal docketing platform built for law firms that
              handle multiple practice areas, covering document intake, deadline
              calculation, and AI-powered briefings across every matter.
            </p>
          </AnimateOnView>

          {/* CTA */}
          <AnimateOnView blur once delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/contact">Request a Demo</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-6 hover:bg-neutral-900 hover:text-white"
              >
                <Link to="/features">Explore Features</Link>
              </Button>
            </div>
          </AnimateOnView>
        </StaggerContainer>
      </Container>
    </section>
  );
};

export default AboutHero;
