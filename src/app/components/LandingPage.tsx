import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import Profile from "./Profile";
import TechnicalSegment from "./TechnicalSegment";
import ProjectSegment from "./ProjectSegment";
import ConnectSegment from "./ConnectSegment";
import { Lang } from "@/types";

function LandingPage(props: { lang: Lang }) {
  return (
    <DefaultPageLayout lang={props.lang}>
      <div className="flex h-full w-full flex-col items-start overflow-auto">
        <div className="flex w-full flex-col items-center gap-16 px-4 py-16">
          <Profile lang={props.lang}/>
          <TechnicalSegment lang={props.lang}/>
          <ProjectSegment lang={props.lang}/>
          <ConnectSegment lang={props.lang}/>
        </div>
        <div className="flex w-full flex-col items-center border-t border-solid border-neutral-border bg-neutral-50 px-4 py-4">
          <span className="text-body font-body text-subtext-color">
            © 2024 All rights reserved. Built with passion and modern technologies by Neemias Santos
          </span>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default LandingPage;