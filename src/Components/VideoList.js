import React from 'react';
import VideoItem from './VideoItem';
import { makeStyles } from '@material-ui/core/styles';




const VideoList = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            float: "right",
            marginRight: 20
        }
    }));
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {props.videos.map((video) => (
                <VideoItem key={video.id.videoId} video={video} handleVideoSelect={props.handleVideoSelect} />
            )
            )}
        </div>
    );
};

export default VideoList;