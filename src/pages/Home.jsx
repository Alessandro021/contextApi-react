// import { useContext } from "react";
// import {CounterContext} from "../context/CounterContext";
// ##USANDO CUSTON HOOK
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
  // const {counter, setCounter} = useContext(CounterContext)
  const {counter, setCounter} = useCounterContext()
 return (
   <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}> Aumantar contador</button>
   </div>
 );
}
export default Home