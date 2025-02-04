import { httpClient } from 'app/http'
import { Produto } from 'app/models/produtos'
import { Axios, AxiosResponse } from 'axios';


const resourceUrl = '/api/produtos';

// create a react hook 
export const userProdutoService = () => {
    
    const salvar = async  (produto: Produto): Promise<Produto> => {
        const res: AxiosResponse<Produto> = await httpClient.post<Produto>(resourceUrl, produto);
        return res.data; //retorna  o objeto salvo no backend (data json)
    };

    const atualizar = async (produto : Produto ) : Promise<void> => {
        const url: string = `${resourceUrl}/${produto.id}`;
        await httpClient.put<Produto>(url, produto);
    };
    
    return {
        salvar,
        atualizar
    }

}