import React, {ChangeEvent} from 'react';

type InputValuePropsType = {
    currentValue: number
    sendCurrentValue: (newValue: number) => void
    error: boolean
    changeFocusInput: () => void
}

export const InputValue = React.memo((props: InputValuePropsType) => {
    console.log('inputValue')
    const sendCurrentValue = (e: ChangeEvent<HTMLInputElement>) => props.sendCurrentValue(Math.floor(+e.currentTarget.value));
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
})

