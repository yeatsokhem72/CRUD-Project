import React, { useState } from 'react';
import { Router, Route } from './Router/Router.jsx';
import ListPage from './components/ListPage';
import CreatePage from './components/CreatePage';
import EditPage from './components/EditPage';
import ViewPage from './components/ViewPage';

export default function App() {
  const [items, setItems] = useState([
   
  ]);

  const addItem = (item) => {
    setItems([...items, { ...item, id: Date.now() }]);
  };

  const updateItem = (id, updatedItem) => {
    setItems(items.map(item =>
      item.id === parseInt(id) ? { ...updatedItem, id: parseInt(id) } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const getItem = (id) => items.find(item => item.id === parseInt(id));

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Route path="/" component={() => <ListPage items={items} deleteItem={deleteItem} />} />
        <Route path="/create" component={() => <CreatePage addItem={addItem} />} />
        <Route path="/edit/:id" component={({ params }) =>
          <EditPage item={getItem(params.id)} updateItem={updateItem} id={params.id} />
        } />
        <Route path="/view/:id" component={({ params }) =>
          <ViewPage item={getItem(params.id)} />
        } />
      </div>
    </Router>
  );
}
