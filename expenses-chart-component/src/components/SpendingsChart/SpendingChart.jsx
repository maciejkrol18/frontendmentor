import './SpendingChart.scss'
import spendingData from '../../data/data.js'

const SpendingChart = () => {

    let sum = 0
    spendingData.map((el) => sum+= el.amount)

    return (
        <main className='contentWrapper'>
            <h1>Spending - Last 7 days</h1>
            <div className="spendingChartWrapper">
                <div className="spendingChart">
                    {
                        spendingData.map((element, index) => {
                            return (
                                <div className="chartColumn" key={index}>
                                    {/*<div className="chartPopup">{element.amount}</div>*/}
                                    <div className="chartBar" style={{height: `${(element.amount / sum) * 100}vh`}}/>
                                    <span className="chartDayName">{element.day}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="spendingSummary">
                <div className="spendingTotal">
                    <span>Total this month:</span>
                    <span className="spendingTotalAmount">${sum}</span>
                </div>
                <div className="spendingMonthDifference">
                    <span className="spendingMonthDifferencePercentage">+2.4%</span>
                    <span>from last month</span>
                </div>
            </div>
        </main>
    )
}

export default SpendingChart