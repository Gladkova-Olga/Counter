import React, {useEffect, useState} from 'react';
import './Counter.css';
import {Button} from "./components/Button";
import {Board} from "./components/Board";
import {InputValue} from "./components/InputValue";
import {Inputs} from "./components/Inputs";
import {Container, Grid, Paper} from "@material-ui/core";


export function Counter() {
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [count, setCount] = useState<number>(startValue);
    const [currentMaxValue, setCurrentMaxValue] = useState<number>(maxValue);
    const [currentStartValue, setCurrentStartValue] = useState<number>(startValue);
    const [error, setError] = useState<string>('')
    const [inputActive, setInputActive] = useState(false);

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
            setCurrentMaxValue(newMaxValue)

        }
    }, []);

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setStartValue(newStartValue)
            setCurrentStartValue(newStartValue)
            setCount(newStartValue)

        }
    }, []);

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])


    function addCount() {
        if (count < maxValue) {
            setCount(count + 1);
        }
    }

    function resetCount() {
        setCount(startValue);
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
            setMaxValue(currentMaxValue);
            setStartValue(currentStartValue);
            setCount(currentStartValue);
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
                    count={count}
                    maxValue={maxValue}
                    message={error ? error : 'Press set'}
                    active={inputActive}
                />


                <Button title={'inc'}
                        onClick={addCount}
                        disabled={count === maxValue || !!error}
                />
                <Button title={'reset'}
                        onClick={resetCount}
                        disabled={count === startValue}
                />
            </div>


            {/*<table className={'Table'}>*/}
            {/*    <tbody>*/}
            {/*    <tr>*/}
            {/*        <td>*/}
            {/*            <tr>*/}
            {/*                <td>Max value:</td>*/}
            {/*                <td>*/}
            {/*                    <InputValue*/}
            {/*                        currentValue={currentMaxValue}*/}
            {/*                        sendCurrentValue={changeCurrentMaxValue}*/}
            {/*                        error={!!error}  //{error ? true : false}*/}
            {/*                        changeFocusInput={changeFocusMaxInput}*/}
            {/*                    />*/}
            {/*                </td>*/}
            {/*            </tr>*/}
            {/*            <tr>*/}
            {/*                <td>Start value:</td>*/}
            {/*                <td>*/}
            {/*                    <InputValue*/}
            {/*                        currentValue={currentStartValue}*/}
            {/*                        sendCurrentValue={changeCurrentStartValue}*/}
            {/*                        error={!!error} //{error ? true : false}*/}
            {/*                        changeFocusInput={changeFocusMaxInput}*/}
            {/*                    />*/}
            {/*                </td>*/}
            {/*            </tr>*/}
            {/*        </td>*/}
            {/*        <th>*/}
            {/*            <Board*/}
            {/*                count={count}*/}
            {/*                maxValue={maxValue}*/}
            {/*                message={error ? error : 'Set'}*/}
            {/*                active={inputActive}*/}
            {/*            />*/}
            {/*        </th>*/}
            {/*    </tr>*/}
            {/*    <tr>*/}
            {/*        <th><Button title={'set'}*/}
            {/*                    onClick={setMaxStartValues}*/}
            {/*                    disabled={!!error} //error ? true : false*/}
            {/*        />*/}
            {/*        </th>*/}
            {/*        <td>*/}

            {/*            <Button title={'inc'}*/}
            {/*                    onClick={addCount}*/}
            {/*                    disabled={count === maxValue || error ? true : false}*/}
            {/*            />*/}
            {/*            <Button title={'reset'}*/}
            {/*                    onClick={resetCount}*/}
            {/*                    disabled={count === startValue}*/}
            {/*            />*/}
            {/*        </td>*/}
            {/*    </tr>*/}
            {/*    </tbody>*/}
            {/*</table>*/}


        </div>
    )

}