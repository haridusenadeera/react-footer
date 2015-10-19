import React from 'react';

export default class FooterTop extends React.Component {
    displayName = 'Container for the top part of the footer'

    render() {
        return (
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
