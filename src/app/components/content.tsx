import { Box, Card, CardActions, CardContent, CardHeader, Chip } from "@mui/material"
import { Repository } from "@/types";
import { findTechStackNames, formatTitle, tweakRepositoriesByTopics } from "@/tools";
import { Svg, LinkButton } from "./collection";
import { getRepositories } from "@/net";

export default async function MainContent() {

  const repositories: Repository[] = await getRepositories();
  const tweakedRepositories: Repository[][] = tweakRepositoriesByTopics(repositories);

  return (
    <Box className="ml-[360px]">
      <Box className="p-8 flex gap-4">
        {
          tweakedRepositories.map((repos, i) =>
            <Box key={i} className="basis-1/2 flex flex-col gap-4">
              {
                repos.map((repo, j) => <Tile key={j} repository={repo}/>)
              }  
            </Box>
          )
        }
      </Box>
    </Box>
  )
}

function Tile(props: { repository: Repository}) {
  return (
    <Card className="h-fit p-2">
      <CardHeader
        title={formatTitle(props.repository.name)}
        subheader={props.repository.description}/>
        <CardContent className="flex flex-wrap justify-start gap-2">
        {
          props.repository.topics.map((item, index) => (<Chip size="small" label={item} key={index} />))
        }
        </CardContent>
      <CardActions disableSpacing className="flex justify-between">
        <Box>
          {
            props.repository.liveDemoLink &&
            <LinkButton title="Live Demo" href={props.repository.liveDemoLink} iconName="live-demo"/>
          }
          {
            props.repository.docsLink &&
            <LinkButton title="Docs" href={props.repository.docsLink} iconName="docs"/>
          }
          {
            <LinkButton title="GitHub" href={props.repository.githubLink} iconName="github"/>
          }
        </Box>
        <Box component="span">
          {
            findTechStackNames(props.repository.topics).map((topic, index) => (
              topic &&
              <Svg
                title={formatTitle(topic)}
                iconName={topic} className="mr-1" key={index}
              />
            ))
          }
        </Box>
      </CardActions>
  </Card>
  )
}