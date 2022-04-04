import { useState } from 'react'
import { ChromePicker } from 'react-color'

function App() {
  const [color, setColor] = useState('#ffffffff')
  return (
    <main className="App">
        <ChromePicker color={color} onChange={(color) => setColor(color)} />
    </main>
  );
}

export default App;
