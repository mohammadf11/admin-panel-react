import React from 'react'
import {
  Timeline,
  LineStyle,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  MessageOutlined,
} from '@mui/icons-material'

import './SideBar.css'
function SideBar() {
  return (
    <div>
      <div className="sideBar">
        <div className="sideBarWrapper">
          <div className="sideBarMenu">
            <h3 className="sideBarTitle">Dashboard</h3>
            <ul className="sideBarList">
              <li className="sideBarListItem">
                <LineStyle className="sideBarIcon" />
                Home
              </li>
              <li className="sideBarListItem">
                <Timeline className="sideBarIcon" />
                Analytics
              </li>
              <li className="sideBarListItem">
                <TrendingUp className="sideBarIcon" />
                Sales
              </li>
            </ul>
            <h3 className="sideBarTitle">Quick Menu</h3>
            <ul className="sideBarList">
              <li className="sideBarListItem">
                <PermIdentity className="sideBarIcon" />
                Users
              </li>
              <li className="sideBarListItem">
                <PermIdentity className="sideBarIcon" />
                New User
              </li>
              <li className="sideBarListItem">
                <Storefront className="sideBarIcon" />
                Products
              </li>
              <li className="sideBarListItem">
                <AttachMoney className="sideBarIcon" />
                TransActions
              </li>
              <li className="sideBarListItem">
                <BarChart className="sideBarIcon" />
                Reports
              </li>
            </ul>
            <h3 className="sideBarTitle">Notifacations</h3>
            <ul className="sideBarList">
              <li className="sideBarListItem">
                <MailOutline className="sideBarIcon" />
                Mail
              </li>
              <li className="sideBarListItem">
                <DynamicFeed className="sideBarIcon" />
                FeedBack
              </li>
              <li className="sideBarListItem">
                <MessageOutlined className="sideBarIcon" />
                Message
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
