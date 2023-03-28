import React from 'react'
import Container from '../Container/Container'
import './Collaborate.scss'
import CollaborateOne from '../../assets/img/collaborate-1.png'
import CollaborateTwo from '../../assets/img/collaborate-2.png'
import CollaborateThree from '../../assets/img/collaborate-3.png'
import CollaborateFour from '../../assets/img/collaborate-4.png'

function Collaborate() {
  return (
    <div className='collaborate'>
      <Container>
        <div className="collaborate-inner">
          <button className='collaborate-btn'>03. Collaborate</button>
          <h2 className='collaborate-title'>The first truly multiplayer CRM.</h2>
          <p className='collaborate-text'>After all, the best work doesn't come from silos.</p>
          <a href="/" className='collaborate-link'>Get started</a>
          <div className="collaborate-cards">
            <div className="card__1">
              <h3 className='card__1-title'>Real-time multiplayer collaboration.</h3>
              <p className='card__1-text'>Collaborate with your whole team and nail every task the first time. See each other click, change, and type in real-time.</p>
              <img className='card__1-img' src={CollaborateOne} alt="" />
            </div>
            <div className="card__2">
              <h3 className='card__2-title'>Build from <br /> anywhere.</h3>
              <p className='card__2-text'>Attio’s world-class mobile app lets you collaborate from anywhere without compromising your workflow.</p>
              <img className='card__2-img' src={CollaborateTwo} alt="" />
            </div>
            <div className="card__3">
              <h3 className='card__3-title'>Keep everyone aligned with permission control.</h3>
              <p className='card__3-text'>Control how your entire team interacts with your business’s collections, views, and emails.</p>
              <img className='card__3-img' src={CollaborateThree} alt="" />
            </div>
            <div className="card__4">
              <h3 className='card__4-title'>Hold that thought.</h3>
              <p className='card__4-text'>Never lose another magic idea with Attio’s real-time collaborative note-taking features.</p>
              <img className='card__4-img' src={CollaborateFour} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Collaborate
