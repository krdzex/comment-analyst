import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const VideoItem = (props) => {
    const useStyles = makeStyles((theme) => ({
        image: {
            width: 220,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        paper: {
            padding: theme.spacing(2),
            margin: "auto",
            marginTop: 10,
            width: 500,
            height: 128,
            cursor: "pointer"

        },
    }));

    const classes = useStyles();
    return (
        <Paper className={classes.paper} onClick={() => props.handleVideoSelect(props.video)} >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.description} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography style={{ lineHeight: 15 + "px" }}>
                                {props.video.snippet.title}
                            </Typography>
                            <Typography style={{ marginTop: 40 + "px" }} variant="body2" gutterBottom>
                                {props.video.snippet.channelTitle}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper >
    );
};
export default VideoItem;