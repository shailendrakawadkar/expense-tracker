
function Category() {
  
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
          
        </tbody>
      </table>
    </div>
  )
}

export default Category