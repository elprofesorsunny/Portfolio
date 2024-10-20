import SkillBadge from './SkillBadge'

function WorkCard(item:any) {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 backdrop-filter backdrop-blur-lg px-10 py-5 rounded-lg w-full drop-shadow-[5px_5px_5px_rgba(0,0,0,0.1)] dark:drop-shadow-[5px_5px_5px_rgba(255,255,255,0.1)]">
      <h1 className="text-2xl font-bold pb-2 dark:text-white">
        {item.name}
      </h1>
      <p className="text-lg font-base pb-4 dark:text-white">
        {item.description}
      </p>
      <div className='pb-4'>
        <SkillBadge skillss={item.skills}/>
      </div>
      <button className="px-2 py-1 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        View Project
      </button>
    </div>
  )
}

export default WorkCard