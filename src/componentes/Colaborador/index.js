import './Colaborador.css'

const Colaborador = ({nome, cargo, corDeFundo}) =>{
    return (<div className='colaborador' key={nome}>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src='https://github.com/TomazHerrero.png' alt='texto imagem logo' />
        </div>
    
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>

    </div>

    )
}

export default Colaborador;