import React from "react";

const Chelick = ({img, text, data:{phone, name}}) => {
    return (
        <div className="chelick">
            <h2>Протокол допиту підозрюванного</h2>
            <div className="top-content">
                <div className="face">
                    <img src={img} alt="chelick" width="200px"/>
                </div>
                <div className="info">
                    <div className="left-side">
                    {/*    left side data*/}
                        <p>Ім'я:</p>
                        <p>Прізвище:</p>
                        <p>Рід зайнять:</p>
                        <p>Контактні данні:</p>
                    </div>
                    {/*    right side data*/}
                    <div className="right-side">
                        <p>Денис</p>
                        <p><span className="bg-black">dummy</span></p>
                        <p>студент</p>
                        <p>+380554544515</p>
                    </div>
                </div>
            </div>
            <div className="bottom-content">
                {text}
            </div>
        </div>
    )
}

export default Chelick;
