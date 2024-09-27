import React from "react"
import { ProjectInfo } from "../../helpers/types"

interface Props {
  projectInfo: ProjectInfo
}

const ProjectDetails = ({ projectInfo }: Props) => {
  const { name, details, liveLink, repoLink } = projectInfo

  return (
    <>
      <a
        className="w-full text-center md:fit"
        href={liveLink}
        target="_blank"
        rel="noreferrer"
      >
        <h3 className="border-b-2 font-bold cursor-pointer hover:text-lightBlue transition-all duration-100 ease-in text-[2em] mt-36 mb-7 pb-4 md:mt-0 md:mb-4 md:pb-2 w-full md:w-fit lg:text-[2.8em] lg:mb-8">
          {name}
        </h3>
      </a>

      <ul className="list-disc font-thin text-xl pl-7 lg:text-2xl lg:pl-8">
        {details.map((info) => (
          <li key={info.id} className="mb-1 lg:mb-2">
            {info.label}
          </li>
        ))}
      </ul>

      <div className="flex mt-5 lg:mt-9">
        <a
          href={liveLink}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer hover:text-lightBlue transition-all duration-100 ease-in mr-7 text-2xl lg:text-3xl"
        >
          <i className="fa-solid fa-link"></i>
        </a>
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:text-lightBlue transition-all duration-100 ease-in text-3xl lg:text-4xl"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        )}
      </div>
    </>
  )
}

export default ProjectDetails
