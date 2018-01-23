import React, { Component } from "react";
import Tilt from 'react-tilt';

class Artwork extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
    <div className="artwork__container">
        <Tilt className="Tilt">
            <img className="artwork__image" src={this.props.artwork} data-tilt></img>
        </Tilt>
    </div>

    );
    }
}

export default Artwork;