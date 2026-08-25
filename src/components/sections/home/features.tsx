import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import Container from "../../container";
import {
  FeatureCard,
  FeatureCardContent,
  FeatureCardDescription,
  FeatureCardImage,
  FeatureCardOverlay,
  FeatureCardTitle,
} from "../../ui/feature-card";

const cards = [
  {
    id: 1,
    title: "Agentic AI that works for you",
    description:
      "Tell it what to do in plain language. The AI handles workflows, reads your emails, assigns tasks, and automates repetitive work — so your team focuses on clients.",
    imageSrc: "images/home/feature-1.png",
    imageAlt: "Agentic AI automating legal workflows",
    overlayData: {
      src: "images/home/feature-stat-1.webp",
      alt: "AI workflow summary",
      className: "aspect-[203/188] w-full max-w-[203px] hidden",
    },
    overlayPosition: "bottom-left" as const,
  },
  {
    id: 2,
    title: "E-Discovery across all matters",
    description:
      "Find any document, communication, or case file in seconds. Search across your entire matter history without digging through folders or emailing colleagues.",
    imageSrc: "images/home/feature-2.webp",
    imageAlt: "E-Discovery search interface",
    overlayData: {
      src: "images/home/feature-stat-2.png",
      alt: "Search results panel",
      className: "aspect-[244/130] w-full max-w-[244px] hidden",
    },
    overlayPosition: "bottom-left" as const,
  },
  {
    id: 3,
    title: "Contract lifecycle, start to finish",
    description:
      "Draft, review, approve, and track every contract in one place. Get alerts before renewals and expirations — never let a contract lapse unnoticed.",
    imageSrc: "images/home/feature-3.webp",
    imageAlt: "Contract lifecycle management dashboard",
    overlayData: {
      src: "images/home/feature-stat-3.png",
      alt: "Contract status panel",
      className: "aspect-[173/180] w-full max-w-[173px]",
    },
    overlayPosition: "bottom-left" as const,
  },
  {
    id: 4,
    title: "Connected to courts and authorities",
    description:
      "Directly integrated with local and international legal authorities. Rules update automatically so your deadlines are always accurate.",
    imageSrc: "images/home/feature-1.png",
    imageAlt: "Jurisdiction integration with courts",
    overlayData: {
      src: "images/home/feature-stat-1.webp",
      alt: "Jurisdiction sync panel",
      className: "aspect-[203/188] w-full max-w-[203px] hidden",
    },
    overlayPosition: "bottom-left" as const,
  },
];

const Features = () => {
  return (
    <section className="py-12 md:py-[60px] bg-background">
      <Container className="space-y-8 md:space-y-20">
        <StaggerContainer className="text-center max-w-xl mx-auto">
          <AnimateOnView blur>
            <h2 className="h2 mb-6">
              Everything your firm needs in one place
            </h2>
          </AnimateOnView>
          <AnimateOnView blur delay={0.2}>
            <p className="text-muted-foreground">
              Built for law firms and legal teams that want to work smarter, not harder.
            </p>
          </AnimateOnView>
        </StaggerContainer>
        <StaggerContainer className="max-w-[1062px] mx-auto md:space-y-[60px] space-y-8">
          {cards.map((card, index) => (
            <AnimateOnView
              delay={index * 0.1}
              key={card.id}
              className={`md:sticky md:top-24 z-10 bg-background md:rounded-[30px] rounded-lg`}
            >
              <FeatureCard imagePosition="right">
                <FeatureCardContent>
                  <FeatureCardTitle>{card.title}</FeatureCardTitle>
                  <FeatureCardDescription>
                    {card.description}
                  </FeatureCardDescription>
                </FeatureCardContent>
                <FeatureCardImage src={card.imageSrc} alt={card.imageAlt}>
                  <FeatureCardOverlay
                    src={card.overlayData.src}
                    alt={card.overlayData.alt}
                    position={card.overlayPosition}
                    className={card.overlayData.className}
                  />
                </FeatureCardImage>
              </FeatureCard>
            </AnimateOnView>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};

export default Features;
