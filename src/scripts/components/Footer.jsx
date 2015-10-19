import React from 'react';

export default class Footer extends React.Component {
    displayName = 'Footer component wrapper'

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
