import Navbar from './Navbar';
import Carousel from './Carousel';
import About from './About';
import Cart from './Cart';
import Sidebar from './Sidebar';
import Lightbox from './Lightbox';
import Summary from './Summary';
import { useGlobalContext } from '../contextAPI/context';
function App() {
  const data = useGlobalContext();
  const { theme } = data;
  return (
    <main className={theme === 'light' ? null : 'dark-theme'}>
      <Navbar />
      <div className='flex-wrapper center'>
        <Carousel />
        <div className='wrapper'>
          <About />
          <Cart />
        </div>
      </div>
      <Sidebar />
      <Lightbox />
      <Summary />
    </main>
  );
}

export default App;
