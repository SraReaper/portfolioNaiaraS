import InstagramIcon from '@/components/icons/Instagram-icon';
import LinkedinIcon from '@/components/icons/Linkedin-icon';
import GithubIcon from '@/components/icons/github-icon';
import DetalheIcon from './icons/detalhe-icon';
import Link from 'next/link';

interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <header>
      <main className="md:flex lg:grid lg:grid-cols-[repeat(3,1fr)] max-[552px]:grid-rows-2 max-[552px]:grid gap-[20px] pb-[20px] md:gap-0 md:justify-between flex flex-wrap">
        <Link
          href="/"
          className="row-start-1 row-end-2 font-serif font-bold lg:text-4xl text-3xl text-secondary "
        >
          Naiara{' '}
          <span className="font-serif font-bold lg:text-4xl text-3xl text-primary ">
            S.
          </span>
        </Link>
        <div className="flex lg:row-start-1 row-start-2 col-start-2 content-center gap-3 xl:gap-5 p-0 mx-auto">
          <Link href="capacities">
            <button className=" p-2 cursor-pointer lg:text-base xl:text-lg text-xs text-secondary font-bold font-sans bg-transparent border border-solid border-x-secondary rounded hover:bg-bg2 ">
              Capacities
            </button>
          </Link>
          <Link href="projects">
            <button className=" p-2 cursor-pointer lg:text-base xl:text-lg text-xs text-secondary font-bold font-sans bg-transparent border border-solid border-x-secondary rounded hover:bg-bg2 ">
              Projects
            </button>
          </Link>
          <Link href="aboutme">
            <button className=" p-2 cursor-pointer lg:text-base xl:text-lg text-xs text-secondary font-bold font-sans bg-transparent border border-solid border-x-secondary rounded hover:bg-bg2 ">
              About me
            </button>
          </Link>
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

      <div className="flex mt-[60px] pb-0">
        <h1
          className="xl:max-w-7xl lg:max-w-4xl text-center mx-auto pt-0
         lg:text-6xl font-normal font-sans text-secondary capitalize text-3xl max-w-xl"
        >
          Innovative{' '}
          <span
            className=" text-center mx-auto pt-0
         lg:text-3xl xl:text-4xl font-normal font-serif text-primary uppercase text-xl max-w-xl"
          >
            UI/UX Designer
          </span>{' '}
          &{'  '}
          <span
            className=" text-center mx-auto  pt-0
         lg:text-3xl xl:text-4xl font-normal font-serif text-primary uppercase  text-xl max-w-xl"
          >
            Frontend Developer
          </span>{' '}
          who has a passion for{' '}
          <span
            className=" text-center mx-auto pt-0
         lg:text-3xl xl:text-4xl font-normal font-serif text-primary uppercase text-xl max-w-xl"
          >
            creating.
          </span>
        </h1>
      </div>

      <div className=" lg:flex grid grid-cols-1 grid-rows-none gap-10 pt-[80px] lg:mt-[80px] mb-0 lg:pt-[20px] xl:pt-[60px]  xl:justify-start lg:max-w-max justify-center">
        <span className="lg:bg-black w-32 h-72 md:absolute 2xl:-bottom-[170px] lg:-bottom-[170px] xl:-bottom-[170px] left-0 md:-z-10 mb-[130px] hidden lg:block"></span>
        <img
          src="assets/imgs/code.png"
          alt="imagem ilustrativa"
          className="w-[800px] sm:w-[600px] col-start-1 row-start-1 justify-center mx-auto"
          width={600}
          style={{ objectFit: 'contain' }}
        />
        <div
          className="row-end-1 col-start-1
         justify-center  pb-[0px] pt-[20px] lg:p-2 xl:relative lg:left-72"
        >
          <h2 className=" font-sans mb-0 mx-auto font-normal xl:text-3xl text-xl max-w-xs sm:max-w-lg text-center capitalize text-secondary lg:max-w-md md:text-center">
            I develop interfaces thinking about the best user experience. In
            addition to being visually interesting, technological and
            harmonious.
          </h2>
        </div>
        <span className="absolute xl:right-[130px] xl:bottom-[35px] lg:bottom-[15px] lg:right-[60px] hidden lg:block">
          <DetalheIcon />
        </span>
      </div>

      <footer className=" text-center bg-transparent mb-12 xl:mt-[80px] mt-16 lg:mb-0 pt-0 lg:pb-0 lg:pt-[100px]  xl:pt-[0px]">
        <span className="bg-bg2 w-full lg:-bottom-[390px] xl:h-[480px] h-[460px] absolute  xl:-bottom-[390px] left-0 -z-20 hidden lg:block"></span>
        <p className=" lg:pt-[0px] lg:pb-[40px] xl:pt-[40px] pt-[0px]  font-sans font-bold md:text-base text-xs text-secondary">
          © 2023 Naiara S. All rights reserved.
        </p>
      </footer>
    </header>
  );
}
