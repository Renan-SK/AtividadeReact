import styles from '../componentes/css/meio.module.css'

function Meio(){
    return(
        <section>
            <div className={styles.section1}>
                <div className={styles.caixas}>
                    rosa
                </div>
                <div className={styles.caixas}>
                    rosa
                </div> 
            </div>
            <div className={styles.section2}>
                <div className={styles.caixa}>
                    <div className={styles.caixas}>
                        <p className={styles.texto}>branca</p>
                    </div>
                    <div className={styles.caixas}>
                        <p className={styles.texto}>branca</p>
                    </div>
                    <div className={styles.caixas}>
                        <p className={styles.texto}>branca</p>
                    </div>
                    <div className={styles.caixas}>
                        <p className={styles.texto}>branca</p>
                    </div> 
                </div>
            </div>
            <div className={styles.section3}>
                marrom
            </div>
            <div className={styles.section4}>
                <div className={styles.caixa1}>
                    blue
                </div>
                <div className={styles.caixa2}>
                    verde
                </div>
            </div>
        </section>

        
    )
}

export default Meio