import { Button, ListGroup } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";


const  AppointmentInfo = ({appointments, onDeleteAppointments}) =>{
    return (
        <>
            <ListGroup.Item>
                <p><small>Date:{appointments.aptDate}</small></p>
                <p><strong>First Name:</strong>{appointments.firstName}</p>
                <p><strong>Last Name:</strong>{appointments.lastName}</p>
                <p><strong>Notes:</strong>{appointments.aptNotes}</p>

                <Button onClick={() => onDeleteAppointments(appointments.id)} size="sm" variant="danger"><RiDeleteBin6Line /> Delete</Button>
                
            </ListGroup.Item>     
        </>
    )
}

export default AppointmentInfo