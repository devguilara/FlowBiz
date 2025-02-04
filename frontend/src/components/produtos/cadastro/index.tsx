import { useState } from "react";
import { Layout, Input } from "components";
import { userProdutoService } from "app/services";
import { Produto } from "app/models/produtos";

export const CadastroProdutos: React.FC = () => {
  const service = userProdutoService();

  const [sku, setSku] = useState<string>('');
  const [preco, setPreco] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');
  const [id, setId] = useState<number>();

  const submit = () => {
    if (isNaN(parseFloat(preco)) || preco === '') {
      alert('Por favor, insira um preço válido.');
      return;
    }
  
    const produto: Produto = {
      sku,
      preco: parseFloat(preco),
      nome,
      descricao,
    };
  
    if (id) {
      produto.id = id;
      service.atualizar(produto).then(() => {
        alert('Produto atualizado com sucesso!');
      });
    } else {
      service.salvar(produto).then((produtoRes) => {
        setId(produtoRes.id);
      });
    }
  };
  return (
    <Layout title="Cadastro de Produtos">
        <div className="container">
          <div className="box" style={{ backgroundColor: '#2D2D44', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.4)', padding: '2rem' }}>           
            {id &&             
                <div className="columns">
                <Input label="Código:" columnClass="is-half" value={id} id="inpId" disabled />
                </div>
            }
            <div className="columns">
              <Input
                label="SKU:*"
                columnClass="is-half"
                onChange={setSku}
                value={sku}
                id="inpSku"
                placeholder="Digite o SKU"
                required
              />
              <Input
                label="Preço:*"
                columnClass="is-half"
                onChange={setPreco}
                value={preco}
                id="inpPreco"
                placeholder="Digite o preço do produto"
                required
              />
            </div>

            <div className="columns">
              <Input
                label="Nome:*"
                columnClass="is-full"
                onChange={setNome}
                value={nome}
                id="inpNome"
                placeholder="Digite o nome do produto"
                required
              />
            </div>

            <div className="field">
              <label className="label has-text-white" htmlFor="inpDescricao">
                Descrição: *
              </label>
              <div className="control">
                <textarea
                  className="textarea"
                  id="inpDescricao"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Digite a descrição do produto"
                  style={{ backgroundColor: '#1E1E2F', color: '#FFF', border: '1px solid #3E3E55' }}
                  required
                />
              </div>
            </div>

            <div className="field is-grouped is-grouped-right mt-4">
              <div className="control">
              <button
                onClick={submit}
                className="button is-link is-medium"
                style={{
                  backgroundColor: '#8257E6',
                  border: 'none',
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#6931CA')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#8257E6')}
                onFocus={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onBlur={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {id ? 'Atualizar' : 'Salvar'}
              </button>
            </div>
            <div className="control">
              <button
                className="button is-danger is-medium"
                style={{
                  backgroundColor: '#FF5F5F',
                  border: 'none',
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#D94343')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#FF5F5F')}
                onFocus={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onBlur={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                Voltar
              </button>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
};