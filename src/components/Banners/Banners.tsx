import { useState } from 'react'
import { AiOutlineLine } from 'react-icons/ai'
import { GiCircle, GiPlainCircle } from 'react-icons/gi'
import products from "../../utils/products.json"


const Banners = () => {

    const [currentBanner, setCurrentBanner] = useState(1);

    return (
        <div className='flex flex-col h-screen'>
            <div className='flex flex-row-reverse w-screen text-white' style={{ height: "calc(100vh - 10vh)" }}>
                <div
                    className={"w-7/12 -z-10 rotate-180"}
                    style={{
                        height: "100vh",
                        backgroundImage: `url(${products.banners[currentBanner - 1]?.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }} >
                </div>
                <div>
                </div>
                <div className='flex items-center relative'>
                    <div className='flex items-center justify-center animate-half-slow-spin self-start left-1 absolute -z-50 top-40 left-10'>
                        <GiPlainCircle className='fill-zinc-900 w-80 h-80 absolute' />
                        <GiPlainCircle className='fill-amber-200 -left-24 z-10 w-6 h-6 absolute' />
                        <GiCircle className='fill-gray-500 w-48 h-48 absolute' />
                    </div>
                    <div className='mr-20 mt-40'>
                        <AiOutlineLine className='rotate-90 w-8 h-8' />
                        <AiOutlineLine className='rotate-90 w-8 h-8' />
                        <AiOutlineLine className='rotate-90 w-8 h-8' />
                    </div>
                    <div>
                        <p className='text-6xl w-96 -mr-24 font-serif self-center z-50'>
                            steaks<br />
                            <em className='text-amber-200'>sushi</em>, seafood<br />
                            & salads
                        </p>
                        <p className='w-64'>From Chinese to European cuisine, dishes are made quickly and deliciously.</p>
                    </div>
                </div>
            </div>
            <div className='w-screen bg-zinc-800 flex flex-row-reverse' style={{ height: "10vh" }}>
                <div className='bg-amber-200 w-20 flex justify-center items-center flex-col self-end'
                    style={{ height: "10vh"}}>
                    <span className='-mb-8 '>CATALOG</span>
                    <img className='-mb-6' src="/longArrow.svg" alt="" width={65} height={65} />
                </div>
            </div>
        </div>
    )
}

export default Banners