import { NextPage } from "next";
import Link from "next/link";
import Layout from "~/components/Layout/Layout";

const lastUpdated = "2018-09-25T19:30:01+07:00";

const AboutPage: NextPage = () => (
  <Layout title="About | Next.js TypeScript Quickstart" header="About us.">
    <p>
      Perge porro; Igitur ne dolorem quidem. Omnes enim iucundum motum, quo sensus hilaretur. Nam, ut sint illa
      vendibiliora, haec uberiora certe sunt. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers?
    </p>
    <p>
      Last updated: <time dateTime={lastUpdated}>{new Date(lastUpdated).toLocaleDateString()} </time>
      <Link href="/" passHref>
        <a>Return home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
