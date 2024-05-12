import { auth } from "@/auth"
import CreateForm from "@/components/shared/CreatePost"

const CreatePostPage = async () => {
  const session=await auth()
  return <div>
    <CreateForm user={session?.user}/>
  </div>
}

export default CreatePostPage