import './Header.scss'
import logo from "../../../src/assets/images/logo.svg"
const Header = (props) => {
    return (
        <header className="header">
            <div>
                <span>My balance</span>
                <span className="balanceValue">${props.balance}</span>
            </div>
            <img src="../../../src/assets/images/logo.svg" alt="" aria-hidden={true} style={{height: 40}}/>
        </header>
    )
}

export default Header