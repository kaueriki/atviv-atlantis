
interface ListagensProps {
    navigate: (screen: string) => void;
}

const Listagens: React.FC<ListagensProps> = ({ navigate }) => {
    return (
        <div className='container'>
            <h1>Menu de listagens</h1>
            <button onClick={() => navigate('ListarTitular')}>Listar Titular</button>
            <button onClick={() => navigate('ListarDependente')}>Listar Dependente</button>
            <button onClick={() => navigate('ListarAcomodacoes')}>Listar acomodações</button>
            <button onClick={() => navigate('ListarHospedes')}>Listar hóspedes</button>
            <button className="botaovoltar" onClick={() => navigate('Home')}>Voltar</button>
        </div>
    );
};

export default Listagens;
