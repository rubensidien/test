import logo from './logo.svg';
//import './App.css';
import HelloWorld from './Components/HelloWorld'
import CounterExample from './Components/CounterExample'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {
  return (
    <div>
   
  {/*<CounterExample />*/}
  
  <Header />
   <HelloWorld name ="Yvan Ruben" />
   <Footer />
      
    </div>
  );
}

export default App;
