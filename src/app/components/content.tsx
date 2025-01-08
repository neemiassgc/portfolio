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

function LiveDemoButton() {
  return (
    <Tooltip title="Live Demo">
      <IconButton>
        <GpsFixedIcon className="text-2xl"/>
      </IconButton>  
    </Tooltip>
  )
}

function LastCommit() {
  return (
    <Box>
      <Box component="p">make a little change to the link to other README</Box>
      <Box component="p">26/12/24 on <GitBranchIcon/> main</Box>
    </Box>
  )
}