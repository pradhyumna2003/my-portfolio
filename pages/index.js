

// pages/index.js
import Skills from '@/components/Skills';
import NavbarT from '../components/NavbarT';
import Navbar from '../components/Navbar';
import CardR from '../components/CardR';
import CardL from '../components/CardL';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const cardData = [
  { title: 'Pradhyumna S', content: 'Currently pursuing B.Tech in SASTRA University ,Thanjavur. Final year student.' },
  { title: 'Summary', content: `

I am a BTech student in Computer Science and Engineering (IoTA) at SASTRA, graduating in May 2025. I excel in Java, Python, JavaScript, PHP, C/C++, and various tools like Git, Docker, and ReactJS. I have interests in Software Development, Data Analysis, and Machine Learning. I interned at NWarehouse Pvt. Ltd. (Oct 2022 - present) working on Embedded C for ESP32 and at ATSUYA Technologies Pvt. Ltd. (Jul 2023 - Aug 2023) developing microservices with Java Spring Boot.`},
  { title: 'Technical', content: <Skills/> },
  { title: 'Recent Project', content: <Projects/>},
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 max-w-full">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 lg:mx-96 gap-0">
        {cardData.map((card, index) => (
          index%2==0?<CardL key={index} title={card.title} content={card.content} />:<CardR key={index} title={card.title} content={card.content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

