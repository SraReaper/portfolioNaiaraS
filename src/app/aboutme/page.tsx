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
import Link from 'next/link';

interface AboutMeProps {}

export default function AboutMe(props: AboutMeProps) {
  return (
    <header>
      <main className="grid grid-cols gap-6 lg:grid-cols-[repeat(3, 1fr)] max-[552px]:grid-rows-2 max-[552px]:grid pb-[60px] md:pb-[110px] sm:gap-6 justify-center md:justify-normal 2xl:mx-auto md:gap-0">
        <Link
          href="/"
          className="text-center md:text-start col-start-2 row-start-0 md:col-end-1 md:row-start-1 font-serif font-bold sm:text-4xl text-3xl text-secondary "
        >
          Naiara{' '}
          <span className="font-serif font-bold sm:text-4xl text-3xl text-primary ">
            S.
          </span>
        </Link>
        <div className="flex col-start-2 row-start-2 md:row-start-1 pt-[0px] content-center gap-3 xl:gap-5 sm:p-0 lg:mx-0 md:mx-auto lg:pl-[65px] xl:pl-0 xl: xl:mx-auto 2xl:pr-[80px]">
          <Link href="capacities">
            <button className=" p-2 cursor-pointer sm:text-[12px] md:text-[14px] xl:text-base  text-[10px] text-secondary font-bold font-sans bg-transparent border border-solid border-x-secondary rounded hover:bg-bg2 ">
              Capacities
            </button>
          </Link>
          <Link href="projects">
            <button className=" p-2 cursor-pointer xl:text-base md:text-[14px] sm:text-[12px] text-[10px] text-secondary font-bold font-sans bg-transparent border border-solid border-x-secondary rounded hover:bg-bg2 ">
              Projects
            </button>
          </Link>
          <Link href="aboutme">
            <button className=" p-2 cursor-pointer md:text-[14px] xl:text-base sm:text-[12px] text-[10px] text-secondary font-bold font-sans bg-transparent border border-solid border-x-secondary rounded hover:bg-bg2 ">
              About me
            </button>
          </Link>
        </div>
        <ul className="hidden md-block md:mx-0 lg:ml-auto col-end-3 row-start-3 md:row-start-1 relative md:flex md:ml-auto md:col-start-3 w-max md:w-auto lg:flex-col xl:p-4 sm:p-2 xl:pb-12 pb-0 lg:pb-8 bg-transparent lg:border lg:border-solid border-x-secondary md:rounded gap-1 m-0 ">
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
          <button className=" md:absolute md:-translate-x-1/2 md:rotate-90 xl:text-lg text-sm text-secondary font-sans font-bold bg-primary xl:px-3 px-3 xl:py-1 py-1 rounded md:w-max xl:top-[175px] top-[155px] lg:left-1/2 left-[24px] hidden lg:block ">
            Contact me
          </button>
        </ul>
      </main>
      <section className="grid grid-cols-[600px] pt-[60px] md:pt-[0px] justify-center gap-5">
        <div className="grid grid-column justify-center text-center place-items-center relative bottom-12">
          <img
            src="/assets/imgs/black.png"
            alt="1"
            className="w-[300px] sm:w-auto rounded overflow-hidden"
          />
          <h3 className="text-secondary pt-5 font-serif font-bold text-lg md:text-xl">
            Hi👋
          </h3>
          <p className="text-secondary font-serif sm:max-w-lg max-w-[300px] text-base md:text-lg font-bold pt-1 ">
            Welcome to my Portfolio, my name is Naiara. I made this site as an
            autobiography of my projects and skills as a developer. Always
            determined, I seek to achieve my goals clearly by improving myself
            more and more and acquiring more knowledge for a promising career.
          </p>
        </div>

        <div className="bg-bg2 sm:pt-[40px] sm:mb-[40px] pb-[20px] pt-[10px] pl-[20px] sm:pl-[10px] sm:pr-[10px] mb-10 sm:mt-[25px] w-[350px] sm:w-auto place-self-center md:pl-[30px] md:pr-[30px] rounded sm:relative sm:-top-7">
          <span
            className="bg-decoration absolute hidden sm:block pl-44 sm:pr-2 pb-5 pt-5 -left-0 top-5
         rounded-br rounded-tr"
          ></span>
          <h3 className="font-serif font-semibold pt-[20px]  md:pl-0 ml-[20px] sm:ml-0 sm:pl-[20px] sm:pt-[0px] text-primary sm:text-white sm:text-start text-2xl mb-3 relative z-10 bottom-4">
            My Skills
          </h3>
          <ul
            className="grid grid-cols-[repeat(2,120px)]  md:mr-0 sm:mr-[10px] gap-[10px] sm:grid-cols-4 justify-center
          ml-[0px] sm:ml-[10px] md:ml-0 sm:place-items-start sm:gap-[10px] font-sans text-white font-normal text-sm"
          >
            <li className=" flex gap-2 pb-2  sm:pb-4">
              <HtmlIcon />
              <p>HTML</p>
            </li>
            <li className="flex  gap-2 pb-2 sm:pb-4">
              <CssIcon />
              <p>CSS</p>
            </li>
            <li className="flex  gap-2 pb-2 sm:pb-4">
              <TailIcon />
              <p>Tailwind CSS</p>
            </li>
            <li className="flex sm:pl-[10px] gap-2 pb-2 sm:pb-4">
              <SassIcon />
              <p>Sass</p>
            </li>
            <li className="flex  gap-2  pb-2 sm:pb-4">
              <JIcon />
              <p>JavaScript</p>
            </li>
            <li className="flex  gap-2 pb-2 sm:pb-4">
              <ReactIcon />
              <p>React</p>
            </li>
            <li className="flex  gap-2 pb-2 sm:pb-4">
              <TypeIcon />
              <p>TypeScript</p>
            </li>
            <li className="flex sm:pl-[10px] gap-2 pb-2 sm:pb-4">
              <ReduxIcon />
              <p>Redux</p>
            </li>
            <li className="flex  gap-2 pb-2 sm:pb-4">
              <NodeIcon />
              <p>NodeJs</p>
            </li>
            <li className="flex  gap-2 pb-2 sm:pb-4">
              <NextIcon />
              <p>NextJs</p>
            </li>
            <li className="flex  gap-2 pb-2 sm:pb-4">
              <FigmaIcon />
              <p>Figma</p>
            </li>
            <li className="flex sm:pl-[10px] gap-2 pb-2 sm:pb-4">
              <GitIcon />
              <p>Git</p>
            </li>
            <li className="flex  gap-2 pb-2 sm:pb-4">
              <NpmIcon />
              <p>Npm</p>
            </li>
            <li className="flex  gap-2 pb-2 sm:pb-4">
              <ViteIcon />
              <p>Vite</p>
            </li>
            <li className="flex  gap-2 pb-2 sm:pb-4">
              <ApiIcon />
              <p>Api Rest</p>
            </li>
            <li className="flex sm:pl-[10px] gap-2 pb-2 sm:pb-4">
              <GraphIcon />
              <p>GraphQL</p>
            </li>
            <li className="flex  gap-2 pb-2 sm:pb-4">
              <LoIcon />
              <p>Lodash.js</p>
            </li>
            <li className="flex gap-2">
              <JqIcon />
              <p>JQuery</p>
            </li>
            <li className="flex  gap-2">
              <DesignIcon />
              <p>Ui Design</p>
            </li>
            <li className="flex sm:pl-[10px]  gap-2">
              <DesignIcon />
              <p>Web Design</p>
            </li>
          </ul>
        </div>
      </section>
      <footer className=" text-center bg-transparent">
        <span className=" bg-bg2 w-full h-40 absolute -bottom-50 left-0 -z-20"></span>
        <p className=" py-20 pb-12 font-sans font-bold text-sm sm:text-base text-secondary">
          © 2023 Naiara S. All rights reserved.
        </p>
      </footer>
    </header>
  );
}
