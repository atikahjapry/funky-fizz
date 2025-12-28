
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductList } from './components/ProductList';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import type { Product } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-200">
      <Header cartCount={cart.length} />
      <main>
        <Hero />
        <ProductList addToCart={addToCart} />
        <WhyUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
