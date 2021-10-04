import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
const Dashboard = () => {
    const { depID } = useParams()
    return (
        <div className="h-screen mt-28 w-full">
            <div className="bg-third  w-full h-20 flex justify-center flex-col">
                <div className="">
                    <Link to="/" className="pl-5 text-ash text-sm hover:text-second">Home/Department/</Link><span className="text-first text-sm">{depID}</span>
                </div>
                <h1 className=" pl-5 text-3xl text-ash font-medium">{depID}</h1>
            </div>

            <div className="w-full px-5 pt-5 gap-5 grid grid-cols-1 lg:grid-cols-4" style={{
                borderTop
                    : '1px solid rgba(0,0,0,0.1)'
            }}>
                <div className="shadow-lg">

                    <img src="https://gamesncomps.com/wp-content/uploads/2020/10/high-gaming-pc.jpg" alt="" />
                    {/* <div className="absolute w-full h-full top-0 left-0 z-10" style={{background:'rgba(0,0,0,0.4)'}}>
                      </div> */}
                    <div className="px-4 py-2">

                        <h1 className="text-center text-xl text-first font-medium">Computer Technology</h1>
                        <p className="text-center mt-2 text-sm text-second">Abdur Rashid (Instructor)</p>
                    </div>
                    <div className="w-full mt-3 pt-3" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                        <ul>
                            <li className="px-5 py-2 text-first"><Link to="/notice" className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                    </svg>
                                    Notice
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </Link></li>
                            <li className="px-5 py-2 text-ash hover:text-first"><Link to="/teachers" className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                    Teachers
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </Link></li>
                            <li className="px-5 py-2 text-ash hover:text-first">
                                <Link to="/students" className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        Students
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </li>
                            <li className="px-5 py-2 text-ash hover:text-first">
                                <Link to="/booklist" className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                                        </svg>
                                        Book List
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className="w-full mt-3 py-3 px-3" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                        <p className="text-ash text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis molestias harum fugiat maxime asperiores exercitationem laudantium natus beatae perferendis, ipsum culpa quae consequuntur! Enim est cupiditate, eligendi corrupti fuga vero?</p>
                    </div>
                    <div className="w-full mt-3 py-3 px-3" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                        <p className="text-ash text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis molestias harum fugiat maxime asperiores exercitationem laudantium natus beatae perferendis,  ipsum culpa quae consequuntur!</p>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque omnis quas ducimus sequi aspernatur alias a deserunt, at voluptas, saepe asperiores ad vitae sed rerum excepturi aperiam ut quaerat porro!
                </div>
            </div>
        </div>
    )
}

export default Dashboard
