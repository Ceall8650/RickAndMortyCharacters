import ContactBookView from './ContactBook/ContactBookView';
import ContactCharacter from './ContactCharacter';

function ContactView() {
  return (
    <div className="grid grid-cols-contact overflow-hidden">
      <ContactBookView className="border-r border-gray-300" />
      <ContactCharacter />
    </div>
  )
}

export default ContactView
