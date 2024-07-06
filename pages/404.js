

// pages/index.js
import Skills from '@/components/Skills';
import NavbarT from '../components/NavbarT';
import Navbar from '../components/Navbar';
import CardR from '../components/CardR';
import CardL from '../components/CardL';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const cardData = [
  { title: 'Content Not found', content: 'Go to Home!' },
  
];

export default function Home() {
  return (
   
    <>
    <div className=" min-h-screen bg-gray-100 flex flex-col ">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
      {cardData.map((card, index) => (
          index%2==0?<CardL key={index} title={card.title} content={card.content} />:<CardR key={index} title={card.title} content={card.content} />
        ))}
        </div>
     <Footer />
      </div>
     
    
    </>
  );
}

