import { BsFillHandbagFill } from "react-icons/bs"
import convertToUsd from "../../utils/convertToUsd"
import Stars from "../Stars/Stars"

const getProductFrame = ({ products, responsiveSizes = "" }: any) => {
    return (
        products.map((item: any) => {
            return (
                <div key={item.name} className="text-white relative bg-zinc-800 w-52">
                    <div className=' bg-amber-200 text-black text-center -rotate-90 w-10 absolute top-2 -left-2'>
                        sale
                    </div>
                    <div className='flex flex-col items-center bg-zinc-900'>
                        <img
                            className="h-40 object-cover"
                            src={item.image}
                            alt={item.name}
                        />
                        <p className="text-zinc-400 mt-2">
                            {item.name}
                        </p>
                        <p>{convertToUsd(item.price)}</p>
                        <Stars starQuantity={item.stars} />
                        <div className={'bg-black w-40 flex items-center justify-center h-8 relative top-4 cursor-pointer'}>
                            <BsFillHandbagFill /> + ADD TO CART
                        </div>
                    </div>
                </div>
            )
        }))
}

export default getProductFrame