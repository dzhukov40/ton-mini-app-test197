import { promises as fs } from 'fs';
import Link from "next/link";

export default async function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">


        <h1>Test main page :)</h1>
        <Link href="/test-book">Main page</Link>
      </main>
  );
}
