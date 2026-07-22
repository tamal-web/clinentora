import faqAnimation from "@/assets/lottie/processor.json";
import Container from "@/components/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import Lottie from "lottie-react";
import { Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is Clinentora?",
    answer: "Clinentora is a cloud-based, AI-powered docketing platform built for IP and litigation law firms. It reads incoming filings, extracts every governing date, applies jurisdiction-specific deadline rules, and pre-populates docket entries for your team to review and confirm.",
  },
  {
    question: "Does Clinentora replace our docketing team?",
    answer: "No. Clinentora removes the manual data entry step — reading filings, extracting dates, calculating deadlines. Your docketing team reviews and confirms every entry before it is finalised. Full professional control is retained.",
  },
  {
    question: "Which jurisdictions and filing types are supported?",
    answer: "Clinentora supports 40+ patent and trademark offices — USPTO, EPO, PCT, JPO, and more — plus 2,500+ federal and state court rule sets for litigation deadlines. Filing types include office actions, notices of allowance, oppositions, PCT national phase entries, renewals, and court orders.",
  },
  {
    question: "Do I need the AI tier to get value from Clinentora?",
    answer: "No. Tier 1 — Automatic Docketing — delivers filing intake, deadline calculation, and pre-populated entries using OCR, document intelligence, and a jurisdiction rules engine. The AI tier adds natural language search, document summarisation, conflict pre-screening, and portfolio intelligence on top.",
  }
];

const FAQ = () => {

  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
      <Container>
        <AnimateOnView once blur>
          <div className="text-center mb-8 md:mb-24">
            <h2 className="h2">Frequently Asked Questions</h2>
          </div>
        </AnimateOnView>

        <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
          <AnimateOnView once className="max-w-[500px] w-full">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-gradient-to-br from-card to-background border border-border/50 shadow-2xl">
              <Lottie
                animationData={faqAnimation}
                loop={true}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimateOnView>

          <div className="max-w-[500px] w-full">
            <AnimateOnView once y={40}>
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                {faqs.slice(0, 4).map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/40 px-0">
                    <AccordionTrigger className="text-left py-6 hover:no-underline [&>svg]:hidden">
                      <span className="h4 pr-8">{faq.question}</span>
                      <div className="relative flex items-center justify-center w-6 h-6 shrink-0">
                        <Minus className="absolute w-5 h-5 transition-transform duration-300 scale-0 rotate-90 group-data-[state=open]:scale-100 group-data-[state=open]:rotate-0" />
                        <Plus className="absolute w-5 h-5 transition-transform duration-300 scale-100 rotate-0 group-data-[state=open]:scale-0 group-data-[state=open]:rotate-90" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimateOnView>
          </div>
        </div>

        <AnimateOnView once y={20} delay={0.2} className="">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto md:mt-20 mt-8 md:py-2 md:pr-2 py-4 pr-4 pl-8 md:rounded-full rounded-md bg-card/50 border border-border/50 backdrop-blur-sm">
            <p className="text-lg font-medium text-center sm:text-left">
              Can't find the answer you're looking for?
            </p>
            <Button asChild className="rounded-full px-6 bg-foreground text-background hover:bg-foreground/90 w-full sm:w-auto">
              <Link to="/contact">
                Ask Something
              </Link>
            </Button>
          </div>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default FAQ;

