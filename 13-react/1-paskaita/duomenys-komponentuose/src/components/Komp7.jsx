const Komp7 = () => {
   let antraste = 'Objektu masyvas'
   
   let links = [
    {id: 1, url: '/', title: 'Pradzia'},
    {id: 2, url: '/', title: 'Paslaugos'},
    {id: 3, url: '/', title: 'Apie mus'},
    {id: 4, url: '/', title: 'Kontaktai'}
   ]


    return (
        <div>
            <h2>{antraste}</h2>
            <ul>
            {
                links.map(link => <li key={link.id}><a  href={link.url}>{link.title}</a></li>)
            }
            </ul>
         
        </div>
    )
}

export default Komp7