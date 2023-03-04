import data from '../utils/data.json';

export const inputStyle =
    "bg-transparent border-b-2 border-b-zinc-800 mb-8 text-white xl:w-80 w-64"


const Subscribe = () => {

    return (
        <div className="w-screen bg-zinc-700 flex flex-col md:flex-row">
            <div
                style={{ backgroundImage: `url(${data.subscribeImage})` }}
                className="bg-no-repeat bg-cover bg-white w-screen h-80"
            >
            </div>
            <form className="w-screen flex flex-col bg-black h-80 justify-center pl-12">
                {/*<div className='relative'>
                    <GiPlainCircle className='fill-zinc-900 w-80 h-80 absolute -z-10' />
                    <GiPlainCircle className='fill-amber-300 left-10 top-6 z-50 w-6 h-6 absolute' />
    </div>*/}
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