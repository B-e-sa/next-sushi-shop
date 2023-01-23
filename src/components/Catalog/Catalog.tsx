import clsx from 'clsx'

const Catalog = () => {
    return (
        <div
            className={clsx(
                'flex justify-center items-center flex-col self-end',
                'w-20',
                'bg-amber-200 '
            )}
            style={{ height: '10vh' }}
        >
            <span className='-mb-8 '>CATALOG</span>
            <img
                className='-mb-6'
                src='/longArrow.svg'
                alt='long arrow'
                width={65}
                height={65}
            />
        </div>
    )
}

export default Catalog