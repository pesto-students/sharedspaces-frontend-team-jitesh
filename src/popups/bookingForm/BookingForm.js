import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from "react-modal";
import { Link } from 'react-router-dom'
import Button from "../../components/button/Button";
import { addBooking } from '../../store/actions/siteAction';
import DatePopover from '../../components/datePopover/DatePopover';
import moment from "moment";

import { toast } from 'react-toastify';

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: "2"
    },
    content: {
        width: "500px",
        top: "40%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    }
};

export default function BookingForm({ modalIsOpen, onClose, space }) {
    const dispatch = useDispatch()
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);
    const [bookingCompleted, setBookingCompleted] = useState(false);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [isDatesSelected, setIsDatesSelected] = useState(false)

    const [dates, setDates] = useState({
        startDate: new Date(new Date().getFullYear(), 0, 1),
        endDate: new Date(new Date().getFullYear(), 11, 31)
    });


    const userDetail = useSelector(state => state.site.userDetail)


    const onSubmit = (e) => {
        e.preventDefault()
        if (isDatesSelected === false) {
            toast.error("Please select dates!");
            return false
        }


        const data = {
            ...dates,
            userId: userDetail._id,
            propertyId: space.propertyId._id,
            spaceId: space._id,
        }

        dispatch(
            addBooking(
                data,
                (value) => setLoading(value),
                (value) => setBookingCompleted(value)
            )
        )
    }

    function closeModal() {
        setValues({});
        onClose();
    }

    const onSelectDate = dates => {
        const startDate = new Date(dates.startDate);
        const endDate = new Date(dates.endDate);
        const date = {
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString()
        };
        setDates(date);
        setIsDatesSelected(true)
    };


    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {bookingCompleted ?
                    <div className="flex items-center justify-center flex-col">
                        <img className="w-48" src="/assets/icons/bookingCompleted.gif" alt="" />
                        <h5 class="text-2xl mb-2 font-bold tracking-tight text-gray-900 py-5">
                            Booking Confirmed
                        </h5>
                        <Link to="/profile/my-bookings">
                            <Button buttonType={"dark-outline"} >Go to My Bookings</Button>
                        </Link>
                    </div>
                    :
                    <div>
                        <div className="flex justify-between mb-5">
                            <h5 class="text-2xl mb-2 font-bold tracking-tight text-gray-900">
                                Complete Your Booking
                            </h5>
                            <button className="text-black-100 text-2xl" onClick={closeModal}>
                                <i class="fas fa-times"></i>
                            </button>
                        </div>

                        <form onSubmit={onSubmit}>
                            <div>
                                <div className="flex flex-col">
                                    <div className="div">

                                        <div className="mt-2 flex justify-between">
                                            <h5 class="text-lg font-bold tracking-tight text-red-500">
                                                Booking Date
                                            </h5>
                                            <DatePopover
                                                space={space}
                                                dates={dates}
                                                onSelectDate={onSelectDate}
                                                isPopoverOpen={isPopoverOpen}
                                                setIsPopoverOpen={(value, dates) =>
                                                    setIsPopoverOpen(value, dates)
                                                }
                                            />
                                        </div>
                                        {isDatesSelected
                                            ? <p class="text-lg font-bold tracking-tight text-gray-900 cursor-pointer">
                                                From: {moment(dates.startDate).format("DD MMM YYYY")} <br />
                                                To: {moment(dates.endDate).format("DD MMM YYYY")}
                                            </p>
                                            : <p class="text-lg font-bold tracking-tight text-gray-900 cursor-pointer">Please Select Dates</p>
                                        }
                                    </div>

                                    <div className="my-4">
                                        <h5 class="text-lg font-bold tracking-tight text-red-500">
                                            Property
                                        </h5>
                                        <p class="text-lg font-bold">{space.propertyId.propertyTitle}</p>
                                    </div>
                                    <div className="mb-4">
                                        <h5 class="text-lg font-bold tracking-tight text-red-500">
                                            Space
                                        </h5>
                                        <p class="text-lg font-bold">{space.spaceTitle}</p>
                                    </div>
                                </div>

                                <div className="flex mt-5">
                                    <Button
                                        type='submit'
                                        buttonType={"dark"}
                                        onSubmit={onSubmit}
                                        className="w-full"
                                        loading={loading}
                                    >
                                        Book
                                    </Button>
                                    <Button
                                        buttonType={"dark-outline"}
                                        className="w-full ml-3"
                                        onClick={() => onClose()}
                                    >
                                        Cancel
                                    </Button>
                                </div>

                            </div>
                        </form>
                    </div>
                }

            </Modal>
        </div>
    );
}
