import React from "react"


const VideoDetail = ({ video }) => {
    if(!video) {
        return (<div>
            <h1 style={{color: "red", textAlign: "center", padding: "50px"}}>Loading</h1>
        </div>)
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8 col-8 my-2">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;