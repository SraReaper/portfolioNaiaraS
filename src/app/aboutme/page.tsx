import InstagramIcon from '@/components/icons/Instagram-icon';
import LinkedinIcon from '@/components/icons/Linkedin-icon';
import { ApiIcon } from '@/components/icons/api-icon';
import { CssIcon } from '@/components/icons/css-icon';
import { DesignIcon } from '@/components/icons/design-icon';
import { FigmaIcon } from '@/components/icons/figma-icon';
import { GitIcon } from '@/components/icons/git-icon';
import GithubIcon from '@/components/icons/github-icon';
import { GraphIcon } from '@/components/icons/graphql-icon';
import { HtmlIcon } from '@/components/icons/html-icon';
import JIcon from '@/components/icons/javascript-icon';
import JqIcon from '@/components/icons/jquery-icon';
import LoIcon from '@/components/icons/lodash-icon';
import NextIcon from '@/components/icons/nextjs-icon';
import NodeIcon from '@/components/icons/nodejs-icon';
import NpmIcon from '@/components/icons/npm-icon';
import ReactIcon from '@/components/icons/react-icon';
import ReduxIcon from '@/components/icons/redux-icon';
import SassIcon from '@/components/icons/sass-icon';
import TailIcon from '@/components/icons/tailwindcss-icon';
import TypeIcon from '@/components/icons/typescript-icon';
import ViteIcon from '@/components/icons/vite-icon';

interface AboutMeProps {}

export default function AboutMe(props: AboutMeProps) {
  return (
    <header>
      <main className="md:flex lg:grid lg:grid-cols-[repeat(3,1fr)] max-[552px]:grid-rows-2 max-[552px]:grid gap-[20px] pb-[20px] md:gap-0 md:justify-between flex flex-wrap">
        <a
          href="/"
          className="row-start-1 row-end-2 font-serif font-bold lg:text-4xl text-3xl text-secondary "
        >
          Naiara{' '}
          <span className="font-serif font-bold lg:text-4xl text-3xl text-primary ">
            S.
          </span>
        </a>
        <div className="flex lg:row-start-1 row-start-2 col-start-2 content-center gap-3 xl:gap-5 p-0 mx-auto">
          <a href="capacities">
            <button className=" p-2 cursor-pointer lg:text-base xl:text-lg text-xs text-secondary font-bold font-sans bg-transparent border border-solid border-x-secondary rounded hover:bg-bg2 ">
              Capacities
            </button>
          </a>
          <a href="projects">
            <button className=" p-2 cursor-pointer lg:text-base xl:text-lg text-xs text-secondary font-bold font-sans bg-transparent border border-solid border-x-secondary rounded hover:bg-bg2 ">
              Projects
            </button>
          </a>
          <a href="aboutme">
            <button className=" p-2 cursor-pointer lg:text-base xl:text-lg text-xs text-secondary font-bold font-sans bg-transparent border border-solid border-x-secondary rounded hover:bg-bg2 ">
              About me
            </button>
          </a>
        </div>
        <ul className="lg:ml-auto row-start-1 row-end-1 relative flex ml-auto col-start-3 w-max md:w-auto md:flex-col xl:p-4 p-2 xl:pb-12 pb-8 bg-transparent md:border md:border-solid border-x-secondary md:rounded gap-1 m-0 ">
          <li>
            <a href="https://github.com/SraReaper">
              <GithubIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/naiara-c-41919b1b5/">
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sra.reaper/">
              <InstagramIcon />
            </a>
          </li>
          <button className="md:absolute md:-translate-x-1/2 md:rotate-90 xl:text-lg text-sm text-secondary font-sans font-bold bg-primary xl:px-3 px-3 xl:py-1 py-1 rounded md:w-max xl:top-[175px] top-[155px] lg:left-1/2 left-[24px] hidden md:block ">
            Contact me
          </button>
        </ul>
      </main>
      <section className="grid grid-cols-[600px] pt-[60px] md:pt-[0px] justify-center gap-5">
        <div className="grid grid-column justify-center text-center place-items-center relative bottom-12">
          <img
            src="assets/imgs/black.png"
            alt="1"
            className="rounded overflow-hidden"
          />
          <h3 className="text-secondary pt-5 font-serif font-bold text-lg md:text-xl">
            Hi👋
          </h3>
          <p className="text-secondary font-serif md:max-w-none max-w-sm text-base md:text-lg font-bold pt-1 ">
            Welcome to my Portfolio, my name is Naiara. I made this site as an
            autobiography of my projects and skills as a developer. Always
            determined, I seek to achieve my goals clearly by improving myself
            more and more and acquiring more knowledge for a promising career.
          </p>
        </div>

        <div className="bg-bg2 pt-[40px] sm:pb-8 mb-[40px] pb-[25px] mt-[25px] md:pl-9 md:pr-[0px] rounded relative -top-7">
          <span
            className="bg-decoration absolute hidden sm:block pl-44 sm:pr-2 pb-5 pt-5 -left-0 top-5
         rounded-br rounded-tr"
          ></span>
          <h3 className="font-serif font-semibold pl-[60px] md:pl-0 ml-[20px] sm:ml-0 text-primary sm:text-white text-start text-2xl mb-3 relative z-10 bottom-4">
            My Skills
          </h3>
          <ul
            className="grid grid-cols-3 gap-2 md:mr-0 mr-2  sm:grid-cols-4 
          ml-[70px] sm:ml-[20px] md:ml-0 place-items-start sm:gap-0 font-sans text-white font-normal text-sm"
          >
            <li className="flex gap-2 pb-2 sm:pb-4">
              <HtmlIcon />
              <p>HTML</p>
            </li>
            <li className="flex gap-2 pb-2 sm:pb-4">
              <CssIcon />
              <p>CSS</p>
            </li>
            <li className="flex gap-2 pb-2 sm:pb-4">
              <TailIcon />
              <p>Tailwind CSS</p>
            </li>
            <li className="flex gap-2 pb-2 sm:pb-4">
              <SassIcon />
              <p>Sass</p>
            </li>
            <li className="flex gap-2  pb-2 sm:pb-4">
              <JIcon />
              <p>JavaScript</p>
            </li>
            <li className="flex gap-2 pb-2 sm:pb-4">
              <ReactIcon />
              <p>React</p>
            </li>
            <li className="flex gap-2 pb-2 sm:pb-4">
              <TypeIcon />
              <p>TypeScript</p>
            </li>
            <li className="flex gap-2 pb-2 sm:pb-4">
              <ReduxIcon />
              <p>Redux</p>
            </li>
            <li className="flex gap-2 pb-2 sm:pb-4">
              <NodeIcon />
              <p>NodeJs</p>
            </li>
            <li className="flex gap-2 pb-2 sm:pb-4">
              <NextIcon />
              <p>NextJs</p>
            </li>
            <li className="flex gap-2 pb-2 sm:pb-4">
              <FigmaIcon />
              <p>Figma</p>
            </li>
            <li className="flex gap-2 pb-2 sm:pb-4">
              <GitIcon />
              <p>Git</p>
            </li>
            <li className="flex gap-2 pb-2 sm:pb-4">
              <NpmIcon />
              <p>Npm</p>
            </li>
            <li className="flex gap-2 pb-2 sm:pb-4">
              <ViteIcon />
              <p>Vite</p>
            </li>
            <li className="flex gap-2 pb-2 sm:pb-4">
              <ApiIcon />
              <p>Api Rest</p>
            </li>
            <li className="flex gap-2 pb-2 sm:pb-4">
              <GraphIcon />
              <p>GraphQL</p>
            </li>
            <li className="flex gap-2 pb-2 sm:pb-4">
              <LoIcon />
              <p>Lodash.js</p>
            </li>
            <li className="flex gap-2">
              <JqIcon />
              <p>JQuery</p>
            </li>
            <li className="flex gap-2">
              <DesignIcon />
              <p>Ui Design</p>
            </li>
            <li className="flex gap-2">
              <DesignIcon />
              <p>Web Design</p>
            </li>
          </ul>
        </div>
      </section>
      <footer className=" text-center bg-transparent">
        <span className=" bg-bg2 w-full h-40 absolute -bottom-50 left-0 -z-20"></span>
        <p className=" py-20 pb-12 font-sans font-bold text-base text-secondary">
          © 2023 Naiara S. All rights reserved.
        </p>
      </footer>
    </header>
  );
}
