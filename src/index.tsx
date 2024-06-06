import React from 'react';
import ReactDOM from 'react-dom';
import Roteador from './componentes/Roteamento/roteador';

ReactDOM.render(
    <React.StrictMode>
        <Roteador tela="Home" />
    </React.StrictMode>,
    document.getElementById('root')
);
