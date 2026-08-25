
import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FeatureHeroProps {
  productName: string;
  productLogo: string;
  tagline: string;
  description: string;
  productImage?: string;
}

const FeatureHero = ({ productName, productLogo, tagline, description, productImage }: FeatureHeroProps) => {
  const practiceAreas = [
    "Litigation", "Corporate M&A", "Commercial Contracts", "Immigration",
    "Regulatory", "Real Estate", "Tax Controversy", "Environmental",
    "Healthcare", "IP Prosecution", "Patent Litigation", "Trademark", "Copyright",
  ];

  return (
    <section className="relative overflow-hidden hero-padding-top pb-12 md:pb-20 md:space-y-[80px] space-y-8">
      <Container className="relative z-10">
        <StaggerContainer className="flex flex-col items-center text-center max-w-[760px] mx-auto">
          <AnimateOnView once blur>
            <img
              src={productLogo}
              alt={productName}
              className="h-12 w-auto mb-6 mx-auto"
            />
            <h1 className="h1 mb-5">{tagline}</h1>
          </AnimateOnView>

          <AnimateOnView once blur delay={0.1}>
            <p className="text-lg text-muted-foreground mb-8">{description}</p>
          </AnimateOnView>

          <AnimateOnView once blur delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Request a Demo</Link>
              </Button>
            </div>
          </AnimateOnView>
        </StaggerContainer>

        {/* Product Image */}
        {productImage ? (
          <AnimateOnView once blur delay={0.3}>
            <div className="mt-12 rounded-2xl overflow-hidden border border-border max-w-4xl mx-auto">
              <img
                src={productImage}
                alt={`${productName} platform`}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimateOnView>
        ) : (
          <AnimateOnView once blur delay={0.3}>
            <div className="mt-12 rounded-2xl border border-border border-dashed max-w-4xl mx-auto bg-card/30 flex items-center justify-center min-h-[300px]">
              <p className="text-muted-foreground text-sm">Product screenshot coming soon</p>
            </div>
          </AnimateOnView>
        )}
      </Container>

      {/* Practice Area Pills */}
      <AnimateOnView y={40} delay={0.4} className="relative w-full overflow-hidden">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-6 max-w-4xl mx-auto">
          {practiceAreas.map((area) => (
            <span
              key={area}
              className="px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground whitespace-nowrap hover:border-white/20 hover:text-white transition-all duration-300"
            >
              {area}
            </span>
          ))}
        </div>
      </AnimateOnView>
    </section>
  );
};

export default FeatureHero;
