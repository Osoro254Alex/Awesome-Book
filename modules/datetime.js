import { DateTime } from './luxon.js';
// Function to handle datetime
const getDate = () => {
  const time = document.querySelector('.time');
  const now = DateTime.now();
  time.innerHTML = now.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS);
};

export default getDate;