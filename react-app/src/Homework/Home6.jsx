import React, { useState } from "react";

function Home6(props) {
  const [isShown, setIsShown] = useState(false);

  const toggleIsShown = () => {
    setIsShown(!isShown);
  };
  return (
    <div>
      <button onClick={toggleIsShown}>
        Нажмите, чтобы показать Имя
      </button>
      {isShown && <p>Name - Albert,{props.name} Age - 27{props.age}</p>}
    </div>
  );
}

export default Home6;
