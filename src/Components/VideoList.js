import React from 'react';
import VideoItem from './VideoItem';
import { makeStyles } from '@material-ui/core/styles';




const VideoList = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            float: "right",
            padding: "20px 10px",
            background: "dimgrey",
            borderRadius: 10,
            marginRight: 30,
            marginLeft: 25
        }
    }));
    const classes = useStyles();
    console.log(props.videos)
    return (<div>
        {props.videos.length > 0 ? (<div className={classes.root}> <h2>Recommended videos</h2>
            {props.videos.map((video, id) => (
                <VideoItem key={id} video={video} handleVideoSelect={props.handleVideoSelect} />
            )
            )}
        </div>
        ) : <div className="loader"></div>}
    </div>
    );
};

export default VideoList;