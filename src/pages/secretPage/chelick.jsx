import React from "react";

const Chelick = ({img}) => {
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus ducimus excepturi fuga illum nesciunt pariatur quaerat quidem. Aspernatur dolorem dolores, eveniet expedita inventore ipsa, iure, laudantium modi quae quos tenetur unde veniam voluptatibus. Commodi, dolor dolores inventore optio placeat porro quibusdam rem totam veniam! A adipisci alias aspernatur consectetur consequuntur cum dignissimos doloremque eaque, eius eum expedita explicabo fugit illum itaque iusto laborum magnam maiores modi molestiae natus neque optio, perferendis perspiciatis quas quisquam repudiandae saepe suscipit tenetur vel, voluptates. Aperiam est illo laborum mollitia possimus quo voluptatem? Accusantium assumenda atque blanditiis dolore doloribus dolorum ducimus est recusandae totam!
            </div>
        </div>
    )
}

export default Chelick;
