import { GiCircle, GiPlainCircle } from "react-icons/gi"

const SushiLogo = () => {
    return (
        <div className='relative flex items-center justify-center -left-10 pb-10'>
            <GiPlainCircle className='fill-zinc-900 w-24 h-24 relative -mr-20 ml-12' />
            <GiPlainCircle className='fill-amber-300 z-50 w-3 h-3 -right-2 bottom-4 relative' />
            <GiCircle className='fill-gray-600 w-14 h-14 relative -mr-16 -ml-2' />
            <p className='text-white z-50 relative left-3 text-2xl'>sushi</p>
        </div>
    )
}

export default SushiLogo