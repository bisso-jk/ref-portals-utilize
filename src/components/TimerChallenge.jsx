import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

// let timer;

const TimerChallenge = ({ title, targetTime }) => {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const timer = useRef();
    const dialog = useRef();

    const handleStart = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.showModal();
        }, targetTime * 1000);

        setTimerStarted(true);
    };

    const handleStop = () => {
        clearTimeout(timer.current);
        
        // TODO: stop action
    };

    const handleModalClick = () => {
        setTimerExpired(false);
        setTimerStarted(false);
    };

    return (
        <>
            <ResultModal ref={dialog} result={'lost'} targetTime={targetTime} modalClose={handleModalClick} />
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