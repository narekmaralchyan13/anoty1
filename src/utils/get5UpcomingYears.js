import moment from "moment";

export function get5UpcomingYears (){
    const upcomingYears = [];
    for (let i = 0; i < 5; i++) {
        const year = moment().add(i, 'year').year();
        upcomingYears.push({
            label:year,
            value:year
        });
    }
    return upcomingYears;
}