import React, { useState } from 'react'
import './youtube.css'
import axios from 'axios'

function Youtube() {

    const [videos, setVideos] = React.useState([])
    const api = process.env.REACT_APP_SECRET_KEY
    console.log(api)
    React.useEffect(() => {
        const url = `https://www.googleapis.com/youtube/v3/search?key=${api}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9`
        axios.get(url).then((response) => {

            setVideos(response.data.items)
        })

    }, [])

    const vid = videos.map((item) => {
        let videoId = item.id.videoId;
        let vidUrl = `https://www.youtube.com/watch?v=${videoId}`;

        return (
            <div key={item.id.videoId} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                        <a href={vidUrl} target="_blank">
                            <img src={item.snippet.thumbnails.high.url} />
                        </a>
                    </div>
                    <div className="videoWrapper">
                        <div className="videoTitle">
                            <a href={vidUrl} target="_blank">
                                {item.snippet.title}
                            </a>
                        </div>
                        <div className="description">
                            {item.snippet.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-12">
                    <h1 className="title">Latest Videos</h1>
                </div>
                {vid}
            </div>
        </div>
    );
}


export default Youtube

//https://apple-react-a6927.web.app