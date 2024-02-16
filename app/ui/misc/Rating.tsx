import classNames from "classnames";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

interface RatingProps {
  value: number;
  customClasses?: string;
}

export default function Rating({ value, customClasses }: RatingProps) {

  const iconOne =
    value >= 1 ? <BsStarFill /> : value >= 0.5 ? <BsStarHalf /> : <BsStar />;
  const iconTwo =
    value >= 2 ? <BsStarFill /> : value >= 1.5 ? <BsStarHalf /> : <BsStar />;
  const iconThree =
    value >= 3 ? <BsStarFill /> : value >= 2.5 ? <BsStarHalf /> : <BsStar />;
  const iconFour =
    value >= 4 ? <BsStarFill /> : value >= 3.5 ? <BsStarHalf /> : <BsStar />;
  const iconFive =
    value >= 5 ? <BsStarFill /> : value >= 4.5 ? <BsStarHalf /> : <BsStar />;

  return (
    <div className="flex items-center gap-1">
      <span className="text-amber-500">{iconOne}</span>
      <span className="text-amber-500">{iconTwo}</span>
      <span className="text-amber-500">{iconThree}</span>
      <span className="text-amber-500">{iconFour}</span>
      <span className="text-amber-500">{iconFive}</span>
    </div>
  );
}
