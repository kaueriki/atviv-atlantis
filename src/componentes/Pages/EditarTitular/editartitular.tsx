
interface EditarTitularProps {
    navigate: (screen: string) => void;
}

const EditarTitular: React.FC<EditarTitularProps> = ({ navigate }) => {
    return (
        <div className='container'>
            <h1>Editar Titular</h1>
            <div className="BoxTabela">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Documento</th>
                        <th>Data de Nascimento</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>Kauê Riki</td>
                            <td>55500000</td>
                            <td>16/06/2005</td>
                            <td>
                                <button className="botaodeletar">Deletar</button>
                                <button className="botaoeditar">Editar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Ana carolina Renó</td>
                            <td>55500001</td>
                            <td>15/06/2005</td>
                            <td>
                                <button className="botaodeletar">Deletar</button>
                                <button className="botaoeditar">Editar</button>
                            </td>
                        </tr>
                </tbody>
            </table>
            <button className="botaovoltar" onClick={() => navigate('MenuClientes')}>Voltar</button>
        </div>
        </div>
    );
};

export default EditarTitular;
