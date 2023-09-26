import InstagramIcon from '@/components/icons/Instagram-icon';
import LinkedinIcon from '@/components/icons/Linkedin-icon';
import ButtonIcon from '@/components/icons/button-icon';
import GithubIcon from '@/components/icons/github-icon';

interface ProjectsProps {}

export default function Projects(props: ProjectsProps) {
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
          <a href="/capacities">
            <button className=" p-2 cursor-pointer lg:text-base xl:text-lg text-xs text-secondary font-bold font-sans bg-transparent border border-solid border-x-secondary rounded hover:bg-bg2 ">
              Capacities
            </button>
          </a>
          <a href="/projects">
            <button className=" p-2 cursor-pointer lg:text-base xl:text-lg text-xs text-secondary font-bold font-sans bg-transparent border border-solid border-x-secondary rounded hover:bg-bg2 ">
              Projects
            </button>
          </a>
          <a href="/aboutme">
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

      <div className="text-start text-secondary p-0  font-sans font-normal text-4xl  xl:text-5xl">
        <h1 className="text-secondary pl-3">
          My <span className=" text-primary">projects.</span>
        </h1>
      </div>

      <section className="2xl:flex grid justify-center pt-[60px] 2xl:pt-5 pb-[40px] 2xl:pb-[60px] w-7/12 mx-auto 2xl:gap-[20px] gap-[40px] text-center">
        <div>
          <div>
            <a href="https://srareaper.github.io/dogs/">
              <img
                src="/assets/imgs/dogs.png"
                width="500px"
                alt="image dogs"
                className="rounded w-[500px] 2xl:w-[310px] 2xl:h-[250px]border-2 border-solid border-transparent hover:border-colorbtn cursor-pointer 2xl:hover:border-transparent "
              />{' '}
            </a>
          </div>
          <a href="https://srareaper.github.io/dogs/">
            <button className="hidden 2xl:block  bg-bg2 w-[310px] h-[100px] absolute bottom-[370px] left-[441px] rounded-b text-white font-serif font-bold text-2xl hover:bg-decoration cursor-pointer">
              Dogs
            </button>
            <span className="hidden 2xl:block text-detailscapacities bg-white p-4 rounded z-20 absolute top-[550px] left-[498px] text-xs ">
              JavaScript, React, Api e CSS
            </span>
          </a>
        </div>
        <div>
          <div>
            <a href="https://srareaper.github.io/animais-fantasticos/">
              <img
                src="/assets/imgs/animaisf.png"
                width="500px"
                alt="image animais fantásticos"
                className="rounded w-[500px] 2xl:w-[310px] 2xl:h-[250px] border-2 border-solid border-transparent hover:border-colorbtn cursor-pointer 2xl:hover:border-transparent "
              />{' '}
            </a>
          </div>

          <a href="https://srareaper.github.io/animais-fantasticos/">
            <button className="hidden 2xl:block 2xl:bg-bg2 2xl:text-white  2xl:hover:bg-decoration   w-[306px] h-[100px] absolute bottom-[370px]  left-[773px]  rounded-b font-serif font-bold text-2xl cursor-pointer">
              {' '}
              Animais Fantásticos
            </button>
            <span className="hidden 2xl:block text-detailscapacities bg-white p-4 rounded z-20 absolute top-[550px] left-[839px] text-xs ">
              JavaScript, HTML e CSS
            </span>
          </a>
        </div>
        <div>
          <div>
            <a href="https://srareaper.github.io/bikcraft/">
              <img
                src="/assets/imgs/bikcraft.png"
                width="500px"
                alt="image bikcraft"
                className="rounded w-[500px] 2xl:w-[310px] 2xl:h-[250px] relative -top-[2px] border-2 border-solid border-transparent hover:border-colorbtn cursor-pointer 2xl:hover:border-transparent"
              />
            </a>
          </div>

          <a href="https://srareaper.github.io/bikcraft/">
            <button className=" hidden 2xl:block 2xl:bg-bg2 2xl:text-white   w-[306px] h-[100px] absolute 2xl:bottom-[370px] 2xl:left-[1103px] rounded-b text-white font-serif font-bold text-2xl 2xl:hover:bg-decoration cursor-pointer">
              Bikcraft
            </button>
          </a>

          <span className="hidden 2xl:block text-detailscapacities bg-white p-4 rounded z-20 absolute top-[550px] left-[1169px] text-xs ">
            JavaScript, HTML e CSS
          </span>
        </div>
      </section>

      <section className="2xl:flex grid 2xl:pt-5 pb-[80px] 2xl:pb-[120px] w-7/12 mx-auto gap-[40px] 2xl:gap-[20px] justify-center">
        <div>
          <div>
            <a href="https://srareaper.github.io/minidogs/">
              <img
                src="/assets/imgs/minidg.png"
                alt="image minidogs"
                width="500px"
                className="rounded w-[500px] 2xl:w-[310px] 2xl:h-[250px] relative -top-[2px] border-2 border-solid border-transparent hover:border-colorbtn cursor-pointer 2xl:hover:border-transparent "
              />{' '}
            </a>
          </div>

          <a href="https://srareaper.github.io/minidogs/">
            <button className="hidden 2xl:block bg-bg2 text-white  hover:bg-decoration  absolute  w-[306px] h-[100px] bottom-[40px] left-[608px] rounded-b  font-serif font-bold text-2xl  cursor-pointer">
              MiniDogs
            </button>
            <span className="hidden 2xl:block text-detailscapacities bg-white p-4 rounded z-20 absolute top-[880px] left-[662px] text-xs">
              JavaScript, React, Redux e CSS
            </span>
          </a>
        </div>
        <div>
          <div>
            <a href="https://srareaper.github.io/wildbeast/">
              <img
                src="/assets/imgs/wildb.png"
                alt="image wildbeast"
                width="500px"
                className="rounded w-[500px] 2xl:w-[310px] 2xl:h-[250px] relative -top-[2px] border-2 border-solid border-transparent hover:border-colorbtn cursor-pointer 2xl:hover:border-transparent "
              />{' '}
            </a>
          </div>

          <a href="https://srareaper.github.io/wildbeast/">
            <button
              className=" hidden 2xl:block
            bg-bg2 w-[306px] h-[100px] absolute bottom-[40px] left-[938px] rounded-b text-white font-serif font-bold text-2xl hover:bg-decoration cursor-pointer"
            >
              WildBeast{' '}
            </button>{' '}
            <span className="hidden 2xl:block text-detailscapacities bg-white p-4 rounded z-20 absolute top-[880px] left-[1043px] text-xs">
              HTML e CSS
            </span>
          </a>
        </div>
      </section>
      <div className="flex justify-center pb-[60px]">
        <a href="/">
          <ButtonIcon />
        </a>
      </div>
      <footer className=" text-center bg-transparent">
        <span className=" bg-bg2 w-full h-40 absolute -bottom-50 left-0 -z-20"></span>
        <p className=" py-20 pb-12 font-sans font-bold text-base text-secondary">
          © 2023 Naiara S. All rights reserved.
        </p>
      </footer>
    </header>
  );
}
