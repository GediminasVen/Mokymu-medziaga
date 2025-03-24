import { vidurkisSk } from "../utils/calculator";

const Komp3 = () => {
let studentai = [
    {id: 1, name : 'Jonas', grades: [4,8,7,9]},
    {id: 2, name : 'Petras', grades: [4,3,3,2]},
    {id: 3, name : 'Valdas', grades: [4,1,7,9]},
    {id: 4, name : 'Zigmas', grades: [4,8,0,9]}
]

    return (
        <div>
            <h1>Studentai</h1>
            <table border="1">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>grades avg</th>
                    <th>Passing grade</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    studentai.map(studentas => {
                        return <tr key={studentas.id}>
                        <td>{studentas.id}</td>
                            <td>{studentas.name}</td>
                            <td>{vidurkisSk(studentas.grades)}</td>
                            <td>passing grade</td>
                        </tr>
                    })
                  }
                </tbody>
            </table>
        </div>

    )
}

export default Komp3