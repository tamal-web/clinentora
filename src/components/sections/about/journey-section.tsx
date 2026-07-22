
import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const journeyTabs = [
    {
        title: "The Problem We Saw",
        description: "Attorneys and docketing specialists across multiple practice areas told us the same thing: existing tools were either too narrow to cover all their work, or still required too much manual data entry. A missed deadline in legal practice is not a minor error — it can be fatal to a case.",
        year: "2023",
        subtitle: "The Insight",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
    },
    {
        title: "Building the Foundation",
        description: "We designed a platform that reads and classifies legal documents across every major practice area — IP prosecution, patent litigation, corporate transactions, immigration, regulatory compliance, and more. The rules engine handles jurisdiction-specific deadline logic automatically.",
        year: "2024",
        subtitle: "Development",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    },
    {
        title: "Adding the AI Layer",
        description: "We layered natural language search, document summarisation, and daily intelligent briefings on top of the core docketing engine. Each attorney now gets a personalised morning digest with their deadlines, risk flags, and matters requiring attention — in priority order.",
        year: "2025",
        subtitle: "Intelligence",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    },
    {
        title: "Serving Law Firms",
        description: "Clinentora now supports law firms across all major practice areas with dedicated onboarding, data migration from existing systems, and responsive support. Every firm gets the platform configured specifically for the practice areas they handle.",
        year: "2025+",
        subtitle: "Growth",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200",
    },
];

const JourneySection = () => {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % journeyTabs.length);
        }, 5000); // Change tab every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-12 md:py-[60px]">
            <Container className="md:space-y-20 space-y-12">
                <StaggerContainer className="text-center md:max-w-[630px] max-w-xs mx-auto">
                    <AnimateOnView blur once>
                        <h2 className="h2 md:mb-5 mb-3">
                            The Journey Behind Clinentora
                        </h2>
                    </AnimateOnView>

                    <AnimateOnView blur once delay={0.1}>
                        <p className="text-muted-foreground">
                            Built after direct conversations with attorneys and docketing specialists who knew exactly where existing tools fell short.
                        </p>
                    </AnimateOnView>
                </StaggerContainer>

                <div className="relative bg-card md:rounded-[40px] rounded-lg border border-border p-6 md:p-12 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-8 items-center">
                        {/* Left Content */}
                        <div className="flex flex-col h-full justify-between py-4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="space-y-3"
                                >
                                    <h3 className="h4">
                                        {journeyTabs[activeTab].title}
                                    </h3>
                                    <p className="text-muted-foreground text-body-md leading-relaxed max-w-md">
                                        {journeyTabs[activeTab].description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            <div className="md:mt-12 mt-8 flex flex-col-reverse md:flex-col md:gap-8 gap-2">
                                {/* Dots Pagination */}
                                <div className="flex gap-3 p-2 bg-white/5 w-fit rounded-full border border-white/10">
                                    {journeyTabs.map((_, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setActiveTab(index)}
                                            className={cn(
                                                "h-2 rounded-full transition-all duration-500 cursor-pointer",
                                                activeTab === index ? "w-8 bg-white" : "w-2 bg-white/20"
                                            )}
                                        />
                                    ))}
                                </div>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                    >
                                        <div className="h3 mb-2">
                                            {journeyTabs[activeTab].year}
                                        </div>
                                        <div className="text-lg text-muted-foreground font-medium">
                                            {journeyTabs[activeTab].subtitle}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-square overflow-hidden md:rounded-[32px] rounded-lg">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                                    <img
                                        src={journeyTabs[activeTab].image}
                                        alt={journeyTabs[activeTab].title}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default JourneySection;
