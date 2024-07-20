import Category from "../../components/Category"
import { useGetCategories } from "../../hooks/useFetchData"

const Explore = () => {
  const { data, isLoading, error } = useGetCategories()

  if (isLoading) 
    return <p>Carregando</p>

  if(error)
    return <p>Erro</p>

  return (
    <div className="flex items-center justify-center flex-wrap">
      <ul>
        {data?.items.map(e => (
          <li>
            <Category 
              icons={e.icons}
              id={e.id}
              name={e.name}
              key={e.name}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Explore