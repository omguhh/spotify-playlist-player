'use babel';

import React from 'react';
import Artwork from './components/Artwork';
import Artist from './components/Artist';
import Player from './components/Player';

export default class Main extends React.Component {
    render() {
        return <div className="player__wrapper">
            <Artist name={this.props.track.artist} album={this.props.track.album} song={this.props.track.name}/>
            <Artwork artwork={this.props.track.artwork} />
            <Player source={this.props.track.source} duration={this.props.track.duration} />
        </div>;
    }
}

Main.defaultProps = {
    track: {
        name: "Drew Barrymore",
        artist: "SZA",
        album: "Ctrl",
        year: 2012,
        artwork: "http://s1.r29static.com/bin/entry/ab2/0,0,2000,2400/720x864/1811107/image.png",
        duration: 192,
        source: "http://cdn.muzmo.ru/music/20170905/muzmo_ru_SZA_-_Drew_Barrymore_48200783.mp3?sid=6001f8rvgj1daef1rf7boeg3r2"
    }
}