import { BiBriefcase, BiBookOpen, BiPhone } from 'react-icons/bi';
import { IoMailOutline } from 'react-icons/io5';
import { useRef } from 'react';
import Container from '../components/Container';
import education from '../static/education.json';
import work from '../static/work.json';

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
                    <h1 className="text-2xl xl:text-3xl font-extrabold">
                      GAVRIL CIUNTEREI
                    </h1>
                    <div className="flex flex-row  mt-2 justify-center items-center">
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
                      Experiencia laboral
                    </h2>
                  </div>

                  <ul className="mt-2">
                    {work.map((data, index) => (
                      <div className="pt-2" key={`${index}job`}>
                        <div className="flex justify-between">
                          <p className="text-base font-bold ">
                            {data.companyName}
                          </p>
                          <p className="text-sm">{data.date}</p>
                        </div>

                        <div className="flex justify-between">
                          <p className="text-base"> {data.jobTitle}</p>
                          <div>
                            {data.appName.map((apps, indexApp) => (
                              <p className="text-xs" key={indexApp}>
                                {apps}
                              </p>
                            ))}
                          </div>
                        </div>

                        <ul className="list-disc ml-5">
                          {data.description.map((description, inde) => (
                            <li key={`${inde}description`}>
                              <p className="text-justify text-sm">
                                {description}
                              </p>
                            </li>
                          ))}
                        </ul>

                        <div className="container  flex flex-wrap my-1 ">
                          {data.tags.map((tag, ind) => (
                            <div key={`${ind}tag`}>
                              <h3 className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded mb-1">
                                {tag}
                              </h3>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </ul>
                </section>
                <section>
                  {/* <!-- education --> */}
                  <div className="mt-6 pb-1 border-b flex flex-row items-center">
                    <BiBookOpen size={30} className="mr-3" />
                    <h2 className="text-2xl font-semibold ">Educación</h2>
                  </div>
                  <ul className="mt-2">
                    {education.map((data, index) => (
                      <div className="pt-2" key={index}>
                        <div className="flex justify-between">
                          <p className="text-sm font-semibold">{data.school}</p>
                          <p className="text-xs"> {data.date}</p>
                        </div>

                        <div className="flex justify-between">
                          <p className="text-xs">{data.title}</p>
                          <p className="text-xs">{data.city}</p>
                        </div>
                      </div>
                    ))}
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
