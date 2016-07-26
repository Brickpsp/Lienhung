import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

import { Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';
import { Layout, Header, Navigation} from 'react-mdl';
import { Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';
export default class Work extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }


    render() {
        return (
            <div> 
                                
                <Layout style={{ overflow: 'hidden' }}>
                
                    <Header className="bg__foo" title={
                        <div>
                            <ReactCSSTransitionGroup
                                transitionName="show-logo"
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={500}
                                transitionAppearTimeout={5200}
                                transitionAppear={true}
                                
                                >
                                <div>
                                <div className="logo-title">
                                </div>                              
                                </div>
                            </ReactCSSTransitionGroup>
                            
                            <div/>

                        </div>
                    } seamed style={{ height: '50%' }} scroll>
                        <div style={{ position: 'absolute', left: '50%', top: '20%', zIndex: '3' }}>
                            <ReactCSSTransitionGroup
                                transitionName="show-text"
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={500}
                                transitionAppearTimeout={7000}
                                transitionAppear={true}
                                >
                                <div>
                                    <h3 className="text-title">Lien Hung Company is committed to providing high quality products which
                                        excite and delight our consumers, whilst being part of a balanced diet ...</h3>
                                </div>
                            </ReactCSSTransitionGroup>
                        </div>

                    </Header>
                    <div >

                        <div className="bg__bar">
                            <Card style={{ width: '100%', height: '100%', margin: 'auto', backgroundColor: 'white' }}>                                                                                                                                                   
                                 <CardActions border style={{width:'50%'}} className="text-con">
                                 <div style={{position: 'relative'}}>
                                  <h1 style={{fontSize:'31px', marginBottom: '30px'}}> Title </h1>
                                    <p style={{fontSize:'21px', fontWeight: 'lighter', lineHeight: '18px'}}>
                                        This is random text:
                                    </p>   
                                    </div>
                                    <div className='sml_sp1'> </div>           
                                </CardActions>                            
                            </Card>
                        </div>
                        <div className="bg__sp1">
                            <Card style={{ width: '100%', height: '100%', margin: 'auto', backgroundColor: 'transparent' }}>
                                <CardTitle style={{ color: '#fff', height: '100%' }}></CardTitle>
                                <CardActions border style={{ backgroundColor: 'white', height: '100%', padding: '20px', textAlign: 'center' }}>
                                    <p style={{fontSize:'21px', fontWeight: 'lighter', lineHeight: '18px'}}>
                                        This is random text:
                                    </p>   
                                </CardActions>
                            </Card>
                        </div>
                        <div className="bg__sp2">

                            <Card style={{ width: '100%', height: '100%', margin: 'auto', backgroundColor: 'transparent' }}>
                                <CardTitle style={{ color: '#fff', height: '100%' }}></CardTitle>
                                <CardActions border style={{ backgroundColor: 'white', height: '100%', padding: '20px', textAlign: 'center' }}>
                                    <p style={{fontSize:'21px', fontWeight: 'lighter', lineHeight: '18px'}}>
                                        This is random text:
                                    </p>  
                                </CardActions>
                            </Card>

                        </div>
                        <div className="bg__sp3">

                            <Card style={{ width: '100%', height: '100%', margin: 'auto', backgroundColor: 'transparent' }}>
                                <CardTitle style={{ color: '#fff', height: '100%' }}></CardTitle>
                                <CardActions border style={{ backgroundColor: 'white', height: '100%', padding: '20px', textAlign: 'center' }}>
                                    <p style={{fontSize:'21px', fontWeight: 'lighter', lineHeight: '18px'}}>
                                        This is random text:
                                    </p>  
                                </CardActions>
                            </Card>

                        </div>
                        <div className="bg__sp4">

                            <Card style={{ width: '100%', height: '100%', margin: 'auto', backgroundColor: 'transparent' }}>
                                <CardTitle style={{ color: '#fff', height: '100%' }}></CardTitle>
                                <CardActions border style={{ backgroundColor: 'white', height: '100%', padding: '20px', textAlign: 'center' }}>
                                    <p style={{fontSize:'21px', fontWeight: 'lighter', lineHeight: '18px'}}>
                                        This is random text:
                                    </p>  
                                </CardActions>
                            </Card>

                        </div>

                        <div className="bg__bazz">
                            <Footer style={{ height: '100%' }} size="mega">
                                <FooterSection type="middle">
                                    <FooterDropDownSection title="Features">
                                        <FooterLinkList>
                                            <a href="#">About</a>
                                            <a href="#">Terms</a>
                                            <a href="#">Partners</a>
                                            <a href="#">Updates</a>
                                        </FooterLinkList>
                                    </FooterDropDownSection>
                                    <FooterDropDownSection title="Details">
                                        <FooterLinkList>
                                            <a href="#">Specs</a>
                                            <a href="#">Tools</a>
                                            <a href="#">Resources</a>
                                        </FooterLinkList>
                                    </FooterDropDownSection>
                                    <FooterDropDownSection title="Technology">
                                        <FooterLinkList>
                                            <a href="#">How it works</a>
                                            <a href="#">Patterns</a>
                                            <a href="#">Usage</a>
                                            <a href="#">Products</a>
                                            <a href="#">Contracts</a>
                                        </FooterLinkList>
                                    </FooterDropDownSection>
                                    <FooterDropDownSection title="FAQ">
                                        <FooterLinkList>
                                            <a href="#">Questions</a>
                                            <a href="#">Answers</a>
                                            <a href="#">Contact Us</a>
                                        </FooterLinkList>
                                    </FooterDropDownSection>
                                </FooterSection>
                                <FooterSection type="bottom" logo="Title">
                                    <FooterLinkList>
                                        <a href="#">Help</a>
                                        <a href="#">Terms</a>
                                    </FooterLinkList>
                                </FooterSection>
                            </Footer>
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }



}