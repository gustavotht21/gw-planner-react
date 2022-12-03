import React from 'react'

import "./DivImage.css"
import "../../assets/css/globalStyles.css"

export default function DivImage(props) {
    return (
        <>
            <div className="container-image">
                <img className={"logo"} src="src/assets/imgs/logo.svg" alt="Logo"/>
                <p>{props.DivImageText}</p>
                <img className={"image"} src="src/assets/imgs/image.svg" alt="Image"/>
            </div>
        </>
    )
}