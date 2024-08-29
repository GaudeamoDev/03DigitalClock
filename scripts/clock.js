function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Formato de 12 horas
    const amPm = hours >= 12 ? 'PM' : 'AM'; 
    hours = hours % 12 || 12; // Convierte 0 a 12
  
    const formattedTime = `${hours}:${padZero(minutes)}:${padZero(seconds)} ${amPm}`;
    document.getElementById('time').textContent = formattedTime;
  }
  
  function padZero(number) {
    return (number < 10 ? '0' : '') + number;
  }
  
  updateClock(); // Llama la función una vez al inicio
  setInterval(updateClock, 1000); // Actualiza cada segundo