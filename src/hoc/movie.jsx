import React, { Component } from "react";
import withTooltip from "./withTooltip";

export class Movie extends Component {
    render() {
        return (
            <div>
                Movie
                {this.props.showTooltip && <p>Show tip:...</p>}
            </div>
        );
    }
}

export default withTooltip(Movie);
