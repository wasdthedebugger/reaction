import Header from './Header.jsx';
import View from './View.jsx';
import Footer from './Footer.jsx';

function App(){
  return (
    <>
    <Header />
    <Spacing />
    <View />
    <Spacing />
    <Footer />
    </>
  );
}

function Spacing(){
  return (
    <>
    <br />
    <br />
    </>
  );
}

export default App;
