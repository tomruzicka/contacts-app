import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import About from "./components/About";

const App = () => {
  const [showAddContact, setShowAddContact] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const contactsFromServer = await fetchContacts();
      setContacts(contactsFromServer);
    };

    getContacts();
  }, []);

  // Fetch Contacts
  const fetchContacts = async () => {
    const res = await fetch(`http://localhost:5000/contacts`);
    const data = await res.json();

    return data;
  };

  // Add Contact
  const addContact = async (contact) => {
    const res = await fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(contact),
    });

    const data = await res.json();

    setContacts([...contacts, data]);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newContact = { id, ...contact };
    // setContacts([...contacts, newContact]);
  };

  // Delete Contact
  const deleteContact = async (id) => {
    await fetch(`http://localhost:5000/contacts/${id}`, {
      method: "DELETE",
    });

    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddContact(!showAddContact)}
          showAdd={showAddContact}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddContact && (
                <AddContact onAdd={addContact} contacts={contacts} />
              )}
              {contacts.length > 0 ? (
                <Contacts contacts={contacts} onDelete={deleteContact} />
              ) : (
                "No contacts to show"
              )}
            </>
          )}
        />

        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
