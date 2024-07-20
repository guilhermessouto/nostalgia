import { Search} from "lucide-react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Input } from "@nextui-org/input";

const schema = yup
  .object({
    search: yup.string().required(),
  })
  .required()

type Schema = yup.InferType<typeof schema>

const Header = () => {
  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: Schema) => console.log(data)

  return (
    <header className="p-5 bg-background">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-96">
            <Input
              {...register("search")}
              startContent={
                <Search color="#222"/>
              }
            />

            <input type="submit" hidden />
          </form>
    </header>
  )
}

export default Header