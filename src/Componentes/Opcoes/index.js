const opcoes = ['Lorem', 'Ipsum', 'Dolor']

function Opcoes() {
    return (
        <ul className='opcao'>
            { opcoes.map( (texto) => (
                <li className='opcoes'> <p>{texto}</p> </li>
                ) 
            ) 
        }
       </ul>
    )
}

export default Opcoes;