import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden hero-padding-top pb-24 md:pb-32 bg-[url(/images/home/hero-bg.webp)] bg-cover bg-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <StaggerContainer>
            <AnimateOnView blur>
              <h1 className="h1 text-foreground mb-4">
                {/*Legal Management Powered by AI.

                  */}{" "}
                Smarter Legal Work, <br /> All in One Place
              </h1>
            </AnimateOnView>

            <AnimateOnView blur delay={0.2}>
              <p className="text-body-md max-w-2xl mx-auto mb-8">
                {/*
                Every filing read, every date pulled, every entry filled — your
                  */}
                One intelligent platform to manage cases, deadlines, documents,
                contracts, and more. team just reviews and confirms.
              </p>
            </AnimateOnView>

            <AnimateOnView
              className="flex items-center justify-center"
              delay={0.3}
            >
              <Button asChild size="lg">
                <Link to="/contact">Book a Demo</Link>
              </Button>
            </AnimateOnView>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Hero;
