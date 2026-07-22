import Container from "@/components/container";
import Layout from "@/components/layout";
import LegalHero from "@/components/sections/legal/hero";

const CookiePolicyPage = () => {

    return (
        <>
            <Layout>
                <LegalHero
                    title={`Cookie Policy`}
                    description={`Learn how Clinentora uses cookies.`}
                />
                <section>
                    <Container className="flex flex-col lg:flex-row justify-center md:gap-10 gap-6 md:py-[60px] py-12">
                        {/* Main Content Column */}
                        <article className="max-w-[1030px]">
                            <p className="lead text-xl text-muted-foreground md:mb-8 mb-4">
                                Clinentora ("we", "our", or "us") uses cookies and similar tracking technologies to ensure our legal docketing platform functions securely and efficiently.
                            </p>
                            
                            <h3 className="mb-2">What are Cookies?</h3>
                            <p className="md:mb-8 mb-4">
                                Cookies are small text files that are stored on your device when you visit our website or use our application. They help us remember your preferences, keep your session secure, and understand how our platform is being used so we can improve it.
                            </p>

                            <h3 className="mb-2">Types of Cookies We Use</h3>
                            
                            <h4 className="text-lg font-medium mt-4 mb-2">1. Essential Cookies</h4>
                            <p className="mb-4">
                                These cookies are strictly necessary to provide you with services available through our platform and to use some of its features, such as secure login, multi-factor authentication, and maintaining your session state. Without these cookies, our application cannot function properly.
                            </p>
                            
                            <h4 className="text-lg font-medium mt-4 mb-2">2. Performance and Analytics Cookies</h4>
                            <p className="mb-4">
                                We use these cookies to collect information about how law firms and attorneys interact with Clinentora. This helps us understand which features are most useful, identify operational bottlenecks, and continuously improve the performance of our docketing engine. All data collected is aggregated and anonymized.
                            </p>
                            
                            <h4 className="text-lg font-medium mt-4 mb-2">3. Functionality Cookies</h4>
                            <p className="md:mb-8 mb-4">
                                These cookies allow us to remember choices you make when you use our platform, such as your customized dashboard views, practice area preferences, and notification settings. The purpose of these cookies is to provide you with a more personal experience and to avoid you having to re-enter your preferences every time you use our platform.
                            </p>

                            <h3 className="mb-2">Your Choices Regarding Cookies</h3>
                            <p className="md:mb-8 mb-4">
                                You have the right to decide whether to accept or reject non-essential cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our platform, though your access to some functionality and areas may be restricted. Essential cookies cannot be rejected as they are strictly necessary for the secure operation of our legal software.
                            </p>

                            <h3 className="mb-2">Updates to this Policy</h3>
                            <p className="md:mb-8 mb-4">
                                We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies and related technologies.
                            </p>

                            <h3 className="mb-2">Contact Us</h3>
                            <p>
                                If you have any questions about our use of cookies or other technologies, please email us at privacy@clinentora.com.
                            </p>
                        </article>
                    </Container>
                </section>
            </Layout >
        </>
    )
}

export default CookiePolicyPage;