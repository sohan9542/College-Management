import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Pdf from '../../Home/Pdf';
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
/* This example requires Tailwind CSS v2.0+ */
const people = [
    {
        name: 'From Fill Up',
        date: '03/10/2021',
        role: 'Admin',
        details: '1st/3rd/5th/7th semister from fill up notice 2021',
    },
    // More people...
    {
        name: 'From Fill Up',
        date: '03/10/2021',
        role: 'Admin',
        details: '1st/3rd/5th/7th semister from fill up notice 2021',
    },
    // More people...
    {
        name: 'From Fill Up',
        date: '03/10/2021',
        role: 'Admin',
        details: '1st/3rd/5th/7th semister from fill up notice 2021',
    },
    // More people...
    {
        name: 'From Fill Up',
        date: '03/10/2021',
        role: 'Admin',
        details: '1st/3rd/5th/7th semister from fill up notice 2021',
    },
    // More people...
    {
        name: 'From Fill Up',
        date: '03/10/2021',
        role: 'Admin',
        details: '1st/3rd/5th/7th semister from fill up notice 2021',
    },
    // More people...
    {
        name: 'From Fill Up',
        date: '03/10/2021',
        role: 'Admin',
        details: '1st/3rd/5th/7th semister from fill up notice 2021',
    },
    // More people...
]
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '100%',
    width: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1,
};
export default function Notices() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [show, setShow] = React.useState(false)
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 1000);
    })
    return (

        <>
            {
                show ? <> <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">

                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 mt-3">
                          
                            <div className="shadow overflow-hidden border-b border-smooth sm:rounded-lg">
                                <table className="min-w-full divide-y divide-smooth">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-tcolor uppercase tracking-wider"
                                            >
                                                Basic Info
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-tcolor uppercase tracking-wider"
                                            >
                                                Created Date
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-tcolor uppercase tracking-wider"
                                            >
                                                Action
                                            </th>



                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-smooth">
                                        {people.map((notice, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">

                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{notice.name}</div>
                                                            <div className="text-xs text-tcolor">{notice.details}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">{notice.date}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" onClick={handleOpen} className="h-5 w-5 text-first hover:text-second cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                                    </svg></div>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                    <div>

                        <Modal

                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                                <Box sx={style}>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleClose} className="h-8 w-8 cursor-pointer bg-second text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <Pdf />
                                </Box>
                            </Fade>
                        </Modal>
                    </div></> :
                    <Box sx={{ display: 'flex', width:'100%', height:'100%', justifyContent:'center', alignItems:'center' }}>
                        <CircularProgress />
                    </Box>
            }

        </>
    )
}

