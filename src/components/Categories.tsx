import data from '../utils/data.json';

const Categories = () => {

    const getColumnSizes = (index: number): string => {
        switch (index) {
            case 0:
                return '1 / 1 / 1 / 3'

            case 1:
                return '2 / 2 / 2 / 4'

            case 2:
                return '1 / 3 / 1 / 3'

            case 3:
                return '2 / 1 / 2 / 2'

            default:
                return '1 / 4 / 3 / 4'
        };
    };

    const getCategorieNamePosition = (index: number) => {
        switch (index) {
            case 0:
                return '20'

            case 1:
                return '2 / 2 / 2 / 4'

            case 2:
                return '1 / 3 / 1 / 3'

            case 3:
                return '2 / 1 / 2 / 2'

            default:
                return '1 / 4 / 3 / 4'
        };
    };

    return (
        <div
            className='grid w-screen'
            style={{ gridTemplateRows: '250px 250px' }}
        >
            {data.categories.map(({category, image}, index) => {
                return (
                    <div
                        className='bg-cover bg-no-repeat '
                        key={category}
                        style={{
                            backgroundImage: `url(${image})`,
                            gridArea: getColumnSizes(index)
                        }}
                    >
                        <p className='text-white size text-4xl font-serif'>
                            {category}
                        </p>
                    </div>
                )
            })}
        </div>
    );
};

export default Categories;