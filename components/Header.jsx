import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { savePDF } from '@progress/kendo-react-pdf';

function Header({ refDownload }) {
  const createPdf = (html) => {
    savePDF(
      html,
      {
        scale: 0.7,
        paperSize: 'A4',
        fileName: 'ciunterei.pdf',
        margin: '0cm',
      },
      () => console.log('created and exported')
    );
  };

  return (
    <nav className="font-sans flex text-center flex-row sm:text-left justify-between py-4 px-6  shadow items-baseline w-full">
      <div className="mb-2 ">
        <h1>ciunterei.com</h1>
      </div>
      <div className="justify-center flex">
        {/* <button
          className=""
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        >
          {theme === 'light' ? (
            <MdOutlineDarkMode size={30} />
          ) : (
            <MdDarkMode size={30} />
          )}
        </button> */}

        <button
          type="button"
          onClick={() => createPdf(refDownload.current)}
          className="ml-5 border p-3 border-gray-300"
        >
          Export PDF
        </button>
      </div>
    </nav>
  );
}

export default Header;
