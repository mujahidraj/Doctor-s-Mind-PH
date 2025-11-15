import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const getAppointment =()=>{
  const storedAppointmentSTR = localStorage.getItem("appointment");
  
  if(storedAppointmentSTR) {
    const storedAppointmentData = JSON.parse(storedAppointmentSTR);
    return storedAppointmentData;
  }
  else{
    return []
  }
}

const removeFromLocalStorage = (id) => {
  const storedAppointmentData = getAppointment();
  const remainingAppointments = storedAppointmentData.filter(appointmentId => appointmentId !== id);
  const data = JSON.stringify(remainingAppointments);
  localStorage.setItem("appointment", data);
}

const addToLocalStorage = (id) => {
  const storeAppointmentData = getAppointment();
  

  if(storeAppointmentData.includes(id)){
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "You have already booked an appointment with this doctor!",
  
});
  }
  else{
    storeAppointmentData.push(id)
    const data = JSON.stringify(storeAppointmentData);
    localStorage.setItem("appointment", data)

    // sweetAlert
    Swal.fire({
          title: "Good job!",
          text: "Your appointment is booked successfully!",
          icon: "success"
        });
  }
}

export {addToLocalStorage ,getAppointment, removeFromLocalStorage};