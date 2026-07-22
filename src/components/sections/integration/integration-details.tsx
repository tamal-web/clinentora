import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { useParams } from "react-router-dom";

const integrationData: Record<string, {
    name: string;
    description: string;
    overview: string;
    capabilities: string[];
    setup: string;
    security: string;
}> = {
    "ledgerlink": {
        name: "LedgerLink",
        description: "A comprehensive integration platform that securely connects multiple accounting systems.",
        overview: "Our Smart Financial Integrations Suite is designed to simplify the way businesses manage their financial operations by connecting multiple systems into a single seamless platform. It ensures real-time synchronization of data across accounting, payment, and investment tools, reducing manual effort, minimizing errors, and providing a holistic view of your financial ecosystem.",
        capabilities: [
            "Real-time Data Synchronization: Keep all your financial systems up-to-date instantly.",
            "Automated Reconciliation: Reduce manual reconciliation tasks with smart automation.",
            "Multi-Platform Connectivity: Integrate with banking, accounting, ERP, and investment platforms.",
            "Advanced Reporting & Analytics: Gain insights through dashboards, trends, and custom reports.",
            "Secure API Access: Connect external tools safely without compromising sensitive data."
        ],
        setup: "Setting up the integration is simple and requires no extensive technical expertise. Users start by connecting their financial accounts through secure API credentials, followed by configuring synchronization settings based on the systems they want to link.",
        security: "Security and compliance are core priorities of our integration suite. All data transfers are encrypted using industry-standard protocols, and access controls are in place to ensure only authorized personnel can interact with sensitive information."
    },
    "finsync": {
        name: "FinSync",
        description: "An advanced financial synchronization solution designed to pull, validate, and consolidate data from diverse banking.",
        overview: "Our Smart Financial Integrations Suite is designed to simplify the way businesses manage their financial operations by connecting multiple systems into a single seamless platform. It ensures real-time synchronization of data across accounting, payment, and investment tools, reducing manual effort, minimizing errors, and providing a holistic view of your financial ecosystem.",
        capabilities: [
            "Real-time Data Synchronization: Keep all your financial systems up-to-date instantly.",
            "Automated Reconciliation: Reduce manual reconciliation tasks with smart automation.",
            "Multi-Platform Connectivity: Integrate with banking, accounting, ERP, and investment platforms.",
            "Advanced Reporting & Analytics: Gain insights through dashboards, trends, and custom reports.",
            "Secure API Access: Connect external tools safely without compromising sensitive data."
        ],
        setup: "Setting up the integration is simple and requires no extensive technical expertise. Users start by connecting their financial accounts through secure API credentials, followed by configuring synchronization settings based on the systems they want to link.",
        security: "Security and compliance are core priorities of our integration suite. All data transfers are encrypted using industry-standard protocols, and access controls are in place to ensure only authorized personnel can interact with sensitive information."
    },
    // Add other integrations if needed, or fallback to default
};

const IntegrationDetails = () => {
    const { slug } = useParams<{ slug: string }>();
    const data = slug ? integrationData[slug] || integrationData["finsync"] : integrationData["finsync"];

    return (
        <div className="hero-padding-top">
            <Container className="md:space-y-20 space-y-12">
                {/* Header Section */}
                <div className="text-center">
                    <AnimateOnView blur once>
                        <h1 className="h1 md:mb-5 mb-3">
                            {data.name}
                        </h1>
                        <p className="text-muted-foreground text-lg md:max-w-2xl max-w-sm mx-auto md:mb-8 mb-6">
                            {data.description}
                        </p>
                        <div className="text-white text-xl font-medium">
                            {data.name} + Paymark
                        </div>
                    </AnimateOnView>
                </div>

                {/* Content Sections */}
                <div className="md:space-y-20 space-y-8 max-w-[1062px] mx-auto">
                    <AnimateOnView y={20} blur once delay={0.2}>
                        <section>
                            <h2 className="h3 md:mb-5 mb-3">Overview</h2>
                            <p className="text-muted-foreground">
                                {data.overview}
                            </p>
                        </section>
                    </AnimateOnView>

                    <AnimateOnView y={20} blur once delay={0.3}>
                        <section>
                            <h2 className="h3 md:mb-5 mb-3">Key Capabilities</h2>
                            <p className="text-muted-foreground mb-8">
                                These capabilities allow organizations to operate efficiently, gain clear visibility into their finances, and ensure that all critical financial processes run smoothly without constant manual intervention.
                            </p>
                            <ul className="space-y-4">
                                {data.capabilities.map((cap, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-3 flex-shrink-0" />
                                        {cap}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </AnimateOnView>

                    <AnimateOnView y={20} blur once delay={0.4}>
                        <section>
                            <h2 className="h3 md:mb-5 mb-3">Setup instruction</h2>
                            <p className="text-muted-foreground">
                                {data.setup}
                            </p>
                        </section>
                    </AnimateOnView>

                    <AnimateOnView y={20} blur once delay={0.5}>
                        <section>
                            <h2 className="h3 md:mb-5 mb-3">Security & Compliance</h2>
                            <p className="text-muted-foreground">
                                {data.security}
                            </p>
                        </section>
                    </AnimateOnView>
                </div>
            </Container>
        </div>
    );
};

export default IntegrationDetails;
