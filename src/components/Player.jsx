import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onChangePlayerName = (e) => {
      setSubmitted(false);
      setPlayerName(e.target.value);
  };

  const onSettingPlayerName = () => {
      setSubmitted(true);
  };

  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName: 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={onChangePlayerName}/>
        <button onClick={onSettingPlayerName}>Set Name</button>
      </p>
    </section>
  );
}
