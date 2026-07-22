
import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { BarChart3, BookOpen, Clock } from "lucide-react";

const stats = [
    {
        label: "Practice Areas Supported",
        value: "10+",
        icon: BookOpen,
        detail: "IP, litigation, corporate, immigration, regulatory, real estate & more",
    },
    {
        label: "Deadline Compliance Rate",
        value: "99.9%",
        icon: BarChart3,
        detail: "Achieved by docketing teams using Clinentora across all matter types",
    },
    {
        label: "Documents Processed Daily",
        value: "24/7",
        icon: Clock,
        detail: "Continuous processing — no scheduled downtime, no inactivity pauses",
    },
];

const WorldwideStats = () => {
    return (
        <section className="md:py-[60px] py-12">
            <Container className="md:space-y-20 space-y-8">
                <div className="text-center md:max-w-[630px] max-w-xs mx-auto">
                    <AnimateOnView blur>
                        <h2 className="h2 mb-5">
                            Built for Scale, Designed for Precision
                        </h2>
                    </AnimateOnView>

                    <AnimateOnView blur delay={0.1}>
                        <p className="text-muted-foreground">
                            Whether your firm handles one practice area or ten, Clinentora is configured for the specific document types and deadline rules your team works with every day.
                        </p>
                    </AnimateOnView>
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-4">
                    {/* Map Feature Column */}
                    <AnimateOnView
                        y={30}
                        once
                        className="lg:w-[40%] rounded-[32px] bg-[#111111] border border-white/5 flex flex-col justify-between overflow-hidden relative group min-h-[460px]"
                    >
                        <div className="relative z-10 pt-[29px] px-6">
                            <h3 className="text-3xl font-semibold text-white leading-tight max-w-[280px]">
                                Serving Law Firms Across Jurisdictions
                            </h3>
                            <p className="text-muted-foreground mt-4 text-sm leading-relaxed max-w-[280px]">
                                Federal and state courts, international IP offices, regulatory bodies — all covered under one platform with jurisdiction-specific rules maintained continuously.
                            </p>
                        </div>

                        {/* Dot Map Illustration */}
                        <div className="absolute inset-x-0 bottom-0 pointer-events-none p-10 select-none">

                            <div className="relative w-full">
                                <img src="/images/about/map.webp" alt="map" />

                                {/* US Pin */}
                                <div className="absolute left-[15%] top-[45%] flex flex-col items-center gap-1">
                                    <div className="bg-black border border-white/10 rounded-full px-3 py-1 flex items-center gap-2 shadow-2xl">
                                        <span className="text-[10px]">🇺🇸</span>
                                        <span className="text-[10px] text-white/80 font-medium">Federal Courts</span>
                                    </div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                </div>

                                {/* EU Pin */}
                                <div className="absolute right-[25%] top-[20%] flex flex-col items-center gap-1">
                                    <div className="bg-black border border-white/10 rounded-full px-3 py-1 flex items-center gap-2 shadow-2xl">
                                        <span className="text-[10px]">🇪🇺</span>
                                        <span className="text-[10px] text-white/80 font-medium">EPO / EUIPO</span>
                                    </div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                </div>

                                {/* WIPO Pin */}
                                <div className="absolute left-[45%] top-[30%] flex flex-col items-center gap-1">
                                    <div className="bg-black border border-white/10 rounded-full px-3 py-1 flex items-center gap-2 shadow-2xl">
                                        <span className="text-[10px]">🌐</span>
                                        <span className="text-[10px] text-white/80 font-medium">WIPO / PCT</span>
                                    </div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                </div>
                            </div>
                        </div>
                    </AnimateOnView>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
                        {stats.map((stat, index) => (
                            <AnimateOnView
                                key={index}
                                y={30}
                                once
                                delay={0.1 * (index + 1)}
                                className="py-[29px] px-6 rounded-2xl bg-card border border-white/5 flex flex-col md:justify-between md:min-h-[460px] transition-all duration-300 hover:border-white/10 gap-6 md:gap-0"
                            >
                                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <stat.icon className="w-5 h-5 text-white/80" />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="h3">
                                        {stat.value}
                                    </h3>
                                    <div className="text-muted-foreground text-base font-medium">
                                        {stat.label}
                                    </div>
                                    <p className="text-sm text-muted-foreground/70 leading-relaxed">
                                        {stat.detail}
                                    </p>
                                </div>
                            </AnimateOnView>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default WorldwideStats;
