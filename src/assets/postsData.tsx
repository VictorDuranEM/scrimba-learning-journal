interface PostDataContent {
  title: string,
  paragraphs: string[]
}

export interface PostData {
  uuid: string,
  image: string,
  date: string,
  title: string,
  intro: string
  content: PostDataContent[]
}

const posts : PostData[] = [
  {
    uuid: "8157a84d-182d-4698-94a4-4ae9e57719cb",
    image: "/images/macbook-afternoon.png",
    date: "July 23, 2022",
    title: "My new journey as a bootcamp student.",
    intro: "After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.",
    content: [
      {
        title: "How I stay committed to learning",
        paragraphs: [
          "I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.",
          "While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world."
        ]
      },
      {
        title: "How I got started",
        paragraphs: [
          "I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.",
          "That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated."
        ]
      }
    ]
  },
  {
    uuid: 'c94b4894-bb44-4bd7-b720-1701ba62e79d',
    image: "/images/macbook-code.png",
    date: "July 23, 2022",
    title: "Blog one",
    intro: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    content: [
      {
        title: "How I stay committed to learning",
        paragraphs: [
          "I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.",
          "While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world."
        ]
      },
      {
        title: "How I got started",
        paragraphs: [
          "I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.",
          "That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated."
        ]
      }
    ]
  },
  {
    uuid: '63be5580-7561-481b-8863-ff1d35477fc5',
    image: "/images/lightbulb.png",
    date: "July 23, 2022",
    title: "Blog two",
    intro: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    content: [
      {
        title: "How I stay committed to learning",
        paragraphs: [
          "I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.",
          "While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world."
        ]
      },
      {
        title: "How I got started",
        paragraphs: [
          "I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.",
          "That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated."
        ]
      }
    ]
  },
  {
    uuid: '0532457e-ccf0-4bb8-851f-bcbc6c768b9f',
    image: "/images/purple-stuff.png",
    date: "July 23, 2022",
    title: "Blog three",
    intro: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    content: [
      {
        title: "How I stay committed to learning",
        paragraphs: [
          "I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.",
          "While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world."
        ]
      },
      {
        title: "How I got started",
        paragraphs: [
          "I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.",
          "That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated."
        ]
      }
    ]
  },
  {
    uuid: '9c947413-0a6d-4fa9-a35d-7494c11cb6a2',
    image: "/images/girl-beach.png",
    date: "July 23, 2022",
    title: "Blog four",
    intro: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    content: [
      {
        title: "How I stay committed to learning",
        paragraphs: [
          "I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.",
          "While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world."
        ]
      },
      {
        title: "How I got started",
        paragraphs: [
          "I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.",
          "That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated."
        ]
      }
    ]
  },
  {
    uuid: '1bacea7b-ec26-4f1d-8cbc-105411a2866e',
    image: "/images/react-monitor.png",
    date: "July 23, 2022",
    title: "Blog five",
    intro: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    content: [
      {
        title: "How I stay committed to learning",
        paragraphs: [
          "I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.",
          "While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world."
        ]
      },
      {
        title: "How I got started",
        paragraphs: [
          "I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.",
          "That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated."
        ]
      }
    ]
  },
  {
    uuid: '99466f4b-bb4f-49ec-80e9-9771eb7e9a46',
    image: "/images/macbook.png",
    date: "July 23, 2022",
    title: "Blog six",
    intro: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    content: [
      {
        title: "How I stay committed to learning",
        paragraphs: [
          "I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.",
          "While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world."
        ]
      },
      {
        title: "How I got started",
        paragraphs: [
          "I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.",
          "That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated."
        ]
      }
    ]
  },
]

export default posts
