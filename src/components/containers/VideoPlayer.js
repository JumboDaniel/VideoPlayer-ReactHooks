import React from 'react';
import Video from '../Video';
import Playlist from '../containers/Playlist';
import {ThemeProvider}  from 'styled-components';
import StyledVideoPlayer from  '../styles/StyledVideoPlayer'
import NightMode from '../Nightmode';

const theme={
    bgcolor:'#353335',
    bgcolorItem: '#414141',
    bgcolorItemActive: '#405c63', 
    bgcolorPlayed:'#526d4e',
    border:'none',
    borderPlayed:'#none',
    color: '#fff'
}

const themeLight={
    bgcolor:'#353335',
    bgcolorItem: '#414141',
    bgcolorItemActive: '#80a7bi',
    bgcolorPlayed:'#7d9979',
    border:'1px solid #353535',
    borderPlayed:'#none',
    color: '#353535'
}

const VideoPlayer = props =>{
    const nightModeCallback =()=>{

    }
    const endCallback =()=>{
        
    }
    const progressCallback =()=>{
        
    }
    return(
        <ThemeProvider theme={state.nightMode ? theme : themeLight}>
            {state.videos!==null ?(
            <StyledVideoPlayer>
                <Video
                active={state.active.Video}
                autoplay={state.autoplay}
                endCallback={endCallback}
                progressCallback={progressCallback}
                /> 
                <Playlist
                videos={state.videos}
                active={state.active.Video}
                nightModeCallback={nightModeCallback}
                nightMode={NightMode}
                />
            </StyledVideoPlayer>
            ): null}
        </ThemeProvider>
    )
}
export default VideoPlayer;