import React from 'react';
import Footer from './components/Footer';
import FooterTop from './components/FooterTop';
import FooterItem from './components/FooterItem';
import {FooterBottom, FootBtItem} from './components/FooterBottom';


const footer = (
    <Footer>
        <FooterTop>
            <FooterItem />
            <FooterItem />
            <FooterItem />
            <FooterItem />
            <FooterItem />
            <FooterItem />
        </FooterTop>
        <FooterBottom>
            <FootBtItem>
                <p>Supported by NIH GMOD Gene Ontology</p>
            </FootBtItem>
            <FootBtItem>
                <p>Please CITE: dictyBase Dicty Stock Center</p>
            </FootBtItem>
            <FootBtItem>
                <p>
                    <i className="fa fa-github fa-2x"></i>&nbsp;&nbsp;
                    <i className="fa fa-twitter fa-2x"></i>&nbsp;&nbsp;
                    <i className="fa fa-facebook fa-2x"></i>
                </p>
            </FootBtItem>
        </FooterBottom>
    </Footer>
);

React.render(footer, document.getElementById('dicty-footer'));
