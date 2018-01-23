/**
 * Created by yasmi on 1/23/2018.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './views/Main';
import './styles/blocks/layout.css';
import './styles/blocks/player/player.css';
import './styles/blocks/artwork/artwork.css';
import './styles/blocks/artist/artist.css';


ReactDOM.render(
    <Main/>,
    document.getElementById('app')
);

module.hot.accept();