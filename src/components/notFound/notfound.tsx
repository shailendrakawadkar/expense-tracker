import NotFoundImage from '../../assets/images/NotFound.jpg'
import { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    // Set the new title when the component mounts
    document.title = "Expense Tracker | Not Found";

    // Optionally, you can reset the title when the component unmounts
    return () => {
      document.title = "Expense Tracker";
    };
  }, []);
  return (
    <div className="flex justify-center mt-2">
            <img src={NotFoundImage} width={500} height={500}/>
    </div>
  )
}

export default NotFound