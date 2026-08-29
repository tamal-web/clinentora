import Layout from "@/components/layout";
import ServicesHero from "@/components/sections/services/services-hero";
import ServicesCards from "@/components/sections/services/services-cards";
import HowWeWork from "@/components/sections/services/how-we-work";
import ServiceStats from "@/components/sections/services/service-stats";
import WhyUs from "@/components/sections/services/why-us";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Services | Clinentora</title>
        <meta
          name="description"
          content="Clinentora offers website development, app development, and custom software solutions — engineered to scale and built to last."
        />
      </Helmet>
      <ServicesHero />
      <ServicesCards />
      <HowWeWork />
      <ServiceStats />
      <WhyUs />
    </Layout>
  );
};

export default Services;
