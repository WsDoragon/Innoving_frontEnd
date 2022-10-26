import { Modal, useModal, Button, Text} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";


function Page3(){
  const { setVisible, bindings } = useModal();
  const navigate = useNavigate();

  return (
    <div >
        <button onClick={() => setVisible(true)}>Click me</button>

        <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Aviso
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">
            ¿Cerrar sesión?
            </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={() => {setVisible(true); navigate("/")}}>
            Si
          </Button>
          <Button auto flat color="error" onClick={() => setVisible(false)}>
            No
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default Page3;