
export default function Participant ({lname,fname, email, pId, phone}){

    return(
        <li>
            <p>Name: {fname} {lname}</p>
            <p>ID: #{pId}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </li>
    )
}