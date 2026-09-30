import styles from '../componentes/css/header.module.css'
import guitarras_header from '../imagem/guitarras_header.jpg'
function Header(){
    return(
        <body>
            <main>
                <header className={styles.separacao}>
                    <div className={styles.caixa}>
                        
                    </div>
                    <div className={styles.caixa}>
                        <div className={styles.caixinha}>
                            <p>Home</p>
                        </div>
                        <div className={styles.caixinha}>
                            <p>Quem somos</p>
                        </div>
                        <div className={styles.caixinha}>
                            <p>Instrumentos</p>
                        </div>
                        <div className={styles.caixinha}>
                            <p>Endereço</p>
                        </div>
                        <div className={styles.caixinha}>
                            <p>Contato</p>
                        </div>
                    </div>
                </header>
            </main>
        </body>
    )

}

export default Header