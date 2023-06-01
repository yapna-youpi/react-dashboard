import React from 'react'
import Logo from '../../imgs/logo.png'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
                sh<span>o</span>ps
            </span>
        </div>

        {/*  ---menu --- */}
        <div className="menu">
            <div className="menuItem">
                <div>
                    Icon
                </div>
                <span>Dashboard</span>
            </div>
        </div>
    </div>
    )
}

export default Sidebar