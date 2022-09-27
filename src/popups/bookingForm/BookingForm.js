import React, { useState } from "react";
import Modal from "react-modal";
import Loader from "../../components/loader/Loader";
import Input from '../../components/input/Input'
import Button from "../../components/button/Button";

const customStyles = {
    content: {
        width: "500px",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
    }
};

export default function BookingForm({ modalIsOpen, onClose, space }) {
    const [values, setValues] = useState({});
    const [loading, setLoading] = useState(false);

    const onInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });

    };
    const onSubmit = e => {
        e.preventDefault();
        setLoading(true);


    };

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
                                    // onClick={() => setLoading(!loading)}
                                    loading={loading}
                                >
                                    Book
                                </Button>
                                <Button
                                    buttonType={"dark"}
                                    className="ml-3"
                                >
                                    Cancel
                                </Button>
                            </div>

                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}
