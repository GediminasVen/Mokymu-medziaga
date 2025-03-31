const Roles = ({kiekis, role}) => {

    const tikrinaKieki = () => {
        if (kiekis >= 20) {
            return ' popular role, susikurk instagrama ir dabar esi influenceris'
        } else {
            return 'sad nepopular role, reiks daug verkti kampe vienam'
        }
    }

    return (
        <div>
            <h1>Roles</h1>
            <p></p>
            <p>Role: {role}, Kiekis: {kiekis}</p>
            <p>{tikrinaKieki()}</p>
        </div>
    )
}

export default Roles