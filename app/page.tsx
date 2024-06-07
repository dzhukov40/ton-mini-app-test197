import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <h1>Test main page :)</h1>
      <Link href="/test-book">Main page</Link>
    </div>
  );
}
