import { useState } from "react";
import Accordion from "./components/Accordion";
import data from "./components/data";
function App() {
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  return (
    <div className="min-w-max bg-gray-900 text-white flex flex-col gap-5 justify-start items-center pt-10">
      <h1 className="text-4xl text-white font-bold">Accordion</h1>
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="bg-gray-950 px-5 py-3 text-[19px] rounded-lg"
      >
        See all at once
      </button>
      <div className="text-center">
        {data.map((quiz) => (
          <Accordion
            key={quiz.id}
            isAll={enableMultiSelection}
            question={quiz.question}
            answer={quiz.answer}
            explanation={quiz.explanation}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
