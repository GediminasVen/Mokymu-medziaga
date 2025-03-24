import { vidurkisSk } from "../utils/calculator";

const Komp2 = () => {
    let skaiciai = [10, 120, 2, 45];


    const didziausiasSk = (masyvas) => {
        return Math.max(...masyvas)
    }

    const maziausiasSk = (mas) => {
        return Math.min(...mas)
    }



    return (
        <div>
            Komp2
            <p>{skaiciai.join(',')}</p>
            <p>Didziausias skaicius yra : {didziausiasSk(skaiciai)}</p>
            <p>Didziausias skaicius yra : {maziausiasSk(skaiciai)}</p>
            <p>Vidurkis yra: {vidurkisSk(skaici)}</p>
        </div>

    )
}

export default Komp2