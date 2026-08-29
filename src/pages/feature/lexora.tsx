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
        <title>Lexora by Clinentora | AI-Powered Legal Management</title>
        <meta
          name="description"
          content="Lexora automates case management, e-discovery, contract lifecycles, and routine tasks — helping legal teams work faster with AI."
        />
      </Helmet>
      <FeatureHero
        productName="Lexora"
        productLogo="/logos/Lexora.png"
        tagline="Legal work on autopilot."
        description="An intelligent docketing platform that automates case management, deadlines, and routine tasks to help legal teams work faster and more efficiently."
      />
      <FeatureGrid product="lexora" />
      <Features product="lexora" />
      <FeatureIntegration />
      <ComparisonTable />
      <FeatureGrowth />
    </Layout>
  );
};

export default LexoraPage;
