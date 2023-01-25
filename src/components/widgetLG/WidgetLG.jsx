import React from 'react'
import './WidgetLG.css'
import { transactions } from '../../data'

function WidgetLG() {
  const Button = ({ type }) => {
    return <button className={'WidgetLgButton ' + type}>{type}</button>
  }
  return (
    <div className="WidgetLG">
      <h3 className="WidgetLgTitle">Latest TransAction</h3>
      <table className="WidgetLgTable">
        <tr className="WidgetLgTr">
          <th className="WidgetLgTh">Customer</th>
          <th className="WidgetLgTh">Date</th>
          <th className="WidgetLgTh">Amount</th>
          <th className="WidgetLgTh">Status</th>
        </tr>
        {transactions.map((transaction) => (
          <tr className="WidgetLgTr">
            <td className="WidgetLgUser">
              <img
                className="WidgetLgUserImg"
                src={transaction.img}
                alt=""
              />
              <span className="WidgetLgName">{transaction.customer}</span>
            </td>
            <td className="WidgetLgDate">{transaction.date}</td>
            <td className="WidgetLgAmount">${transaction.amount}</td>
            <td className="WidgetLgStatus">
              <Button type={transaction.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default WidgetLG
