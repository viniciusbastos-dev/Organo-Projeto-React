import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import "./Colaborador.css";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar,
    };
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
                <div className="favoritar">
                    {colaborador.favorito ? (
                        <AiFillHeart {...propsFavorito} color="red"/>
                    ) : (
                        <AiOutlineHeart {...propsFavorito} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Colaborador;
