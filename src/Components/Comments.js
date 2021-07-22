import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import Comment from './Comment';

const Comments = (props) => {

    const [showingComments, setShowingComments] = useState(false);
    const [allComments, setAllComments] = useState([]);

    const url = "https://www.googleapis.com/youtube/v3/commentThreads";
    const KEY = "AIzaSyChS428gFYoW40CxvNHGVOfc4wgAPmos5g";
    const header = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }

    const params = {
        "part": "snippet",
        "maxResults": 100,
        "key": KEY,
        "videoId": props.selectedVideoId
    }

    const getAllComments = () => {
        axios.get(url, { params }, { header }, { withCredentials: true }).then(
            response => setAllComments(response.data.items), setDisabledComments(false),
        ).catch(() => setDisabledComments(true));
    }

    const [disabledComments, setDisabledComments] = useState(false);
    const [mostUsedWords, setMostUsedWords] = useState([]);


    const getAllText = useCallback(() => {
        let counts = {};
        let words = [];
        let text = "";
        for (let i = 0; i < allComments.length; i++) {
            text += allComments[i].snippet.topLevelComment.snippet.textDisplay + " ";
        }
        let allWords = text.split(" ");

        for (let i = 0; i < allWords.length; i++) {
            let oneWord = allWords[i].toUpperCase();
            if (counts[oneWord] === undefined && oneWord.length >= 4) {
                counts[oneWord] = 1;
                words.push(oneWord)
            } else {
                counts[oneWord] = counts[oneWord] + 1
            }
        }
        words.sort((a, b) => counts[b] - counts[a]);
        let top15 = []
        if (words.length < 15) {
            for (let i = 0; i < words.length; i++) {
                let word = words[i];
                top15.push({ text: word, counts: counts[word] });
            }
        } else {
            for (let i = 0; i < 15; i++) {
                let word = words[i];
                top15.push({ text: word, counts: counts[word] });
            }
        }
        setMostUsedWords(top15)
    }, [allComments])

    useEffect(() => {
        getAllText();
    }, [allComments, getAllText])

    useEffect(() => {
        getAllComments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.selectedVideoId])

    const showComments = () => {
        if (showingComments) {
            setShowingComments(false);
        } else {
            setShowingComments(true);
        }
    }

    return (
        <div className="commentsWrapper">
            <div onClick={() => showComments()} className="buttonShowComments">{showingComments ? "Hide Comments" : "Show Comments"}</div>
            {showingComments && <div>
                {(disabledComments ? " " : <div className="mostUsedWords">

                    <h4>Most used words in comments:</h4>
                    <div className="words">
                        {mostUsedWords.map((comment, id) => {
                            return <div className="word" key={id}>{id + 1}. {comment.text}: {comment.counts}</div>
                        })}</div>
                </div>)}
                <h3>Comments: </h3>
                {(disabledComments ? "Comments are disabled for this video." : <div className="grid">
                    {allComments.map((comment, id) => {
                        return <Comment commentInfo={comment} key={id} />
                    })}
                </div>)}
            </div>}
        </div>

    );
};

export default Comments;