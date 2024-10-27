import './estilo.css'
import LogoFaculdade from '../../imagens/logo.jpeg'

function Logo() {
    return (
        <div className='logo'>
            <img src={LogoFaculdade} width={100}></img>
        </div>
    )
}

export default Logo;