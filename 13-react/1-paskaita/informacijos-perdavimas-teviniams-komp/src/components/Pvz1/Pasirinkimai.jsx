import Mygtukai from "./Mygtukai"

const Pasirinkimai = () => {

    const apdorotiVaikoReiksme = (atejusiInfo) => {
        console.log('duomenys is vaik komponento yra:' + atejusiInfo)
    }

    const apdorotiDeleteMygtuka = (info) => {
        console.log(info)
        console.log('tevo delete ne veiksmas')
    }

    const apdorotiRandomButton = (data) => {
        console.log('laukti tiek' + data)
        setTimeout(() => {
            console.log('laikas baigesi')
        }, data);
    }

    return (
        <>
        <h3>Pasirinkimai</h3>

        <Mygtukai 
        buttonText="click me" 
        tevoKomponentoFunkcija={apdorotiVaikoReiksme}
        />
        <Mygtukai 
        buttonText="add me"
        tevoKomponentoFunkcija={apdorotiVaikoReiksme}
        
        />
        <Mygtukai 
        buttonText="delete me"
        tevoKomponentoFunkcija={apdorotiDeleteMygtuka}
        
        />
        <Mygtukai 
        buttonText="start timer"
        tevoKomponentoFunkcija={apdorotiRandomButton}
        
        />

        </>
    )
}

export default Pasirinkimai