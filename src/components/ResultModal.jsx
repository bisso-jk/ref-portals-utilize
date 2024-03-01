

const ResultModal = ({ result, targetTime }) => {
    
    return (
        <dialog className={"result-modal"} open>
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
};

export default ResultModal;