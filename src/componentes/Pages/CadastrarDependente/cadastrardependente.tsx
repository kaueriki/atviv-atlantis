import React from 'react';

interface CadastrarDependenteProps {
    navigate: (screen: string) => void;
}
const CadastrarDependente: React.FC<CadastrarDependenteProps> = ({ navigate }) => {
    return (
        <div className='containercadastro'>
                <h1>Cadastro de dependente</h1>
                <input placeholder="Nome"></input>
                <input placeholder="Data de nascimento" type='date'></input>
                <input placeholder="Telefone"></input>
                <h1>Dados do titular</h1>
                <input placeholder="Nome do titular"></input>
                <input placeholder="Documento do titular"></input>
                <h1>Documento</h1>
                <select>
                    <option value="">Selecione o tipo de documento</option>
                    <option value="rg">RG</option>
                    <option value="cpf">CPF</option>
                    <option value="passaporte">Passaporte</option>
                </select>
                <input placeholder='Número do documento'></input>
                <h1>Endereço</h1>
                <input placeholder="País"></input>
                <input placeholder="Estado"></input>
                <input placeholder="Cidade"></input>
                <input placeholder="Bairro"></input>
                <input placeholder="Rua"></input>
                <input placeholder="Número"></input>
                <input placeholder="CEP"></input>
                <button>Cadastrar dependente</button>
                <button className="botaovoltar" onClick={() => navigate('MenuClientes')}>Voltar</button>
        </div>
    );
};

export default CadastrarDependente;
