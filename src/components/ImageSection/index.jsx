import React from 'react'
export default function ImageSection(props) {
    return (
        <>
            <div className="container-image">
                {/* Espaço reservado para a logo */}
                <div>
                    <p>{props.DivImageText}</p>
                </div>
                {/* Espaço reservado para a imagem*/}
            </div>
        </>
    )
}