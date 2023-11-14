import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { CreateModal } from './components/create-modal/create-modal';
import { useDuvidasData } from './hooks/useDuvidasData';

function App() {
  const { data } = useDuvidasData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className='container'>
      <h1>Duvidas frequentes</h1>
      <div className='card-grid'>
        {data?.map(duvidasData =>
           <Card
            title={duvidasData.title}/>
            )}
             {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
             <button onClick={handleOpenModal}>Adicionar</button>
      </div>
    </div>
  )
}

export default App
