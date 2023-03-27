import React from 'react'
import Container from '../Container/Container'
import './About-inner.scss'
import Img from '../../assets/img/about__inner.png'

function AboutInner() {
    return (
        <div className='about-inner'>
            <Container>
                <div className="box">
                    <div className="box-inner">
                        <div className="info">
                        <h2>Ready to build your <br /> team's dream CRM?</h2>
                        <div className="white"></div>
                        </div>
                        <div className="img">
                            <img src={Img} alt="" />
                    </div>
                    </div>
                </div>
            </Container>
            <div className="about__inner-list">
                <Container>
                    <a className='link-1' href="/">Get started</a>
                    <a className='link-2' href="/">Talk to sales</a>
                </Container>
            </div>
        </div>
    )
}

export default AboutInner