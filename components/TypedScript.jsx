import React from "react";
import Typed from "typed.js";

export function TypedScript() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "'Welcome to Quiz Wiz Challenge! Dominate exams in math, English, social studies, and science. Conquer your educational journey through knowledge. Are you up for the challenge?'",
      ],
      typeSpeed: 60,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span
        className="lg:text-[19px] font-[500] text-gray-400 leading-[1rem] lg:leading-[2rem] text-[15px]"
        ref={el}
      />
    </div>
  );
}
