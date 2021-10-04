import React from 'react'

const Notice = () => {
    return (
        <div className="py-8 bg-white mb-20">
            <div className="w-10/12 mx-auto">
                <h2 className="text-ash text-2xl font-medium border-r-2 w-44 border-first pb-1">Teachers Post</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
                    <div className="shadow-lg pb-8">
                        <div className=" rounded overflow-hidden relative">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADe_fi-MA7iQSRE5JbQQ0cgX3V0ZTFf-5YqJ1E1-PKkpjyLmbcbDjAfqhRtFPIUX-Hoc&usqp=CAU" className="w-full mb-4" style={{ height: '100%', objectFit: 'cover' }} alt="" />
                            <div className="w-52 bg-second text-white px-2 py-2 relative z-10 mx-auto rounded-full" style={{ marginTop: '-35px' }}>
                                Posted on 24-01-2021
                            </div>
                            <h1 className="mt-3 text-ash px-3 text-xl font-medium">
                                Contrary to popular belief, Lorem Ipsum is
                            </h1>
                            <p className="text-sm text-ash px-3 pt-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                            <button className="text-first text-sm mt-6 ml-3 flex items-center">See more <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg></button>
                        </div>
                    </div>
                    <div className="shadow-lg pb-8">
                        <div className=" rounded overflow-hidden relative">
                            <img src="https://content.techgig.com/thumb/msid-78474367,width-860,resizemode-4/4-Expert-tips-to-up-your-game-as-a-programmer.jpg?58220" className="w-full mb-4" style={{ height: '100%', objectFit: 'cover' }} alt="" />
                            <div className="w-52 bg-second text-white px-2 py-2 relative z-10 mx-auto rounded-full" style={{ marginTop: '-35px' }}>
                                Posted on 24-01-2021
                            </div>
                            <h1 className="mt-3 text-ash px-3 text-xl font-medium">
                                Contrary to popular belief, Lorem Ipsum is
                            </h1>
                            <p className="text-sm text-ash px-3 pt-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                            <button className="text-first text-sm mt-6 ml-3 flex items-center">See more <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg></button>
                        </div>
                    </div>
                    <div className="shadow-lg pb-8">
                        <div className=" rounded overflow-hidden relative">
                            <img src="https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces/https://www.gcu.edu/sites/default/files/2020-09/programming.jpg" className="w-full mb-4" style={{ height: '100%', objectFit: 'cover' }} alt="" />
                            <div className="w-52 bg-second text-white px-2 py-2 relative z-10 mx-auto rounded-full" style={{ marginTop: '-35px' }}>
                                Posted on 24-01-2021
                            </div>
                            <h1 className="mt-3 text-ash px-3 text-xl font-medium">
                                Contrary to popular belief, Lorem Ipsum is
                            </h1>
                            <p className="text-sm text-ash px-3 pt-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                            <button className="text-first text-sm mt-6 ml-3 flex items-center">See more <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Notice
