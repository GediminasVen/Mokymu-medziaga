
const Salis = (props) => {
  const { salis, zemynas } = props.info;

  const patikrintiZemyna = () => {
    if (zemynas === 'Europa') {
      return <p>jega</p>;
    }
  };

  return (
    <div>
      <h3>Šalis: {salis}</h3>
      <p>Žemynas: {zemynas}</p>
      {patikrintiZemyna()}
    </div>
  );
};

export default Salis;
