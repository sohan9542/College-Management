import React from 'react'
import { Fragment, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { RapperContent } from '../../App'



export default function Login() {
    const { authopen, setAuthopen } = useContext(RapperContent)
    const [toggle, setToggle] = React.useState(true)
    return (
        <Transition.Root show={authopen} as={Fragment}>
            <Dialog as="div" className="fixed z-50 inset-0 bg-smooth
             bg-opacity-70 overflow-y-auto"  onClose={setAuthopen}>
                <div className="flex min-h-screen text-center md:block md:px-2 lg:px-4" style={{ fontSize: 0 }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                        enterTo="opacity-100 translate-y-0 md:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 md:scale-100"
                        leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                    >
                        <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-2xl">
                            <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                <button
                                    type="button"
                                    className="absolute top-4 border outline-white right-4 text-new hover:text-primary-txt sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                                    onClick={() => setAuthopen(false)}
                                >
                                    <span className="sr-only">Close</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                <div className="w-full lg:p-8">
                                    <div className="grid grid-cols-2 text-center">
                                        <h1 onClick={() => setToggle(true)} className="text-2xl text-blk-txt cursor-pointer pb-2 border-b border-border-clr font-normal" style={toggle ? { color: '#009da6', borderBottom: '2px solid #009da6' } : { color: '#4b4b4b', borderBottom: '1px solid #dadada' }}>Sign In</h1>
                                        <h1 onClick={() => setToggle(false)} className="text-2xl text-blk-txt cursor-pointer pb-2 border-b border-border-clr font-normal" style={toggle ? { color: '#4b4b4b', borderBottom: '1px solid #dadada' } : { color: '#009da6', borderBottom: '2px solid #009da6' }}>Register</h1>
                                    </div>
                                    {
                                        toggle ? <div>
                                            <form className="mt-3">
                                                <p className="text-sm pb-2 text-ash font-normal">Username or email address *</p>
                                                <input type="text" className="w-full px-2 py-2 text-sm outline-white" required style={{border:'1px solid rgba(0,0,0,0.1)'}}/>
                                                <p className="text-sm pt-3  pb-2 text-ash font-normal">Password *</p>
                                                <input type="password" className="w-full px-2 py-2 text-sm border outline-white" style={{border:'1px solid rgba(0,0,0,0.1)'}} required />
                                                <div className="my-4 flex flex-wrap items-center justify-between">
                                                    <button type="submit" className="border mb-3 lg:mb-0 flex items-center px-3 py-2 text-sm justify-between
                                             border-first text-first transition ease-linear duration-150 cursor-pointer hover:bg-first hover:text-white">LOG IN <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                        </svg></button>
                                                    <div className="flex w-96 items-center justify-between">
                                                        <div className="ml-3 flex items-center text-sm text-ash">
                                                            <input className="mr-1 " type="checkbox" name="" id="" />
                                                            Remember Me
                                                        </div>
                                                        <p className="cursor-pointer text-sm text-ash hover:text-primary-txt">

                                                            Forgot Your Password?
                                                        </p>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                            :
                                            <div>
                                                <form className="mt-3">
                                                    <p className="text-sm pb-2 text-ash font-normal">Your email address *</p>
                                                    <input type="text" className="w-full px-2 py-2 text-sm border outline-white" style={{border:'1px solid rgba(0,0,0,0.1)'}} required />
                                                    <p className="text-sm pt-3  pb-2 text-ash font-normal">Password *</p>
                                                    <input type="password" className="w-full px-2 py-2 text-sm border outline-white" style={{border:'1px solid rgba(0,0,0,0.1)'}} required />
                                                    <div className="my-4 flex flex-wrap items-center justify-between">
                                                        <button type="submit" className="border mb-3 lg:mb-0 flex items-center px-3 py-2 text-sm justify-between
                                             border-first text-first transition ease-linear duration-150 cursor-pointer hover:bg-first hover:text-white">SIGN UP <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg></button>
                                                        <div className="flex w-96 items-center justify-between">
                                                            <div className="ml-3 flex items-center text-sm text-ash">
                                                                <input className="mr-1 " type="checkbox" name="" id="" required />
                                                                I agree to the privacy policy *
                                                            </div>

                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                    }
                                    <p className="text-center text-xs text-ash">or sign in with</p>
                                    <div className="flex items-center justify-center mt-4 ">
                                        <button className="text-center mx-auto px-4 py-1 border bg-first text-sm cursor-pointer hover:bg-second text-white transition delay-100 ease-linear">Login with Gogle</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
