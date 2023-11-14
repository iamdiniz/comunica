import './App.css'
import { Card } from './components/card/card';
import { useDuvidasData } from './hooks/useDuvidasData';

function App() {
  const { data } = useDuvidasData();

  return (
    <div className='container'>
      <h1>Duvidas</h1>
      <div className='card-grid'>
        {data?.map(duvidasData =>
           <Card
            title={duvidasData.title}/>)}
      </div>
    </div>
  )
}

export default App
