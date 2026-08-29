import { useEffect, useRef, useState } from "react";
import Container from "@/components/container";

type ProcessStep = {
  step: string;
  title: string;
  detail: string;
  cardHeight: string;
};

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery\n& Scoping",
    detail: "[ 1–2 days ]",
    cardHeight: "h-[260px]",
  },
  {
    step: "02",
    title: "Design\n& Prototype",
    detail: "[ 1–2 weeks ]",
    cardHeight: "h-[320px]",
  },
  {
    step: "03",
    title: "Build\n& Review",
    detail: "[ 2–6 weeks ]",
    cardHeight: "h-[380px]",
  },
  {
    step: "04",
    title: "Launch\n& Support",
    detail: "[ ongoing ]",
    cardHeight: "h-[440px]",
  },
];

const HowWeWork = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-16 md:py-24 bg-background overflow-hidden">
      {/* Decorative corner lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-0 right-0 h-px bg-white/5" />
        <div className="absolute bottom-8 left-0 right-0 h-px bg-white/5" />
        <div className="absolute top-0 bottom-0 left-8 w-px bg-white/5" />
        <div className="absolute top-0 bottom-0 right-8 w-px bg-white/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="px-0 md:px-[30px] py-[30px] border-t border-l border-r border-white/10 mb-0">
          <span
            className={`text-muted-foreground text-sm font-medium tracking-widest mb-4 block transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            [ How We Work ]
          </span>
          <h2
            className={`h3 text-white max-w-3xl transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            A clear process from brief to launch — no surprises, just results.
          </h2>
        </div>

        {/* 4-column staircase grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10 overflow-hidden -mt-px">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className={`relative lg:h-[520px] ${index > 0 ? "lg:border-l border-white/10" : ""}`}
            >
              <div
                className={`lg:absolute lg:left-0 lg:right-0 lg:bottom-0 flex flex-col transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
                }}
              >
                {/* Step number */}
                <div className="px-6 py-3">
                  <span className="text-sm text-muted-foreground font-mono tracking-widest">
                    [ {step.step} ]
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`${step.cardHeight} bg-card/60 border-t-[3px] border-primary/60 flex flex-col p-6`}
                >
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white/80 whitespace-pre-line leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-auto font-mono text-sm text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
