import React, { Component } from "react";

class Artwork extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="artwork__container">
                <img className="artwork__image" src={this.props.artwork}></img>
            </div>
        );
    }
}

export default Artwork;