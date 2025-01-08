import { Box, Card, CardActions, CardContent, CardHeader, Chip, IconButton, Tooltip } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

export default function MainContent() {
  return (
    <Box className="ml-[360px]">
      <Box className="p-4 flex flex-wrap gap-6 justify-center">
        <Tile/>
        <Tile/>
        <Tile/>
      </Box>
    </Box>
  )
}

function Tile() {
  const badges: string[] = ["React", "Typescript", "Material UI", "TailwindCss", "NextJS", "Vercel"];

  return (
    <Card className="basis-1/3">
      <CardHeader
        title="Contact Manager UI"
        action={<LiveDemoButton/>}
        subheader={<LastCommit/>}/>
      <CardContent>
        <Typography variant="subtitle2">
          Uma interface Web para interagir com a API do projeto Contact Manager API que tem como finalidade gerenciar contatos
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="flex flex-wrap">
        {
          badges.map((item, index) => (<Chip size="small" label={item} className="m-1" key={index} />))
        }
      </CardActions>
  </Card>
  )
}

function DocsButton() {
  return (
    <MyButton title="Documentation">
      <DocsIcon className="text-3xl"/>
    </MyButton>
  )
}

function GithubButton() {
  return (
    <Tooltip title="GitHub Repository">
      <IconButton>
        <GitHubIcon className="text-3xl"/>
      </IconButton>
    </Tooltip>
  )
}

function LiveDemoButton() {
  return (
    <MyButton title="Live Demo">
      <GpsFixedIcon className="text-3xl"/>
    </MyButton>
  )
}

function MyButton(props: {title: string, children: React.ReactNode}) {
  return (
    <Tooltip title={props.title}>
      <IconButton>
        {props.children}
      </IconButton>
    </Tooltip>
  )
}