import { BsTelephoneInbound } from "react-icons/bs"

const ContactUs = () => {
    return (
        <div className='flex relative items-center pb-12'>
            <div className='bg-zinc-700 w-10 h-10 flex justify-center items-center'>
                <BsTelephoneInbound className='fill-white' />
            </div>
            <p className='text-white'>TO CONTACT US</p>
        </div>
    )
}

export default ContactUs