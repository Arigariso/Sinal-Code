import React from 'react'

import './style.css';

import logo_sinalcode from '../../assets/images/Logos/logo_sinalcode.png'

const Home = () => {
    return (
        
        <div className="section-1">
            <div className="container">
                <header className="header">
                    <img src={logo_sinalcode} alt="Sinal Code - Logo" />
                    <nav>
                        <button>QUEM SOMOS</button>
                        <button>CURSOS</button>
                        <button>FALE CONOSCO</button>
                        <button>FAZER LOGIN</button>
                    </nav>
                </header>
                <main>
                    <section>
                        <h1>Curso de programação para surdos</h1>
                        <p>
                            A sinal Code desenvolveu uma plataforma digital de cursos na área de <br />
                            programação elaborados para atender exclusivamente a comunidade surda.
                        </p>
                        <p>
                            Todas as aulas são adaptadas com a língua de sinais (libras) e legenda, <br />
                            para um melhor desenvolvimento no ensino-aprendizagem.<br />
                        </p>
                        <p>
                            O curso ofertado é 100% gratuito. Contamos com o patrocínio de empresas <br />
                            parceiras nesta empreitada de cunho social.<br />
                        </p>
                    </section>
                    <section className="estudar">
                        <h1>Por que estudar programação?</h1>
                    </section>
                </main>
            </div>
        </div>
        
    )
}

export default Home;
