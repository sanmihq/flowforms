import { appConfig } from "@/app/lib/data/appConfig";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid h-screen place-items-center">
      <SignUp forceRedirectUrl={appConfig.links.dashboard} />
    </div>
  );
}
