import Link from "next/link";

export default function Header(){
    return (
        <main>
            <h1>Header</h1>
            <ul>
                <li className="nav-link"><Link href="/">Home</Link></li>
                <li className="nav-link"><Link href="/blog">Blog</Link></li>
                <li className="nav-link"><Link href="/blog">Blog</Link></li>
            </ul>
        </main>
    );
}