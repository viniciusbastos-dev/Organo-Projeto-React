import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
    return (
        <section
            className="time"
            style={{ backgroundColor: props.corSecundaria }}
        >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.name}</h3>
            <div className="colaboradores">
                {props.colaboradores.map((colaborador) => (
                    <Colaborador
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corPrimaria={props.corPrimaria}
                    />
                ))}
            </div>
        </section>
    );
};

export default Time;
