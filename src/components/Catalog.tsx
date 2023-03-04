import clsx from 'clsx'
import Image from 'next/image'

const Catalog = () => {
    return (
        <div
            className={clsx(
                'flex justify-center items-center flex-col self-end',
                'w-24',
                'pr-2',
                'bg-amber-200 '
            )}
            style={{ height: '10vh' }}
        >
            <span className='-mb-8 '>CATALOG</span>
            <Image
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