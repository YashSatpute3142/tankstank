import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./componants/Layouts/MainLayout";
import { Home } from "./pages/Home";
import { FetchOld } from "./FetchOld";
import { FetchRQ } from "./FetchRQ";
import "./App.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { FetchIndv } from "./componants/UI/FetchIndv";

const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout />,
    children: [
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/trad",
        element:<FetchOld />,
      },
      {
        path:"/rq",
        element:<FetchRQ />
      },
      {
        path:"/rq/:id",
        element:<FetchIndv />
      },
    ],
  },
]);

const App = () => {

  const queryClient = new QueryClient 

  return (
    <QueryClientProvider client={queryClient} >
  <RouterProvider router={router}></RouterProvider>
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  )
}

export default App;