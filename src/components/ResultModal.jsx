import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";


const ResultModal = forwardRef(({ result, remainingTime, targetTime, modalClose }, ref) => {

    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedTimeRemaining = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} className={"result-modal"} onClose={modalClose} >
        {/* <dialog ref={ref} className={"result-modal"} > */}
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your score : {score}</h2>}
            <p>
                The target time was <strong>{targetTime}</strong> seconds.
            </p>
            <p>
                You stopped the time with <strong>{formattedTimeRemaining} seconds left</strong>.
            </p>
            <form method="dialog">
                <button>닫기</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
});

export default ResultModal;