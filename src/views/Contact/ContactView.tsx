import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import ContactBookView from './ContactBook/ContactBookView';

function ContactView() {
  return (
    <div className="grid grid-cols-contact overflow-hidden">
      <ContactBookView className="border-r border-gray-300" />
      <Suspense fallback={<div>Page is Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default ContactView
