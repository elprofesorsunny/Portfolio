import WorkCard from './WorkCard'
import WorkData from '../data/Works.json'

function WorkStation() {
    return (
        <div className='bg-white dark:bg-black px-10 sm:px-12 md:px-16 lg:px-24 xl:px-28 pb-8'>
            <div className='text-black dark:text-white text-left font-bold py-10 text-5xl'>
                My Works
            </div>
            <p className='pb-10 text-xl'>
                Some text about all of projects ...
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10 justify-center items-center'>

                {WorkData.map((item) => {
                    return (
                        <WorkCard name={item.name}
                            description={item.description}
                            skills={item.skills} />
                    )
                })}

            </div>
        </div>
    )
}

export default WorkStation