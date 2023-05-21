import React from "react";

const Services = () => {
  return (
    <div className="font-sans mx-2 bg-gradient-to-b from-slate-100 to-slate-500" id="services">
      <h2 className="pt-4 font-serif text-2xl font-bold">Services</h2>
      <ul className="list-disc list-inside py-4 px-2">
        <li>Ship structure 3D modeling in FORAN and ShipConstructor</li>
        <li>Pipe routing 3D modeling in FORAN ShipConstructor</li>
        <li>Structoral production outputs (Assembly drawings, profile plots and nests)</li>
        <li>Pipe Iso and spools</li>
        <li>Finite Element Analysis with Femap + nxNastran</li>
        <li>Intact and Damage stability calculations</li>
        <li>Lift and turn calculations for individual modules/units</li>
        <li>Launch calculations</li>
        <li>Drawing review</li>
        <li>Owner's Representative</li>
        <li>Regulatory approval assistance</li>
      </ul>
    </div>
  );
};

export default Services;
