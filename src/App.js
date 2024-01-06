import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Footer from './components/Footer';
import OrdinalsTrending from './components/OrdinalsTrending';
import TrendingSliders from './components/TrendingSliders';
import TradingInvite from './components/TradingInvite';
import ProfileCollection from './components/ProfileCollections';
import './App.css';


import BitcoinPunksImage from './media/Bitcoin_Punks.png';


// Dummy data array
const dummyOrdinals = [
  {
    id: 1,
    name: 'Rare 78',
    image: '/path-to-your-image/rare78.png',
    floorPrice: '0.0025',
    change: 2.37,
    volume: '0.02',
    owners: 70,
    supply: 78
  },
  {
    id: 2,
    name: 'BitApes',
    image: '/path-to-your-image/bitapes.png',
    floorPrice: '0.0047',
    change: -4.37, // Negative change to demonstrate negative class
    volume: '0.056',
    owners: 2000,
    supply: 6300
  },

  {
    id: 2,
    name: 'PladinPunk',
    image: '/path-to-your-image/bitapes.png',
    floorPrice: '0.0063',
    change: 4.37, // Negative change to demonstrate negative class
    volume: '0.056',
    owners: 100,
    supply: 400
  },

  {
    id: 2,
    name: 'PladinPunk',
    image: '/path-to-your-image/bitapes.png',
    floorPrice: '0.0063',
    change: 4.37, // Negative change to demonstrate negative class
    volume: '0.056',
    owners: 100,
    supply: 400
  },

  {
    id: 2,
    name: 'BitcoinPunk',
    image: '/path-to-your-image/bitapes.png',
    floorPrice: '0.0063',
    change: -8.37, // Negative change to demonstrate negative class
    volume: '0.056',
    owners: 100,
    supply: 400
  },
  // ... more dummy data objects ...
];

const slideData = [
  {
    image: BitcoinPunksImage,
    description: 'Bitcoin Punks'
  },
  {
    image: 'path_to_dummy_image_2.jpg',
    description: 'Paladin Punks'
  },
  // ... more slides
];


function App() {
  return (
    <div className='background-grid'>
      <Header />
      <Introduction />
      <Footer />
      <TrendingSliders slides={slideData}  />
      <OrdinalsTrending ordinals={dummyOrdinals} /> 
      <TradingInvite />
      <ProfileCollection />
    </div>
  );
}

export default App;
