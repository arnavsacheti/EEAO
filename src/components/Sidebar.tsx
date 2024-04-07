// Sidebar.tsx
import React from 'react';
import '../styles/Sidebar.css'

interface SidebarProps {
    // Define any props here if needed
    isHome: boolean;
    isDark: boolean;
    setIsDark: () => void;
}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    {props.isHome ? <></> :
                        <li><a href="/">Home</a></li>}
                    <li><a href="/minutes">Meeting Minutes</a></li>
                    <li><a href="/intent">Movie Makers Intent</a></li>
                    <li><a href="/technology">Computing Technologies</a></li>
                    <li><a href="/timeline">Timeline</a></li>
                    <li><a href="/conclusion">Societal Conclusions</a></li>
                    <li><a href="/presentation">Presentation </a></li>
                </ul>
            </nav>
            <div className="sidebar-footer">
                <a href="https://github.com/arnavsacheti" target="_blank" rel="noopener noreferrer">@arnavsacheti</a>
                {props.isDark ? <a href="/subscribe">Light</a> : <a href="/subscribe">Dark</a>}
            </div>
        </aside>
    );
};

export default Sidebar;
