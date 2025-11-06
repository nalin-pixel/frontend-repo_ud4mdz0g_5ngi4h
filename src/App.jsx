import Header from './components/Header';
import Hero from './components/Hero';
import MainSections from './components/MainSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Header />
      <main>
        <Hero />
        <MainSections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
