import React from 'react';
import { Edit, ArrowLeft } from 'lucide-react';
import { Link, RouterContext } from '../Router/Router.jsx'

export default function ViewPage({ item }) {
 const { navigate } = React.useContext(RouterContext);

  if (!item) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-red-600 text-lg">Item not found</p>
          <Link to="/" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Back to List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200 flex items-center gap-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Item Details</h1>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Name</label>
              <p className="text-lg text-gray-900">{item.name}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Category</label>
              <p className="text-lg text-gray-900">{item.category}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Price</label>
              <p className="text-lg text-gray-900">${item.price}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Description</label>
              <p className="text-lg text-gray-900">{item.description}</p>
            </div>
          </div>
          
          <div className="mt-6 flex gap-3">
            <Link to={`/edit/${item.id}`} className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 flex items-center gap-2">
              <Edit size={18} />
              Edit Item
            </Link>
            <Link to="/" className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300">
              Back to List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
