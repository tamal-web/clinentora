import Layout from '@/components/layout'
import FeatureGrid from '@/components/sections/feature/feature-grid'
import Features from '@/components/sections/feature/features'
import ComparisonTable from '@/components/sections/feature/future-ready'
import FeatureGrowth from '@/components/sections/feature/growth'
import FeatureHero from '@/components/sections/feature/hero'
import FeatureIntegration from '@/components/sections/feature/integration'
import { Helmet } from 'react-helmet-async'

const QlerklyPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Qlerkly by Clinentora | Reliable Legal Case Management</title>
                <meta
                    name="description"
                    content="Qlerkly helps legal teams organise cases, track important dates, and manage deadlines with ease — no complexity, no steep learning curve."
                />
            </Helmet>
            <FeatureHero
                productName="Qlerkly"
                productLogo="/logos/Qlerkly.png"
                tagline="Case management made simple."
                description="A reliable docketing platform that helps legal teams organise cases, track important dates, and manage deadlines with ease."
            />
            <FeatureGrid product="qlerkly" />
            <Features product="qlerkly" />
            <FeatureIntegration />
            <ComparisonTable />
            <FeatureGrowth />
        </Layout>
    )
}

export default QlerklyPage
