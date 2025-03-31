const Darbuotojas = ({vardas, pavarde, bonus}) => {
    const tikrinaBonus = () => {
        if (!bonus || bonus === 0) {
            return 'sadge gaila, laikas keist darba, nes akivaizdziai kazkas ne taip cia'
        } else if (bonus > 0 && bonus < 100) {
            return 'kebabu bus puota jau visa, skambink visai giminei' 
        } else if (bonus >= 100) {
            return 'vaikam siandien bus ir vakariene visa, saunuolis'
        }
    }

    return (
        <div>
        <p>{vardas} {pavarde}</p>
        <p>Bonus:{bonus}</p>
        <p>{tikrinaBonus()}</p>
        </div>
    )
}

export default Darbuotojas