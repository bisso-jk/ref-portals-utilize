import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

// let timer;

const TimerChallenge = ({ title, targetTime }) => {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const [modalFlag, setModalFlag] = useState(false);

    const timer = useRef();

    const handleStart = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    };

    const handleStop = () => {
        clearTimeout(timer.current);
    }

    return (
        <>
            {timerExpired && <ResultModal result={'lost'} targetTime={targetTime} />}
            <section className={"challenge"}>
                <h2>{title}</h2>
                <p className={"challenge-time"}>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
};

export default TimerChallenge;