import Layout from "@/components/layout";
import Hero from "@/components/sections/home/hero";
import { lazy, Suspense } from "react";

const Features = lazy(() => import("@/components/sections/home/features"));
const Confidence = lazy(() => import("@/components/sections/home/confidence"));
const Content = lazy(() => import("@/components/sections/home/content"));
const Team = lazy(() => import("@/components/sections/home/team"));
const Advisory = lazy(() => import("@/components/sections/home/advisory"));
const Testimonials = lazy(
  () => import("@/components/sections/home/testimonials"),
);
const FAQ = lazy(() => import("@/components/sections/shared/faq"));
const LogoTicker = lazy(
  () => import("@/components/sections/shared/logo-ticker"),
);

const Home = () => {
  return (
    <Layout>
      <Hero />
      {/* 

      <LogoTicker />
        * */}
      <Suspense fallback={null}>
        <Features />
      </Suspense>
      <Suspense fallback={null}>
        <Confidence />
      </Suspense>
      <Suspense fallback={null}>
        <Content />
      </Suspense>
      <Suspense fallback={null}>
        <Team />
      </Suspense>
      <Suspense fallback={null}>
        <Advisory />
      </Suspense>
      {/*
         
      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>
         */}
      <Suspense fallback={null}>
        <FAQ />
      </Suspense>
    </Layout>
  );
};

export default Home;
