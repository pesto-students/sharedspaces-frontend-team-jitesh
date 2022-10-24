import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { addDays, subDays } from 'date-fns';
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function DateRangePicker({ space, state, onChangeDate }) {

    const [disableDates, setDisableDates] = useState([])
    useEffect(() => {
        if (space?.bookedDates?.length > 0) {
            const bookedDates = space.bookedDates
            let dateToBeDisable = []
            for (let i = 0; i < bookedDates.length; i++) {
                let dateArr = getDaysArray(new Date(bookedDates[i].startDate), new Date(bookedDates[i].endDate))
                dateToBeDisable = [...dateToBeDisable, ...dateArr]

            }
            setDisableDates(dateToBeDisable)
        }
    }, [])


    window.Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }
    const getDaysArray = function (s, e) { for (var a = [], d = new Date(s); d <= new Date(e); d.setDate(d.getDate() + 1)) { a.push(new Date(d)); } return a; };

    return (
        <DateRange
            editableDateInputs={false}
            minDate={new Date()}
            maxDate={addDays(new Date(), 60)}
            onChange={item => {
                onChangeDate([item.selection]);
            }}
            disabledDates={disableDates}
            moveRangeOnFirstSelection={false}
            ranges={state}
        />
    );
}
