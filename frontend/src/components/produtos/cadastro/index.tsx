import { use, useState } from "react";
import { Layout,  Input } from "components";


export const CadastroProdutos : React.FC = () => {

    const [sku, setSku] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [nome, setNome] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');


    const submit = () => {
        const produto = {
            sku: sku,
            preco : preco,
            nome : nome,
            descricao: descricao,
        }
        console.log(produto);
    };


    return (
        <Layout title="Cadastro de Produtos">
            <div className="columns">
                <Input 
                    label="SKU : * "
                    columnClass="is-half"
                    onChange={setSku}
                    value={sku}
                    id="inpSku"
                    placeholder="Digite o SKU"
                    required
                />
                <Input 
                    label="Preço : * "
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
                    label="Nome : * "
                    columnClass="is-full"
                    onChange={setNome}
                    value={nome}
                    id="inpNome"
                    placeholder="Digite o nome do produto"
                    required
                />
            </div>
        

            <div className="columns">
                <div className="field column is-full">
                    <label className="label" htmlFor="inpPreco"> Descrição : *</label>
                    <div className="control">
                        <textarea 
                            className="input" 
                            id="inpPreco"
                            value={descricao}
                            onChange={event => setDescricao(event.target.value)}
                            placeholder="Digite a descrição do poduto" 
                            required 
                        />
                    </div>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button 
                    onClick={submit}
                    className="button is-link">Salvar</button>
                </div>
                <div className="control">
                    <button className="button is-link is-danger">Voltar</button>
                </div>
            </div>
        </Layout>
    )
 }
 
