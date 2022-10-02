import styled from "styled-components"
import posts from "../assets/postsData"
import PostPreviewGroup from "../components/PostPreviewGroup"
import PostSection from "../components/PostSection"
import PresentationCard from "../components/PresentationCard"

const Container = styled.div `
  padding: 2.5rem 1.3rem;
  @media (min-width:650px) {
    background: #FAFAFA;
    padding: 5rem 3rem;
  }
`

const Body = styled.div `
  margin-top: 3rem;
  
  h2 {
    font-size: var(--fs-20);
  }
  
  p {
    font-size: var(--fs-16);
  }
  
  @media (min-width: 650px) {
    padding-inline: 4.5rem;
  }
`

const RecentPostsTitle = styled.p `
  font-weight: 700;
  color: black;
  text-align: center;
  margin-top: 2.5rem;
  
  @media (min-width: 650px) {
    font-size: var(--fs-24);
  }
`

const RecentPosts = styled.div `
  margin-top: 1.5rem;
`

function AboutMe() {
  return (
    <Container>
      <PresentationCard />
      <Body>
        <PostSection 
          title="How I stay committed to learning"
          paragraphs={[
            "I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.",
            "While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world."
          ]}
        />
        <PostSection 
          title="How I got started"
          paragraphs={[
            "I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.",
            "That helped me grow what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated."
          ]}
        />
      </Body>
      <RecentPostsTitle>Recent posts</RecentPostsTitle>
      <RecentPosts>
        <PostPreviewGroup posts={posts} />
      </RecentPosts>
    </Container>
  )
}

export default AboutMe