import Layout from "@/components/layout";
import FeatureGrid from "@/components/sections/feature/feature-grid";
import Features from "@/components/sections/feature/features";
import ComparisonTable from "@/components/sections/feature/future-ready";
import FeatureGrowth from "@/components/sections/feature/growth";
import FeatureHero from "@/components/sections/feature/hero";
import FeatureIntegration from "@/components/sections/feature/integration";
import { Helmet } from "react-helmet-async";

const LexoraPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Legalis by Clinentora | AI-Powered Legal Management</title>
        <meta
          name="description"
          content="Legalis automates case management, e-discovery, contract lifecycles, and routine tasks — helping legal teams work faster with AI."
        />
      </Helmet>
      <FeatureHero
        productName="Lexora"
        productLogo="/logos/Lexora.png"
        tagline="Legal work on autopilot."
        description="Legalis is an intelligent platform that automates case management, reads documents, manages contracts, and handles routine tasks — so your team can focus on higher-value work."
      />
      <FeatureGrid />
      <Features showAllFeatures={true} />
      <FeatureIntegration />
      <ComparisonTable />
      <FeatureGrowth />
    </Layout>
  );
};

export default LexoraPage;
