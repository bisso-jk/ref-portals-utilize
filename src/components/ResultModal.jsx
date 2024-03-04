import { forwardRef, useImperativeHandle, useRef } from "react";


const ResultModal = forwardRef(({ result, targetTime }, ref) => {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return (
        <dialog ref={dialog} className={"result-modal"} >
        {/* <dialog ref={ref} className={"result-modal"} > */}
            <h2>You {result}</h2>
            <p>
                The target time was <strong>{targetTime}</strong> seconds.
            </p>
            <p>
                You stopped the time with <strong>X seconds left</strong>.
            </p>
            <form method="dialog">
                <button>닫기</button>
            </form>
        </dialog>
    )
});

export default ResultModal;