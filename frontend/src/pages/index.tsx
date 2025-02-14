import Head from 'next/head';
import { Layout } from 'components'; // Certifique-se de que o caminho está correto
import { LoginPage } from 'components';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>FlowBiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <LoginPage />
    </div>
  );
};

export default Home;
