import React from 'react';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { Link, RouterContext } from '../Router/Router.jsx'

export default function ListPage({ items, deleteItem }) {
  return (
     <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Product Inventory</h1>
          <Link to="/create" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
            <Plus size={20} />
            Add New Item
          </Link>
        </div>
        
        <div className="p-6">
          {items.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">No items found. Create your first item!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {items.map(item => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-2">
                          <Link to={`/view/${item.id}`} className="text-blue-600 hover:text-blue-900 p-2">
                            <Eye size={18} />
                          </Link>
                          <Link to={`/edit/${item.id}`} className="text-green-600 hover:text-green-900 p-2">
                            <Edit size={18} />
                          </Link>
                          <button
                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete this item?')) {
                                deleteItem(item.id);
                              }
                            }}
                            className="text-red-600 hover:text-red-900 p-2"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
