import React, { useState } from 'react'
import Search from '../../assets/img/search.png'
import { data } from '../../assets/LIB/data/data'
import './Header.scss'

function Header() {
  const [lon, setLon] = useState(window.localStorage.getItem('lon') || 'uz')
  const handlerLon = (e)=>{
    setLon(e.target.value)
    window.localStorage.setItem('lon', e.target.value)
  }
  console.log(data[0][`title__${lon}`]);
  console.log(lon);
  return (
    <header className='main-header'>
      <div className="container">
        <div className="header-inner">
        <div className="header-top">
          <div className="logo-wrapper">
            <a href="/">
              <img src="https://namanganliklar24.uz/img/logo.png" alt="" />
            </a>
          </div>
          <div className="currencies">
            <div className="currency">
              <span>$</span>
              <span>11395.73</span>
            </div>
            <div className="currency">
              <span>P</span>
              <span>146.46</span>
            </div>
            <div className="currency">
              <span>E</span>
              <span>12365.51</span>
            </div>
          </div>
          <div className="header-actions">
              <button><img src={Search} alt="" /></button>
            <div className="languages">
              <select onChange={handlerLon}>
              <option value="uz">UZ</option>
              <option value="en">EN</option>
              <option value="ru">RU</option>
              </select>
            </div>
            <div className="telegram-join">
            <a href="https://t.me/namanganliklar">Обуна бўлиш</a>
            </div>
          </div>
        </div>
        </div>
        <nav className='navbar'>
          <ul>
            <li>
            <a href="/">{data[0][`title__${lon}`]}</a>
            <a href="/">{data[1][`title__${lon}`]}</a>
            <a href="/">{data[2][`title__${lon}`]}</a>
            <a href="/">{data[3][`title__${lon}`]}</a>
            <a href="/">{data[4][`title__${lon}`]}</a>
            <a href="/">{data[5][`title__${lon}`]}</a>
            <a href="/">{data[6][`title__${lon}`]}</a>
            <a href="/">{data[7][`title__${lon}`]}</a>
            <a href="/">{data[8][`title__${lon}`]}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
