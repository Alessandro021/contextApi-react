// import { useContext } from "react";
// import {CounterContext} from "../context/CounterContext";
// ##USANDO CUSTON HOOK
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const {counter, setCounter} = useContext(CounterContext)
  const {counter, setCounter} = useCounterContext()

  const {color, dispathc} = useTitleColorContext()

  const setTitleColor = (color) => {
    dispathc({type: color})
  }
 return (
   <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}> Aumantar contador</button>
      
      <div>
        <button onClick={() => setTitleColor("RED")}> Vermelho </button>
        <button onClick={() => setTitleColor("BLUE")}> Azul </button>
      </div>
   </div>
 );
}
export default Home