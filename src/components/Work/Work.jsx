import React from 'react'
import Container from '../Container/Container'
import './Work.scss'

function Work() {
  return (
    <div>
      <section className='work'>
        <Container>
          <button className='work-btn'>02. Build</button>
          <h2 className='work-title'>The CRM that's truly your own.</h2>
          <p className='text-1'>Tweak anything and everything to ensure Attio fits your business,</p>
          <p className='text-2'>not the other way around.</p>
          <a className='work-link' href="/">Get started</a>
          <div className="cards">
            <div className="card-1">
              <h3>Build</h3>
              <p>Create your dream CRM with powerful, flexible templates for every use case.</p>
            </div>
            <div className="card-2">
              <h3>Refine</h3>
              <p>Use Attio’s intuitive UI and ultra-customizable building blocks to craft your ideal workflows.</p>
            </div>
            <div className="card-3">
              <h3>Work</h3>
              <p>Grow your business at scale with enriched data, custom attributes, and powerful integrations.</p>
            </div>
          </div>
          <div className="buldi__info-photo"></div>
        </Container>
      </section>
    </div>
  )
}

export default Work
