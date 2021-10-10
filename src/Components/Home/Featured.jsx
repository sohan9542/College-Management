import React from 'react'

const Featured = () => {
    return (
        <div className="bg-third py-8">
          
            <div className="w-10/12 mx-auto">
                <h2 className="text-ash text-2xl font-medium ">Featured Instructor</h2>
                <p className="text-sm font-medium text-ash w-96 border-r-2 border-first pb-1">They are highly qualified and trained in their areas</p>

                <div className="grid gap-6 grid-cols-1 lg:grid-cols-2" data-aos="fade-down">
                    <div className="flex items-center gap-4 shadow-lg px-3 py-9 mt-4 bg-white">
                        <img src="https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/138412727_706625996881630_7210904777052243571_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ShrZpX3R1kwAX-cj6SV&_nc_oc=AQmY0mFeOnQ4yERsDof_Q_706VCYnQmqagsHhto5ypiLqSWI77OeHu6odjzcupfL2DQ&tn=7bDSSbqvwD1Y4_pD&_nc_ht=scontent.fdac116-1.fna&oh=3d7581d10ef6e2b160aa5e2c107a5d7d&oe=617EC5A7" className="rounded-full w-32 h-32" alt="" />
                        <div>
                            <h1 className="text-2xl font-bold text-second">Sohanur Rahman</h1>
                            <h3 className="text-ash mb-2 text-sm">Front End Developer | React</h3>
                            <p className="text-xs text-ash">I've been involved in teaching and education for more than ten years. Always eager to learn, I invested a lot of my time in learning…</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 shadow-lg px-3 py-9 mt-4 bg-white"data-aos="fade-down">
                        <img src="https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/62065829_661550657645451_8157124157692182528_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Y4FLftfjIiYAX_h1Js7&_nc_ht=scontent.fdac116-1.fna&oh=837bae2e68eeb825ea1b07f2a8249ac7&oe=617DFED8" className="rounded-full w-32 h-32" alt="" />
                        <div>
                            <h1 className="text-2xl font-bold text-second">Zahid Mzhmm</h1>
                            <h3 className="text-ash mb-2 text-sm">Full Stack Developer MVC | API</h3>
                            <p className="text-xs text-ash">I've spend the past three years as a lead instructor at many types of coding schools. As a self taught developer, I've experienced the...</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Featured
