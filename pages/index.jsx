import Container from '../components/Container';
import { BiBriefcase, BiBookOpen } from 'react-icons/bi';
import education from '../static/education.json';
import work from '../static/work.json';
import { useRef } from 'react';

function Index() {
  const refContainer = useRef(null);

  return (
    <Container refDownload={refContainer}>
      <div className="flex justify-center content-center">
        <div
          className="border border-gray-300 rounded-sm shadow-lg py-10 px-10  mt-10 mb-10 max-w-7xl"
          ref={refContainer}
        >
          <main className="flex">
            <div className="w-max">
              <div className="flex justify-between items-center">
                <div>
                  <div className="bg-cover bg-no-repeat rounded-full h-52 w-52"></div>
                </div>
                <div className="grid justify-items-end">
                  <h1 className="text-7xl font-extrabold">GAVRIL CIUNTEREI</h1>
                  <p className="text-xl mt-5">Full-Stack Developer</p>
                </div>
              </div>
              <section>
                {/* <!-- work experiences --> */}
                <div className="mt-6 pb-1 border-b flex flex-row items-center">
                  <BiBriefcase size={30} className="mr-3" />
                  <h2 className="text-2xl font-semibold ">Work Experiences</h2>
                </div>
                <ul className="mt-2 ">
                  {work.map((data, index) => {
                    return (
                      <li className="pt-2" key={index + 'job'}>
                        <div className="flex justify-between">
                          <p className="text-base font-bold">
                            {data.companyName}
                          </p>
                          <p className="text-sm"> {data.date}</p>
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

                        <div className="flex justify-between my-1">
                          <div className="flex">
                            {data.tags.map((tag, ind) => {
                              return (
                                <span
                                  className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded"
                                  key={ind + 'tag'}
                                >
                                  {tag}
                                </span>
                              );
                            })}
                          </div>
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
          </main>
        </div>
      </div>
    </Container>
  );
}

export default Index;
