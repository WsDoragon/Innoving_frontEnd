import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
  Form,
  Label,
  Col,
} from "reactstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

export default function EditPubModal({
  isOpen,
  closeModal,
  defaultValues,
}: {
  isOpen: boolean;
  closeModal: () => void;
  defaultValues: any;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({ values: defaultValues });
  console.log(errors);

  const url = "http://localhost:3001/api/pubs/update";
  const onSubmit = (data: any) => {
    axios.post(url, data).then((data) => {
      Swal.fire({
        title: "Cambios Registrados",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      }); //.then(() => closeModal());
    });
  };

  const setVariables = () => {
    setValue("validado", 1);
    let variables = [2]
    const {id, disciplina, autoresExtranjeros, validado } = getValues();
    // post indicadores...
    if (disciplina === "ingenieria" ){
      variables.push(3)
    }
    if (autoresExtranjeros){
      variables.push(1)
    }
    console.log("variables autores: ",autoresExtranjeros, " variables discplina: ", disciplina)
    axios.post(`http://localhost:3001/api/ai/publicaciones/${id}/asignar-variables`, {variables:  variables})
      .then((res) => {console.log("insert")})
    
    axios.post(url, getValues()).then(() => closeModal());
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <div>
          <h3>Editar Publicación</h3>
        </div>
      </ModalHeader>

      <ModalBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup row w>
            <Label sm={3}>Autores</Label>
            <Col sm={8}>
              <input
                className="form-control"
                id="autores"
                placeholder="Ingresar Autores"
                {...register("autores")}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={3}>Titulo</Label>
            <Col sm={8}>
              <input
                className="form-control"
                placeholder="Ingresar titulo"
                {...register("titulo", { required: true })}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={3}>Revista</Label>
            <Col sm={8}>
              <input
                className="form-control"
                placeholder="Ingresar revista"
                {...register("revista", { required: true })}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={3}>Indexación</Label>
            <Col sm={8}>
              <input
                className="form-control"
                id="index"
                placeholder="Ingresar indexación"
                {...register("indexacion", { required: true })}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={3}>Año</Label>
            <Col sm={8}>
              <input
                className="form-control"
                id="año"
                type="date"
                placeholder="Ingresar año"
                {...register("anio", { required: true })}
              />
            </Col>
          </FormGroup>

          <FormGroup check className="my-2">
            <Col sm={3}>
              <input
                style={{ marginLeft: "70px", marginRight: "10px" }}
                className="form-check-input"
                type="checkbox"
                id="autoresExtranjeros"
                {...register("autoresExtranjeros", { required: false })}
              />
            </Col>
            <Label check>¿Hay autores extranjeros?</Label>
          </FormGroup>

          <FormGroup row className="mt-2">
            <Label sm={3}>Clasificación</Label>
            <Col sm={8}>
              <input
                className="form-control"
                id="clasificacion"
                placeholder="Ingresar clasificacion"
                {...register("clasificacion", { required: true })}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={3}>Disciplina</Label>
            <Col sm={8}>
              <select
                className="form-select"
                id="disciplina"
                placeholder="ingresar"
                {...register("disciplina", { required: false })}
              >
                <option value="ingenieria">Ingeniería</option>
                <option value="otro">otras...</option>
              </select>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={3}>ISSN/DOI</Label>
            <Col sm={8}>
              <input
                className="form-control"
                id="issn_doi"
                placeholder="Ingresar ISSN/DOI"
                {...register("issnDoi", { required: true })}
              />
            </Col>
          </FormGroup>

          {Object.keys(errors).length !== 0 && (
            <div className="alert alert-danger" role="alert">
              Faltan campos que rellenar
            </div>
          )}

          <Button type="submit" color="primary" className="w-25 mt-2">
            Guardar
          </Button>
        </Form>
      </ModalBody>

      <ModalFooter style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          type="submit"
          color="success"
          className="w-30"
          onClick={setVariables}
        >
          Confirmar Evidencia
        </Button>
        <Button color="danger" onClick={closeModal}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
}
