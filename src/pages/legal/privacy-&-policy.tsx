import Container from "@/components/container";
import Layout from "@/components/layout";
import LegalHero from "@/components/sections/legal/hero";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const PrivacyPolicyPage = () => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Privacy Policy | ${appConfig.name}`,
        "description": `${appConfig.description}`,
        "url": `${appConfig.url}/legal/privacy-&-policy`
    };

    return (
        <>
            <SEO
                title={`Privacy Policy | ${appConfig.name}`}
                description={`${appConfig.description}`}
                canonicalUrl={`/legal/privacy-&-policy`}
                ogType="website"
                jsonLd={jsonLd}
            />
            <Layout>
                <LegalHero
                    title={`Privacy Policy`}
                    description={`Privacy Policy | Clinentora - Legal`}
                />
                <section>
                    <Container className="flex flex-col lg:flex-row justify-center md:gap-10 gap-6 py-[60px]">
                        {/* Main Content Column */}
                        <article className="max-w-[1030px]">
                            <p className="lead text-xl text-muted-foreground md:mb-8 mb-4">
                                At Clinentora, we understand that legal matter data is among the most sensitive information any firm handles. Client identities, litigation strategy, regulatory exposure, and intellectual property must be rigorously protected.
                            </p>
                            
                            <h3 className="mb-2">Data Protection as a Core Principle</h3>
                            <p className="md:mb-8 mb-4">
                                Clinentora is built with data responsibility at its core. This Privacy Policy explains how we collect, use, and safeguard the information you entrust to our docketing platform.
                            </p>

                            <h3 className="mb-2">Information We Collect</h3>
                            <p className="mb-4">
                                We collect information in the following categories:
                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li><strong>Account Data:</strong> Usernames, email addresses, and firm details required to provision your account.</li>
                                    <li><strong>Matter Data:</strong> The legal documents, filings, and case information you upload or connect via email and agency feeds.</li>
                                    <li><strong>Usage Data:</strong> Audit logs of system access, edits, and deadline changes to maintain a permanent record for supervision and compliance.</li>
                                </ul>
                            </p>

                            <h3 className="mb-2">How We Use Your Information</h3>
                            <p className="md:mb-8 mb-4">
                                Your matter data is used strictly to deliver the Clinentora service to your firm. We process documents to extract dates, calculate deadlines, and provide AI-powered summaries. 
                            </p>

                            <blockquote className="md:mb-8 mb-4 border-l-4 border-primary pl-4 italic text-muted-foreground">
                                "Your matter data is never used to train shared AI models, never shared with other firms, and never used for any purpose beyond delivering the Clinentora service to you."
                            </blockquote>

                            <h3 className="mb-2">Security Measures</h3>
                            <p className="md:mb-8 mb-4">
                                We implement industry-leading security protocols to protect your data. All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We support Role-Based Access Control (RBAC) so attorneys, paralegals, support staff, and clients only see what they need. Multi-Factor Authentication (MFA) is available across all user accounts.
                            </p>

                            <h3 className="mb-2">Data Residency and Retention</h3>
                            <p className="md:mb-8 mb-4">
                                We offer data residency options for firms with jurisdictional or client-imposed data location requirements. We retain your matter data for as long as your account is active, and you can request full deletion of your data upon termination of your agreement with us.
                            </p>

                            <h3 className="mb-2">Third-Party Subprocessors</h3>
                            <p className="md:mb-8 mb-4">
                                We may use trusted third-party infrastructure providers to host our application. All subprocessors are strictly vetted for compliance with global security and privacy standards and are bound by strict confidentiality agreements.
                            </p>

                            <h3 className="mb-2">Changes to this Policy</h3>
                            <p className="md:mb-8 mb-4">
                                We may update this Privacy Policy from time to time as our platform evolves. We will notify you of any material changes via email or an in-app notification before the changes take effect.
                            </p>

                            <h3 className="mb-2">Contact Us</h3>
                            <p>
                                Full data processing terms are available for review by your firm's IT, risk, and general counsel teams before onboarding begins. For any questions regarding this Privacy Policy, please contact our Data Protection Officer at privacy@clinentora.com.
                            </p>
                        </article>
                    </Container>
                </section>
            </Layout>
        </>
    )
}

export default PrivacyPolicyPage;