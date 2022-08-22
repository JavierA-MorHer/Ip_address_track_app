import { useState } from 'react';
import { Header } from './components/Header'
import { Mapa } from './components/Map'

function App() {
  

  const [obj, setObj] = useState({
    ip:'0.0.0.0',
    location:
              {city:'Example', 
               country:'MX', 
               timezone:'-7:00',
               lat:52.52435,
               lng:10.41053},
    isp:'Example INC'
});

  return (
   <div>
      <Header
        obj={obj}
        setObj={setObj}
      />
      <Mapa
        obj={obj}
      />
   </div>
  )
}

export default App
