import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';

function App() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

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