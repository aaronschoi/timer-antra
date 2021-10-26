import { useEffect } from "react"
import { useAppSelector } from "../../app/hooks";
import { useRedCommands } from "./useRedCommands"

export const useInterval = () => {

    const { increment } = useRedCommands();

    const { timerStatus } = useAppSelector(store => store.timer)

    useEffect(() => {
        const tick = () => {
            increment()
        }

        let id: any = null;
        if(timerStatus) {
            id = setInterval(tick, 1)
            return () => clearInterval(id)
        }
        else{
            clearInterval(id)
        }
    }, [increment, timerStatus])
}