import Layout from "@/components/layout";
import BookADemoForm from "@/components/sections/book-a-demo/book-a-demo-form";
import { Helmet } from "react-helmet-async";

const BookADemo = () => {
  return (
    <Layout>
      <Helmet>
        <title>Book a Demo | Clinentora</title>
        <meta
          name="description"
          content="Schedule a live 30-minute walkthrough of Clinentora. See AI-powered legal docketing on your firm's real filings, all reviewed and confirmed by your team."
        />
        <meta property="og:title" content="Book a Demo | Clinentora" />
        <meta
          property="og:description"
          content="Schedule a live walkthrough of Clinentora's AI-powered legal docketing platform."
        />
      </Helmet>
      <BookADemoForm />
    </Layout>
  );
};

export default BookADemo;
