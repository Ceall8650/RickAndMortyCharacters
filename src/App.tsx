import SideBar from 'views/SideBar';
import ContactList from 'views/Contact/ContactList';

function App() {
  return (
    <div className="h-full grid grid-cols-app">
      <SideBar />
      <ContactList />
    </div>
  );
}

export default App;
