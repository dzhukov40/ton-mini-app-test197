import Link from "next/link";

export default async function Home() {
  return (
      <div>
          <h1>Test main page :)</h1>
          <ul>
              <li><Link href="/test-book">Main page</Link></li>
              <li><Link href="/map">Map page</Link></li>
              <li><Link href="/open-image">open-image-example</Link></li>
          </ul>
      </div>
);
}
