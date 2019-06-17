import ReactDOM from 'react-dom';
import React from 'react';

import PrimeiroComponente from './componentes/PrimeiroComponente'
import { CompA, CompB as B } from './componentes/DoisComponentes'
import MultiElementos from './componentes/MultiElementos'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <MultiElementos></MultiElementos>
        <CompA valor="01"/>
        <B valor="02"/>
    </div>
, elemento)