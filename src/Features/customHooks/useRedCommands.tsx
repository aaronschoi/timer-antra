import { useAppDispatch } from "../../app/hooks"
import { TimerActionTypes } from "../reducer";

export const useRedCommands = () => {
    const dispatch = useAppDispatch();

    const increment = () => {dispatch({type: TimerActionTypes.INC})}
    const decrement = () => {dispatch({type: TimerActionTypes.DEC})}
    const reset = () => {dispatch({type: TimerActionTypes.RESET})}
    const start = () => {dispatch({type: TimerActionTypes.START})}
    const pause = () => {dispatch({type: TimerActionTypes.PAUSE})}

    return {
        increment,
        decrement,
        reset,
        start,
        pause
    }
}