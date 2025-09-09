import React from 'react'
import project2 from "../../../assets/project2.jpg"
import project1 from "../../../assets/project1.webp"
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <div className={"section-inline mt-8"}>

            <h2 className={"mb-4 text-center"}>My Projects</h2>
            <p className={"max-w-220 text-center mx-auto"} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>


            <div className={"mt-10 md:mt-20 grid gap-20"}>
                {
                    projectlist.map((item, index) => (
                        <div className={`grid md:flex gap-4 md:gap-10 items-center ${index % 2 === 1 ? "flex-row-reverse" : ""}`}>
                            <div style={{ backgroundImage: `url(${item.image})` }} className="bg-cover w-full bg-no-repeat bg-center aspect-[4/3]">

                            </div>

                            <div>
                                <h4 className={"mb-4"}>{item.name}</h4>
                                <p>{item.description}</p>
                                <div className={" mt-8"}>
                                    <a href="">
                                        <FaGithub className={"w-10 h-10"} />
                                    </a>
                                </div>
                            </div>


                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default Projects


const projectlist = [
    {
        name: "Project 1",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti, molestias explicabo ipsum repellendus obcaecati esse vitae dolore necessitatibus est?",
        image: project1,
        githubUrl: "",
        liveUrl: ""
    },
    {
        name: "Project 3",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti, molestias explicabo ipsum repellendus obcaecati esse vitae dolore necessitatibus est?",
        image: project2,
        githubUrl: "",
        liveUrl: ""
    },
    {
        name: "Project 2",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos corrupti, molestias explicabo ipsum repellendus obcaecati esse vitae dolore necessitatibus est?",
        image: project1,
        githubUrl: "",
        liveUrl: ""
    },
]