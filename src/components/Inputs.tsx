import React, {ChangeEvent, useState} from 'react';


type InputsPropsType = {
    maxValue: number
    startValue: number
    sendMax: (currentMax: number) => void
    sendStart: (currentStart: number) => void
    onError: (error: boolean) => void



}

export function Inputs(props: InputsPropsType) {
    const [currentMax, setCurrentMax] = useState(props.maxValue);
    const [currentStart, setCurrentStart] = useState(props.startValue);
    const [error, setError] = useState(false);

    const onChangeMax = (e:ChangeEvent<HTMLInputElement>) =>{
        const newMax = +e.currentTarget.value;
        if(newMax > currentStart){
            setCurrentMax(newMax);
           error && setError(false);
        } else {
            setCurrentMax(newMax);
            setError(true);
        }
        props.onError(error)

    }


    const onChangeStart = (e:ChangeEvent<HTMLInputElement>) => {
        debugger
        const newStart = +e.currentTarget.value;
        if (newStart >= 0 && newStart < currentMax) {
            setCurrentStart(newStart);
            error && setError(false);
        } else {
            setCurrentStart(newStart);
            setError(true);
        }
        // debugger
        props.onError(error)
        // debugger
    //
    };
    const sendMax = () => {
        props.sendMax(currentMax)
    };
    const sendStart = () =>{
        props.sendStart(currentStart);
    }




    return(
        <div>
            <div>
            <input
                className={error ? 'error' : ''}
                type='number'
                value={currentMax}
                onChange = {onChangeMax}
                onBlur={sendMax}
            />
            </div>

            <div>
            <input
                className={error ? 'error' : ''}
                type='number'
                value={currentStart}
                onChange = {onChangeStart}
                onBlur={sendStart}
            />
            </div>

        </div>
    )
}