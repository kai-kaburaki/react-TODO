import react from "react";

export const incompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <>
      <div className="incomplete-aera">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todos, index) => {
            return (
              <div key={todos} className="list-row">
                <li>{todos}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
