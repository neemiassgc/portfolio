import { Repository } from "@/types";
import { findTechStackNames, formatTitle, tweakRepositoriesByTopics } from "@/tools";
import { LinkButton, Footer, Chip, findIconByName } from "./collection";
import { getRepositories } from "@/net";
import { SiGithub } from "react-icons/si";
import { MdGpsFixed } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5"
import React, { ReactNode } from "react";

export default async function MainContent() {

  const repositories: Repository[] = await getRepositories();
  const tweakedRepositories: Repository[][] = tweakRepositoriesByTopics(repositories);

  return (
    <div className="ml-0 md:ml-[380px]">
      <p className="w-full text-3xl pt-4 font-bold text-hues-primary font-core text-center">
        Personal Projects 
      </p>
      <div className="px-4 pb-8 pt-2 flex flex-col lg:flex-row gap-2 xl:gap-6 mt-3">
        {
          tweakedRepositories.map((repos, i) =>
            <div key={i} className="basis-1/2 flex flex-col gap-6">
              {
                repos.map((repo, j) => <Tile key={j} repository={repo}/>)
              }  
            </div>
          )
        }
      </div>
      <Footer className="w-fit mx-auto"/>
    </div>
  )
}

function Tile(props: { repository: Repository}) {
  return (
    <Card
      title={formatTitle(props.repository.name)}
      subtitle={props.repository.description}
      content={
        <div className="flex flex-wrap justify-start gap-2">
          {
            props.repository.topics.map((item, index) =>
              <Chip
                className="bg-hues-primary text-hues-primary font-bold font-core"
                variant="filled" label={item} key={index} />)
          }
        </div>
      }
      footer={
        <div className="flex justify-between">
          <div className="flex">
            {
              props.repository.liveDemoLink &&
              <LinkButton title="Live Demo" href={props.repository.liveDemoLink}>
                <MdGpsFixed className="text-3xl text-hues-highlight bg-"/>  
              </LinkButton>
            }
            {
              props.repository.docsLink &&
              <LinkButton title="Docs" href={props.repository.docsLink}>
                <IoDocumentText className="text-3xl text-hues-secondary"/>
              </LinkButton>
            }
            {
              <LinkButton title="GitHub" href={props.repository.githubLink}>
                <SiGithub className="text-3xl text-hues-secondary"/>
              </LinkButton>
            }
          </div>
          <div className="flex items-center w-fit gap-1">
            {
              findTechStackNames(props.repository.topics).map((topic) => (
                topic && findIconByName(topic, "small")
              ))
            }
          </div>
        </div>
      }
    />
  )
}

function Card(props: {
  title: string,
  subtitle: string,
  content: ReactNode,
  footer: ReactNode
}) {
  return (
    <div className="shadow-md h-fit pb-1 pt-3 px-5 border-0 rounded-xl w-full bg-hues-secondary flex flex-col gap-6">
      <div>
        <div className="text-hues-primary font-core font-bold text-2xl">{formatTitle(props.title)}</div>
        <div className="text-hues-secondary font-core">{props.subtitle}</div>
      </div>
      <>
        {props.content}
      </>
      <>
        {props.footer}
      </>
    </div>
  )
}