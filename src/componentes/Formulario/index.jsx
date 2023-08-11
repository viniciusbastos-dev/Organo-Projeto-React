import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = ({ times, aoCadastrar, cadastrarTime, visibilidade }) => {
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");
    const [nomeTime, setNomeTime] = useState("");
    const [corTime, setCorTime] = useState("#6278f7");

    const aoSalvar = (evento) => {
        evento.preventDefault();
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time,
        });
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    };

    return (
        visibilidade && (
            <section className="formulario-container">
                <form className="formulario" onSubmit={aoSalvar}>
                    <h2>Preencha os dados para criar o card do colaborador</h2>
                    <Campo
                        obrigatorio
                        label="Nome"
                        placeholder="Digite seu nome"
                        valor={nome}
                        aoAlterado={(valor) => setNome(valor)}
                    />
                    <Campo
                        obrigatorio
                        label="Cargo"
                        placeholder="Digite seu cargo"
                        valor={cargo}
                        aoAlterado={(valor) => setCargo(valor)}
                    />
                    <Campo
                        label="Imagem"
                        placeholder="Informe o endereço da imagem"
                        valor={imagem}
                        aoAlterado={(valor) => setImagem(valor)}
                    />
                    <ListaSuspensa
                        obrigatorio
                        label="Time"
                        itens={times}
                        valor={time}
                        aoAlterado={(valor) => setTime(valor)}
                    />
                    <Botao texto="Criar card" />
                </form>
                <form
                    className="formulario"
                    onSubmit={(evento) => {
                        evento.preventDefault();
                        cadastrarTime({ nome: nomeTime, cor: corTime });
                    }}
                >
                    <h2>Preencha os dados para criar um novo time.</h2>
                    <Campo
                        obrigatorio
                        label="Nome"
                        placeholder="Digite o nome do time"
                        valor={nomeTime}
                        aoAlterado={(valor) => setNomeTime(valor)}
                    />
                    <Campo
                        obrigatorio
                        type="color"
                        label="Cor do time"
                        placeholder="Digite a cor do time"
                        valor={corTime}
                        aoAlterado={(valor) => setCorTime(valor)}
                    />
                    <Botao texto="Criar um novo time" />
                </form>
            </section>
        )
    );
};

export default Formulario;
