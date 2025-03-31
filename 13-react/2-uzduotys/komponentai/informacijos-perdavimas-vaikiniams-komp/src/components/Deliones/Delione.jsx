function Delione(props) {
  
    function skaiciuokSudetinguma(kiekis) {
      if (kiekis <= 500) {
        return 'Easy';
      } else if (kiekis <= 1000) {
        return 'Mid level delione, galima ir sunkesne';
      } else {
        return 'Sunki';
      }
    }
  
    return (
      <div>
        <h2>{props.pavadinimas}</h2>
        <p>Detalių kiekis: {props.detaliuKiekis}</p>
        <p>Plotis: {props.plotis}cm</p>
        <p>Aukstis: {props.aukstis}cm</p>
        <p>Sudedėtingumas: {skaiciuokSudetinguma(props.detaliuKiekis)}</p>
      </div>
    );
  }
  
  export default Delione;
  