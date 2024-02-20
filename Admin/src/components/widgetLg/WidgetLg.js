import './widgetLg.css'

const WidgetLg = () => {
  const Button = ({type})=>{
  return <button className={"widgetLgButton "+ type}>{type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTab">
        <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="http://t3.gstatic.com/images?q=tbn:ANd9GcQA9wP6PUdDYXRSrVs3jekbEduPxJyJ5vSN0508HmDjDVh6xzdSWE6Dg1Bon2ni7mTmVKuaJg" alt="" className="widgetLgImg" />
            <span className="widgetlgName">Elon Musk</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="http://t3.gstatic.com/images?q=tbn:ANd9GcQA9wP6PUdDYXRSrVs3jekbEduPxJyJ5vSN0508HmDjDVh6xzdSWE6Dg1Bon2ni7mTmVKuaJg" alt="" className="widgetLgImg" />
            <span className="widgetlgName">Elon Musk</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Declined" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="http://t3.gstatic.com/images?q=tbn:ANd9GcQA9wP6PUdDYXRSrVs3jekbEduPxJyJ5vSN0508HmDjDVh6xzdSWE6Dg1Bon2ni7mTmVKuaJg" alt="" className="widgetLgImg" />
            <span className="widgetlgName">Elon Musk</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Pending" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="http://t3.gstatic.com/images?q=tbn:ANd9GcQA9wP6PUdDYXRSrVs3jekbEduPxJyJ5vSN0508HmDjDVh6xzdSWE6Dg1Bon2ni7mTmVKuaJg" alt="" className="widgetLgImg" />
            <span className="widgetlgName">Elon Musk</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus"><Button type="Approved" /></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
export default WidgetLg