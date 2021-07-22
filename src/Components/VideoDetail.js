import React, { useEffect, useState } from 'react';
import Comments from './Comments';

const VideoDetail = (props) => {

    const [showDescription, setShowDescription] = useState(false);

    useEffect(() => {
        if (props.selectedVideo2 !== undefined) {
            setDuration(props.selectedVideo2.contentDetails.duration.substring(2));
        }
    }, [props.selectedVideo2])
    const [duration, setDuration] = useState();

    useEffect(() => {
        let string = "";
        if (duration !== undefined) {
            string = duration.replace(/H/g, "h ");
            string = string.replace(/M/g, "min ");
            string = string.replace(/S/g, "sac")
            setDuration(string);
        }
    }, [duration])
    if (!props.selectedVideo) {
        return <div></div>
    }


    const showDescButton = () => {
        if (showDescription === false) {
            setShowDescription(true)
        } else {
            setShowDescription(false)
        }
    }
    const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`
    return (
        <div className="leftSide">
            <iframe src={videoSrc} style={{ width: "100%", height: "700px" }} allowFullScreen title="Video player" />
            <div className="info">
                <h4>Title :</h4><p>{props.selectedVideo.snippet.title}</p>
                {showDescription && <div><h4>Author channel:</h4><p> {props.selectedVideo.snippet.channelTitle}</p>
                    <h4>Description :</h4><p>{props.selectedVideo.snippet.description}</p>
                    <h4>Length of video:</h4><p>{duration}</p></div>}
                <div onClick={() => showDescButton()} className="buttonShow">{showDescription ? "Show less" : "Show more"}</div>
            </div>
            <Comments selectedVideoId={props.selectedVideo.id.videoId} />


        </div >
    );
};

export default VideoDetail;