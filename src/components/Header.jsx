import ".././App.css"
import logo from "../assets/react.svg"
import { CiSearch } from "react-icons/ci";
import { FiLogIn } from "react-icons/fi";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{paddingTop: "0px"}}>
                <div className="container-fluid navContainer">
                    <div className="navbar-brand navLogo">
                        <img src={logo} alt="" width={30} height={30} style={{ marginRight: "10px" }} />DUMMY <span>CLOTHERS</span>
                    </div>
                    <button
                        style={{backgroundColor: "#06aaf1"}}
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse navicons" id="navbarSupportedContent">
                        <div className="searchIcon">
                            <CiSearch />
                        </div>
                        <div className="loginIcon">
                            <FiLogIn />
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header;