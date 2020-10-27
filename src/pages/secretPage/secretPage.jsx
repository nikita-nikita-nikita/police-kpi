import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";


const SecretPage = ({isLogined}) => {
    const history = useHistory();
    useEffect(() => {
        // todo check
    }, [isLogined]);
    return (
        <main>
            SecretPage
        </main>
    )
}

export default SecretPage;
