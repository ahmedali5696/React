import React from 'react';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import data from './data';

export default function App() {
  const card = data.map(item => {
    return (
      <Cards
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Navbar/>
      <section className='juornal'>
        {card}
      </section>
    </div>
  );
}