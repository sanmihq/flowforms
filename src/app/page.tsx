import { Button } from "@/components/ui/button";
import { appConfig } from "@/lib/data/appConfig";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>Hello world</h1>
      <Button>
        <Link href={appConfig.links.signup}>Get Started - It's Free</Link>
      </Button>
    </div>
  );
}
