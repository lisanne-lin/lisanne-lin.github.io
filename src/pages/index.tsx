import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Projects from "@site/src/components/projectBlock";
import HanziChars from "@site/src/components/HanziChars";


export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Portfolio`}
            description="Hey welcome to my portfolio, I'm Lisanne Lin and I'm a software engineer student">

            <div className="flex lg:h-screen">
                <div className="m-auto">
                    <div className="container pt-16 p-4 mx-auto text-slate-800 justify-center md:space-x-24 lg:flex">
                        <div className="memoji grid justify-items-center relative">
                            <HanziChars/>
                            <img className="max-w-[250px] md:max-w-xs mb-8" src={"/img/memoji.png"} alt=""/>
                        </div>
                        <div className="max-w-4xl space-y-4">
                            <h1 className="font-bold text-slate-800 text-2xl lg:text-5xl md:text-4xl leading-tight">
                                Hi, I'm Lisanne Lin! <br/>
                                A Software Engineer student from The Netherlands.
                            </h1>
                            <div className="text-slate-700 text-about-me max-w">
                                <div className="text-slate-500 space-y-4 font-regular">
                                    <p>
                                        📚 Software Engineer Student
                                        <a
                                            className="text-rose-300 transition duration-150 ease-in-out"
                                            href="https://www.hva.nl/"
                                        >
                                            @HvA
                                        </a>
                                        // 4th year
                                    </p>
                                    <p>
                                        💻 Software Engineer Intern
                                        <a
                                            className="text-rose-300 transition duration-150 ease-in-out"
                                            href="https://www.accenture.com/nl-en"
                                        >
                                            @Accenture
                                        </a>
                                        // 2023 - 2024
                                    </p>
                                    <p>🌏 Speaks Dutch, English and Chinese</p>
                                    <p>🌸 Likes to read and drinking matcha</p>
                                    <div className="links font-semibold space-x-8 mt-40">
                  <span>
                    <a
                        className="text-slate-500 hover:text-rose-300 ease-in duration-300  hover:underline"
                        href="https://nl.linkedin.com/in/lisanne-lin-b0089614b"
                    >
                      LinkedIn
                    </a>
                  </span>
                                        <span>
                    <a
                        className="text-slate-500 hover:text-rose-300 ease-in duration-300"
                        href="static/cv_english_lisanne-lin.pdf"
                    >
                      Resume
                    </a>
                  </span>
                                        <span>
                    <a
                        className="text-slate-500 hover:text-rose-300 ease-in duration-300"
                        href="https://github.com/lisanne-lin"
                    >
                      GitHub
                    </a>
                  </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Projects projects={
                [
                    {
                        title: "CH-Aero",
                        tags: ["Kotlin", "Firebase", "Jetpack Compose"],
                        path: "docs/projects/chaero",
                        bgColor: "bg-orange-100",
                        tagColor: "bg-orange-300",
                        tagTextColor: "text-orange-900",
                        img: "/img/docs/chaero/chaero-app.png"
                    },
                    {
                        title: "IoT Power!",
                        tags: ["CPP", "Embedded", "Nuxt.js", "Internet of Things"],
                        path: "docs/projects/iot-power",
                        bgColor: "bg-blue-100",
                        tagColor: "bg-blue-300",
                        tagTextColor: "text-blue-900",
                        img: "/img/docs/iot-power/thumbnail.png"
                    }, {
                    title: "SmartShip",
                    tags: ["HTML", "CSS", "Vue.js", "Spring", "Java", "MySQL"],
                    path: "docs/projects/smartship",
                    bgColor: "bg-cyan-100",
                    tagColor: "bg-cyan-300",
                    tagTextColor: "text-cyan-900",
                    img: "/img/docs/smartship/smartship_dashboard.png"
                },
                ]
            }/>
        </Layout>
    );
}
