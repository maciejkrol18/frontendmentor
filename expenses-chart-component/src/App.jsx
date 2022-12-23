import './App.scss'
import Header from "./components/Header/Header.jsx";
import SpendingChart from "./components/SpendingChart/SpendingChart.jsx";
import spendingData from "./data/data.js";
const App = () => {

    let sum = 0
    spendingData.map((el) => sum+= el.amount)

    return (
        <div className='appWrapper'>
            <Header balance={921.48}/>
            <main className="mainContentWrapper">
                <h1>Spendings - Last 7 days</h1>
                <SpendingChart data={spendingData} sum={sum}/>
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
        </div>
    )
}
export default App
