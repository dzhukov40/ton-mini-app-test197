import Link from "next/link";

export default async function Home() {
  return (
      <div>
          <h1>Test main page :)</h1>
          <ul>
              <li><Link href="/test-book">Main page</Link></li>
              <li><Link href="/map">Map page</Link></li>
              <li><Link href="/open-image">open-image-example</Link></li>
              <li><Link href="/translate">translate</Link></li>
              <li><Link href="/dexie-test">dexie-test</Link></li>
              <li><Link href="/p2p/two-users">p2p/two-users</Link></li>
          </ul>
      </div>
  );
}
