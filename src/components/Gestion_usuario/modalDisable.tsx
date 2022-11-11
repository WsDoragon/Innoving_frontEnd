import axios from 'axios';
import { Table, Row, Col, Tooltip, User, Text, Button, Link, Spacer, Modal, useModal } from "@nextui-org/react";

import { useNavigate } from "react-router-dom";
import { useState, useEffect, Dispatch, SetStateAction, MutableRefObject } from 'react'



type useModal = (initialVisible: boolean) => {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    currentRef: MutableRefObject<boolean>;
    bindings: {
      open: boolean;
      onClose: () => void;
    };
  };

export default function ModalDisable(toDisable:any) {
    const { setVisible, bindings } = useModal();
    

    return(
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
              ¿Está seguro de que quiere desactivar al usuario {toDisable}?
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button auto onClick={() => {console.log(`eliminado ${toDisable}`);setVisible(false)}}>
              Si
            </Button>
            <Button auto flat color="error" onClick={() => setVisible(false)}>
              No
            </Button>                
          </Modal.Footer>
        </Modal>
    )
    
}