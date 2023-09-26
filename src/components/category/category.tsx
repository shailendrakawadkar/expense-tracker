import { useState } from "react";
import { useDispatch } from "react-redux";
import { RootStateOrAny } from "react-redux";
import { useSelector } from "react-redux";
import {
  addCategory,
  removeCategory,
} from "../../redux/reducers/category/categorySlice";
import { Category as CategoryModel } from "../../models/category";
import { MdDelete } from "react-icons/md";
import { AiOutlineCloseSquare } from "react-icons/ai";
import NoData from "../../assets/images/NoData.jpg";
import { toast } from "react-toastify";
import { toastConfig } from "../../constants";

function Category() {
  const [newCategory, setNewCategory] = useState<string>("");
  const [addNewCategory, setAddNewCategory] = useState<boolean>(false);

  const dispatch = useDispatch();

  const categories = useSelector(
    (state: RootStateOrAny) => state.category.categories
  );

  const addCategoryHandler = (e) => {
    e.preventDefault();

    const index = categories.findIndex(
      (category: CategoryModel) =>
        category.name.toLowerCase() == newCategory.toLowerCase()
    );

    if (index == -1) {
      dispatch(addCategory({ name: newCategory }));
      toast.success("Category added successfully", toastConfig);
      setNewCategory("");
      setAddNewCategory(false);
      const modal = document.getElementById("modal");
      modal?.classList.add("hidden");
    } else {
      toast.warning("Category already exist", toastConfig);
    }
  };

  return (
    <>
      <div className="md:w-1/2 sm:w-full mx-auto">
        <div className="flex justify-between mt-12 shadow-md p-5 bg-white">
          <h2 className="font-bold">Categories</h2>
          <button
            disabled={addNewCategory}
            onClick={() => {
              const modal = document.getElementById("modal");
              modal?.classList.remove("hidden");
            }}
            className="bg-green-400 px-4 py-1 rounded text-white"
          >
            + Add Category
          </button>
        </div>

        {categories.length ? (
          categories.map((category: CategoryModel, index: number) => {
            return (
              <div
                key={index}
                className="shadow-md mx-1 my-2 flex justify-between p-2 border-l-8 border-green-400"
              >
                <div>
                  <p className="font-bold">{category.name}</p>
                </div>
                <div className="flex justify-between">
                  <button disabled={category.primary}
                    title={category.primary ? 'Cannot delete primary category' : 'delete'}
                    className="bg-red-400 bg-opacity-30 shadow"
                    onClick={() =>
                      dispatch(removeCategory({ id: category.id }))
                    }
                  >
                    <MdDelete className="text-red-700" />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex justify-center mt-2">
            <img src={NoData} width={500} height={500} />
          </div>
        )}
      </div>

      {/* <!-- Modal container (hidden by default) --> */}
      <div
        id="modal"
        className="fixed inset-0 z-50 hidden flex items-center justify-center bg-black bg-opacity-10"
      >
        {/* <!-- Modal content --> */}
        <div className="w-full max-w-md p-8 mx-auto bg-white rounded shadow-lg">
          {/* <!-- Close button --> */}
          <div className="flex justify-between shadow-md py-2 px-1">
            <h2>Add Category</h2>
            <button
              onClick={() => {
                const modal = document.getElementById("modal");
                modal?.classList.add("hidden");
              }}
            >
              <AiOutlineCloseSquare />
            </button>
          </div>

          {/* <!-- Modal content goes here --> */}
          <form
            className="mt-12 shadow-md p-5 bg-white"
            onSubmit={addCategoryHandler}
          >
            <div className="mt-2">
              <label className="block">Category Name</label>
              <input
                className="mt-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={newCategory}
                type="text"
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </div>

            <div className="flex justify-around mt-2">
              <button
                disabled={!newCategory && newCategory == ""}
                type="submit"
                className="bg-green-400 text-white px-4 py-1 rounded"
              >
                Submit
              </button>

              <button
                type="button"
                className="bg-gray-400 text-white px-4 py-1 rounded"
                onClick={() => {
                  setAddNewCategory(false);
                  setNewCategory("");

                  const modal = document.getElementById("modal");
                  modal?.classList.add("hidden");
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Category;
