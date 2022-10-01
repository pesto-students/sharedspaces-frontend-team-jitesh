import React from 'react';

const BookingsDetails =()=>{
    return(
        <div>
            <div className="admin-header mt-10">
                <h1 className="heading text-lg font-bold mb-3">Booking Details</h1>
            </div>
            <div className="container " >
                <div className="container bg-gray-100 py-3 flex flex-row justify-between mb-2">
                    <div className='flex self-center'>
                        <div >
                            <img className='w-40 mx-10 rounded' src="/assets/images/property-one.png" />
                        </div>
                        <div className='self-center'>
                            <h6 className='font-bold text-base'>Seeshore </h6>
                            <h6 className='text-sm  text-slate-400'>CBD Belapur, Mumbai</h6>
                        </div>
                    </div>
                </div>

                <div className="admin-header mt-5">
                <h1 className="heading text-mg font-bold mb-3">Space Details</h1>
                </div>

                <div className="container bg-gray-100 py-3 flex flex-row justify-between mb-2">
                    <div className='flex self-center'>
                        <div >
                            <img className='w-40 mx-10 rounded' src="/assets/images/property-one.png" />
                        </div>
                        <div className='self-center'>
                            <h6 className='font-bold text-base'>Third Floor</h6>
                            <h6 className='text-sm  text-slate-400'>10 desk are available</h6>
                        </div>
                    </div>
                </div>
                
                <div className="admin-header mt-5">
                <h1 className="heading text-mg font-bold mb-3">Dates</h1>
                </div>

                <table className="border border-slate-300 w-full bg-gray-100 mb-2">
                    <thead>
                        <tr>
                            <th>Booking Date</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className='text-center'>
                            <td>22-08-2022</td>
                            <td>22-08-2022</td>
                            <td>22-08-2022</td>
                        </tr>
                       
                    </tbody>
                </table>

                <div className="admin-header mt-5">
                <h1 className="heading text-mg font-bold mb-3">Owner Details</h1>
                </div>

                <table className="border border-slate-300 w-full bg-gray-100">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className='text-center'>
                            <td>Shubham</td>
                            <td>shubham@gmail.com</td>
                            <td>7456886100</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BookingsDetails;