import { ToastContainer } from 'react-toastify';
import ContactForm from './MyContactForm/MyContactForm.jsx';
import MyContactList from './MyPhoneList/MyContactList.jsx';
import Filter from './Filter/Filter.jsx';

export function App() {
  return (
    <div>
      <h1>My Phone contacts list</h1>
      <ContactForm />
      <h2>Find contacts by name</h2>
      <Filter />
      <MyContactList />
      <ToastContainer />
    </div>
  );
}
