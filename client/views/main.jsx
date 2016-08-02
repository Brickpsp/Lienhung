import React, {Component}  from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
var ReactDom = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
import { Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';

export default class Work extends React.Component {
    constructor() {
        super();
        //this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            parallax: [
                {
                    id: 1,
                    content:
                    <div>
                        <ReactCSSTransitionGroup
                            transitionName="show-text"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}
                            transitionAppearTimeout={7000}
                            transitionAppear={true}
                            >
                            <div className="text-title">
                                <h3 style={{ color: 'white', margin: '10px auto', fontWeight: 'lighter' }}>Lien Hung Company is committed to providing high quality products which
                                    excite and delight our consumers, whilst being part of a balanced diet ...</h3>
                            </div>
                        </ReactCSSTransitionGroup>
                        <div className='area-content'>
                            <div className='item-content'>
                                <h1> Title </h1>
                                <p style={{ textAlign: 'justify' }}>
                                    This is Demo
                                </p>
                            </div>
                        </div>
                    </div>
                    ,
                    url: 'images/SAM_1008.jpg'
                },

                {
                    id: 2,
                    content:
                    <div className='area-content'>
                        <div className='item-content'>
                            <p>
                                This is Demo
                            </p>
                        </div>
                    </div>
                    ,
                    url: 'http://static.independent.co.uk/s3fs-public/styles/article_large/public/thumbnails/image/2016/03/15/16/Ginger-Nuts.jpg'
                },

                {
                    id: 3,
                    content:
                    <div className='area-content'>
                        <div className='item-content'>
                            <p>
                                This is Demo
                            </p>
                        </div>
                    </div>
                    ,
                    url: 'http://www.1wallpaperhd.com/wp-content/uploads/Other/FTP1/1280x720/Biscuit%20Wallpapers%20HD%201280x720.jpg'
                },

                {
                    id: 4,
                    content:
                    <div className='area-content'>
                        <div className='item-content'>
                            <p>
                                This is Demo
                            </p>
                        </div>
                    </div>
                    ,
                    url: 'http://img.jituwang.com/uploads/allimg/120213/8113-12021312550386.jpg'
                },

                {
                    id: 5,
                    content:
                    <div className='area-content'>
                        <div className='item-content'>
                            <p>
                                This is Demo
                            </p>
                        </div>
                    </div>
                    ,
                    url: 'http://ya.clan.su/_ph/1/764962926.jpg'
                },

            ]
        }
    }

    handleImageLoaded() {
        this.setState({ imageStatus: 'loaded' });
    }

    handleImageErrored() {
        this.setState({ imageStatus: 'failed to load' });
    }


    render() {
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="show-logo"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    transitionAppearTimeout={5500}
                    transitionAppear={true}
                    >
                    <div className="logo-title">
                        <ReactCSSTransitionGroup
                            transitionName="show-menu"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}
                            transitionAppearTimeout={6000}
                            transitionAppear={true}
                            >
                            <div className="menu">
                                <ReactCSSTransitionGroup
                                    transitionName="show-text-menu"
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={500}
                                    transitionAppearTimeout={7000}
                                    transitionAppear={true}
                                    >
                                    <div style={{ position: 'absolute', left: '1em' }}>
                                        <h1 className='text-menu'>Lien Hung</h1>
                                    </div>
                                </ReactCSSTransitionGroup>
                            </div>
                        </ReactCSSTransitionGroup>
                    </div>
                </ReactCSSTransitionGroup>

                {this.state.parallax.map(({content, url, id}) => <ParallaxComponent key={id} background={<Image src={url} />}>
                    {content}
                </ParallaxComponent>) }

                <Footer style={{ height: '50vh' }} size="mega">
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
        )
    }
}

let clamp = (x, low, high) => Math.min(Math.max(x, low), high)
/*function debounce(func, wait) {
    var timeout
    return function () {
        var context = this, args = arguments
        var later = function () {
            timeout = null
            func.apply(context, args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}*/

class Image extends Component {
    constructor() {
        super()
        this.state = {
            opacity: 0,
            backgroundImage: ''
        }
        this.fadeIn = () => this.setState({
            opacity: 1,
            backgroundImage: 'url(' + this.props.src + ')'
        })
    }
    componentDidMount() {
        var img = this.img = document.createElement('img')
        img.src = this.props.src
        img.addEventListener('load', this.fadeIn)
    }
    componentWillUnmount() {
        this.img.removeEventListener('load', this.fadeIn)
    }
    render() {
        return (<div className='bgImageContainer' src={this.props.src} style={{ opacity: this.state.opacity, backgroundImage: this.state.backgroundImage }} />)
    }
}

class ParallaxComponent extends Component {
    constructor(...p) {
        super(...p)

        this.state = {
            style: {
                transform: ''
            }
        }

        this._calcPosition = () => {
            let {scrollY} = window,
                el = ReactDom.findDOMNode(this),
                {offsetTop, offsetHeight} = el,
                d = (scrollY - offsetTop) * 1.5 / offsetHeight,
                t = `translateY(${clamp((d * 100).toFixed(0), (-.25 * offsetHeight).toFixed(0), (.75 * offsetHeight).toFixed(0))}px) translateZ(0)`

            this.setState({
                style: {
                    transform: t
                }
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this._calcPosition)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this._calcPosition)
    }
    render() {
        return (
            <div className="parallax">
                <div style={this.state.style} className="parallax-back">
                    {this.props.background}
                </div>
                <div className="parallax-base">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
