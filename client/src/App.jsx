import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='all'>
      <div className="top">
        <div className="tText">Заголовок</div>
      </div>
      <div className="center">
        <ul>
          <li>1. Элемент списка</li>
          <li>2. Элемент списка</li>
          <li>3. Элемент списка</li>
          <li>4. Элемент списка</li>
          <li>5. Элемент списка</li>
          <li>6. Элемент списка</li>
          <li>7. Элемент списка</li>
          <li>8. Элемент списка</li>
          <li>9. Элемент списка</li>
        </ul>
        <div className="c"></div>
      </div>
      <div className="botton">
        <div className="b">афваф ыывфаыв  впы ыфв фывфыв</div>
      </div>
    </div>
  )
}

export default App
