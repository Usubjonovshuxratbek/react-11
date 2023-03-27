import React from 'react'
import Container from '../Container/Container'
import './Footer.scss'
import IconOne from '../../assets/img/icon-1.png'
import IconTwo from '../../assets/img/icon-2.png'
import IconThree from '../../assets/img/icon-3.png'

function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <div className="footer-blocks">
                    <div className="block-1">
                        <h4 className='title'>Product</h4>
                        <ul className='block-list'>
                            <li className='block-item'>
                                <a href="/">Updates</a>
                                <a href="/">Security</a>
                                <a href="/">Chrome extension</a>
                                <a href="/">iOS app</a>
                                <a href="/">Android app</a>
                                <a href="/">Zapier</a>
                                <a href="/">Integromat</a>
                            </li>
                        </ul>
                    </div>
                    <div className="block-2">
                        <h4 className='title'>Company</h4>
                        <ul className='block-list'>
                            <li className='block-item'>
                                <a href="/">About</a>
                                <a href="/">Careers</a>
                                <a href="/">Announcements</a>
                            </li>
                        </ul>
                    </div>
                    <div className="block-3">
                        <h4 className='title'>Attio for</h4>
                        <ul className='block-list'>
                            <li className='block-item'>
                                <a href="/">Startups</a>
                                <a href="/">Venture capital</a>
                                <a href="/">Deal flow</a>
                            </li>
                        </ul>
                    </div>
                    <div className="block-4">
                        <h4 className='title'>Support</h4>
                        <ul className='block-list'>
                            <li className='block-item'>
                                <a href="/">Help center</a>
                                <a href="/">Talk to support</a>
                                <a href="/">API docs</a>
                                <a href="/">System status</a>
                            </li>
                        </ul>
                    </div>
                    <div className="block-5">
                        <h4 className='title'>Ready to build?</h4>
                        <ul className='block-list'>
                            <li className='block-item'>
                                <button className='start-btn'>Get started</button>
                                <a className='link' href="/">Talk to sales</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="liner"></div>
                <div className="footer-inner">
                    <div className='right'>
                        <span>© 2023 Attio Ltd. All rights reserved.</span>
                    </div>
                    <div className='left'>
                        <a href="/">Terms & Conditions</a>
                        <a href="/">Terms & Conditions</a>
                        <a href="/"><img src={IconOne} alt="" /></a>
                        <a href="/"><img src={IconTwo} alt="" /></a>
                        <a href="/"><img src={IconThree} alt="" /></a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
