import { AnimateOnView } from '@/components/ui/motion/animate-on-view'
import { StaggerContainer } from '@/components/ui/motion/stagger'
import { Link } from 'react-router-dom'
import Container from '../../container'
import { Button } from '../../ui/button'
import {
  FeatureCard,
  FeatureCardAction,
  FeatureCardContent,
  FeatureCardDescription,
  FeatureCardImage,
  FeatureCardOverlay,
  FeatureCardTitle
} from '../../ui/feature-card'

const cards = [
  {
    id: 1,
    title: "Filings read and classified on arrival",
    description: "Scanned PDFs, native PDFs, and image-based office actions are parsed automatically — filing type, parties, application numbers, and every governing date extracted before a paralegal opens the document.",
    imageSrc: "images/home/feature-1.png",
    imageAlt: "Document intelligence extracting deadlines from a legal filing",
    overlayData: {
      src: "images/home/feature-stat-1.webp",
      alt: "Extracted deadline summary",
      className: "aspect-[203/188] w-full max-w-[203px]"
    },
    overlayPosition: "bottom-left" as const
  },
  {
    id: 2,
    title: "Jurisdiction-specific deadlines, calculated for you",
    description: "USPTO response periods, EPO reply windows, PCT national phase entry, court scheduling orders — 40+ patent and trademark offices and 2,500+ court rule sets, with holiday and weekend adjustment built in.",
    imageSrc: "images/home/feature-2.webp",
    imageAlt: "Jurisdiction-specific deadline calculation interface",
    overlayData: {
      src: "images/home/feature-stat-2.png",
      alt: "Deadline projection panel",
      className: "aspect-[244/130] w-full max-w-[244px]"
    },
    overlayPosition: "bottom-left" as const
  },
  {
    id: 3,
    title: "Human review on every entry",
    description: "Docket entries arrive pre-populated. Your team reviews and confirms every date before it is finalised — full professional control retained, no black-box automation.",
    imageSrc: "images/home/feature-3.webp",
    imageAlt: "Paralegal reviewing and confirming a pre-populated docket entry",
    overlayData: {
      src: "images/home/feature-stat-3.png",
      alt: "Review and confirm panel",
      className: "aspect-[173/180] w-full max-w-[173px]"
    },
    overlayPosition: "bottom-left" as const
  }
]

const Features = () => {

  return (
    <section className="py-12 md:py-[60px] bg-background">
      <Container className="space-y-8 md:space-y-20">
        <StaggerContainer className="text-center max-w-xl mx-auto">
          <AnimateOnView
            blur
          >
            <h2 className="h2 mb-6">
              Docketing that removes the data entry step
            </h2>
          </AnimateOnView>
          <AnimateOnView
            blur
            delay={0.2}
          >
            <p className='text-muted-foreground'>
              Built for IP prosecution boutiques, in-house IP departments, and litigation practices that can't afford a missed deadline.
            </p>
          </AnimateOnView>
        </StaggerContainer>
        <StaggerContainer
          className='max-w-[1062px] mx-auto md:space-y-[60px] space-y-8'
        >
          {cards.map((card, index) => (
            <AnimateOnView
              delay={index * 0.1}
              key={card.id}
              className={`md:sticky md:top-24 z-10 bg-background md:rounded-[30px] rounded-lg`}
            >
              <FeatureCard
                imagePosition="right"
              >
                <FeatureCardContent>
                  <FeatureCardTitle>{card.title}</FeatureCardTitle>
                  <FeatureCardDescription>{card.description}</FeatureCardDescription>
                  <FeatureCardAction>
                    <Button asChild>
                      <Link to="/contact">
                        Book a Demo
                      </Link>
                    </Button>
                  </FeatureCardAction>
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
  )
}

export default Features