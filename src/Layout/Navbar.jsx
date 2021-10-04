/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {

    MenuIcon,
    LightningBoltIcon,
    ChipIcon,
    XIcon,
    DesktopComputerIcon,
    BriefcaseIcon,
    CogIcon,
    GlobeIcon,
    LightBulbIcon,
    AcademicCapIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const solutions = [
    {
        name: 'Computer',
        icon: DesktopComputerIcon,
    },
    {
        name: 'Civil',
        icon: BriefcaseIcon,
    },
    {
        name: 'Electrical',
        icon: LightningBoltIcon,
    },
    {
        name: 'Electronics',
        icon: ChipIcon,
    },
    {
        name: 'Mechanical',
        icon: CogIcon,
    },
    {
        name: 'Mechatronics',
        icon: GlobeIcon,
    },
    {
        name: 'Power',
        icon: LightBulbIcon,
    },
    {
        name: 'Electromedical',
        icon: AcademicCapIcon,
    },

]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        
        <Popover className=" bg-white fixed top-0 left-0 z-40 w-full">
            <div className="bg-first text-white w-full py-2 hidden lg:block ">
            <div className="mx-7 flex gap-4 items-center justify-between">
                <div className="flex items-center text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg> sopura, rajshahi, bd
                </div>
                <div className="flex items-center text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        <path d="M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z" />
                    </svg> +19 123-456-7890
                </div>
                <div className="flex items-center text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>  mail@yourdomain.com
                </div>
            </div>
          
        </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 lg:h-30 ">
                <div className="flex justify-between items-center md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="w-40 h-20" style={{objectFit:'cover'}}
                                src="https://i.ibb.co/RvhZ4X2/Rajshahi-Polytechnic-Institute.png"
                                alt=""
                            />
                         
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        <Link href="#" className="text-base font-medium text-ash hover:text-second">
                            Home
                        </Link>
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-second' : 'text-ash',
                                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 '
                                        )}
                                        aria-hidden="true"
                                    >
                                        <span>Departments</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid z-30 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {solutions.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                           
                                                            className="-m-3 p-3 flex relative z-30 items-start rounded-lg hover:bg-gray-50"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-ash" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <Link to={"/department/" + item.name} className="text-base font-medium text-ash hover:text-second hover:ml ">{item.name}</Link>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>

                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <Link href="#" className="whitespace-nowrap bg-second text-base px-4 py-2 rounded-sm font-medium text-white">
                           LOGIN
                        </Link>
                       
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-20 w-auto" style={{objectFit:'cover'}}
                                        src="https://i.ibb.co/RvhZ4X2/Rajshahi-Polytechnic-Institute.png"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8 relative z-50">
                                    {solutions.map((item) => (
                                        <Link
                                            key={item.name}
                                            className="-m-3 p-3 flex relative z-50 items-center rounded-md hover:bg-gray-50"
                                        >
                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{' '}
                                    <Link href="#" className="px-2 py-1 text-white bg-second">
                                      LOGIN
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
