import { useAppSelector } from "../../../app/hooks"
import { useRedCommands } from "../../customHooks/useRedCommands"

export default function ButtonBox() {
    const { timerStatus } = useAppSelector(store=> store.timer)
    const { start, pause, reset } = useRedCommands()
    const startAndStop = () => {
        if(timerStatus) {
            pause()
        }
        else {
            start()
        }
    }

    const resetWatch = () => {
        reset();
    }

    return (
        <div className="btn-container" >
            <button className="btn" onClick={startAndStop} >{timerStatus ? "Stop" : "Start"}</button>
            <button className="btn" onClick={resetWatch} >Reset</button>
        </div>
    )
}