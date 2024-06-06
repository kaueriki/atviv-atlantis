import './home.css';

interface HomeProps {
    navigate: (screen: string) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
    return (
        <div className='container'>
            <h1>Menu Parque Aquático Atlantis</h1>
            <button onClick={() => navigate('MenuClientes')}>Menu clientes</button>
            <button onClick={() => navigate('Listagens')}>Listagens</button>
            <button onClick={() => navigate('MenuHospedes')}> Registro de hóspedes</button>
        </div>
    );
};

export default Home;
