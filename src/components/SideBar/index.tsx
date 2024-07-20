import { House, LayoutGrid, Menu } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  return (
    <div
      className={`bg-background min-h-screen py-6 duration-500 text-gray-100 px-4 sm:sticky ${open ? "w-72 absolute z-10" : "w-16"}`}
    >
       <div className="mb-6 sm:hidden">
          <Menu
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

      <div>
        <ul>
          <li className="mb-6">
            <Link to={'/'}>
              <div className="flex items-center">
                <House className="text-primary"/>
                <span className={`ml-3 ${!open && 'hidden'}`}>Início</span>
              </div>
            </Link>
          </li>
          <li className="mb-6">
            <Link to={'explore'}>
              <div className="flex items-center">
                <LayoutGrid className="text-primary"/>
                <span className={`ml-3 ${!open && 'hidden'}`}>Explorar</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar