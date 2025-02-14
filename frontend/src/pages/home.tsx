import Head from 'next/head';
import { Layout } from 'components';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>FlowBiz - Tela Inicial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout title="Tela Inicial">
        <div className="hero is-fullheight" style={{ background: 'linear-gradient(135deg, #4b6cb7, #182848)' }}>
          <div className="hero-body">
            <div className="container">
              <div className="box" style={{ borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', padding: '2rem', maxWidth: '800px', margin: 'auto', backgroundColor: '#fff' }}>
                <h1 className="title has-text-centered" style={{ color: '#333' }}>Bem-vindo à FlowBiz</h1>
                <p className="has-text-centered" style={{ fontSize: '1.2rem', color: '#666' }}>
                  Sua plataforma para gerenciar processos e otimizar negócios de forma simples e eficiente.
                </p>

                <div className="columns is-centered mt-5">
                  <div className="column is-half">
                    <div className="box" style={{ padding: '1.5rem', borderRadius: '8px', backgroundColor: '#f4f4f4', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                      <h2 className="subtitle" style={{ color: '#333' }}>Visão Geral</h2>
                      <p style={{ color: '#666' }}>
                        A FlowBiz oferece uma série de funcionalidades para gerenciar sua empresa de forma mais eficiente. Explore nossas ferramentas para otimizar seu tempo e aumentar a produtividade.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="field is-grouped is-grouped-centered mt-5">
                  <div className="control">
                    <button
                      className="button is-link is-medium"
                      style={{ transition: 'background-color 0.3s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5577cc'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
                      onClick={() => alert("Redirecionando para a área de relatórios")}
                    >
                      Ver Relatórios
                    </button>
                  </div>
                  <div className="control">
                    <button
                      className="button is-info is-medium"
                      style={{ transition: 'background-color 0.3s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a90e2'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
                      onClick={() => alert("Redirecionando para a área de configurações")}
                    >
                      Configurações
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;