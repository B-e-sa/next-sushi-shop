const Header = () => {
    return (
        <header className='text-white flex items-center w-screen justify-between sticky top-0'>
            <div className='flex items-center absolute top-0'>
                <div className='flex bg-amber-200 w-14 h-14 justify-center mr-5  items-center'>
                    <button
                        style={{ backgroundImage: 'url(/assets/icons/menu.svg)' }}
                        className='w-8 h-8 cursor-pointer bg-no-repeat'
                    ></button>
                </div>
            </div>
        </header>
    );
};

export default Header;