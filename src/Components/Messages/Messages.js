import React from 'react';
import './Messages.css';
import data from '../../Constants/data';

const Messages = () => {
    const messages = data.map(item => {
        return (
            <Message
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div className='messages--container'>
            {messages}
        </div>
    )
}

const Message = (props) => {
    return (
        <div key={props.id} className='message--container'>
            <img className='message--img' src={'/images/' +props.image} alt={props.title}></img>
        </div>
    )
}


export default Messages;