import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div<{ closed: boolean, small: boolean }> `
  color: #151515;
  display: grid;
  align-items: end;
  
  ${props => props.small && css`
    max-width: 374px;
  `}
  
  ${props => !props.small && props.closed && css`
    color: white;
    grid-template: 40% auto auto / auto;
  `}
`

const Image = styled.img<{ closed: boolean, small: boolean }> `
  width: 100%;
  height: 100%;
  max-height: 488px;
  object-fit: cover;
  
  ${props => props.small && css`
      height: 232px;
      grid-row: 1;
      grid-column: 1 / -1;
  `}
  
  ${props => !props.small && props.closed && css`
    min-height: 293px;
    grid-row: 1 / -1;
    grid-column: 1;
  `}
  
  ${props => !props.small && !props.closed && css`
    max-height: 191px;
    @media (min-width: 650px) {
      max-height: 488px;
    }
  `}
`

const Content = styled.div<{ closed: boolean, small: boolean }> `
  z-index: 1;
  
  ${props => props.small &&
    css`
      margin-top: .7rem;
      grid-row: -1 span;
      grid-column: 1 / -1;
  `}
  
  ${props => !props.small && props.closed && css`
    grid-row: 1 / -1;
    grid-column: 1;
    @media (min-width: 650px) {
    }
  `}
`

const Date = styled.p<{ small: boolean }> `
  margin-bottom: .8rem;
  
  ${props => props.small ? css`
    font-size: var(--fs-14);
  `
    : css`
    font-size: var(--fs-12);
    @media (min-width: 650px) {
      font-size: var(--fs-16);
    }
  `}
`

const TitleLink = styled(Link) <{ $small: boolean, $closed: boolean }> `
  display: block;
  font-weight: 700;
  line-height: 1;
  margin-bottom: .8rem;
  text-decoration: none;
  color: inherit;
  cursor: unset;
  
  ${props => props.$small && css`
    font-size: var(--fs-24);
  `}
  
  ${props => !props.$small && css`
    font-size: var(--fs-32);
  `}
    
  ${props => (props.$small || props.$closed) && css`
    cursor: pointer;
    :hover {
      opacity: .5;
    }
  `}
  
  ${props => !props.$small && !props.$closed && css`
    @media (min-width: 650px) {
      font-size: var(--fs-36);
    }
  `}
  
  ${props => !props.$small && props.$closed && css`
    @media (min-width: 650px) {
      font-size: var(--fs-40);
    }
  `}
`

const Body = styled.p<{ small: boolean, closed: boolean }> `
  ${props => props.small && css`
    color: #505050;
  `}
  
  ${props => !props.small && !props.closed && css`
    margin-bottom: 2rem;
    @media (min-width: 650px) {
      margin-bottom: 2rem;
    }
  `}
  
  ${props => !props.small && props.closed && css`
    margin-bottom: 1.5rem;
    @media (min-width: 650px) {
      max-width: 660px;
      margin-bottom: 3.5rem;
    }
  `}
`

interface PostPreviewProps {
  uuid: string,
  small: boolean,
  closed: boolean,
  img: string,
  date: string,
  title: string,
  intro: string
}

function PostPreview(props: PostPreviewProps) {
  const { small, closed, uuid, img, date, title, intro: body } = props
  return (
    <Container small={small} closed={closed}>
      <Content small={small} closed={closed}>
        <Date small={small} >{date}</Date>
        <TitleLink $small={small} $closed={closed} to={`/posts/${uuid}`}>{title}</TitleLink>
        <Body small={small} closed={closed}>{body}</Body>
      </Content>
      <Image small={small} src={img} closed={closed} />
    </Container>
  )
}

export default PostPreview
