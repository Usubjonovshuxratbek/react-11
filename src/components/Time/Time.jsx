import React from 'react'
import './Time.scss'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import usersInfo from '../../assets/img/users-info.png'
import userInfo from '../../assets/img/user-info.png'
import Work from '../../assets/img/work.png'

function Time() {
  return (
    <section className='time'>
      <Container>
        <div className="time-inner">
          <button className='btn'>01. Data</button>
          <h2 className='title'>Real-time relationships need real-time data.</h2>
          <p className='text-1'>Your customers are always connected.</p>
          <p className='text-2'>Why should your CRM be any different?</p>
          <Link className='time-link' to='/'>Get started</Link>
        </div>
        <div className="users">
          <div className="block-1">
            <h3 className='title-1'>Instant visibility</h3>
            <h3 className='title-2'>into all your relationships.</h3>
            <p className='text'>Attio creates a real-time global database of every contact & company your business interacts with.</p>
          </div>
          <div className="block-2">
              <img className='users-info' src={usersInfo} alt="" />
          </div>
        </div>
        <div className="works">
          <div className="work__block-1">
            <h2 className='title'>Build better connections with unrivaled relationship intel.</h2>
            <p className='text'>Attio sorts all your team’s conversations with a contact or company and creates enriched timelines for every interaction.</p>
            <img className='user-info' src={userInfo} alt="" />
          </div>
          <div className="work__block-2">
            <h2 className='title-1'>Work with your</h2>
            <h2 className='title-2'>dream tech stack.</h2>
            <p className='text'>Pull in data from best-in-class SaaS tools through Attio's world-class API and Zapier integration.</p>
            <img className='work__info-img' src={Work} alt="" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Time
