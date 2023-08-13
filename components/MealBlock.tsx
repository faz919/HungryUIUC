import { GiHotMeal } from 'react-icons/gi'
import { BiTime } from 'react-icons/bi'
import { BiMap } from 'react-icons/bi'

function cn(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MealBlock({ meal }) {
    return (
        <a href={meal.link} className={cn("group w-full bg-gray-200 my-6 h-auto flex flex-col rounded-lg overflow-hidden shadow-md duration-300 scale-100 hover:scale-105 lg:flex-row")}>
            <div className="p-6">
                <div className={"flex items-center font-medium text-gray-900"}>
                    <h3 className={cn("text-xl font-bold sm:text-left")}>{meal.name}</h3>
                </div>
                <p className="text-md mt-1">
                    <span className="font-bold text-gray-900">From the website:&nbsp;</span>
                    <span className="italic text-gray-500">
                        {meal.shortDescription}
                    </span>
                </p>
                <p className="mt-1 text-gray-500 flex flex-row">
                    <GiHotMeal className='mt-1' />&nbsp;{meal.meal}
                </p>
                <p className="mt-1 text-gray-500 flex flex-row">
                    <BiTime className='mt-1' />&nbsp;{meal.time}
                </p>
                <p className="mt-1 text-gray-500 flex flex-row">
                    <BiMap className='mt-1' />&nbsp;{meal.location}
                </p>
                <p className="mt-1 italic underline">
                    Learn More
                </p>
            </div>
        </a>
    )
}