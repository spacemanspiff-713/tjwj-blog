import Link from "next/link";

export default function Header(){
    return (
        <main>
            <h1>Header</h1>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </main>
    );
}