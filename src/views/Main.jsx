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
        name: "Loud Places",
        artist: "Jamie xx",
        album: "In Colour",
        year: 2018,
        artwork: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Jamie_xx_-_In_Colour.png",
        duration: 223,
        source: "http://ol5.mp3party.net/online/8443/8443243.mp3"
    }
}