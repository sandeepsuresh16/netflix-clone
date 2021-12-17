import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import {trending,action,originals,comedy,sciFi,animation,fantasy,crime,history,horror,western} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner /> 
      <Cards title={'Netflix Original'} url={originals}/>
      <Cards title={'Action Movies'} url={action} small />
      <Cards title={'Comedy Movies'} url={comedy} small/>
      <Cards title={'Trending Movies'} url={trending} small/>
      <Cards title={'Science Fiction Movies'} url={sciFi} small/>
      <Cards title={'Animation Movies'} url={animation} small/>
      <Cards title={'Fantasy Movies'} url={fantasy} small/>
      <Cards title={'Crime Movies'} url={crime} small/>
      <Cards title={'History Movies'} url={history} small/>
      <Cards title={'Horror Movies'} url={horror} small/>
      <Cards title={'Western Movies'} url={western} small/>
    </div>
  );
}

export default App;
