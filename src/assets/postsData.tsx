export interface PostData {
  uuid: string,
  image: string,
  date: string,
  title: string,
  body: string
}

const posts : PostData[] = [
  {
    uuid: "8157a84d-182d-4698-94a4-4ae9e57719cb",
    image: "/src/assets/images/macbook-afternoon.png",
    date: "July 23, 2022",
    title: "My new journey as a bootcamp student.",
    body: "After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.",
  },
  {
    uuid: 'c94b4894-bb44-4bd7-b720-1701ba62e79d',
    image: "/src/assets/images/macbook-code.png",
    date: "July 23, 2022",
    title: "Blog one",
    body: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
  {
    uuid: '63be5580-7561-481b-8863-ff1d35477fc5',
    image: "/src/assets/images/lightbulb.png",
    date: "July 23, 2022",
    title: "Blog two",
    body: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
  {
    uuid: '0532457e-ccf0-4bb8-851f-bcbc6c768b9f',
    image: "/src/assets/images/purple-stuff.png",
    date: "July 23, 2022",
    title: "Blog three",
    body: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
  {
    uuid: '9c947413-0a6d-4fa9-a35d-7494c11cb6a2',
    image: "/src/assets/images/girl-beach.png",
    date: "July 23, 2022",
    title: "Blog four",
    body: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
  {
    uuid: '1bacea7b-ec26-4f1d-8cbc-105411a2866e',
    image: "/src/assets/images/react-monitor.png",
    date: "July 23, 2022",
    title: "Blog five",
    body: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
  {
    uuid: '99466f4b-bb4f-49ec-80e9-9771eb7e9a46',
    image: "/src/assets/images/macbook.png",
    date: "July 23, 2022",
    title: "Blog six",
    body: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
  },
]

export default posts
