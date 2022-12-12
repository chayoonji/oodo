import Layout from "../components/layout";
import Head from "next/head";

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Head>
          <title>CHA 포트폴리오</title>
          <meta name="description" content="오늘도.." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </Layout>
  );
}
