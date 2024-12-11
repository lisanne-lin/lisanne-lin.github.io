import React from 'react';
import { Link } from 'react-router-dom';

export interface Project {
    title: string,
    tags: string[],
    path: string,
    bgColor: string,
    tagColor: string
    tagTextColor: string,
    img: string

}

export interface ProjectsProps {
    projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
    return (
        <div className="container p-4 mx-auto space-y-16">
            <h2 className="text-slate-800 font-bold text-4xl w-full text-center">
                Projects
            </h2>

            {projects.map((project) => (
                <Link
                    key={project.path}
                    to={project.path}
                    className={`block space-y-6 px-5 pt-4 md:px-16 rounded-3xl transition ease-in-out  no-underline hover:no-underline group overflow-clip hover:shadow-[0px_19px_49.4px_-3.75px_#00000010]  ${project.bgColor}`}
                >
                    <h3 className="font-bold text-2xl text-slate-800 mb-4">
                        {project.title}
                    </h3>
                    <div className="font-bold flex gap-2 flex-wrap">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className={`p-2 rounded-xl inline-block w-fit ${project.tagColor} ${project.tagTextColor}`}
                            >
                {tag}
              </span>
                        ))}
                    </div>
                    <div className="flex justify-center pt-4 mb-80">
                        <img
                            className="h-40 md:h-96 translate-y-1/4 transition ease-in-out delay-90 group-hover:translate-y-10 group-hover:scale-110 duration-500"
                            src={project.img}
                            alt=""
                        />
                    </div>
                </Link>
            ))}
        </div>
    );
};
