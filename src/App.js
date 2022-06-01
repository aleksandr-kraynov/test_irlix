import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App(props) {
  return (
    <div className="App">      
      <Header />
      <Main state={props.state}/>
      <Footer />
    </div>
  );
}

export default App;
