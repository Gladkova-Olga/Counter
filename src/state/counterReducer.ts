
export type InitialStateType = typeof initialState;

let initialState = {
    maxValue: 5,
    startValue: 0,
    count: 0
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-COUNT": {
            return {
                ...state, count: state.count < state.maxValue ? state.count + 1 : state.count
            }
        }
        case "RESET-COUNT": {
            return {
                ...state, count: state.startValue
            }
        }
        case "SET-MAX-VALUE": {
            return {
                ...state, maxValue: action.currentMaxValue
            }
        }
        case "SET-START-VALUE": {
            return {
                ...state, startValue: action.currentStartValue
            }
        }
        case "SET-COUNT": {
            return {
                ...state, count: action.currentStartValue
            }
        }

        default:
            return state
    }

}

export const addCountAC = () => ({type: "ADD-COUNT"} as const);
export const resetCountAC = () => ({type: "RESET-COUNT"} as const);
export const setMaxValueAC = (currentMaxValue: number) => ({type: "SET-MAX-VALUE", currentMaxValue} as const);
export const setStartValueAC = (currentStartValue: number) => ({type: "SET-START-VALUE", currentStartValue} as const);
export const setCountAC = (currentStartValue: number) => ({type: "SET-COUNT", currentStartValue} as const);





type AddCountActionType = ReturnType<typeof addCountAC>;
type ResetCountActionType = ReturnType<typeof resetCountAC>;
type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>;
type SetStartValueActionType = ReturnType<typeof setStartValueAC>;
type SetCountActionType = ReturnType<typeof setCountAC>;

export type ActionType = AddCountActionType | ResetCountActionType | SetMaxValueActionType |
    SetStartValueActionType | SetCountActionType