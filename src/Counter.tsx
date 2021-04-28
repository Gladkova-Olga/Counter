import React, {useEffect, useState} from 'react';
import './Counter.css';
import {Button} from "./components/Button";
import {Board} from "./components/Board";
import {InputValue} from "./components/InputValue";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    addCountAC,
    InitialStateType,
    resetCountAC,
    setCountAC,
    setMaxValueAC,
    setStartValueAC
} from "./state/counterReducer";


export function Counter() {
    let values = useSelector<AppRootStateType, InitialStateType>(state => state.counter);
    let dispatch = useDispatch()
    const [currentMaxValue, setCurrentMaxValue] = useState<number>(values.maxValue);
    const [currentStartValue, setCurrentStartValue] = useState<number>(values.startValue);
    const [error, setError] = useState<string>('')
    const [inputActive, setInputActive] = useState(false);

    function addCount() {
        // let action = addCountAC();
        dispatch(addCountAC());
    }

    function resetCount() {
        dispatch(resetCountAC());
    }

    function changeCurrentMaxValue(newMaxValue: number) {
        if (newMaxValue > currentStartValue) {
            setCurrentMaxValue(newMaxValue);
            setError('')
        } else {
            setError('Incorrect value!');
            setCurrentMaxValue(newMaxValue);
        }
    }

    function changeCurrentStartValue(newStartValue: number) {
        if (newStartValue >= 0 && newStartValue < currentMaxValue) {
            setCurrentStartValue(newStartValue);
            setError('')
        } else {
            setError('Incorrect value!');
            setCurrentStartValue(newStartValue);
        }
    }

    function setMaxStartValues() {
        if (!error) {
            dispatch(setMaxValueAC(currentMaxValue));
            dispatch(setStartValueAC(currentStartValue));
            dispatch(setCountAC(currentStartValue));
        }
        setInputActive(false)
    }

    function changeFocusMaxInput() {
        setInputActive(true)
    }


    return (
        <div className={'CounterPage'}>
            <div className={'Counter'}>
                <div className={'Inputs'}>
                    <div className={'InputAndTitle'}>
                        <span className={'Title'}>Max value: </span>

                        <InputValue
                            currentValue={currentMaxValue}
                            sendCurrentValue={changeCurrentMaxValue}
                            error={!!error}  //{error ? true : false}
                            changeFocusInput={changeFocusMaxInput}
                        />
                    </div>

                    <div className={'InputAndTitle'}>
                        <span> Start value:   </span>
                        <InputValue
                            currentValue={currentStartValue}
                            sendCurrentValue={changeCurrentStartValue}
                            error={!!error} //{error ? true : false}
                            changeFocusInput={changeFocusMaxInput}
                        />
                    </div>
                </div>


                <Button title={'set'}
                        onClick={setMaxStartValues}
                        disabled={!!error} //error ? true : false
                />
            </div>

            <div className={'Counter'}>
                <Board
                    count={values.count}
                    maxValue={values.maxValue}
                    message={error ? error : 'Press set'}
                    active={inputActive}
                />

                <Button title={'inc'}
                        onClick={addCount}
                        disabled={values.count === values.maxValue || !!error}
                />
                <Button title={'reset'}
                        onClick={resetCount}
                        disabled={values.count === values.startValue}
                />
            </div>
        </div>
    )

}