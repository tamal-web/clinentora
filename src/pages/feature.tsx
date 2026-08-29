import Layout from "@/components/layout";
import FeatureGrid from "@/components/sections/feature/feature-grid";
import Features from "@/components/sections/feature/features";
import ComparisonTable from "@/components/sections/feature/future-ready";
import FeatureGrowth from "@/components/sections/feature/growth";
import FeatureHero from "@/components/sections/feature/hero";
import FeatureIntegration from "@/components/sections/feature/integration";

// Default features page — redirects context to Lexora
const Feature = () => {
  return (
    <Layout>
      <FeatureHero
        productName="Lexora"
        productLogo="/logos/lexora.png"
        tagline="Legal work on autopilot."
        description="Lexora is an intelligent platform that automates case management, reads documents, manages contracts, and handles routine tasks — so your team can focus on higher-value work."
      />
      <FeatureGrid />
      <Features showAllFeatures={true} />
      <FeatureIntegration />
      <ComparisonTable />
      <FeatureGrowth />
    </Layout>
  );
};

export default Feature;
