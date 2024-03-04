import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

// let timer;

const TimerChallenge = ({ title, targetTime }) => {
    // const [timerStarted, setTimerStarted] = useState(false);
    // const [timerExpired, setTimerExpired] = useState(false);
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        setTimeRemaining(targetTime * 1000);
        clearInterval(timer.current);
        dialog.current.open();
    }

    const handleStart = () => {
        // timer.current = setTimeout(() => {
        //     setTimerExpired(true);
        //     // dialog.current.showModal();
        //     dialog.current.open();
        // }, targetTime * 1000);

        timer.current = setInterval(() => {
            // if (!timerIsActive) {
                // setTimerExpired(true);
                // dialog.current.open();
            // } else {
                setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
            // }
        }, 10);

        setTimerStarted(true);
    };

    const handleStop = () => {
        // clearTimeout(timer.current);
        clearInterval(timer.current);
        dialog.current.open();
    };

    return (
        <>
            <ResultModal ref={dialog} result={'lost'} targetTime={targetTime} />
            <section className={"challenge"}>
                <h2>{title}</h2>
                <p className={"challenge-time"}>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
};

export default TimerChallenge;