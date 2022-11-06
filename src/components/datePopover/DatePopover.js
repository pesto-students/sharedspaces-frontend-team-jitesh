import React, { useState } from "react";
import { Popover } from "react-tiny-popover";
import DateRangePicker from "../dateRangePicker/DateRangePicker";
import './datePopover.scss'

export default function DatePopover({
    space,
    isPopoverOpen = true,
    onSelectDate,
    dates = {
        startDate: new Date(),
        endDate: null,
        key: "selection"
    },
    setIsPopoverOpen
}) {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);

    const onChangeDate = dates => {
        setState(dates);
    };

    const onSelect = () => {
        const dates = state[0];
        const startDate = new Date(dates.startDate);
        const endDate = new Date(dates.endDate);
        const date = {
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString()
        };
        onSelectDate(date);
    };

    return (
        <Popover
            isOpen={isPopoverOpen}
            containerStyle={{
                zIndex: "10"
            }}
            positions={["bottom"]} // preferred positions by priority
            content={
                <div class="date-picker block flex flex-col p-2 max-w-sm bg-white rounded border border-white-200 shadow-sm">
                    <DateRangePicker
                        space={space}
                        state={state}
                        onChangeDate={onChangeDate}
                    ></DateRangePicker>
                    <div className="flex">
                        <button
                            disabled={dates ? false : true}
                            type="submit"
                            class="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2 disabled:bg-gray-300"
                            onClick={() => {
                                setIsPopoverOpen(!isPopoverOpen);
                                onSelect();
                            }}
                        >
                            Select
                        </button>
                        <button
                            disabled={dates ? false : true}
                            type="submit"
                            class="w-full bg-white text-gray-800 border-gray-800 border-2 hover:bg-gray-800 hover:text-white hover:shadow-sm active:bg-dark-800 active:shadow-sm active:text-white rounded ml-2 text-sm px-5 py-2 disabled:bg-gray-300"
                            onClick={() => {
                                setIsPopoverOpen(!isPopoverOpen);
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            }
        >
            <a
                class=""
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            >
                <p class="bg-gray-800 px-3 rounded text-white border-2 border-gray-800 hover:bg-gray-800 hover:shadow-sm active:bg-gray-800 active:shadow-sm active:text-white cursor-pointer">Select Dates</p>
            </a>
        </Popover>
    );
}
