import React from "react";


export const ColorCard = ({tarjeta}) => {
    const {likes, fecha, colores} = tarjeta
    return (
        <div className="color-card">
            <div className="colors">
                    <ColorItemList colors = {colores}/>
            </div>
            <div className="color-card-controls">
                <button className="btn-like"><i className="bi bi-heart"></i> <span>{likes}</span></button>
                <span className="time">{fecha}</span>
            </div>
        </div>
    )
}

const ColorItemList = ({colors}) => {
    return (
        <>
            {colors.map(color => <ColorItem color = {color} />)}
        </>
    )   
}


const ColorItem = ({color}) => {
    return (
        <div className="color" style={{backgroundColor : color }}></div>
    )
}





export const ColorCardList = ({colors_info}) =>{
    return(
        <>
            {
                colors_info.map((color_info) => <ColorCard tarjeta={color_info}/>)
            }
        </>
    )
}