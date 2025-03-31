const Komp6 = () => {
    const slaptasSkHandler = () => {
  let slaptasSk = Math.floor(Math.random() * 10);
  console.log('Slaptas skaicius: ' + slaptasSk)
}
return (


    <div>
        <h4>Komp 6</h4>
        <button onClick={ slaptasSkHandler }>slaptas skaicius</button>

    </div>
)
}

export default Komp6