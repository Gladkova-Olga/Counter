import React from 'react';

type BoardPropsType = {
    count: number
    maxValue: number
    message: string
    active: boolean
}

export function Board(props: BoardPropsType) {

    return (
        <div className={'board'}>
            <div
                className={props.count === props.maxValue || props.message === 'Incorrect value!' ? 'changeColorBoardValue' : ''}>

                {
                    props.message && props.active ? props.message : props.count
                }

            </div>

        </div>
    )
}

