import { ListGroup } from "react-bootstrap";

const  AppointmentInfo = ({appointments}) =>{
    return (
        <>
            <ListGroup.Item>
                <p><small>Date:{appointments.aptDate}</small></p>
                <p><strong>First Name:</strong>{appointments.firstName}</p>
                <p><strong>Last Name:</strong>{appointments.lastName}</p>
                <p><strong>Notes:</strong>{appointments.aptNotes}</p>
            </ListGroup.Item>     
        </>
    )
}

export default AppointmentInfo