import styled from 'styled-components'

const ContainerDiv = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const Header = styled.header`
background: #f0d280;
display: flex;
justify-content: space-between;
padding: 30px;
`;

const Nav = styled.nav`
  a {
    margin-left: 15px;
    text-decoration: none;
    
  }
`;

const NavA = styled.a`
  
`;

const styledtitle = styled.h3`
  text-align: center;
`;

const text = styled.p``;

const Title = styled.h1`
  margin: 0;
`;

const Banner = styled.div`
  background: #8264ad;
  color: white;
  padding: 30px;
  text-align: center;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 30px 0;
`;

const Card = styled.div`
  border: 1px solid black;
  padding: 20px;
 
`;

const BannerTwo = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: #8264ad;
  color: white;
  padding: 30px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  background: #f0d280;
  color: white;
  padding: 30px;
  color: black;
`



function App() {

  return (
    <>
      <ContainerDiv>  
      <Header>
        <Title>projektas</Title>
        <Nav>
          <NavA>Nuoroda 1</NavA>
          <NavA>Nuoroda 1</NavA>
          <NavA>Nuoroda 1</NavA>
          <NavA>Nuoroda 1</NavA>
          <NavA>Nuoroda 1</NavA>
        </Nav>
        
      </Header>

      <Banner>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero praesentium iusto optio mollitia nam blanditiis alias, dicta repellat quibusdam qui, dignissimos culpa perferendis atque suscipit nostrum quisquam cumque eum sapiente?</Banner>


      <Cards>
        <Card>
          <styledtitle>Straipsnis1</styledtitle>
          <text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis quam optio unde impedit adipisci.</text>
        </Card>
        <Card>
          <styledtitle>Straipsnis1</styledtitle>
          <text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis quam optio unde impedit adipisci.</text>
        </Card>
        <Card>
          <styledtitle>Straipsnis1</styledtitle>
          <text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis quam optio unde impedit adipisci.</text>
        </Card>
        <Card>
          <styledtitle>Straipsnis1</styledtitle>
          <text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis quam optio unde impedit adipisci.</text>
        </Card>
        <Card>
          <styledtitle>Straipsnis1</styledtitle>
          <text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis quam optio unde impedit adipisci.</text>
        </Card>
        <Card>
          <styledtitle>Straipsnis1</styledtitle>
          <text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis quam optio unde impedit adipisci.</text>
        </Card>
        
      </Cards>


      <BannerTwo>
      <text>Lorem, ipsum dolor.</text>
      <text>Lorem ipsum dolor sit.</text>

      </BannerTwo>

      <Footer>
      <text>Lorem ipsum dolor sit.</text>
      <text>Lorem ipsum dolor sit.</text>
      <text>Lorem ipsum dolor sit.</text>
      
      </Footer>




      </ContainerDiv>


    </>
  )
}

export default App
