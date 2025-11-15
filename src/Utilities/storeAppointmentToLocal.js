import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const getAppointment =()=>{
  const storedAppointmentSTR = localStorage.getItem("readlist");
  
  if(storedAppointmentSTR) {
    const storedAppointmentData = JSON.parse(storedAppointmentSTR);
    return storedAppointmentData;
  }
  else{
    return []
  }
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
    localStorage.setItem("readlist", data)

    // sweetAlert
    Swal.fire({
          title: "Good job!",
          text: "Your appointment is booked successfully!",
          icon: "success"
        });
  }
}

export {addToLocalStorage ,getAppointment};