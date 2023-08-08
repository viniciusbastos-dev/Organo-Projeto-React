import { FaWindowClose } from "react-icons/fa";
import "./Colaborador.css";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    return (
        <div className="colaborador">
            <FaWindowClose 
                size={25} 
                className="deletar" 
                onClick={() => aoDeletar(colaborador.id)} 
            />
            <div style={{ backgroundColor: corDeFundo }} className="cabecalho">
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    );
};

export default Colaborador;
