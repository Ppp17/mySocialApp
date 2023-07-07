import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NavBar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

function App() {
  // 判断是否登录
  const currentUser = true;

  // 布局: 两边固定，中间使用router的Outlet插槽
  // 此变量名随意，但是下面element 组件要与其对应
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    // 此处的children是指ProtectedRoute其中的组件
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      //
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      // children中的页面会填充Layout中的Outlet位置
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
