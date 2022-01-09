function Vacation(input) {
  let pagesPerBook = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let daysPerBook = Number(input[2]);

  let hourPerDay = pagesPerBook / pagesPerHour / daysPerBook;

  console.log(hourPerDay);
}
