import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/images/Logo.svg'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { user } from '../../constants';
import { questionAndAnswers } from '../../data';
import { Avatar } from '@mui/material';

const Navbar = ({ qna, setQna }) => {
    const [searchInput, setSearchInput] = useState('')
    const handleOnEnter = (e) => {
        if (e.charCode === 13) {
            const qnaFilter = qna.filter((qna) => qna.question.toLowerCase().includes(searchInput.toLowerCase()))
            setQna(qnaFilter)

        }
    }
    const handleLogOut = () => {

        if (window.confirm('Are you sure to LogOut?')) {
            localStorage.setItem('user', JSON.stringify({ ...user, islogged: false }))
            window.location.reload()
        }
    }
    return (
        <nav className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <NavLink className="logo" to='/'>
                        <img src={Logo} alt="logo" />
                    </NavLink>
                </div>
                <div className="right">
                    <div className="search-container">
                        <label htmlFor="question-search">
                            <SearchIcon className='search-icon' />
                        </label>
                        <input
                            type="text"
                            id='question-search'
                            placeholder='search for questions.....'
                            onChange={(e) => {
                                setSearchInput(e.target.value);
                                setQna(questionAndAnswers)
                            }}
                            onKeyPress={handleOnEnter}
                            value={searchInput}
                        />
                    </div>

                    <ul className='lists'>
                        <ul>
                            <li className="list-item">
                                <NavLink to='add-question'>
                                    <button>
                                        <div>Add</div>
                                        <div>questions</div>
                                    </button>
                                </NavLink>
                            </li>
                            <li className="list-item">
                                <NavLink to='/add-answer'>
                                    <button>
                                        <div>Add</div>
                                        <div>answers</div>
                                    </button>
                                </NavLink>
                            </li>
                            <li>
                                {user?.islogged ?

                                    <div className="user_info">
                                        <Avatar className='user-avatar' onClick={handleLogOut} style={{backgroundColor:'#ff0f07'}}/>
                                    </div>

                                    :

                                    <NavLink to='/login' className='list-item' >
                                        <button className='btn-login' type='button'>Login</button>
                                    </NavLink>

                                }
                            </li>
                        </ul>
                    </ul>

                </div>

            </div>

        </nav>
    )
}

export default Navbar