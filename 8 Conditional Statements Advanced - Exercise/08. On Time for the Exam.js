function onTimeExam(input) {
  // Вход
  let hours = Number(input[0]);
  let minutes = Number(input[1]);
  let arivalHour = Number(input[2]);
  let arivalMinute = Number(input[3]);
  //
  if (arivalHour > 0) {
    arivalHour *= 60;
  }
  if (hours > 0) {
    hours *= 60;
  }
  let arivalTime = arivalHour + arivalMinute;
  let time = hours + minutes;
  let onTime = time - 30;
  //
  let timeLeft = arivalTime - time;
  //
  if (arivalTime > time) {
    // Изход
    console.log(`Late`);

    if (timeLeft >= 60) {
      let hoursLetf = (timeLeft / 60) >> 0;
      let minutesLetf = timeLeft % 60;
      if (minutesLetf > 0) {
        if (minutesLetf < 10) {
          console.log(`${hoursLetf}:0${minutesLetf} hours after the start`);
        } else {
          console.log(`${hoursLetf}:${minutesLetf} hours after the start`);
        }
      } else {
        console.log(`${hoursLetf} 00 hours after the start`);
      }
    } else {
      console.log(`${timeLeft} minutes after the start`);
    }
  } else if (arivalTime < time && arivalTime >= onTime) {
    // Изход
    console.log(`On time`);
    timeLeft *= -1;
    console.log(`${timeLeft} minutes before the start`);
  } else if (arivalTime == time) {
    // Изход
    console.log(`On time`);
  } else {
    // Изход
    console.log(`Early`);
    if (timeLeft <= -60) {
      let hoursLetf = ((timeLeft *= -1) / 60) >> 0;
      let minutesLetf = timeLeft % 60;
      if (minutesLetf > 0) {
        if (minutesLetf < 10) {
          console.log(`${hoursLetf}:0${minutesLetf} hours before the start`);
        } else {
          console.log(`${hoursLetf}:${minutesLetf} hours before the start`);
        }
      } else {
        console.log(`${hoursLetf} 00 hours before the start`);
      }
    } else {
      console.log(`${(timeLeft *= -1)} minutes before the start`);
    }
  }

  //
}
onTimeExam(["14", "00", "13", "55"]);
