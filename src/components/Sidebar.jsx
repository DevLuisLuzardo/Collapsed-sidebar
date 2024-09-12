import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa'; // Import the hamburger icon from the FontAwesome library


const Sidebar = ({ isCollapsed, onCollapseChange }) => {
    const [isExpanded, setIsExpanded] = useState(!isCollapsed);

    const toggleCollapse = () => {
        setIsExpanded(!isExpanded);
        onCollapseChange(!isExpanded);
    };

    return (
        <aside className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <div className="sidebar-header">

                <button onClick={toggleCollapse}>
                    <span>
                        <FaBars />
                    </span>
                </button>

            </div>

            <div className="sidebar-nav-container"> {/* Nuevo div para envolver el nav */}
                <nav className="sidebar-nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </aside>
    );
};

export default Sidebar;