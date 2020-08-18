import React from "react"


const VideoListItem = ({ video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return  (
        <div className=" video-item " onClick={() => onVideoSelect(video)} className="list-group-item media my-2">
            <img src={imageUrl} className="align-sel-center mr-3" alt=""/>
            <div className="media-body">
                <p className="mt-0">{video.snippet.title}</p>
            </div>
        </div>
    )  
}

export default VideoListItem;
