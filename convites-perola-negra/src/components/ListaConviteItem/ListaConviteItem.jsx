import "./ListaConviteItem.css";

function ListaConviteItem({
  convite,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
}) {
  const adicionaItem = (conRender, index) =>
    Boolean(conRender) && (
      <span className="ListaConviteitem__numero">
        {quantidadeSelecionada[index]}{" "}
      </span>
    );

  const removeButton = (conRender, index) =>
    Boolean(conRender) && (
      <button
        className="Acoes__remover"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(index);
        }}
      >
        Remover
      </button>
    );

  return (
    <div className="ListaConviteitem" onClick={() => clickItem(convite.id)}>
      {adicionaItem(quantidadeSelecionada[index], index)}
      <div>
        <div className="ListaConviteitem__titulo">{convite.nome}</div>
        <img
          className="ListaConviteitem__foto"
          src={convite.imageUrl}
          alt="imagens"
        />
        <div className="ListaConviteitem__descricao">{convite.descricao}</div>
        <div className="ListaConviteitem__preco">{convite.quantidade}</div>
        <div className="ListaConviteitem__acao Acoes">
          <button
            className={`Acoes__adicionar ${
              quantidadeSelecionada[index] && "Acoes__adicionar--preecher"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onAdd(index);
            }}
          >
            Adicionar
          </button>
          {removeButton(quantidadeSelecionada[index], index)}
        </div>
      </div>
    </div>
  );
}
export default ListaConviteItem;
