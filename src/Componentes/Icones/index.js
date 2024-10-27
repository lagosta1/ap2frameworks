import Perfil from '../../imagens/people.svg'
import Sacola from '../../imagens/bag.svg'

const icones = [Perfil, Sacola]

function Icones() {
    return (
        <ul className='icones'> {
            icones.map((icone) => (
                <li className='icone'><img src={icone} width={50} height={50}></img></li>
                )
            ) 
        }
        </ul>
    )
}

export default Icones;