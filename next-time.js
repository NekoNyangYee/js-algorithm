function nextTime(currentTime, addTime) {
    let [hours, minutes] = currentTime.split(":").map(Number);

    let totalMinutes = hours * 60 + minutes;

    totalMinutes += addTime;

    let newHours = Math.floor(totalMinutes / 60) % 24;
    let newMin = totalMinutes % 60;

    return `${String(newHours).padStart(2, '0')}:${String(newMin).padStart(2, '0')}`;
}

console.log(nextTime("12:00", 1440))