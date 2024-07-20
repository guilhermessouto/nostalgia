import { Link } from "react-router-dom"
import { Category as CategoryType } from "../../types/types"

const Category = ({ icons, id, name }: CategoryType ) => {
  return (
    <Link to={`/browse/categories/${id}`}>
        <div className="w-[274px] h-[274px] m-2 relative">
        <img src={icons[0].url} alt={name} width={icons[0].width} height={icons[0].height} />

        <div className="absolute top-2 left-3">
          <p>{name}</p>
        </div>
      </div>
    </Link>
  )
}

export default Category