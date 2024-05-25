import React from 'react'

const ProfileRight = () => {
    return (
        <div className="pr-4 pl-4 right-sec sm:w-full md:1/2 lg:w-1/2">
            <div className="block text-gray-800 bg-white border border-gray-200 rounded-lg shadow-md p-5 overflow-hidden profile-box">
                <div className="title-sec mb-7 flex flex-wrap items-center justify-between">
                    <h4>Profile</h4>
                    <a className="p-0.5 px-2.5 text-red-600 bg-gray-200 capitalize" href="javascript:void(0)" data-toggle="modal" data-target="#edit-profile" id="btn">edit</a>
                </div>
                <div className="profile-detail">
                    <table className="table-auto">
                        <tbody>
                            <tr className='gap-20'>
                                <td>Agent ID</td>
                                <td>&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;</td>
                                <td>OS12345</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td></td>
                                <td>test agent</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td></td>
                                <td>test@agent.com</td>
                            </tr>
                            <tr>
                                <td>Phone No.</td>
                                <td></td>
                                <td>111111111111</td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td></td>
                                <td>***********</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td></td>
                                <td>Jhargram</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td></td>
                                <td>West Bengal</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Zip</td>
                                <td></td>
                                <td>721517</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr className='my-5'></hr>
                <div className="title-sec mb-7 flex flex-wrap items-center justify-between">
                    <h4>GST Number</h4>
                    <a className="p-0.5 px-2.5 text-red-600 bg-gray-200 capitalize" href="javascript:void(0)" data-toggle="modal" data-target="#edit-profile" id="btn">edit</a>
                </div>
                <div className="profile-detail">
                    <table className="table-auto">
                        <tbody>
                            <tr className='gap-20'>
                                <td>GST Number</td>
                                <td>&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;</td>
                                <td>OS12345</td>
                            </tr>
                            <tr>
                                <td>Company Name</td>
                                <td></td>
                                <td>test agent</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td></td>
                                <td>test@agent.com</td>
                            </tr>
                            <tr>
                                <td>Phone No.</td>
                                <td></td>
                                <td>111111111111</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td></td>
                                <td>Jhargram</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td></td>
                                <td>West Bengal</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Zip</td>
                                <td></td>
                                <td>721517</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr className='my-5'></hr>
                <div className="title-sec mb-7 flex flex-wrap items-center justify-between">
                    <h4>Travellers added</h4>
                    <a className="p-0.5 px-2.5 text-red-600 bg-gray-200 capitalize" href="javascript:void(0)" data-toggle="modal" data-target="#edit-profile" id="btn">edit</a>
                </div>
                <div className="profile-detail">
                    <table className="table-auto">
                    </table>
                </div>
                <hr className='my-5'></hr>
                <div className="title-sec mb-7 flex flex-wrap items-center justify-between">
                    <h4>LOGO</h4>
                    <a className="p-0.5 px-2.5 text-red-600 bg-gray-200 capitalize" href="javascript:void(0)" data-toggle="modal" data-target="#edit-profile" id="btn">edit</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileRight
