import { Box, Card, CardActions, CardContent, CardHeader, Chip } from "@mui/material"
import { Repository } from "@/types";
import { hues, findTechStackNames, formatTitle, tweakRepositoriesByTopics } from "@/tools";
import { Svg, LinkButton, Footer } from "./collection";
import { getRepositories } from "@/net";
import GitHubIcon from '@mui/icons-material/GitHub';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import DocsIcon from '@mui/icons-material/Article';

export default async function MainContent() {

  const repositories: Repository[] = await getRepositories();
  const tweakedRepositories: Repository[][] = tweakRepositoriesByTopics(repositories);

  return (
    <Box className="ml-0 md:ml-[380px]">
      <Box component="p" className="w-fit mx-auto text-3xl pt-4 font-bold" sx={{color: hues.text}}>Personal projects</Box>
      <Box className="px-4 pb-8 pt-2 flex flex-col lg:flex-row gap-4 mt-3">
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
      <Footer className="block md:hidden w-fit mx-auto"/>
    </Box>
  )
}

function Tile(props: { repository: Repository}) {
  return (
    <Card className="h-fit p-2 border-0 rounded-xl w-full" sx={{backgroundColor: hues["bg-secondary"]}}>
      <CardHeader
        title={<Box sx={{color: hues.text}}>{formatTitle(props.repository.name)}</Box>}
        subheader={<Box sx={{color: hues["text-secondary"]}}>{props.repository.description}</Box>}/>
        <CardContent className="flex flex-wrap justify-start gap-2">
        {
          props.repository.topics.map((item, index) =>
            (<Chip
              sx={{backgroundColor: hues.bg, color: hues.text}}
              variant="filled" className="font-bold" size="medium" label={item} key={index} />))
        }
        </CardContent>
      <CardActions disableSpacing className="flex justify-between">
        <Box>
          {
            props.repository.liveDemoLink &&
            <LinkButton title="Live Demo" href={props.repository.liveDemoLink}>
              <GpsFixedIcon className="text-3xl"/>  
            </LinkButton>
          }
          {
            props.repository.docsLink &&
            <LinkButton title="Docs" href={props.repository.docsLink}>
              <DocsIcon className="text-3xl"/>
            </LinkButton>
          }
          {
            <LinkButton title="GitHub" href={props.repository.githubLink}>
              <GitHubIcon className="text-3xl"/>
            </LinkButton>
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