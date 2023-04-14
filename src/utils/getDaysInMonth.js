export function getDaysInMonth(year, month) {
    let date = new Date(year, month-1, 1);
    let currentDay = new Date()

    let days = [];
    while (date.getMonth() === month-1) {
        let d = new Date(date)
        days.push(d);
        date.setDate(date.getDate() + 1);
    }
    return days;
}