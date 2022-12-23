import './App.scss'
import Header from "./components/Header/Header.jsx";
import SpendingChart from "./components/SpendingsChart/SpendingChart.jsx";
const App = () => {
    return (
        <div className='appWrapper'>
            <Header balance={921.48}/>
            <SpendingChart/>
        </div>
    )
}
export default App
