import React from "react";
import { Paper, Typography } from '@mui/material';


const VideoDetails = ({video}) =>{

    if(!video) return <div>Loading...</div>

    console.log(video.id.videoId);

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;


    return(
        <React.Fragment>
            <Paper elevation={3} style={{height: '70%'}}>
            <iframe frameBorder="0" height='100%' width='100%' title="video player" src={videoSrc}></iframe>
            </Paper>
            <Paper elevation={3} style={{padding: '15px'}}>
                
                <Typography variant="h4">{video.snippet.title}</Typography>
                <Typography variant="h5">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
            
        </React.Fragment>
    )
}

export default VideoDetails;