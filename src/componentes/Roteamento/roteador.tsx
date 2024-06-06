import { Component } from "react";
import '../BaseCSS/index.css';

import TelaHome from "../Pages/TelaHome/Home";
import MenuClientes from "../Pages/MenuClientes/menuclientes";
import Listagens from "../Pages/MenuListagens/menulistagens";
import MenuHospedes from "../Pages/MenuHospedes/menuhospedes";
import CadastrarTitular from "../Pages/CadastrarTitular/cadastrartitular";
import CadastrarDependente from "../Pages/CadastrarDependente/cadastrardependente";
import EditarTitular from "../Pages/EditarTitular/editartitular";
import EditarDependente from "../Pages/EditarDependente/editardependente";
import ListarTitular from "../Pages/ListarTitular/listartitular";
import ListarDependente from "../Pages/ListarDependente/Listardependente";
import ListarAcomodacoes from "../Pages/ListarAcomodacoes/listaracomodacoes";
import ListarHospedes from "../Pages/ListarHospedes/listarhospedes";

type State = {
    tela: string
}

export default class Roteador extends Component<{ tela?: string }, State> {
    constructor(props: { tela: string }) {
        super(props);
        this.state = {
            tela: props.tela || 'Home'
        };
        this.selecionarView = this.selecionarView.bind(this);
    }

    selecionarView(novaTela: string, evento?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        if (evento) {
            evento.preventDefault();
        }
        this.setState({
            tela: novaTela
        });
    }

    render() {
        const { tela } = this.state;
        let componente;

        switch (tela) {
            case 'MenuClientes':
                componente = <MenuClientes navigate={(novaTela: string) => this.selecionarView(novaTela)} />;
                break;
            case 'Listagens':
                componente = <Listagens navigate={(novaTela: string) => this.selecionarView(novaTela)} />;
                break;
            case 'MenuHospedes':
                componente = <MenuHospedes navigate={(novaTela: string) => this.selecionarView(novaTela)} />;
                break;
            case 'CadastrarTitular':
                componente = <CadastrarTitular navigate={(novaTela: string) => this.selecionarView(novaTela)} />;
                break;
            case 'CadastrarDependente':
                componente = <CadastrarDependente navigate={(novaTela: string) => this.selecionarView(novaTela)} />;
                break;
            case 'EditarTitular':
                componente = <EditarTitular navigate={(novaTela: string) => this.selecionarView(novaTela)} />;
                break;
            case 'EditarDependente':
                    componente = <EditarDependente navigate={(novaTela: string) => this.selecionarView(novaTela)} />;
                    break;
            case 'ListarTitular':
                componente = <ListarTitular navigate={(novaTela: string) => this.selecionarView(novaTela)} />;
                break;
            case 'ListarDependente':
                    componente = <ListarDependente navigate={(novaTela: string) => this.selecionarView(novaTela)} />;
                    break;
            case 'ListarAcomodacoes':
                    componente = <ListarAcomodacoes navigate={(novaTela: string) => this.selecionarView(novaTela)} />;
                    break;
            case 'ListarHospedes':
                    componente = <ListarHospedes navigate={(novaTela: string) => this.selecionarView(novaTela)} />;
                    break;
            case 'Home':
            default:
                componente = <TelaHome navigate={(novaTela: string) => this.selecionarView(novaTela)} />;
                break;
        }

        return (
            <div className="ALL">
                <div className="Componente">
                    {componente}
                </div>
            </div>
        );
    }
}
