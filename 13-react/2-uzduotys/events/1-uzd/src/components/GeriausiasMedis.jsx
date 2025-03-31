const GeriausiasMedis = () => {
    const medziai = {
        uosis: 'wow tikras uosis',
        klevas: 'kaip lapas klevas',
        berzas: 'nakti palikai mane prie berzo',
      };
      
      const medziotikrinimas = (medis) => {
        const medzioPranesimas = medziai[medis];
        alert(medzioPranesimas);
      };
      
    return (
        <div>
            <h3>Medziai</h3>
            <button onClick={() => medziotikrinimas('uosis')}>uosis</button>
            <button onClick={() => medziotikrinimas('klevas')}>klevas</button>
            <button onClick={() => medziotikrinimas('berzas')}>berzas</button>
       

        </div>
    )
}

export default GeriausiasMedis