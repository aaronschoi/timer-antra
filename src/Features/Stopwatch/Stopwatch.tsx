import { useAppSelector } from "../../app/hooks";
import { useInterval } from "../customHooks/useInterval";
import ButtonBox from "./Components/ButtonBox";

export default function Stopwatch() {
  const time = useAppSelector((store) => store.timer.milliseconds);

  useInterval();

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-timer">{`${Math.floor(time / 1000 / 60)}:${Math.floor(time / 1000)}:${
        time % 1000
      }`}</div>
      <ButtonBox />
    </div>
  );
}
