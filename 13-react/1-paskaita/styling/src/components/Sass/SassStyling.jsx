import './SassStylings.scss'

const SassStyling = () => {
    return (
        <div id='sassComponent'>
            <h2>Sass styling</h2>

            <div id='sassContainer'>
                <h4>mano sass bandymas</h4>
                <p className='sassLoremText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cum nam mollitia natus optio numquam!\</p>
                    <button className='btn-click'>click me</button>
            </div>

            <div className='sassLinks'>
                <ul>
                
                    <li><a className='link'>pvz</a></li>
                    <li><a className='link'>example</a></li>
                </ul>
                
            </div>
        </div>
    )
}

export default SassStyling;