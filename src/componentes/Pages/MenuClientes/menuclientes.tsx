
interface MenuClientesProps {
    navigate: (screen: string) => void;
}

const MenuClientes: React.FC<MenuClientesProps> = ({ navigate }) => {
    return (
        <div className='container'>
            <h1>Menu clientes</h1>
            <button onClick={() => navigate('CadastrarTitular')}>Cadastrar Titular</button>
            <button onClick={() => navigate('CadastrarDependente')}>Cadastrar Dependente</button>
            <button onClick={() => navigate('EditarTitular')}>Editar Titular</button>
            <button onClick={() => navigate('EditarDependente')}>Editar Dependente</button>
            <button className="botaovoltar" onClick={() => navigate('Home')}>Voltar</button>
        </div>
    );
};

export default MenuClientes;
