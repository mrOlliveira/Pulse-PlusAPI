// front/dispenserApp/src/App.jsx
import { Routes, Route } from 'react-router-dom'
import SplashScreen from './splashscreen'
import Home from './Home' // Você precisará criar este componente

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/home" element={<Home />} />
      {/* Adicione outras rotas conforme necessário */}
    </Routes>
  );
}