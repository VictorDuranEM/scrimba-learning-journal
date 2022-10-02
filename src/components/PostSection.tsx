    import styled from "styled-components"
    
    const Container = styled.div `
      color: #151515;
      margin-top: 1.5rem;
    `
    
    const Title = styled.h2 `
      font-size: var(--fs-16);
      @media (min-width: 650px) {
        font-size: var(--fs-24);
      }
    `
    
    const Paragraph = styled.p `
      margin-top: 1rem;
      @media (min-width: 650px) {
        font-size: var(--fs-18);
      }
    `
    
    interface PostSectionProps {
      title: string,
      paragraphs: string[]
    }
    
    function PostSection(props: PostSectionProps) {
      return (
        <Container>
          <Title>{props.title}</Title>
          {props.paragraphs.map(paragraph => 
            <Paragraph>{paragraph}</Paragraph>
          )}
        </Container>
      )
    }
    
    export default PostSection