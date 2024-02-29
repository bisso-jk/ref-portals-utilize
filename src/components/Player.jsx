import { useRef, useState } from "react";

export default function Player() {
  const inputPlayerName = useRef();

  const [playerName, setPlayerName] = useState(null);

  // const [submitted, setSubmitted] = useState(false);
  // const onChangePlayerName = (e) => {
  //     setSubmitted(false);
  //     setPlayerName(e.target.value);
  // };

  // const onSettingPlayerName = () => {
  //     setSubmitted(true);
  // };

  const handleClick = () => {
      setPlayerName(inputPlayerName.current.value);
  }

  return (
    <section id="player">
      {/* <h2>Welcome {submitted ? playerName: 'unknown entity'}</h2> */}
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={inputPlayerName} type="text" />
        {/* <button onClick={onSettingPlayerName}>Set Name</button> */}
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
