
function Pazymys({ pazymys }) {
  const vertinimas = pazymys >= 5 ? 'teigiamas' : 'neigiamas';

  return (
    <p>
      Pažymys: {pazymys}  {vertinimas}
    </p>
  );
}

export default Pazymys;
