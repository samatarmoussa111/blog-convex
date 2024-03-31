"use client";

import ReactStars from "react-stars";

interface Props {
  value: number;
}

const Starts = ({ value }: Props) => {
  return (
    <ReactStars
      count={5}
      size={14}
      value={value}
      edit={false}
      color2={"#ffd700"}
    />
  );
};

export default Starts;
