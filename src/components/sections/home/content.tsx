import lottie1 from '@/assets/lottie/content-1.json';
import lottie2 from '@/assets/lottie/content-2.json';
import lottie3 from '@/assets/lottie/content-3.json';
import { AnimateOnView } from '@/components/ui/motion/animate-on-view';
import { StaggerContainer } from '@/components/ui/motion/stagger';
import Lottie from 'lottie-react';
import Container from '../../container';

const streamlineFeatures = [
  {
    id: 1,
    title: "Document intelligence & intake",
    description: "OCR, filing type classification, and multi-language parsing across USPTO, EPO, JPO, and PCT correspondence.",
    lottieData: lottie1,
  },
  {
    id: 2,
    title: "Smart notifications & alerts",
    description: "Risk-weighted prioritisation, daily attorney briefings, and escalation when a deadline passes without a recorded completion.",
    lottieData: lottie2,
  },
  {
    id: 3,
    title: "Natural language search across your docket",
    description: "Ask in plain English: \"show all matters for Acme Corp due in 30 days\" and get structured results across the firm.",
    lottieData: lottie3,
  },
];

const Content = () => {
  return (
    <section className="py-12 md:py-[60px]">
      <Container className="space-y-8 md:space-y-20">
        <StaggerContainer className="text-center">
          <AnimateOnView blur>
            <h2 className="h2 md:mb-5 mb-3">
              Automation, with the practitioner in control
            </h2>
          </AnimateOnView>
          <AnimateOnView blur delay={0.2}>
            <p className="text-muted-foreground">
              Every capability, from intake to portfolio intelligence, is built around the docketing team, not around them.
            </p>
          </AnimateOnView>
        </StaggerContainer>
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {streamlineFeatures.slice(0, 2).map((feature, index) => (
              <AnimateOnView
                key={feature.id}
                delay={index * 0.1}
              >
                <div className="border-0 bg-[rgba(20,20,20,1)] rounded-[32px] overflow-hidden">
                  <div className="w-full aspect-[519/317] flex items-center justify-center">
                    <Lottie
                      animationData={feature.lottieData}
                      loop={true}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6 text-center md:text-left">
                    <h3 className="h4 mb-[9px]">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>
          <AnimateOnView delay={0.2}>
            <div className="border-0 bg-[rgba(20,20,20,1)] rounded-[32px] overflow-hidden">
              <div className="w-full xl:h-[350px] flex items-center justify-center">
                <Lottie
                  animationData={streamlineFeatures[2].lottieData}
                  loop={true}
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="h4 mb-[9px]">
                  {streamlineFeatures[2].title}
                </h3>
                <p className="text-muted-foreground">
                  {streamlineFeatures[2].description}
                </p>
              </div>
            </div>
          </AnimateOnView>
        </StaggerContainer>
      </Container>
    </section>
  )
}

export default Content

