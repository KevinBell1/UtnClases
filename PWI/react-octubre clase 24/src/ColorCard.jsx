import React from "react";
import './style.css'

export const ColorCard = ({colorsInfo}) =>{
    const {likes, fecha, colores} = colorsInfo
    return(
        <div>
            <div className="caja-completa">
                <div className="caja-colors-part">
                    <div className="color" style={{backgroundColor: colores[0]}}></div>
                    <div className="color" style={{backgroundColor: colores[1]}}></div>
                    <div className="color" style={{backgroundColor: colores[2]}}></div>
                    <div className="color" style={{backgroundColor: colores[3]}}></div>
                </div>
                <div className="caja-info-part">
                    <button className="btn-like"><i class="bi bi-heart">{likes}</i></button>
                    <span className="time">{fecha}</span>
                </div>
            </div>
        </div>
    )
}