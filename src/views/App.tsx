import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import SideBar from 'views/SideBar';

function App() {
  return (
    <div className="h-full grid grid-cols-app">
      <SideBar/>
      <Suspense fallback={<div>Page is Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
