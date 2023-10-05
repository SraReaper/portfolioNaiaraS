import InstagramIcon from '@/components/icons/Instagram-icon';
import LinkedinIcon from '@/components/icons/Linkedin-icon';
import GithubIcon from '@/components/icons/github-icon';
import DetalheIcon from './icons/detalhe-icon';
import Link from 'next/link';

interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <header>
      <main className="grid grid-cols gap-6 md:grid-cols-[repeat(3, 1fr)] max-[552px]:grid-rows-2 max-[552px]:grid pb-[60px] md:pb-[0px] sm:gap-6 justify-center md:justify-normal 2xl:mx-auto md:gap-0">
        <Link
          href="/"
          className="text-center md:text-start col-start-2 row-start-0 md:col-end-1 md:row-start-1 font-serif font-bold sm:text-4xl text-3xl text-secondary "
        >
          Naiara{' '}
          <span className="font-serif font-bold sm:text-4xl text-3xl text-primary ">
            S.
          </span>
        </Link>
        <div className="flex col-start-2 md:row-start-1 row-start-2 pt-[0px] content-center gap-3 xl:gap-5 sm:p-0 md:mx-0 lg:pl-[60px] xl:pl-0 xl:mx-auto 2xl:mx-96 2xl:pl-[35px]">
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
        <ul className="hidden md-block md:mx-auto lg:mx-0 lg:ml-auto col-end-3 row-start-3 md:row-start-1 relative md:flex md:ml-auto md:col-start-3 w-max md:w-auto md:flex-col xl:p-4 sm:p-2 xl:pb-12 pb-0 md:pb-8 bg-transparent md:border md:border-solid border-x-secondary md:rounded gap-1 m-0 ">
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

      <div className="flex mt-0 sm:mt-[10px] pb-0">
        <h1
          className="xl:max-w-6xl 2xl:max-w-4xl md:max-w-lg lg:max-w-3xl text-center mx-auto pt-0 xl:text-6xl
         md:text-5xl sm:text-4xl font-normal font-sans text-secondary capitalize text-3xl max-w-xl"
        >
          Innovative{' '}
          <span
            className=" text-center mx-auto pt-0
         sm:text-2xl md:text-3xl xl:text-4xl font-normal font-serif text-primary uppercase text-xl max-w-xl"
          >
            UI/UX Designer
          </span>{' '}
          &{'  '}
          <span
            className=" text-center mx-auto  pt-0
            sm:text-2xl md:text-3xl xl:text-4xl font-normal font-serif text-primary uppercase  text-xl max-w-xl"
          >
            Frontend Developer
          </span>{' '}
          who has a passion for{' '}
          <span
            className=" text-center mx-auto pt-0
            sm:text-2xl xl:text-4xl md:text-3xl font-normal font-serif text-primary uppercase text-xl max-w-xl"
          >
            creating.
          </span>
        </h1>
      </div>

      <div className=" lg:flex grid grid-cols-1 grid-rows-none gap-10 pt-[40px] lg:pt-[20px] lg:mt-[80px] mb-0  xl:pt-[60px]  xl:justify-start lg:max-w-max justify-center">
        <span className="lg:bg-black w-32 h-72 md:absolute lg:-bottom-[180px] xl:-bottom-[160px] left-0 md:-z-10 mb-[130px] hidden lg:block 2xl:hidden"></span>
        <span className="2xl:bg-black w-[220px] h-72 2xl:absolute 2xl:-bottom-[225px] left-0 md:-z-10 mb-[130px] hidden 2xl:block "></span>
        <img
          src="/assets/imgs/code.png"
          alt="imagem ilustrativa"
          className="w-[600px] sm:w-[600px] col-start-1 row-start-1 justify-center mx-auto 2xl:relative 2xl:left-[140px] "
          width={600}
          style={{ objectFit: 'contain' }}
        />
        <div
          className="row-end-1 col-start-1
         justify-center pb-[0px] sm:pt-[20px] lg:p-2 xl:relative lg:left-72"
        >
          <h2 className=" font-sans mb-0 mx-auto font-normal xl:text-2xl text-base md:text-xl sm:max-w-xl xl:max-w-xs xl:relative xl:right-[140px] 2xl:max-w-md 2xl:right-[140px] 2xl:bottom-[-40px] text-center capitalize text-secondary lg:max-w-md md:text-center">
            I develop interfaces thinking about the best user experience. In
            addition to being visually interesting, technological and
            harmonious.
          </h2>
        </div>
        <span className="absolute 2xl:bottom-[15px] 2xl:right-[145px] xl:right-[40px] xl:bottom-[50px] lg:bottom-[95px] lg:right-[0px] hidden lg:block">
          <DetalheIcon />
        </span>
      </div>

      <footer className="text-center bg-transparent mb-12 xl:mt-[80px] mt-16 lg:mb-0 pt-0 lg:pb-0 lg:pt-[50px]  xl:pt-[0px]">
        <span className="bg-bg2 w-full lg:-bottom-[270px] lg:h-[420px] 2xl:h-[480px] xl:h-[440px] h-[460px] absolute 2xl:-bottom-[405px] xl:-bottom-[330px] left-0 -z-20 hidden lg:block"></span>
        <p className=" lg:pt-[0px] m-0 lg:pb-[30px] 2xl:pt-[70px] xl:pt-[40px]  pt-[0px]  font-sans font-bold md:text-base text-xs text-secondary">
          © 2023 Naiara S. All rights reserved.
        </p>
      </footer>
    </header>
  );
}
