import React from 'react'
import a from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}
export const Message = (props: MessagePropsType) => {
    return (
        <div className={a.wrapper}>
            <img src={props.avatar} className={a.avatar}/>
            <div className={a.name}>{props.name}</div>
            <div className={a.message}>{props.message}</div>
            <div className={a.time}>{props.time}</div>
        </div>
    )
}

