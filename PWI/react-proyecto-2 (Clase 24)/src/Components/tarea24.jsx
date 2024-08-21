import React from "react";


export const ColorCard = ({tarjeta}) => {
    const {likes, fecha, colores} = tarjeta
    return (
        <>
        <div className="color-card">
            <div className="colors">
                <div className="color" style = {{backgroundColor : colores[0]}}></div>
                <div className="color" style = {{backgroundColor : colores[1]}}></div>
                <div className="color" style = {{backgroundColor : colores[2]}}></div>
                <div className="color" style = {{backgroundColor : colores[3]}}></div>
            </div>
            <div className="color-card-controls">
                <button className="btn-like"><i className="bi bi-heart"></i> <span>{likes}</span></button>
                <span className="time">{fecha}</span>
            </div>
        </div>
        </>
    )
}
