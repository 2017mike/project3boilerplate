import {useState} from 'react'
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../util/mutations";

const CreatePost = () => {
  const [createPost] = useMutation(CREATE_POST);
  const [postState, setPostState] = useState({
    title: '',
    description: ''
  })

  return (
    <div>
      
    </div>
  )
}

export default CreatePost
