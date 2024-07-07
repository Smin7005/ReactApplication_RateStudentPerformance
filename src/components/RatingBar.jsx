//RatingBar.jsx
import { useState } from "react";
import { SiFranprix } from "react-icons/si";

export default function RatingBar({ label, description, rating, setRating }) {
  const [hover, setHover] = useState(null);

  return (
    <div>
      <h3>{label}</h3>
      <i>{description}</i>
      <br />
      {[...Array(5)].map((icon, mark) => {
        const currentMark = mark + 1;
        return (
          <label key={mark}>
            <input
              id="rating"
              name="rating"
              type="radio"
              value={currentMark}
              onClick={() => setRating(currentMark)}
            />
            <SiFranprix
              className="rating"
              size={60}
              color={currentMark <= (hover || rating) ? "#ffc108" : "#034efc"}
              onMouseEnter={() => setHover(currentMark)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>Score of this part is {rating}</p>
      <hr />
    </div>
  );
}
