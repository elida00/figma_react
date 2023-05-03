import React from "react"
import css from "./HelpCard.module.css"

export const HelpCard = ({name,col}) =>{
    return(
        <div style= {{backgroundColor:col}} className={css.HelpCard}>
            <h3>{name}</h3>
        </div>
    )
}

    