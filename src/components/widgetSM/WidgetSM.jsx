import { Visibility } from '@mui/icons-material'
import React from 'react'
import './WidgetSM.css'
import { newMembers } from '../../data'
function WidgetSM() {
  return (
    <div className="widgetSM">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newMembers.map((user) => (
          <li key={user.id} className="widgetSmListItem">
            <img
              src={user.img}
              alt=""
              className="widgetSmListImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.username}</span>
              <span className="widgetSmUserTitle">{user.job}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WidgetSM
