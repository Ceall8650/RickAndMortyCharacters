import { Suspense } from 'react';
import SideBar from 'views/SideBar';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-full grid grid-cols-app">
      <SideBar className="border-r border-gray-300" />
      <Suspense fallback={<div>Page is Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
