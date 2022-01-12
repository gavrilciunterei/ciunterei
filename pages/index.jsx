import Container from '../components/Container';
import { BiBriefcase, BiBookOpen, BiPhone } from 'react-icons/bi';
import { IoMailOutline } from 'react-icons/io5';
import education from '../static/education.json';
import work from '../static/work.json';
import { useRef } from 'react';

function Index() {
  const refContainer = useRef(null);

  return (
    <Container refDownload={refContainer}>
      <section className="container mx-auto px-5 mt-10">
        <div className="flex flex-col items-center py-8 ">
          <div className="flex flex-col w-full mb-12 text-left ">
            <div className="w-full mx-auto lg:w-3/4 border border-gray-300 rounded-sm shadow-lg ">
              <div
                ref={refContainer}
                className="p-2 sm:p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-7  "
              >
                <section className="flex justify-end items-center ">
                  <div className="grid justify-items-end">
                    <h1 className="text-4xl xl:text-5xl font-extrabold">
                      GAVRIL CIUNTEREI
                    </h1>
                    <p className="text-xl mt-5">Full Stack Developer</p>
                    <div className="flex flex-row  justify-center items-center">
                      <BiPhone size={20} className="mr-3 " />
                      <p className="text-sm">+34 747 856 889</p>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                      <IoMailOutline size={20} className="mr-3" />
                      <p className="text-sm ">gavriltaller@gmail.com</p>
                    </div>
                  </div>
                </section>
                <section>
                  {/* <!-- work experiences --> */}
                  <div className="mt-6 pb-1 border-b flex flex-row items-center">
                    <BiBriefcase size={30} className="mr-3" />
                    <h2 className="text-2xl font-semibold ">
                      Work Experiences
                    </h2>
                  </div>

                  <ul className="mt-2 ">
                    {work.map((data, index) => {
                      return (
                        <li className="pt-2" key={index + 'job'}>
                          <div className="flex justify-between">
                            <p className="text-base font-bold">
                              {data.companyName}
                            </p>
                            <p className="text-sm">{data.date}</p>
                          </div>

                          <div className="flex justify-between">
                            <p className="text-base"> {data.jobTitle}</p>
                            <p className="text-xs"> {data.appName}</p>
                          </div>

                          <ul className="list-disc ml-5 max-w-lg">
                            {data.description.map((description, inde) => {
                              return (
                                <li key={inde + 'description'}>
                                  <p className="text-justify text-xs">
                                    {description}
                                  </p>
                                </li>
                              );
                            })}
                          </ul>

                          <div className="container  max-w-2xl flex flex-wrap my-1 ">
                            {data.tags.map((tag, ind) => {
                              return (
                                <div key={ind + 'tag'}>
                                  <h3 className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded mb-1">
                                    {tag}
                                  </h3>
                                </div>
                              );
                            })}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </section>
                <section>
                  {/* <!-- education --> */}
                  <div className="mt-6 pb-1 border-b flex flex-row items-center">
                    <BiBookOpen size={30} className="mr-3" />
                    <h2 className="text-2xl font-semibold ">Education</h2>
                  </div>
                  <ul className="mt-2">
                    {education.map((data, index) => {
                      return (
                        <li className="pt-2" key={index}>
                          <div className="flex justify-between">
                            <p className="text-base font-semibold">
                              {data.school}
                            </p>
                            <p className="text-sm"> {data.date}</p>
                          </div>

                          <div className="flex justify-between">
                            <p className="text-sm">{data.title}</p>
                            <p className="text-sm">{data.city}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Index;
