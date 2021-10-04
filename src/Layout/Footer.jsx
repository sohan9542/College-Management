import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="bg-ash w-full py-4 px-2 lg:px-9">
      
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 items-center justify-center mt-6">
                <div>
                    <h1 className="font-bold text-xl text-second mb-3">About Mentoring</h1>
                    <p className="text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris</p>
                </div>
                <div>
                    <h1 className="font-bold text-xl text-second mb-3">For Mentee</h1>
                    <ul>
                        <li><Link className="text-white">Search Mentors</Link></li>
                        <li><Link className="text-white">Login</Link></li>
                        <li><Link className="text-white">Register</Link></li>
                        <li><Link className="text-white">Booking</Link></li>
                        <li><Link className="text-white">Dashboard</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-xl text-second mb-3">For Mentor</h1>
                    <ul>
                        <li><Link className="text-white">Apoinment</Link></li>
                        <li><Link className="text-white">Login</Link></li>
                        <li><Link className="text-white">Register</Link></li>
                        <li><Link className="text-white">Chat</Link></li>
                        <li><Link className="text-white">Dashboard</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-xl text-second mb-3">About Mentoring</h1>
                    <p className="text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
