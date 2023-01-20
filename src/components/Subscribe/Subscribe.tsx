import { GiPlainCircle } from 'react-icons/gi';
import data from '../../utils/data.json';

const Subscribe = () => {

    const inputStyle = "bg-transparent border-b-2 border-b-zinc-800 w-72 mb-8 text-white"

    return (
        <div className="w-screen bg-zinc-700 flex justify-end">
            <div
                style={{ backgroundImage: `url(${data.subscribeImage})` }}
                className="bg-no-repeat bg-cover bg-white w-60 h-80"
            >
            </div>
            <form className="flex flex-col bg-black w-4/12 h-80 justify-center pl-12">
                <div className='relative'>
                    <GiPlainCircle className='fill-zinc-900 w-80 h-80 absolute -z-10' />
                    <GiPlainCircle className='fill-amber-300 left-10 top-6 z-50 w-6 h-6 absolute border-red-400' />
                </div>
                <p className="text-white text-3xl font-serif mb-5">subscribe to news</p>
                <input
                    type="text"
                    title="name"
                    name="name"
                    placeholder="Name"
                    maxLength={35}
                    className={inputStyle}
                />
                <input
                    type="email"
                    title="email"
                    name="email"
                    placeholder="Email"
                    className={inputStyle}
                />
                <button
                    className="bg-amber-200 w-36 h-10 hover:bg-amber-300 transition-colors"
                    type="submit"
                    title="subscribe"
                >Subscribe</button>
            </form>
        </div>
    );
};

export default Subscribe;