import Link from "next/link";
import withLayout from "../lib/withLayout";

export default () =>(

<header>
    <nav>
        <ul>
            <li>
                <Link href={"/"}>
                <a>Home</a>
                </Link>
            </li>

            <li>
                <Link href={"/about"}>
                <a>About</a>
                </Link>
            </li>
        </ul>
    </nav>
</header>
);