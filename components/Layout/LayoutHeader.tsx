import React from 'react'
import MenuItem from './MenuItem'
import Logo from '../../assets/img/logo.png'

const LayoutHeader = () => {
  return (
    <div
      className="bg-header-black fixed top-0 left-0 w-full text-white flex z-50"
      style={{ height: 44, justifyContent: 'center', alignItems: 'center' }}>
      <div className="w-full flex container">
        <MenuItem>
          <img src={Logo} alt="logo" />
          UniqueCode
        </MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem>Members</MenuItem>
        <MenuItem>Recruit</MenuItem>
      </div>
    </div>
  )
}

export default LayoutHeader
