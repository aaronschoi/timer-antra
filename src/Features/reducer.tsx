interface IAction {
    type: string
    payload?: any
}

type TState = {
    milliseconds: number
    timerStatus: boolean
}

const initialState : TState = {
    milliseconds: 0,
    timerStatus: true
}

interface ITimerActionTypes {
    INC: "INCREMENT"
    DEC: "DECREMENT"
    RESET: "RESET"
    START: "START"
    PAUSE: "PAUSE"
}

export const TimerActionTypes : ITimerActionTypes = {
    INC: "INCREMENT",
    DEC: "DECREMENT",
    RESET: "RESET",
    START: "START",
    PAUSE: "PAUSE" 
}

export const timer = (state = initialState , action : IAction) => {
    switch(action.type){
        case TimerActionTypes.INC:
            return {
                ...state,
                milliseconds: state.milliseconds + 1
            }
        case TimerActionTypes.DEC:
            return {
                ...state,
                milliseconds: state.milliseconds - 1
            }
        case TimerActionTypes.RESET:
            return {
                ...state,
                timerStatus: false,
                milliseconds: 0
            }
        case TimerActionTypes.START:
            return {
                ...state,
                timerStatus: true,
            }
        case TimerActionTypes.PAUSE:
            return {
                ...state,
                timerStatus: false,
            }
        default:
            return state;
    }
}