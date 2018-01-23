import React, { Component } from "react";

class TodoItems extends Component {

    constructor(props, context) {
        super(props, context);
        this.togglePlayer = this.togglePlayer.bind(this);
        this.updateScrubber = this.updateScrubber.bind(this);

        this.state = {
            playStatus: 'play'
        };
    }

    updateScrubber(percent) {
        let innerScrubber = document.querySelector('.Scrubber-Progress');
        innerScrubber.style['width'] = percent;
    }

    togglePlayer() {
        let status = this.state.playStatus;
        let audio = document.getElementById('audio');
        if(status === 'play') {
            status = 'pause';
            audio.play();
            let that = this;
            setInterval(function() {
                let currentTime = audio.currentTime;
                let duration = that.props.duration;

                // Calculate percent of song
                let percent = (currentTime / duration) * 100 + '%';
                that.updateScrubber(percent);
            }, 100);

        } else {
            status = 'play';
            audio.pause();
        }
        this.setState({ playStatus: status });
    }

    render() {

        return (
            <div className="Controls">
                <div onClick={this.togglePlayer} className="Button">
                    <i className={this.state.playStatus == 'play' ? "fa fa-play" : "fa fa-pause"}></i>
                </div>
                <div className="Scrubber">
                    <div className="Scrubber-Progress"></div>
                </div>
                <audio id="audio">
                    <source src={this.props.source} />
                </audio>
            </div>
        );
    }
}

export default TodoItems;