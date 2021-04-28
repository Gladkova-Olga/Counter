import React from 'react';

type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled: boolean
}

export const Button = React.memo((props: ButtonPropsType) => {
console.log(`Button ${props.title}`)
    const onClick = () => {
        props.onClick();
    }

    return <>
        <button
            className={'buttonStyle'}
            onClick={onClick}
            disabled={props.disabled}>
            {props.title}</button>


    </>
})
