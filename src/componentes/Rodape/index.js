import "./Rodape.css";

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="/imagens/fb.png" alt="Logo Facebook" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="/imagens/tw.png" alt="Logo Twitter" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="http://www.instagram.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="/imagens/ig.png" alt="Logo Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="Logo organo" />
            </section>
            <section>
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>
    );
};

export default Rodape;
