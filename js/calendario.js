const monthYear = Porfolio.getElementById("monthYear");
const datesContainer = Porfolio.getElementById("dates");
const prevBtn = Porfolio.getElementById("prev");
const nextBtn = Porfolio.getElementById("next");

let currentDate = new Date();

function renderCalendar(date) {
  datesContainer.innerHTML = "";

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  monthYear.textContent = `${months[month]} ${year}`;

  // Espacios vacíos
  for (let i = 0; i < firstDay; i++) {
    datesContainer.innerHTML += `<div></div>`;
  }

  // Días del mes
  for (let i = 1; i <= lastDate; i++) {
    const day = Porfolio.createElement("div");
    day.textContent = i;

    const today = new Date();
    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      day.classList.add("today");
    }

    day.addEventListener("click", () => {
      alert(`Seleccionaste el ${i}/${month + 1}/${year}`);
    });

    datesContainer.appendChild(day);
  }
}

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);