import { SafeListing, SafeUser } from "@/types/type"

interface BlogProps {
 key: string
 data: SafeListing
 currentUser?: SafeUser | null
}

const page = ({ key, data, currentUser }: BlogProps) => {


 return (
  <div>
   {data.userId === currentUser?.id && (

    <button>Button</button>

   )}
  </div>
 );
}

export default page;