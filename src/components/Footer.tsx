import styled from "styled-components"

const Container = styled.div `
  font-size: var(--fs-12);
  text-align: center;
  height: 105px;
  background: #202020;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.p `
  font-weight: 700;
  margin-bottom: .2em;
`

const Copyright = styled.p `
`

function Footer() {
  return (
    <Container>
      <Title>My Learning Journal</Title>
      <Copyright>Copyright ©2022</Copyright>
    </Container>
  )
}

export default Footer