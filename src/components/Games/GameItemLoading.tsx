import style from "./GameItemLoading.module.scss";

const GameItemLoading = () => {
  return (
    <div className={`col-md-4 col-12 p-3 ${style.flas_cards}`}>
    <div className="card bg-dark-subtle rounded-2" style={{ height: '450px' }}>
      <div className="card-body">
        <p className="card-text"></p>
      </div>
      </div>
    </div>
  );
};

export default GameItemLoading;
