import React from "react";

const Problem = () => {
  return (
    <div className="font-sans mx-2 bg-gradient-to-b from-slate-50 to-slate-500" id="problem">
      <h2 className="pt-4 font-serif text-2xl font-bold">The Problem</h2>
      <p className="py-4 px-2 leading-relaxed text-justify">
        A growing problem today facing the shipbuilding industry in the US is the lack of competent 3D/2D designers. Even when shipyards hire design farms to do the 3D modeling and produce various
        outputs (Assembly drawings, profile plots, pipe spools and iso, cable routing etc..), there is no oversight to the designers completing the work. The drawings are essentially going from the
        designers computer to the production personnel without any review process in place. In turn, the yard is spending thousnads of hours, if not 10s of thousands, correcting the mistakes inherent
        in the drawing in the field.
      </p>
    </div>
  );
};

export default Problem;
