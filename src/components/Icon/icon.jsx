import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa'

const icon = ({name}) => {
  if(name == "circle") return <FaRegCircle/>
  else if(name == "cross") return <FaTimes/>
  else return <FaPen/>
}

export default icon