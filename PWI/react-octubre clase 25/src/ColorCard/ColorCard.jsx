import React from "react";

export const ColorCard = ({tarjeta}) =>{
    const {likes, fecha, colores} = tarjeta
    return(
        <div>
            <div className="caja-completa">
                <div className="caja-colors-part">
                    <ColorItemList colors={colores}/>
                </div>
                <div className="caja-info-part">
                    <button className="btn-like"><i class="bi bi-heart">{likes}</i></button>
                    <span className="time">{fecha}</span>
                </div>
            </div>
        </div>
    )
}

const ColorItemList = ({colors}) => {
    return(
        <>
            {colors.map((color, index) => <ColorItem color={color} key={color + index}/>)}
        </>
    )
}

const ColorItem = ({color}) => {
    return (
        <div className="color" style={{backgroundColor: color}}></div>
    )
}