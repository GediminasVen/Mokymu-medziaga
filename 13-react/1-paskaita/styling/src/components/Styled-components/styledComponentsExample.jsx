import styled from 'styled-components';

const ComponentTitle = styled.h1`
    color: red;

`

const ComponentContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;

`

const ManoMygtukas = styled.button`
    color: ${props => props.$danger ? 'red' : 'black'};
    background-color: ${props => props.kat ? 'red' : 'grey'}
`

const Text = styled.p`
color:${props => props.$spalva ? 'red' : 'pink'}`


const ComponentSubTitle = styled(ComponentTitle)`
    text-decoration: underline
`

const StyledComponentExample = () => {
    return (
        <div>
            <h2>style-components example</h2>
            
            <ComponentContainer>
                <ComponentTitle>Mano pirmas styled-component</ComponentTitle>
                <ComponentSubTitle>Component title paveldejimas</ComponentSubTitle>
            </ComponentContainer>

            <ManoMygtukas $danger>pvz</ManoMygtukas>
            <ManoMygtukas kat='true'>pvz</ManoMygtukas>

            <Text $spalva>cat</Text>
        </div>

    )
}

export default StyledComponentExample