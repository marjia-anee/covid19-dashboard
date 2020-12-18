import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SelectionTabs from './components/SelectionTabs/SelectionTabs';
import { TinyButton  as ScrollUpButton } from "react-scroll-up-button";


function App() {
  return (
    <div className="container">
        <Header />
        <SelectionTabs />
        <Footer />
        <ScrollUpButton />
      </div>
  );
}

export default App;
