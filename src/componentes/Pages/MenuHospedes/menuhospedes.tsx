
interface MenuHospedesProps {
    navigate: (screen: string) => void;
}

const MenuHospedes: React.FC<MenuHospedesProps> = ({ navigate }) => {
    return (
        <div className='container'>
            <h1>Registro de hóspedes</h1>
            <h1>Documento</h1>
                <select>
                    <option value="">Selecione a acomodação</option>
                    <option value="casalsimples">Casal simples</option>
                    <option value="familiasimples">Família Simples</option>
                    <option value="solteirosimples">Solteiro Simples</option>
                </select>
                <input placeholder="Documento do titular" className="inputregistrar"></input>
                <button className="botaoregistrar">Registrar hóspede</button>
            <button className="botaovoltar" onClick={() => navigate('Home')}>Voltar</button>
        </div>
    );
};

export default MenuHospedes;
