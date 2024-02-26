import React from "react";
import Card from "../Card";
import data from "../Card/data.json";

const SectionFive = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
};

export default SectionFive;
