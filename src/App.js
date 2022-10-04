import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Main from "./layout/Main";
import FriendDetail from "./component/FriendDetail/FriendDetail";
import Posts from "./component/Posts/Posts";
import PostDetails from "./component/PostDetails/PostDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/home", element: <Home /> },
        {
          path: "/about",
          element: <About />,
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
        },
        {
          path: "/friend/:friendId",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            );
          },
          element: <FriendDetail />,
        },
        {
          path: "/posts",
          element: <Posts />,
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
        },
        {
          path: "/post/:postId",
          element: <PostDetails />,
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.postId}`
            );
          },
        },
      ],
    },
    {
      path: "*",
      element: <div>This route is not accessible</div>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
