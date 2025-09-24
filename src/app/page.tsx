import Link from "next/link";
import { appConfig } from "./lib/data/appConfig";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>Hello world</h1>
      <button>
        <Link href={appConfig.links.signup}>Get Started - It's Free</Link>
      </button>
    </div>
  );
}
