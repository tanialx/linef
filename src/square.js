import React from 'react';
import Item from './item';

export default class Square extends React.Component {

    render() {
        let itemOrBlank
        if (this.props.item != null) {
            itemOrBlank = <Item x='22' y='22' color={this.props.item} r='15' />
        }
        return (
            <div className="square"
                onClick={() => this.props.onClick()}>
                {itemOrBlank}
            </div>
        );
    }
}