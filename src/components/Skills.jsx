import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import bootstrap from "../assets/bootstrap.png"

const Skills = () => {

    const skills = [
        {
            id: 1,
            image: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            image: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            image: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            image: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            image: tailwind,
            title: 'TailWind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            image: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-600'
        }
    ]

  return (
    <div name="Skills" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
            <p className='py-5'></p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {skills.map(({id, image, title, style}) => (
                <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg ' + style}>
                    <img src={image} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
