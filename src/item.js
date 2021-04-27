import React from "react";

export default class Item extends React.Component {

    render() {
        return (
            <svg height={this.props.y*2} width={this.props.x*2}>
                <circle cx={this.props.x} cy={this.props.y} r={this.props.r} stroke="black" strokeWidth="1" fill={this.props.color} />
            </svg>
        );
    }
}