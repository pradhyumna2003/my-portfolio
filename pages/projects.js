

// pages/index.js
import Skills from '@/components/Skills';
import NavbarT from '../components/NavbarT';
import Navbar from '../components/Navbar';
import CardR from '../components/CardR';
import CardL from '../components/CardL';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const cardData = [

  { title: 'Recent Project', content: <Projects/>},
];

export default function Home() {
  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-gray-100  ">
      <div className="justify-center lg:mx-96 gap-0 self-center">
        {cardData.map((card, index) => (
          index%2==0?<CardL key={index} title={card.title} content={card.content} />:<CardR key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
     <div className='fixed  w-full bottom-0'>
     <Footer />
     </div>
      
    </>
  );
}

