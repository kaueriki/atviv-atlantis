
interface ListarAcomodacoesProps {
    navigate: (screen: string) => void;
}

const ListarAcomodacoes: React.FC<ListarAcomodacoesProps> = ({ navigate }) => {
    return (
        <div className='container'>
            <h1>Acomodações</h1>
            <div className="BoxTabela">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cama Solteiro</th>
                        <th>Cama casal</th>
                        <th>Suíte</th>
                        <th>Garagem</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>Casal simples</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <th>1</th>
                        </tr>
                        <tr>
                            <td>Família simples</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <th>1</th>
                        </tr>
                        <tr>
                            <td>Solteiro simples</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1</td>
                            <th>1</th>
                        </tr>
                </tbody>
            </table>
            <button className="botaovoltar" onClick={() => navigate('Listagens')}>Voltar</button>
        </div>
        </div>
    );
};

export default ListarAcomodacoes;
