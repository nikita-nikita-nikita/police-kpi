import React, {useEffect} from "react";
import "./stylesSecretPage.scss";
import chelick1 from "../../images/челик 1.png";
import chelick2 from "../../images/челик 2.png";
import chelick3 from "../../images/челик 3.png";
import logo from "../../images/лобо БД 2.0 малое.png";
import {useHistory} from "react-router-dom";

import Chelick from "./chelick";

const SecretPage = ({isLogined}) => {
    const history = useHistory();
    useEffect(() => {
        if (!isLogined) {
            history.push("/#");
            alert("nonono");
        }
    }, [isLogined]);
    return (
        <div className="secret-page w-100">
            <header className="secret-page-header"><img src={logo} width="40px" alt="chelik"/><span className="min-width-520">внутрішній документ</span> <small>№0000032478123</small></header>
            <div className="hr-line"/>
            <main className="secret-page-content">
                <Chelick img={chelick1}/>
                <Chelick img={chelick2}/>
                <Chelick img={chelick3}/>
            </main>
        </div>
    )
}

export default SecretPage;
