import Styles from './css/miolo.module.css'
import Imagem from '../assets/imagem/hero.png'

function Miolo(){
    return(
        <section>
            <div className={Styles.quadro}>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Incidunt voluptates natus quam, quod modi facilis ipsa 
                    est repudiandae similique alias non aperiam odio dolor! 
                    Eaque quisquam doloremque a modi tempora!
                </p>
            </div>
            <div className={Styles.quadro}>
                <img src={Imagem} alt="" />
            </div>
        </section>
    )
}
export default Miolo