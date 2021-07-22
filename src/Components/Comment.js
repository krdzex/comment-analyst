import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const Comment = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            maxWidth: "100%",
            margin: "5px 5px"
        },
        paper: {
            padding: "15px 15px",
            margin: 'auto'
        },
        author: {
            display: "flex"
        }
    }));


    const classes = useStyles();
    const textDisplay = props.commentInfo.snippet.topLevelComment.snippet.textDisplay;
    const author = props.commentInfo.snippet.topLevelComment.snippet.authorDisplayName;
    const image = props.commentInfo.snippet.topLevelComment.snippet.authorProfileImageUrl;
    const likes = props.commentInfo.snippet.topLevelComment.snippet.likeCount;
    const time = props.commentInfo.snippet.topLevelComment.snippet.publishedAt;
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item className={classes.author}>
                        <img src={image} alt="authorImage"></img>
                        <Typography style={{ margin: "6px 10px", fontSize: "20px", fontWeight: "bold" }}>
                            {author}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            {textDisplay}
                        </Typography>
                    </Grid>
                    <Grid item style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography variant="body2" style={{ fontSize: "20px" }}>
                            <ThumbUpIcon style={{ marginTop: "2px" }} />
                            {likes}
                        </Typography>
                        <Typography >
                            {time}
                        </Typography>
                    </Grid>

                </Grid>
            </Paper>

        </div >
    );
};

export default Comment;