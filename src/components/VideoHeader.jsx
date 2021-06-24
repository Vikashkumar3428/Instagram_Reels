import React from 'react';
import CameraAltOutlined from '@material-ui/icons/CameraAltOutlined';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './VideoHeader.css';

function VideoHeader() {
    return (
        <div className="videoHeader">
            <ArrowBackIosIcon />
            <h1>Reels</h1>
            <CameraAltOutlined />
        </div>
    )
}

export default VideoHeader;
