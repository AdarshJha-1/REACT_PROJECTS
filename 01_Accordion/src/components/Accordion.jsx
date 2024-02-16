import { useContext, useState } from "react";
function Accordion({ question, answer, explanation, isAll }) {
  const [selected, setSelected] = useState(false);
  let enableMultiSelection = isAll;
  console.log(enableMultiSelection);
  return (
    <div className="flex flex-col">
      <div
        className="min-w-min bg-slate-800 my-2 max-h-min px-5 py-5 overflow-hidden"
        onClick={() => setSelected(!selected)}
      >
        <div className="text-2xl">
          <div className="flex items-center justify-between gap-5">
            {question}
            {selected ? (
              <span>
                <i class="ri-subtract-line"></i>
              </span>
            ) : (
              <span>
                <i class="ri-add-line"></i>
              </span>
            )}
          </div>
          <div className="w-[700px] m-auto">
            {selected || enableMultiSelection ? (
              <div className=" flex flex-col gap-2 items-center justify-center mt-2 p-5">
                <div className="bg-slate-700">{answer}</div>
                <div className="bg-slate-700">{explanation}</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
