import React, { Component } from "react";

function withTooltip(Comp) {
    return class WithTooltip extends Component {
        state = {
            showTooltip: false,
        };

        mouseOver = () => {
            this.setState({ showTooltip: true });
        };
        mouseOut = () => {
            this.setState({ showTooltip: false });
        };

        render() {
            return (
                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    <Comp
                        {...this.props}
                        showTooltip={this.state.showTooltip}
                    />
                </div>
            );
        }
    };
}

export default withTooltip;
