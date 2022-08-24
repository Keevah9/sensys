import React from 'react'

const About = ({num, head, desc}) => {
  return (
    <div className='sm:w-2/5 w-full h-full  mt-16' >
        <h2 className='text-green-900 font-bold text-4xl'>{num}</h2>
        <h3 className='text-green-900 font-bold'>{head}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default About