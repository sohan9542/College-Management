import React, { useState } from 'react'
import "./hero.css"
const Departments = () => {
    const [more, setMore] = useState([6, true])
    const departmens = [
        {
            name: 'Computer',
            sub: 'IT & Network',
            img: 'https://gamesncomps.com/wp-content/uploads/2020/10/high-gaming-pc.jpg'
        },
        {
            name: 'Civil',
            sub: 'Building & Design',
            img: 'https://thumbs.dreamstime.com/b/innovative-architecture-civil-engineering-plan-building-construction-project-creative-graphic-design-showing-concept-174256642.jpg'
        },
        {
            name: 'Electrical',
            sub: 'Wires & Connections',
            img: 'https://getquickspark.com.au/wp-content/uploads/2018/10/Types-of-Electrical-Repair.jpg'
        },
        {
            name: 'Mechanical',
            sub: 'Machine & Supply',
            img: 'https://diitctg.edu.bd/wp-content/uploads/2019/06/mechanical.jpg'
        },
        {
            name: 'Electronics',
            sub: 'Tools & Gadgets',
            img: 'https://elearn.daffodilvarsity.edu.bd/pluginfile.php/580500/course/section/86619/cover%20photo1%20%281%29.jpg'
        },
        {
            name: 'Mechatronics',
            sub: 'Robots & Automachine',
            img: 'https://www.captechu.edu/sites/default/files/automotive%20systems%20and%20mechatronics.jpg'
        },
        {
            name: 'Electromedical',
            sub: 'Medical & Technology',
            img: 'https://assets.siccode.com/i-s-b/sic-code-3845-electromedical-electrotherapeutic-apparatus.jpg'
        },
        {
            name: 'OUR POLYTECHNIC',
            sub: 'Tour & Facilitysq',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Rajshahi_Polytechnic_Institute.jpg/1200px-Rajshahi_Polytechnic_Institute.jpg'
        },
        {
            name: 'Power',
            sub: 'Electric & Current',
            img: 'https://www.power-technology.com/wp-content/uploads/sites/7/2020/06/Wind-Tweets-May.jpg'
        },

    ]
    const slicedepart = departmens.slice(0, more[0])
    return (
        <>
            <div className="w-full flex items-center flex-col justify-center mb-5">
                <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        slicedepart.map((item, index) => (
                            <div key={index} className="overflow-hidden rounded-md relative">
                                <img src={item.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                                <div className="w-full h-full absolute z-10 top-0 left-0 flex flex-col justify-center items-center" style={{ background: 'rgba(0,0,0,0.7)' }}>
                                    <h2 className="top-5 mb-3 text-white font-bold text-3xl">{item.name}</h2>
                                    <p className="text-sm text-second">{item.sub}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div>
                    {
                        more[1] ?
                            <button onClick={()=>setMore([9, false])} className="px-9 rounded py-2 transition delay-100 ease-in bg-first text-white mt-3 hover:bg-second">
                                See more
                            </button>
                            :
                            <button onClick={()=>setMore([6, true])} className="px-9 rounded py-2 transition delay-100 ease-in bg-second text-white mt-3 hover:bg-first">
                                See less
                            </button>
                    }
                </div>
            </div>
        </>
    )
}

export default Departments
