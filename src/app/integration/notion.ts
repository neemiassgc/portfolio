import { ContactProps, Lang, SectionProps } from "@/types";

async function fetchPageContactById(id: string) {
  const notionToken = process.env["NOTION_TOKEN"];
  const notionVersion = process.env["NOTION_VERSION"];

  const resource = await fetch("https://api.notion.com/v1/pages/" + id, {
    headers: {
      "Notion-Version": notionVersion as string,
      Authorization: notionToken as string
    }
  })

  return await resource.json();
}


export async function findContactData(): Promise<ContactProps> {
  const resourceId = process.env["NOTION_CONTACT_DATA_ID"] as string;
  const contactData = await fetchPageContactById(resourceId);

  return {
    profilePhoto: contactData.properties["Profile photo"].files[0].file.url,
    location: contactData.properties["Location"].rich_text[0].plain_text,
    email: contactData.properties["Email"].email,
    phone: contactData.properties["Phone"].phone_number,
  }
}

const enResourcesIds = (process.env["NOTION_EN_PAGE_IDS"] as string).split(",");
const ptBrResourcesIds = (process.env["NOTION_PTBR_PAGE_IDS"] as string).split(",");

export async function findSectionData(index: number, lang: Lang): Promise<SectionProps> {
  const data = await fetchPageContactById(lang === "en" ? enResourcesIds[index] : ptBrResourcesIds[index]);

  return {
    title: data.properties["Title"].rich_text[0].plain_text,
    subtitle: data.properties["Subtitle"].rich_text[0].plain_text,
    content: data.properties["Content"].rich_text[0]?.plain_text,
  }
}