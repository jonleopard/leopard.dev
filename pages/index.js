import Link from "next/link";

export default function Index() {
  return (
    <div className="p-4 shadow rounded bg-white">
      <h1 className="text-purple leading-normal">Next.js</h1>
      <p className="text-grey-dark">with Tailwind CSS</p>

      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
