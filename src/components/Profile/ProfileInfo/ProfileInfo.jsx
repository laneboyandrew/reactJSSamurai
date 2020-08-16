import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>

                <div>
                    <img src="https://im0-tub-ru.yandex.net/i?id=6f0a950924fce6eefb8eede836c41ab4-l&n=13"/>
                </div>
                <div className={classes.descriptionBlock}>
                    Ava Description
                </div>

            </div>
        </div>
    )
}
export default ProfileInfo;