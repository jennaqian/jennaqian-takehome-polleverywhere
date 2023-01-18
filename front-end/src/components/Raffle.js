import { Link } from "react-router-dom";

export default function Raffle({ id, rname, date_created }) {
  let date = String(new Date(date_created)).slice(0, 15);
  let time = new Date(date_created).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return (
    <div className="raffle">
      <Link to={`/raffles/${id}`}>
        <h3>{rname}</h3>
        <div>
          <p>Created on: {`${date} at ${time}`}</p>
          <p>Winner ID: </p>
          <p>Raffled on: </p>
        </div>
      </Link>
    </div>
  );
}
