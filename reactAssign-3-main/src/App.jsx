import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Content from './components/Content';
import Event from './components/Event';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/SideBar';

function App() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  return (
    <>
      <div className="">
        <button onClick={handleClick} value={click}>EventProject</button>
      </div>
      {
        click ? <Event /> : (
          <>
            <Header />
            <Sidebar />
            <Content />
            <Footer />
          </>
        )
      }
    </>
  );
}

export default App;
