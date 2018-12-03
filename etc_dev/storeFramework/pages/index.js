import Head from "next/head";
import withLayout from "../lib/withLayout";
import PostLink from "../components/PostLink";

const Index = () => (
    <div>
        <Head>
            <title>Home | this is title!</title>
        </Head>
        <h1>Posts:</h1>
        <ul>
            <li>
                <PostLink title={"smt"} />
            </li>
            <li>
                <PostLink title={"12323213"} />
            </li>
        </ul>
    </div>
);

export default withLayout(Index);