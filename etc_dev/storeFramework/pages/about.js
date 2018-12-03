import Head from "next/head";
import withLayout from "../lib/withLayout";

const About = () => (
    <div>
        <Head>
            <title>ABOUT | TITLE</title>
        </Head>
    <h1>about page</h1>
    <p>lorem</p>
    </div>
);

export default withLayout(About);