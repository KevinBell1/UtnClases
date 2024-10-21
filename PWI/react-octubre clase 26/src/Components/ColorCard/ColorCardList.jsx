import React from "react"
import { ColorCard } from "./ColorCard"


export const ColorCardList = ({ colorsInfo, limit}) => {
    return (
        <>
            {
                colorsInfo.slice(0, limit).map((colorInfo) => <ColorCard tarjeta={colorInfo} key={colorInfo.id}/>)
            }
        </>
    )
}
