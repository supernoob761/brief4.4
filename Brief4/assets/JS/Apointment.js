const form = document.getElementById('appointmentForm');
const appointmentsUl = document.getElementById('appointments');

let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

renderAppointments();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const appointment = {
    id: Date.now(), 
    name: formData.get('name'),
    email: formData.get('email'),
    date: formData.get('date'),
    doctor: formData.get('doctor')
  };

  if (!appointment.name || !appointment.email || !appointment.date || !appointment.doctor) {
    alert('Please fill in all fields.');
    return;
  }

  appointments.push(appointment);
  localStorage.setItem('appointments', JSON.stringify(appointments));

  renderAppointments();

  form.reset();
});

function renderAppointments() {
  appointmentsUl.innerHTML = ''; 

  appointments.forEach((appt) => {
    const li = document.createElement('li');


    const nameEl = document.createElement('h3');
    nameEl.textContent = appt.name;
    li.appendChild(nameEl);
    li.appendChild(document.createElement('br'));

    const emailEl = document.createElement('span');
    emailEl.textContent = appt.email;
    li.appendChild(emailEl);
    li.appendChild(document.createElement('br'));

    const dateEl = document.createElement('span');
    dateEl.textContent = `${appt.date} `;
    li.appendChild(dateEl);

    const doctorEl = document.createElement('em');
    doctorEl.textContent = appt.doctor;
    li.appendChild(doctorEl);

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.classList.add('delete-btn');
    delBtn.addEventListener('click', () => {
      if (confirm('Delete this appointment?')) {
        deleteAppointment(appt.id);
      }
    });

    li.appendChild(document.createElement('br'));
    li.appendChild(delBtn);
    appointmentsUl.appendChild(li);
  });
}

function deleteAppointment(id) {
  appointments = appointments.filter((appt) => appt.id !== id);
  localStorage.setItem('appointments', JSON.stringify(appointments));
  renderAppointments();
}
