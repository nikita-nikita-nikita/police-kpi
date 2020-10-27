import React, {useRef} from 'react';
import "./stylesMainPage.scss";
import {useHistory} from "react-router-dom";
import image from '../../images/лого БД 2.0.png'

const MainPage = ({setLogin}) => {
    const inputEl = useRef();
    const history = useHistory();
    const tryLogin = (e) => {
        e.preventDefault();
        if (inputEl.current.value == '666777') {
            setLogin(true);
            history.push("/secret")
        }//todo login
        else console.log("bag", inputEl.current.value);
    }
    return (
        <main className="mainPage">
            <div className="logo">
                <img src={image} alt="logo"/>
            </div>
            <form className="controls" onSubmit={tryLogin}>
                <input ref={inputEl} placeholder="пароль" type="password"/>
                <button type="submit">увійти</button>
            </form>
        </main>
    )
}

export default MainPage
