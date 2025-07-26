import ContactForm from "../components/ContactForm"
import Sidebar from "../components/Sidebar"
import Wrapper from "../components/Wrapper"

function AddContact() {
  return (
    <Wrapper>
      {/* <div> */}
        <Sidebar/>
        <ContactForm/>
      {/* </div> */}
    </Wrapper>
  )
}

export default AddContact