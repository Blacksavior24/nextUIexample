import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sidebar from './Sidebar';
import InformacionGeneral from '../components/InformacionGeneral';

function Page() {
    return (
        <>
            <Sidebar>
                <div>
                    <InformacionGeneral />
                </div>
            </Sidebar>
        </>
    )
}

ReactDOM.render(<Page />, document.getElementById('root'))