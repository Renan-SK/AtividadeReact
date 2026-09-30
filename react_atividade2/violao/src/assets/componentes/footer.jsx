import styles from '../componentes/css/footer.module.css'
import instagram from '../imagem/insta.png'
import whats from '../imagem/whats.png'
import face from '../imagem/face.png'

function Footer(){
    return(
        <main>
            <footer>
                <div className={styles.caixa}>
                    <div className={styles.caixinhas}>
                        <div className={styles.caixainhafooter}>
                            <p>Nossa Loja - Instrumentos Musicais</p>
                            <p>Rua Tito, 54 - Lapa</p>
                            <p>São Paulo - Brasil</p>
                        </div>
                    </div>
                    <div className={styles.imagemfooter}>
                        <div className={styles.imagemdividida}>
                            <img src={whats} alt="" />
                        </div>
                        <div className={styles.imagemdividida}>
                            <img src={instagram} alt="" />
                        </div>
                        <div className={styles.imagemdividida}> 
                            <img src={face} alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default Footer