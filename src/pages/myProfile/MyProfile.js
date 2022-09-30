import React from "react"
import Button from "../../components/button/Button";



const MyProfile = () => {
    return (
        <div className="flex flex-wrap pt-6 px-10">

            <div className="w-full">
                <Button buttonType="primary-outline" className="ml-2">Back</Button>
            </div>
            <div className="flex flex-wrap px-2 pt-6">
                <div className="flex flex-wrap w-1/6 border-2 border-red-500/100 rounded">
                    <div className="w-full flex flex-wrap border-b border-red-500/100 justify-center">
                         <div className="flex flex-wrap w-48 border-2 bg-red-200 border-red-500/100 rounded justify-center content-center space-between space-x-4">
                            <img className="w-8 h-8" src="assets/images/blank-profile.png" alt=""></img>
                         <p>John Doe</p>
                         </div>
                    </div>

                    <div className="w-full group bg-red-500 flex flex-wrap lg:w-full border-b border-red-500 hover:bg-red-500 content-center space-between space-x-4">
                        <svg className="w-8 h-8 stroke-white pl-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <p>Profile</p>
                    </div>

                    <div className="w-full group flex flex-wrap lg:w-full border-b border-red-500 hover:bg-red-500 content-center space-between space-x-4">
                        <svg className="w-8 h-8 stroke-red-500 group-hover:stroke-white pl-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <p>All Bookings</p>
                    </div>

                    <div className="w-full group flex flex-wrap lg:w-full border-b border-red-500 hover:bg-red-500 content-center space-x-4">
                        <svg className="w-8 h-8 stroke-red-500 group-hover:stroke-white pl-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                      <p>Liked Locations</p>
                    </div>

                    <div className="w-full group flex flex-wrap lg:w-full border-b border-red-500 hover:bg-red-500 content-center space-x-4">
                        <svg className="w-8 h-8 stroke-red-500 group-hover:stroke-white pl-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                         <p>Change Password</p>
                    </div>

                    <div className="w-full group flex flex-wrap lg:w-full border-b border-red-500 hover:bg-red-500 content-center space-x-4">
                        <svg className="w-8 h-8 stroke-red-500 group-hover:stroke-white pl-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <p>Settings</p>
                    </div>

                    <div className="w-full lg:w-full border-b border-red-500">
                         
                    </div>

                    <div className="w-full bg-red-500 flex flex-wrap lg:w-full hover:bg-red-500 content-center justify-center space-x-4">
                        <svg className="w-8 h-8 stroke-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                         <p>Logout</p>
                    </div>
                </div>
                <div className="flex-1 w-full ml-24">
                    <div className="flex">
                        <div className="flex-1 w-32">
                            <text className="font-bold">Profile</text>
                        </div>
                        <div className="flex ml-96">
                            <Button buttonType="primary-outline" className="ml-2">Update Profile</Button>
                        </div>
                    </div>
                    <div className="flex shadow-new mt-4">
                        <div className="flex-1 w-2 m-16">
                            <img className="rounded-full w-48 h-48" src="assets/images/blank-profile.png" alt=""></img>
                        </div>
                        <div className="flex-1 flex-wrap w-32 m-8">
                        <div className="m-8">
                                 <label>Name</label><br></br>
                                 <text >John Doe</text>
                            </div>
                            
                            

                            <div className="w-full lg:w-full m-8">
                                <label>Phone Number</label><br></br>
                                <text >+91 999 999 3256</text>
                            </div>
                            

                            <div className="w-full lg:w-full m-8">
                                <label>Email</label><br></br> 
                                <text >test@gmail.com</text>
                            </div>
                            <div className="w-full lg:w-full m-8">
                                <label>Password</label> 
                            </div>
                            <Button buttonType="primary-outline" className="ml-2">Change password</Button>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>

    )
}
export default MyProfile