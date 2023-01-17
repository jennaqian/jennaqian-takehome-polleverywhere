
export default function Participant ({lname,fname, email, pId}){

    return(
        <li>
            <p>Name: {fname} {lname}</p>
            <p>ID: #{pId}</p>
            <p>Email: {email}</p>
        </li>
    )
}