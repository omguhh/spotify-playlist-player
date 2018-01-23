'use babel';

import React from 'react';
import Artwork from './components/Artwork';
import Artist from './components/Artist';

export default class Main extends React.Component {
    render() {
        return <div className="player__wrapper">
            <Artist name="SZA" album="Ctrl" song="Drew Barrymore"/>
            <Artwork artwork="https://is3-ssl.mzstatic.com/image/thumb/Music117/v4/ca/97/bb/ca97bb6e-618b-3f98-3f3b-0937d48112e2/886446548432.jpg/1200x630bb.jpg" />
        </div>;
    }
}