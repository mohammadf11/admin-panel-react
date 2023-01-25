import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import React from 'react'
import './Feature.css'
function Feature() {
  return (
    <div className="features">
      <div className="featureItem">
        <span className="featureTitle">Revanue</span>
        <div className="featureContainer">
          <span className="featureMoney">$2.415</span>
          <span className="featureRate">
            -11.4
            <ArrowDownward className="featureIcon negetive" />
          </span>
        </div>
        <span className='featureSub'>Compare to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Revanue</span>
        <div className="featureContainer">
          <span className="featureMoney">$2.415</span>
          <span className="featureRate">
            -11.4
            <ArrowDownward className="featureIcon negetive" />
          </span>
        </div>
        <span className='featureSub'>Compare to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Revanue</span>
        <div className="featureContainer">
          <span className="featureMoney">$2.415</span>
          <span className="featureRate">
            -11.4
            <ArrowUpward className="featureIcon" />
          </span>
        </div>
        <span className='featureSub'>Compare to last month</span>
      </div>
    </div>
  )
}

export default Feature
