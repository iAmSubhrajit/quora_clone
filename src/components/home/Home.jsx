import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = ({ questions, qna, setQna }) => {

  return (
    <div className='home'>
      <nav>
        <Navbar qna={qna} setQna={setQna} />
      </nav>
      <main>
        <div className="container">
          <div className="left">
            {qna && qna.map((item, index) => (
              <div className="qna-card" key={index}>
                <div className="user-info">
                  <Avatar style={{ height: '40px', width: '40px', marginRight: '10px' }} />
                  <h2>{item?.questionedBy}</h2>
                </div>
                <div className="question">
                  <h3>{item?.question}</h3>
                </div>
                <div className="answer">
                  {item?.answer}
                </div>
              </div>
            ))}
          </div>
          <div className="right">
            <h2 className='title'>Questions List</h2>
            <ul className='question-lists'>
              {questions && questions.map((item, index) => (
                <li className="question-list" key={index}>
                  <Link to='/add-answer' className='question'>{item?.question}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home