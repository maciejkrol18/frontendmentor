import './SpendingChart.scss'

const SpendingChart = (props) => {

    return (
            <div className="spendingChartWrapper">
                <div className="spendingChart">
                    {
                        props.data.map((element, index) => {
                            return (
                                <div className="chartColumn" key={index}>
                                    <div className="chartBar" style={{height: `${((element.amount / props.sum) * 100).toFixed(2)}vh`}}/>
                                    <span className="chartDayName">{element.day}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )
}

export default SpendingChart