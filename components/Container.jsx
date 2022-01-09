import Head from 'next/head';
import Header from './Header';
const Container = (props) => {
  const { refDownload } = props;
  return (
    <div>
      <Head>
        <title>ciunterei.com</title>
        <meta name="description" content="ciunterei.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header refDownload={refDownload} />
      <div>{props.children}</div>
    </div>
  );
};

export default Container;
