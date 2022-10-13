import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from "react-modal";
import { Link } from 'react-router-dom'
import Input from '../../components/input/Input'
import Button from "../../components/button/Button";
import { addBooking } from '../../store/actions/siteAction';

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: "2"
    },
    content: {
        width: "500px",
        top: "50%",
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

    const userDetail = useSelector(state => state.site.userDetail)

    const onInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });

    };
    const onSubmit = (e) => {
        e.preventDefault()

        const data = {
            ...values,
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

                        <div className="mb-5">
                            <h5 class="text-lg font-bold tracking-tight text-gray-900">
                                Property
                            </h5>
                            <p>{space.propertyId.propertyTitle}</p>
                        </div>
                        <div className="mb-5">
                            <h5 class="text-lg font-bold tracking-tight text-gray-900">
                                Space
                            </h5>
                            <p>{space.spaceTitle}</p>
                        </div>

                        <form onSubmit={onSubmit}>
                            <div>
                                <div className="flex">
                                    <Input
                                        label={"Start Date"}
                                        name={"startDate"}
                                        type="date"
                                        value={values.startDate}
                                        placeholder='Enter Password'
                                        onChange={onInputChange}
                                        className="mr-2"
                                        required
                                    />
                                    <Input
                                        label={"End Date"}
                                        name={"endDate"}
                                        type="date"
                                        value={values.endDate}
                                        placeholder='Enter Password'
                                        onChange={onInputChange}
                                        className="ml-2"
                                        required
                                    />
                                </div>

                                <div className="mt-5">
                                    <Button
                                        type='submit'
                                        buttonType={"dark"}
                                        onSubmit={onSubmit}
                                        className="min-w-30"
                                        loading={loading}
                                    >
                                        Book
                                    </Button>
                                    <Button
                                        buttonType={"dark"}
                                        className="ml-3"
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
