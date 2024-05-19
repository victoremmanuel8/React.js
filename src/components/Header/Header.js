import './Header.css';
import PERFIL from '../img/PERFIL.jpg'
import React, { useState, useEffect, useRef } from 'react';

function Header() {
    const [alterada, setAlterada] = useState(false);
    const divRef = useRef(null);
    const svgRef = useRef(null);

    const handleSvgClick = () => {
        setAlterada(!alterada);
    };

    const handleClickOutside = (event) => {
        if (
        divRef.current && !divRef.current.contains(event.target) &&
        svgRef.current && !svgRef.current.contains(event.target)
        ) {
        setAlterada(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  
    return (
    <div className='header'>
        <div className={alterada ? 'original alterada' : 'original'} ref={divRef} >
        {/* <svg onClick={handleSvgClick} ref={svgRef} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
        </svg> */}
        <ul>
            <li>Home</li>
            <li>Curriculos</li>
            <li>Projetos</li>
            <li>Contatos</li>
            <li className='li-alterada'>Contatos1</li>
            <li className='li-alterada'>Contatos1</li>
        </ul>
        <div className='pesquisa'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
        <input type='text'/>
        </div>
        <div className='perfil'>
            <img src={PERFIL}/>
        </div>
    </div>
    </div>
    )
}

export default Header;