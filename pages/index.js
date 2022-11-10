import React from "react"
import Layout from "../components/Layout"
import { motion } from "framer-motion"
import Link from 'next/link'
import Typical from 'react-typical'
import GithubIcon from "../components/icons/Github"
import LinkedinIcon from "../components/icons/Linkedin"
import XingIcon from "../components/icons/Xing"
import DownloadIcon from "../components/icons/DownloadIcon"

const TypingAnimation = React.memo(
  function TypingAnimation() {
    return (
      <Typical
        loop={3}
        wrapper="p"
        steps={[
          "Html",
          2000,
          "Css - Sass",
          2000,
          "Bootstrap - Tailwind - Semantic UI",
          2000,
          "Responsive Design - Clean Code",
          2000,
          "Git / Github - Linux",
          2000,
          "Figma - Wordpress",
          2000,
          "JavaScript - React - Next.js",
          2000,
          "Node.js - Express.js - MongoDB",
          2000
        ]}
      />
    );
  },
  (props, prevProps) => true
);

export default function Home() {
  return (
    <Layout title={"portfolio"} description={"My Portfolio"}>
      <motion.img
        src="/images/ball-1.svg"
        alt="ball-1"
        className="hidden md:block h-auto absolute top-48 right-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />

      <motion.img
        src="/images/ball-2.svg"
        alt="ball-2"
        className="hidden md:block h-auto absolute bottom-10 left-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <main className="h-full w-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8 ">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal"> Hello, </span> I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
              Sevde ÖRSCELIK
            </h1>

            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>

            {/* Social Accounts */}
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/sevdeorscelik"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <GithubIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/sevde-orscelik/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <LinkedinIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              <motion.a
                href="https://www.xing.com/profile/Sevde_Oerscelik/cv"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <XingIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
            </div>
          </div>

          {/* Code Area */}
          <article className="mt-3 max-w-4xl prose md:mt-4 md:prose-lg dark:prose-dark "> {/* prose otomatik oalrak taglari stillendirir.  */}
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">Todo:</span> You can drag
                    these balloons I'm really in love with them 🎈🎈
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/pp3.jpeg"
                      alt="Me"
                      className="w-16 h-20 rounded-full"
                    />

                    <div className="">
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span>const
                        front
                        <span className="font-bold text-pink-300">end</span> =
                        ["Reactjs", "Nextjs", "JavaScript", "Bootstrap", "Tailwind"];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span>const
                        back
                        <span className="font-bold text-pink-300">end</span> =
                        ["Node.js", "Express.js", "MongoDB"];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span>const
                        zusätz<span className="font-bold text-pink-300">liche</span> =
                        ["Git/Github", "Linux", "Wordpress", "Rest Api", "Figma"];{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-8">
                    <Link href="/projects" legacyBehavior>
                      <a className="transition duration-300">Projects</a>
                    </Link>

                    <a
                      href="/cv-sevde-örscelik.pdf"
                      download="sevde-örscelik-cv"
                      target={"_blank"}
                      rel="noopener noreferrer"
                      className="transition duration-300 flex justify-center no-underline "
                    >
                    <span className="underline">CV</span><span> </span><DownloadIcon className={"w-4 h-5 fill-blue-300 hover:fill-current"} />
                    </a>
                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  )
}
