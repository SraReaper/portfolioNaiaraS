'use client';
import InstagramIcon from '@/components/icons/Instagram-icon';
import LinkedinIcon from '@/components/icons/Linkedin-icon';
import BookIcon from '@/components/icons/book-icon';
import GithubIcon from '@/components/icons/github-icon';
import LangIcon from '@/components/icons/language-icon';
import SchoolIcon from '@/components/icons/school-icon';
import Link from 'next/link';

interface CapacitiesProps {}

export default function Capacities(props: CapacitiesProps) {
  return (
    <header>
      <main className="grid grid-cols gap-6 md:grid-cols-[repeat(3, 1fr)] max-[552px]:grid-rows-2 max-[552px]:grid pb-[60px] md:pb-[0px] sm:gap-6 justify-center md:justify-normal md:gap-0">
        <Link
          href="/"
          className=" 2xl:mx-auto text-center md:text-start col-start-2 row-start-0 md:col-end-1 md:row-start-1 font-serif font-bold sm:text-4xl text-3xl text-secondary "
        >
          Naiara{' '}
          <span className="font-serif font-bold sm:text-4xl text-3xl text-primary ">
            S.
          </span>
        </Link>
        <div className="flex col-start-2 md:row-start-1 row-start-2 pt-[0px] content-center gap-3 xl:gap-5 sm:p-0 md:mx-0 lg:pl-[60px] xl:pl-0 xl:mx-auto">
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
        <ul className="2xl:mx-auto hidden md-block md:mx-auto lg:mx-0 lg:ml-auto col-end-3 row-start-3 md:row-start-1 relative md:flex md:ml-auto md:col-start-3 w-max md:w-auto md:flex-col xl:p-4 sm:p-2 xl:pb-12 pb-0 md:pb-8 bg-transparent md:border md:border-solid border-x-secondary md:rounded gap-1 m-0 ">
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

      <div className="pb-[40px]">
        <h1 className="text-start text-secondary p-0  font-sans font-normal text-4xl  lg:text-5xl">
          My <span className="text-primary">capacities.</span>
        </h1>
        <div className="flex flex-col lg:flex-row  items-center lg:justify-center gap-[20px] mt-[40px]">
          <section className="flex flex-col md:flex-row lg:flex-col gap-[20px] lg:self-start">
            <div className="flex flex-col bg-bgcapacities1 w-[300px] h-[170px] lg:w-[370px] lg:h-[170px] rounded pt-[20px] pl-[20px] pr-[20px] relative">
              <span className="bg-decoration pr-[100px] pl-[120px] md:w-[120px] pt-[20px] pb-[20px] lg:pr-[130px] lg:pl-[100px] xl:pr-[170px] absolute top-[12px] left-[0px] rounded-e"></span>
              <div className="z-10 flex gap-2">
                <h3 className="flex text-secondary pt-1  md:pb-[10px] xl:pt-0  font-serif font-normal z-10 text-sm xl:text-lg uppercase ">
                  Academic Education
                </h3>
                <SchoolIcon />{' '}
              </div>
              <div className="flex flex-col md:flex-row  justify-between">
                <div className="xl:pr-[20px]">
                  <p className=" font-serif font-bold uppercase pt-[28px] md:pt-[35px] text-xs text-text2">
                    Tecnólogo
                  </p>
                  <h4 className="font-sans text-secondary font-normal xl:text-lg text-sm">
                    Gestão de Turismo
                  </h4>
                </div>
                <div className="text-end pt-[15px] md:pt-[40px]">
                  <span className="font-sans text-text2 text-[10px] xl:text-sm md:text-[12px] bg-detailscapacities pt-[10px] pb-[10px] pr-[10px] pl-[10px] ">
                    Anhanguera 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-bgcapacities1 w-[300px] h-[170px] lg:w-[370px] lg:h-[170px] rounded pt-[20px] pl-[20px] pr-[20px] relative">
              <span className="bg-decoration w-[50px] pt-[20px] pb-[20px] pr-[50px] xl:pr-[75px] pl-[100px] absolute top-[12px] left-[0px] rounded-e"></span>
              <div className="z-10 flex gap-2">
                <h3 className="flex text-secondary pt-1 xl:pt-[0px] pb-[10px] font-serif font-normal text-sm xl:text-lg uppercase ">
                  Languages
                </h3>
                <LangIcon />{' '}
              </div>
              <div className="pt-[25px]">
                <div className="flex justify-between pb-[10px]">
                  <p className="font-sans text-secondary font-normal xl:text-lg text-sm ">
                    Português
                  </p>
                  <span className="font-sans text-text2 xl:text-sm text-[10px] md:text-xs bg-detailscapacities md:pr-[30px] xl:pt-[5px] xl:pb-[5px] xl:pr-[29px] xl:pl-[29px] pt-[5px] pb-[5px] pr-[25px] pl-[27px] ">
                    Native
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="font-sans text-secondary font-normal xl:text-lg text-sm">
                    English
                  </p>
                  <span className="font-sans text-text2 xl:text-sm text-[10px] md:text-xs bg-detailscapacities pt-[5px] pb-[5px] xl:pt-[5px] xl:pb-[5px] pr-3 pl-3 xl:pr-[10px] xl:pl-[10px] ">
                    Intermediary
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col  bg-bgcapacities1   md:w-[618px] md:h-max rounded pt-[20px] pl-[20px] pr-[20px] relative">
            <span className="bg-decoration w-[120px] pr-[110px] pl-[120px] pt-[20px] pb-[20px] xl:pr-[175px] xl:pl-[100px] absolute top-[12px] left-[0px] rounded-e"></span>
            <div className="z-10 flex gap-2">
              <h3 className="flex text-secondary pb-[0px] pt-1 xl:pt-0 font-serif font-normal text-sm xl:text-lg uppercase ">
                Professional Courses
              </h3>{' '}
              <BookIcon />
            </div>
            <div className="pt-[30px] pb-[30px]  flex flex-col gap-3">
              <div className="bg-bgcapacities2 p-[16px] rounded flex justify-between pr-[20px] pl-[20px]">
                <a
                  href="https://www.origamid.com/certificate/fe35e5b1"
                  className="xl:pt-[14px] pt-[10px] font-sans  text-secondary hover:text-colorbtn text-sm font-normal  xl:text-base "
                >
                  CSS com SASS
                </a>
                <div>
                  <p className=" font-serif font-bold uppercase text-[10px] xl:text-xs text-text2 text-center pb-[0px] xl:pb-[5px]">
                    Origamid
                  </p>
                  <span className="font-sans text-text2 text-[10px] xl:text-xs bg-detailscapacities pt-[5px] pb-[5px] pr-1 pl-1 xl:pr-[10px] xl:pl-[10px] ">
                    Agosto de 2023
                  </span>
                </div>
              </div>

              <div className="bg-bgcapacities2 p-[16px] rounded flex justify-between pr-[20px] pl-[20px]">
                <a
                  href="https://www.origamid.com/certificate/550f47b5"
                  className=" xl:pt-[13px] pt-[10px] font-sans hover:text-colorbtn text-secondary font-normal text-sm xl:text-base "
                >
                  Redux com React
                </a>
                <div>
                  <p className=" font-serif font-bold uppercase text-[10px] xl:text-xs text-text2 text-center pb-[0px] xl:pb-[5px]">
                    Origamid
                  </p>
                  <span className="font-sans text-text2 text-[10px] xl:text-xs bg-detailscapacities pt-[5px] pb-[5px] pr-1 pl-1 xl:pr-[10px] xl:pl-[10px] ">
                    Agosto de 2023
                  </span>
                </div>
              </div>

              <div className="bg-bgcapacities2 p-[16px] rounded flex justify-between pr-[20px] pl-[20px]">
                <a
                  href="https://www.origamid.com/certificate/960f1891"
                  className="xl:pt-[12px] pt-[10px] font-sans hover:text-colorbtn text-secondary font-normal text-sm xl:text-base "
                >
                  Typescript para iniciantes
                </a>
                <div>
                  <p className=" font-serif font-bold uppercase text-[10px] xl:text-xs text-text2 text-center pb-[0px] xl:pb-[5px]">
                    Origamid
                  </p>
                  <span className="font-sans text-text2 text-[10px] xl:text-xs bg-detailscapacities pt-[5px] pb-[5px] pr-1 pl-1 xl:pr-[10px] xl:pl-[10px] ">
                    Junho de 2023
                  </span>
                </div>
              </div>

              <div className="bg-bgcapacities2 p-[16px] rounded flex justify-between pr-[20px] pl-[20px]">
                <a
                  href="https://www.origamid.com/certificate/ce808037"
                  className="xl:pt-[12px] pt-[10px] font-sans hover:text-colorbtn text-secondary font-normal text-sm xl:text-base "
                >
                  Javascript Completo ES6
                </a>
                <div>
                  <p className=" font-serif font-bold uppercase text-[10px] xl:text-xs text-text2 text-center pb-[0px] xl:pb-[5px]">
                    Origamid
                  </p>
                  <span className="font-sans text-text2 text-[10px] xl:text-xs bg-detailscapacities pt-[5px] pb-[5px] pr-1 pl-1 xl:pr-[10px] xl:pl-[10px] ">
                    Maio de 2023
                  </span>
                </div>
              </div>

              <div className="bg-bgcapacities2 p-[16px] rounded flex justify-between pr-[20px] pl-[20px]">
                <a
                  href="https://www.origamid.com/certificate/c878f366"
                  className="xl:pt-[12px] pt-[10px] font-sans hover:text-colorbtn text-secondary font-normal text-sm xl:text-base "
                >
                  React Completo
                </a>
                <div>
                  <p className=" font-serif font-bold uppercase text-[10px] xl:text-xs text-text2 text-center pb-[0px] xl:pb-[5px]">
                    Origamid
                  </p>
                  <span className="font-sans text-text2 text-[10px] xl:text-xs bg-detailscapacities pt-[5px] pb-[5px] pr-1 pl-1 xl:pr-[10px] xl:pl-[10px] ">
                    Maio de 2023
                  </span>
                </div>
              </div>

              <div className="bg-bgcapacities2 p-[16px] rounded flex justify-between pr-[20px] pl-[20px]">
                <a
                  href="https://www.origamid.com/certificate/caf76c4c"
                  className="xl:pt-[12px] pt-[10px] font-sans hover:text-colorbtn text-secondary font-normal text-sm xl:text-base "
                >
                  HTML e CSS para iniciantes
                </a>
                <div>
                  <p className=" font-serif font-bold uppercase text-text2 text-[10px] xl:text-xs text-center pb-[0px] xl:pb-[5px]">
                    Origamid
                  </p>
                  <span className="font-sans text-text2 text-[10px] xl:text-xs bg-detailscapacities pt-[5px] pb-[5px] pr-1 pl-1 xl:pr-[10px] xl:pl-[10px] ">
                    Fevereiro de 2023
                  </span>
                </div>
              </div>

              <div className="bg-bgcapacities2 p-[16px] rounded flex justify-between pr-[20px] pl-[20px]">
                <a
                  href="https://www.origamid.com/certificate/0f759c1b"
                  className="xl:pt-[12px] pt-[10px] font-sans hover:text-colorbtn text-secondary font-normal text-sm xl:text-base "
                >
                  Ui Design Avançado
                </a>
                <div>
                  <p className=" font-serif font-bold uppercase text-text2 text-[10px] xl:text-xs text-center pb-[0px] xl:pb-[5px]">
                    Origamid
                  </p>
                  <span className="font-sans text-text2 text-[10px] xl:text-xs bg-detailscapacities pt-[5px] pb-[5px] pr-1 pl-1 xl:pr-[10px] xl:pl-[10px] ">
                    Fevereiro de 2023
                  </span>
                </div>
              </div>

              <div className="bg-bgcapacities2 p-[16px] rounded flex justify-between pr-[20px] pl-[20px]">
                <a
                  href="https://www.origamid.com/certificate/c8390489"
                  className="xl:pt-[12px] pt-[10px] font-sans hover:text-colorbtn text-secondary font-normal text-sm xl:text-base "
                >
                  CSS Grid Layout
                </a>
                <div>
                  <p className=" font-serif font-bold uppercase text-text2 text-[10px] xl:text-xs text-center pb-[0px] xl:pb-[5px]">
                    Origamid
                  </p>
                  <span className="font-sans text-text2 text-[10px] xl:text-xs bg-detailscapacities pt-[5px] pb-[5px] pr-1 pl-1 xl:pr-[10px] xl:pl-[10px] ">
                    Fevereiro de 2023
                  </span>
                </div>
              </div>

              <div className="bg-bgcapacities2 p-[16px] rounded flex justify-between pr-[20px] pl-[20px]">
                <a
                  href="https://www.origamid.com/certificate/e3fff39b"
                  className="xl:pt-[12px] pt-[10px] font-sans hover:text-colorbtn text-secondary font-normal text-sm xl:text-base "
                >
                  CSS Flexbox
                </a>
                <div>
                  <p className=" font-serif font-bold uppercase text-text2 text-[10px] xl:text-xs text-center pb-[0px] xl:pb-[5px]">
                    Origamid
                  </p>
                  <span className="font-sans text-text2 text-[10px] xl:text-xs bg-detailscapacities pt-[5px] pb-[5px] pr-1 pl-1 xl:pr-[10px] xl:pl-[10px] ">
                    Fevereiro de 2023
                  </span>
                </div>
              </div>

              <div className="bg-bgcapacities2 p-[16px] rounded flex justify-between pr-[20px] pl-[20px]">
                <a
                  href="https://www.origamid.com/certificate/1bf2027c"
                  className="xl:pt-[12px] pt-[10px] font-sans hover:text-colorbtn text-secondary font-normal text-sm xl:text-base "
                >
                  Ui Design para Iniciantes
                </a>
                <div>
                  <p className=" font-serif font-bold uppercase text-text2 text-[10px] xl:text-xs text-center pb-[0px] xl:pb-[5px]">
                    Origamid
                  </p>
                  <span className="font-sans text-text2 text-[10px] xl:text-xs bg-detailscapacities pt-[5px] pb-[5px] pr-1 pl-1 xl:pr-[10px] xl:pl-[10px] ">
                    Novembro de 2022
                  </span>
                </div>
              </div>

              <div className="bg-bgcapacities2 p-[16px] rounded flex justify-between pr-[20px] pl-[20px]">
                <a
                  href="https://www.origamid.com/certificate/f6915323"
                  className="xl:pt-[12px] pt-[10px] font-sans hover:text-colorbtn text-secondary font-normal text-sm xl:text-base "
                >
                  Web Design Completo
                </a>
                <div>
                  <p className=" font-serif font-bold uppercase text-[10px] xl:text-xs text-text2 text-center pb-[0px] xl:pb-[5px]">
                    Origamid
                  </p>
                  <span className="font-sans text-text2 text-[10px] xl:text-xs bg-detailscapacities pt-[5px] pb-[5px] pr-1 pl-1 xl:pr-[10px] xl:pl-[10px] ">
                    Novembro de 2022
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer className=" text-center bg-transparent">
        <span className=" bg-bg2 w-full h-40 absolute -bottom-50 left-0 -z-20"></span>
        <p className=" py-20 pb-12 font-sans font-bold text-sm xl:text-base text-secondary">
          © 2023 Naiara S. All rights reserved.
        </p>
      </footer>
    </header>
  );
}
