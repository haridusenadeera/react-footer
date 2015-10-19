import React from 'react';

export class FooterBottom extends React.Component {
    displayName = 'Container for the bottom part of the footer'

    render() {
        return (
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export class FootBtItem extends React.Component {
    displayName = 'Item for bottom part of the footer'

    render() {
        return (
            <div className="col-md-4 text-center">
                {this.props.children}
            </div>
        );
    }
}
