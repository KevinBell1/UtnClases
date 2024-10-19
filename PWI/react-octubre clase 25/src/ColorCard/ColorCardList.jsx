import React from "react";
import { ColorCard } from "./ColorCard";

export const ColorCardList=({colorsInfo})=>{
    return (
        <>
            {
                colorsInfo.map((colorInfo) => <ColorCard tarjeta = {colorInfo}/>)
            }
        </>
    )
}