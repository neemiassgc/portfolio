import { findSectionData } from "@/integration/notion";
import Header from "./Header";
import ConnectSegmentBody from "./ConnectSegmentBody";
import { Lang } from "@/types";

export default async function ConnectSegment(props: { lang: Lang }) {
  const connectSectionData = await findSectionData(3, props.lang);

  return (
    <div className="flex w-full max-w-[1280px] grow shrink-0 basis-0 flex-col items-center gap-8" id="connect">
      <Header sectionName="CONNECT" title={connectSectionData.title}
        subtitle={connectSectionData.subtitle}
      />
      <ConnectSegmentBody/>
    </div>
  )
}