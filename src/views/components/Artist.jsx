import React, { Component } from "react";

class Artist extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="artist__details">
                <h2 className="artist__title">{this.props.name}</h2>
                <h3 className="artist__song">{this.props.song}</h3>
                <h3 className="artist__album">{this.props.album}</h3>
            </div>
        );
    }
}

export default Artist;