export default function Raffle ({rname, date_created}){
    let date = String(new Date(date_created)).slice(0,15)
    let time = new Date(date_created).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });

    return (
        <div>
            <h3>{rname}</h3>
            <div>
                <p>Created on: {`${date} at ${time}`}</p>
                <p>Winner ID: </p>
                <p>Raffled on: </p>
            </div>
        </div>
    )
};