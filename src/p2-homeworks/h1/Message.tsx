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
        <div className={a.message}>
            <img src={props.avatar} alt='avatar' className={a.avatar}/>

            <div className={a.angel}/>

            <div className={a.content}>
                <div className={a.name}>{props.name}</div>
                <div className={a.text}>{props.message}</div>
                <div className={a.time}>{props.time}</div>
            </div>
        </div>

    )
}

