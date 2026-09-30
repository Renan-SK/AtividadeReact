import styles from '../componentes/css/meio.module.css'
import guitarrinha from '../imagem/guitarrinha.jpg'
import loja from '../imagem/loja.jpg'
import instagram from '../imagem/insta.png'
import whats from '../imagem/whats.png'
import face from '../imagem/face.png'

function Meio(){
    return(
        <main>
            <section>
                <div className={styles.caixa}>
                    <div className={styles.caixinhas}>
                        <div className={styles.caixinhasauto}>
                            <div>
                                <p> Nossa Loja - Instrumentos Musicais</p>
                            </div>
                            <div>
                                <p> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reprehenderit illum culpa alias, 
                                doloremque nobis in rem nam laboriosam vel aliquam! Voluptatem, ea? Nihil, quis praesentium minima 
                                pariatur veniam mollitia.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.caixinhas}>
                        <img src={loja} alt="" />
                    </div>
                </div>
                <div className={styles.caixa1}>
                    <div className={styles.caixinhas}>
                        <div className={styles.imagem}>
                            <img src={guitarrinha} alt="" />
                        </div>
                        <div className={styles.texto}>
                            <p> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat quas rem quae iusto 
                                quibusdam corporis. Vero provident labore temporibus adipisci rerum quasi nihil omnis dolorem?
                                 Unde necessitatibus corporis fugit. 
                            </p>
                        </div>
                    </div>
                    <div className={styles.caixinhas}>
                        <div className={styles.imagem}>
                          <img src={guitarrinha} alt="" />
                        </div>
                        <div className={styles.texto}>
                            <p> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat quas rem quae iusto 
                                quibusdam corporis. Vero provident labore temporibus adipisci rerum quasi nihil omnis dolorem?
                                 Unde necessitatibus corporis fugit. 
                            </p>
                        </div>

                    </div>
                    <div className={styles.caixinhas}>
                        <div className={styles.imagem}>
                            <img src={guitarrinha} alt="" />
                        </div>
                        <div className={styles.texto}>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat quas rem quae iusto 
                                quibusdam corporis. Vero provident labore temporibus adipisci rerum quasi nihil omnis dolorem?
                                 Unde necessitatibus corporis fugit. 
                            </p>
                        </div>

                    </div>
                    <div className={styles.caixinhas}>
                        <div className={styles.imagem}>
                            <img src={guitarrinha} alt="" />
                        </div>
                        <div className={styles.texto}>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima placeat quas rem quae iusto 
                                quibusdam corporis. Vero provident labore temporibus adipisci rerum quasi nihil omnis dolorem?
                                 Unde necessitatibus corporis fugit. 
                            </p>
                        </div>

                    </div>

                </div>
                <div className={styles.caixa2}>
                    <div className={styles.caixinhas}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7316.111076173956!2d-46.68991068072076!3d-23.530504795468463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-PT!2sbr!4v1790727579253!5m2!1spt-PT!2sbr"
                            width="100%"
                            height="100%"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className={styles.caixinhas}>
                        <div className={styles.caixinhasauto}>
                            <div>
                                <p> Nossa Loja - Instrumentos Musicais</p>
                            </div>
                            <div>
                                <p> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reprehenderit illum culpa alias, 
                                doloremque nobis in rem nam laboriosam vel aliquam! Voluptatem, ea? Nihil, quis praesentium minima 
                                pariatur veniam mollitia.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.caixa3}>
                    <div className={styles.caixinhas}>
                            <div className={styles.forms}>
                                <input type="text" />
                                <input type="text" />
                                <textarea name=""></textarea>
                                <button>Enviar</button>
                            </div>
                    </div>
                    <div className={styles.caixinhas}>
                            <div className={styles.ajuste}>
                                <p>Acesse também nossas redes sociais</p>
                                <div className={styles.ajusteimagem}>
                                    <div className={styles.imagens}>
                                        <img src={whats} alt="" />
                                    </div>
                                    <div className={styles.imagens}>
                                        <img src={instagram} alt="" />
                                    </div>
                                    <div className={styles.imagens}>
                                        <img src={face} alt="" />
                                    </div>
                                </div>
                            </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Meio