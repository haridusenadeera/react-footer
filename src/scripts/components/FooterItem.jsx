import React from 'react';

export default class FooterItem extends React.Component {
    displayName = 'Footer Site map item'

    // static propTypes = {
    //    title: React.PropTypes.string,
    //    menuItems: React.PropTypes.array
    // }

    render() {
        // const {title, menuItems} = this.props;
        return (
            <div className="col-md-2">
                <h4 className="footer-topic">Explore</h4>
                <ul className="footer-list">
                    <li><a href="#">Dicty Art</a></li>
                    <li><a href="#">Gallery of Pictures/Videos</a></li>
                    <li><a href="#">Genome Resources</a></li>
                    <li><a href="#">Genome Statistics</a></li>
                    <li><a href="#">Learn About Dicty</a></li>
                </ul>
            </div>
        );
    }
}
