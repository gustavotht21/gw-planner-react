import React from 'react'

import "./style.css"
import ImageSection from "../ImageSection";

export default function Modal(props) {
    return (
        <>
            <div className="section">
                <div>

                </div>

                <ImageSection DivImageText={props.DivImageText} />
            </div>
        </>
    )
}