import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Routes/Routes";
import { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";
//max-w-[1440px]
export const PartsIdContext = createContext();
function App() {
  const [partsId, setPartsId] = useState("");
  return (
    <div className=" mx-auto bg-black">
      <ToastContainer />
      <PartsIdContext.Provider value={{ partsId, setPartsId }}>
        <RouterProvider router={router}></RouterProvider>
      </PartsIdContext.Provider>
    </div>
  );
}

export default App;
