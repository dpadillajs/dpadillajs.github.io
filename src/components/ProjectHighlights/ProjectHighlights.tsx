import React from 'react';
import ReactPlayer from 'react-player';
import './ProjectHighlights.css';
import Grid from '@material-ui/core/Grid';
import ProjectData from '../../assets/json/project_data.json';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import { Spacer } from '../../containers/Spacer/Spacer';
import { HeaderTitle } from '../../containers/HeaderTitle/HeaderTitle';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Dialog from '@material-ui/core/Dialog';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';

const useStylesBootstrap = makeStyles(() => ({
    arrow: {
        color: 'white',
    },
    tooltip: {
        backgroundColor: 'white',
        color: '#a41d30'
    }
}));

const BootstrapTooltip = (props: TooltipProps) =>
    <Tooltip arrow classes={useStylesBootstrap()} {...props}/>;

export default function ProjectHighlights() {
    const data = ProjectData;
    const importAll = (img: __WebpackModuleApi.RequireContext) => img.keys().map(img);
    const allSkills = importAll(require.context('../../assets/images/skills', false, /\.(png|jpe?g|svg)$/));
    const allProjects = importAll(require.context('../../assets/images/projects', false, /\.(png|jpe?g|svg)$/));
    const [open, setOpen] = React.useState(false);
    const [youtubeUrl, setYouTubeUrl] = React.useState('');
    const handleClose = () => setOpen(false);
    const handleClickOpen = (url: string) => () => {
        setYouTubeUrl(url);
        setOpen(true);
    }

    return (
        <React.Fragment>
            <HeaderTitle titleOne='project' titleTwo='Highlights'/>
            <Spacer divHeight={50}/>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    {data.map((proj, i) =>
                        <Grid key={i+proj.projectImg} item className='proj-grid-item' xs={12} sm={6} md={4} lg={3}>
                            {proj.projectUrl.includes('youtu.be') ?
                                <Dialog open={open} onClose={handleClose}>
                                    <ReactPlayer width='560px' height='315px' controls={true} url={youtubeUrl}/>
                                </Dialog>
                                : null
                            }
                            <Link href={proj.projectUrl.includes('youtu.be') ? undefined : proj.projectUrl}
                                  target='_blank'
                                  onClick={proj.projectUrl.includes('youtu.be') ? handleClickOpen(proj.projectUrl) : handleClose}
                            >
                                <Card className='proj-card'>
                                    {allProjects.map((img: any) =>
                                        img.default.includes(proj.projectImg) ?
                                            <CardMedia
                                                component='img'
                                                className='proj-card-media'
                                                key={proj.projectImg+' Website Photo'}
                                                alt={'Picture of Demo Project '+proj.projectTitle}
                                                image={img.default}
                                            />
                                            : null
                                    )}
                                    <Typography className='proj-card-desc'>{proj.projectDesc}</Typography>
                                    <AvatarGroup className='proj-card-avatars' max={7}>
                                        {allSkills.map((skill: any) =>
                                            proj.projectSkills.map(projSkill =>
                                                skill.default.includes(projSkill) ?
                                                    <BootstrapTooltip key={projSkill+i} title={projSkill} placement='top' arrow>
                                                        <Avatar alt={projSkill+' Logo'} src={skill.default}/>
                                                    </BootstrapTooltip>
                                                    : null
                                            )
                                        )}
                                    </AvatarGroup>
                                </Card>
                            </Link>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </React.Fragment>
    );
}
