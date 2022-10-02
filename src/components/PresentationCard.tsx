import styled from "styled-components"
import rokuPhoto from '../assets/images/roku.png'

const Container = styled.div `
  color: #151515;
  display: grid;
  
  @media (min-width: 650px) {
    grid-template: 54% 46% / 182px auto;
    column-gap: 2rem;
    justify-content: stretch;
  }
`

const Image = styled.img `
  width: 100%;
  max-width: 182px;
  
  @media (min-width: 650px) {
    grid-row: 1 / -1;
    grid-column: 1 span;
    justify-self: end;
  }
`

const Title = styled.h1 `
  font-size: var(--fs-34);
  line-height: 1.1;
  margin-top: 1.5rem;
  @media (min-width: 650px) {
    grid-row: 1;
    grid-column: 2;
    font-size: var(--fs-36);
    margin-top: unset;
    align-self: end;
  }
`

const Body = styled.p `
  margin-top: 1rem;
  @media (min-width: 650px) {
    grid-row: 2;
    grid-column: 2;
    margin-top: .5rem;
  }
`

function PresentationCard() {
  return (
    <Container>
      <Image src={rokuPhoto}/>
      <Title>Hi there! My name is Roku and welcome to my learning journal.</Title>
      <Body>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</Body>    
    </Container>
  )
}

export default PresentationCard
