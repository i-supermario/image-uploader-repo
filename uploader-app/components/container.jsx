import styles from "../styles/Home.module.css"
import React from "react"

export default function Container(props){
        return (
            <>
                <div style={{display:props.display,width:props.width,height:props.height,padding:props.padding}} className='container shadow-md rounded-lg flex flex-col text-center gap-y-4'>
                    {props.content}
                </div>
            </>
        )

}

