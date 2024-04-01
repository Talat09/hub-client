import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Routes/Routes";
import { createContext, useState } from "react";
// import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

//max-w-[1440px]
export const PartsIdContext = createContext();
function App() {
  const [partsId, setPartsId] = useState("");
  return (
    <div className=" mx-auto bg-white">
      <PartsIdContext.Provider value={{ partsId, setPartsId }}>
        <RouterProvider router={router}></RouterProvider>
      </PartsIdContext.Provider>
      <Toaster />
    </div>
  );
}

export default App;
