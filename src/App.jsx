import { useState } from "react";

import "./App.css";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import { v4 as uuidv4 } from "uuid";

function App() {
    const [times, setTimes] = useState([
        {
            id: uuidv4(),
            nome: "Programação",
            cor: "#57c278",
        },
        {
            id: uuidv4(),
            nome: "Front-End",
            cor: "#82cffa",
        },
        {
            id: uuidv4(),
            nome: "Data Science",
            cor: "#A6D157",
        },
        {
            id: uuidv4(),
            nome: "Devops",
            cor: "#E06B69",
        },
        {
            id: uuidv4(),
            nome: "UX e Design",
            cor: "#DB6EBF",
        },
        {
            id: uuidv4(),
            nome: "Mobile",
            cor: "#FFBA05",
        },
        {
            id: uuidv4(),
            nome: "Inovação e Gestão",
            cor: "#FF8A29",
        },
    ]);

    const inicial = [
        {
            favorito: false,
            id: uuidv4(),
            nome: "JULIANA AMOASEI",
            cargo: "Desenvolvedora de software e instrutora",
            imagem: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            time: times[0].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "DANIEL ARTINE",
            cargo: "Engenheiro de Software na Stone Age",
            imagem: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            time: times[0].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "GUILHERME LIMA",
            cargo: "Desenvolvedor Python e JavaScript na Alura",
            imagem: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            time: times[0].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "PAULO SILVEIRA",
            cargo: "Hipster e CEO da Alura",
            imagem: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            time: times[0].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "JULIANA AMOASEI",
            cargo: "Desenvolvedora de software e instrutora",
            imagem: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            time: times[1].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "DANIEL ARTINE",
            cargo: "Engenheiro de Software na Stone Age",
            imagem: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            time: times[1].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "GUILHERME LIMA",
            cargo: "Desenvolvedor Python e JavaScript na Alura",
            imagem: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            time: times[1].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "PAULO SILVEIRA",
            cargo: "Hipster e CEO da Alura",
            imagem: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            time: times[1].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "JULIANA AMOASEI",
            cargo: "Desenvolvedora de software e instrutora",
            imagem: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            time: times[2].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "DANIEL ARTINE",
            cargo: "Engenheiro de Software na Stone Age",
            imagem: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            time: times[2].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "GUILHERME LIMA",
            cargo: "Desenvolvedor Python e JavaScript na Alura",
            imagem: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            time: times[2].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "PAULO SILVEIRA",
            cargo: "Hipster e CEO da Alura",
            imagem: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            time: times[2].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "JULIANA AMOASEI",
            cargo: "Desenvolvedora de software e instrutora",
            imagem: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            time: times[3].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "DANIEL ARTINE",
            cargo: "Engenheiro de Software na Stone Age",
            imagem: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            time: times[3].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "GUILHERME LIMA",
            cargo: "Desenvolvedor Python e JavaScript na Alura",
            imagem: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            time: times[3].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "PAULO SILVEIRA",
            cargo: "Hipster e CEO da Alura",
            imagem: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            time: times[3].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "JULIANA AMOASEI",
            cargo: "Desenvolvedora de software e instrutora",
            imagem: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            time: times[4].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "DANIEL ARTINE",
            cargo: "Engenheiro de Software na Stone Age",
            imagem: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            time: times[4].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "GUILHERME LIMA",
            cargo: "Desenvolvedor Python e JavaScript na Alura",
            imagem: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            time: times[4].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "PAULO SILVEIRA",
            cargo: "Hipster e CEO da Alura",
            imagem: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            time: times[4].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "JULIANA AMOASEI",
            cargo: "Desenvolvedora de software e instrutora",
            imagem: "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
            time: times[5].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "DANIEL ARTINE",
            cargo: "Engenheiro de Software na Stone Age",
            imagem: "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
            time: times[5].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "GUILHERME LIMA",
            cargo: "Desenvolvedor Python e JavaScript na Alura",
            imagem: "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
            time: times[5].id,
        },
        {
            favorito: false,
            id: uuidv4(),
            nome: "PAULO SILVEIRA",
            cargo: "Hipster e CEO da Alura",
            imagem: "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
            time: times[5].id,
        },
    ];

    const [colaboradores, setColaboradores] = useState(inicial);

    function deletarColaborador(id) {
        setColaboradores(
            colaboradores.filter((colaborador) => colaborador.id !== id)
        );
    }

    function mudarCorDoTime(cor, id) {
        setTimes(
            times.map((time) => {
                if (time.id === id) {
                    time.cor = cor;
                }
                return time;
            })
        );
    }

    function cadastrarTime(novoTime) {
        setTimes([...times, { ...novoTime, id: uuidv4() }]);
    }

    function resolverFavorito(id) {
        setColaboradores(
            colaboradores.map((colaborador) => {
                if (colaborador.id === id)
                    colaborador.favorito = !colaborador.favorito;
                return colaborador;
            })
        );
    }

    const [visibilidade, setVisibilidade] = useState(false);

    function alterarVisibilidade() {
        setVisibilidade(!visibilidade);
    }

    return (
        <>
            <Banner />
            <Formulario
                cadastrarTime={cadastrarTime}
                times={times.map((time) => time)}
                visibilidade={visibilidade}
                aoCadastrar={(colaborador) =>
                    setColaboradores([
                        ...colaboradores,
                        { ...colaborador, id: uuidv4() },
                    ])
                }
            />
            <section className="times">
                <div className="wrapper">
                    <h1>Minha Organização:</h1>
                    <button
                        className="toggle-form"
                        onClick={alterarVisibilidade}
                    />
                </div>
                {times.map((time) => (
                    <Time
                        aoFavoritar={resolverFavorito}
                        mudarCor={mudarCorDoTime}
                        key={time.id}
                        time={time}
                        colaboradores={colaboradores.filter(
                            (colaborador) => colaborador.time === time.id
                        )}
                        aoDeletar={deletarColaborador}
                    />
                ))}
            </section>
            <Rodape />
        </>
    );
}

export default App;
