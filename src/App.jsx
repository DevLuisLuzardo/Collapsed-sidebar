import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';

function App() {
    //Inicio : Muestra el sidebar wn moso colapsado : useState(true)
    //El contenido se mueatra en el main y estilos .main {...} index.css
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

    return (
        <BrowserRouter>
            <div className="app">
                <Sidebar
                    isCollapsed={isSidebarCollapsed}
                    onCollapseChange={setIsSidebarCollapsed}
                />
                <main className={`main ${isSidebarCollapsed ? 'collapsed' : ''}`}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;