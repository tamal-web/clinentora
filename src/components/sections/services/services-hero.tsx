import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesHero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden hero-padding-top pb-24 md:pb-32 bg-[url(/images/home/hero-bg.webp)] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60" />

      <Container className="relative z-10 w-full">
        <StaggerContainer className="max-w-4xl mx-auto text-center">
          <AnimateOnView blur once>
            <p className="text-primary text-sm font-medium uppercase tracking-[0.15em] mb-4">
              What We Do
            </p>
          </AnimateOnView>

          <AnimateOnView blur once delay={0.1}>
            <h1 className="h1 text-foreground mb-6">
              Built to Deliver. <br />
              <span className="text-gradient">Engineered to Last.</span>
            </h1>
          </AnimateOnView>

          <AnimateOnView blur once delay={0.2}>
            <p className="text-body-md text-white/70 max-w-2xl mx-auto mb-10">
              From sleek websites to complex enterprise software, we build
              digital products that drive real results — on time, on spec, and
              built to scale.
            </p>
          </AnimateOnView>

          <AnimateOnView once delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-6 hover:bg-neutral-900 hover:text-white"
              >
                <Link to="/book-a-demo">Book a Demo</Link>
              </Button>
            </div>
          </AnimateOnView>
        </StaggerContainer>
      </Container>
    </section>
  );
};

export default ServicesHero;
