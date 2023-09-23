import { useState } from "react";

function Category() {
  
  const [newCategory, setNewCategory] = useState('');

  const addCategoryHandler = (e : Event) => {
    e.preventDefault();
  }

  return (
    <div className="w-1/2 mx-auto">
      <div className="flex justify-between mt-12 shadow-md p-5 bg-white">
        <h2>Categories</h2>
        <button> + Add Category</button>
      </div>

      <table className="table-auto w-full items-center border border-collapse p-5 mt-10">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <form>
                <input placeholder="Name" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
              </form>
            </td>
            <td></td>
          </tr>
          {
            
          }
        </tbody>
      </table>
    </div>
  )
}

export default Category