import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Routes/Routes";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-base-300">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
