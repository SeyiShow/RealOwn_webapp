import { useState } from 'react';
import Main from "./components/main/Main";
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
//import Progress from './components/progress/Progress';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Main />
    </div>
  );
}

export default App;
