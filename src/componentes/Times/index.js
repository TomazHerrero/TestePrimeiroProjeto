import Colaborador from '../Colaborador'
import './Times.css'

const Times = (props) =>{
    
    return(
        props.colaboradores.length > 0 ? <section className='times' style={{backgroundColor: props.corSecundaria}} >
            <h3 style={{borderBlockEndColor: props.corPrimaria}}>
                {props.nome}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} corDeFundo={props.corPrimaria}/> )}
            </div>            
        </section>
        :''
    )
}

export default Times;