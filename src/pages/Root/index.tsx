import { Outlet } from "react-router"
import Sidebar from "../../components/SideBar"
import Header from "../../components/Header"

const Root = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-initial w-full">
        <Header />

        <main className="px-0 sm:p-5">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Root