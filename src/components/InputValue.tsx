import React, {ChangeEvent, useState} from 'react';

type InputValuePropsType = {
    currentValue: number
    sendCurrentValue: (newValue: number) => void
    error: boolean
    changeFocusInput: () => void
}

export function InputValue(props: InputValuePropsType) {
    const sendCurrentValue = (e: ChangeEvent<HTMLInputElement>) => props.sendCurrentValue(+e.currentTarget.value);
    const changeFocusInput = () => props.changeFocusInput();


    return (
        <div>
            <input
                className={props.error ? 'error' : ''}
                type='number'
                onChange={sendCurrentValue}
                value={props.currentValue}
                onFocus={changeFocusInput}
            />
        </div>
    )
}

