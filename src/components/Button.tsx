import React from 'react';

type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled: boolean
}

export function Button(props: ButtonPropsType) {

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
}
