import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa'; // Import the hamburger icon from the FontAwesome library


const Sidebar = ({ isCollapsed, onCollapseChange }) => {
    const [isExpanded, setIsExpanded] = useState(!isCollapsed);

    const toggleCollapse = () => {
        setIsExpanded(!isExpanded);
        onCollapseChange(!isExpanded);
    };

    return (
        <aside className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <div className="sidebar-header">
                <div className="sidebar-header">
                    {isExpanded ? (
                        <button onClick={toggleCollapse}>
                            <span>
                                <FaTimes />
                            </span>
                        </button>
                    ) : (
                        <button onClick={toggleCollapse}>
                            <span>
                                <FaBars />
                            </span>
                        </button>
                    )}
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
</div>
        </aside>
    );
};

export default Sidebar;