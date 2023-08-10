import "./ListaSuspensa.css";

const ListaSuspensa = ({
    obrigatorio = "false",
    label,
    valor,
    itens,
    aoAlterado,
}) => {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select
                onChange={(evento) => aoAlterado(evento.target.value)}
                required={obrigatorio}
                value={valor}
            >
                <option value="">Selecione um time</option>
                {itens.map((item) => {
                    return <option value={item.id} key={item.id}>{item.nome}</option>;
                })}
            </select>
        </div>
    );
};

export default ListaSuspensa;
