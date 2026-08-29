import Container from "@/components/container";
import Layout from "@/components/layout";
import LegalHero from "@/components/sections/legal/hero";
import { appConfig } from "@/utils/app-config";

const TermsAndConditionPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Terms & Conditions | ${appConfig.name}`,
    description: `${appConfig.description}`,
    url: `${appConfig.url}/legal/terms-&-condition`,
  };

  return (
    <>
      <Layout>
        <LegalHero
          title={`Terms & Conditions`}
          description={`Terms & Conditions | Clinentora - Legal`}
        />
        <section>
          <Container className="flex flex-col lg:flex-row justify-center md:gap-10 gap-6 py-[60px]">
            {/* Main Content Column */}
            <article className="max-w-[1030px]">
              <p className="lead text-xl text-muted-foreground md:mb-8 mb-4">
                Welcome to Clinentora. These Terms and Conditions govern your
                use of our legal docketing platform and related services.
              </p>

              <h3 className="mb-2">1. Acceptance of Terms</h3>
              <p className="md:mb-8 mb-4">
                By accessing or using the Clinentora platform, you agree to be
                bound by these Terms and Conditions. If you do not agree to
                these terms, please do not use our services. Clinentora provides
                automated document processing, docketing workflow management,
                and AI-powered intelligence for law firms and legal departments.
              </p>

              <h3 className="mb-2">2. Service Description</h3>
              <p className="mb-4">
                Clinentora is a cloud-based legal docketing software that
                handles document intake, deadline calculation, and
                jurisdiction-specific rules across multiple practice areas. We
                provide tools for timeline extraction, natural language search,
                and automated reporting.
              </p>

              <blockquote className="md:mb-8 mb-4 border-l-4 border-primary pl-4 italic text-muted-foreground">
                "While Clinentora calculates deadlines based on jurisdictional
                rules, it is the ultimate responsibility of the legal
                professionals using the platform to review and confirm all
                docket entries and deadlines before saving."
              </blockquote>

              <h3 className="mb-2">3. User Responsibilities</h3>
              <p className="md:mb-8 mb-4">
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You agree to ensure that all data uploaded to
                Clinentora complies with applicable legal and ethical
                obligations regarding client confidentiality.
              </p>

              <h3 className="mb-2">4. Data Security and Confidentiality</h3>
              <p className="md:mb-8 mb-4">
                We treat your matter data with the utmost security. Client data
                is encrypted in transit and at rest. We do not use your
                confidential matter data to train shared AI models, nor do we
                share it with other law firms or third parties beyond the scope
                of providing the Clinentora service to you.
              </p>

              <h3 className="mb-2">5. Service Availability</h3>
              <p className="md:mb-8 mb-4">
                We strive to provide continuous uptime and reliable
                infrastructure. However, Clinentora does not guarantee that the
                service will be uninterrupted or error-free. We perform daily
                automated backups to prevent data loss.
              </p>

              <h3 className="mb-2">6. Limitation of Liability</h3>
              <p className="md:mb-8 mb-4">
                Clinentora provides automated tools to assist your legal
                practice, but we do not provide legal advice. We are not liable
                for missed deadlines, malpractice claims, or any indirect,
                incidental, or consequential damages arising from your use of
                the platform.
              </p>

              <h3 className="mb-2">7. Termination</h3>
              <p className="md:mb-8 mb-4">
                We reserve the right to suspend or terminate your access to the
                platform if you violate these Terms. Upon termination, we will
                provide you with an opportunity to export your data in a
                standard format.
              </p>

              <h3 className="mb-2">8. Contact Information</h3>
              <p>
                If you have any questions about these Terms and Conditions,
                please contact us at info@clinentora.com.
              </p>
            </article>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default TermsAndConditionPage;
