import React from 'react'
import Link from 'next/link'

const Projects = () => {

    const projexts = [
        {
            name: "Portfolio",
            description: "My personal portfolio website",
            stack: "NextJS, Tailwind CSS",
            github: "",
            demo: "",
        },
        {
            name: "Dokxy",
            description: "A web for booking doctor appointments",
            stack: "NextJS, Tailwind CSS, mongoDB, Mongoose",
            github: "",
            demo: "",
        },
        {
            name: "Color palette",
            description: "A web for generating color palettes",
            stack: "NextJS, Tailwind CSS",
            github: "",
            demo: "",
        },
        {
            name: "NodeElites",
            description: "A web for open source community",
            stack: "NextJS, Tailwind CSS",
            github: "",
            demo: "",
        },{
            name: "React Projects",
            description: "Projects made using ReactJS",
            stack: "ReactJS, Tailwind CSS",
            github: "",
            demo: "",
        }
    ]

  return (
    <div className='flex flex-col justify-start items-start gap-2'>
    <p className='text-xl'>
    {`Here are some of the projects I have worked on:`}
    </p>
    <div className='flex flex-col justify-start items-start gap-2'>
        {projexts.map((project, index) => (
            <div key={index} className='flex flex-col justify-start items-start'>
                <Link href={project.demo} className='text-lg font-semibold underline text-green-700'>{project.name}</Link>
                <p className='text-md'>{project.description} made using {project.stack}</p>
            </div>
        ))}
        </div>
</div>
  )
}

export default Projects