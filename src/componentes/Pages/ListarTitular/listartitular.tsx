
interface ListarTitularProps {
    navigate: (screen: string) => void;
}

const ListarTitular: React.FC<ListarTitularProps> = ({ navigate }) => {
    return (
        <div className='container'>
            <h1>Titulares</h1>
            <div className="BoxTabela">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Documento</th>
                        <th>Data de Nascimento</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>Kauê Riki</td>
                            <td>55500000</td>
                            <td>16/06/2005</td>
                        </tr>
                        <tr>
                            <td>Ana carolina Renó</td>
                            <td>55500001</td>
                            <td>15/06/2005</td>
                        </tr>
                </tbody>
            </table>
            <button className="botaovoltar" onClick={() => navigate('Listagens')}>Voltar</button>
        </div>
        </div>
    );
};

export default ListarTitular;
