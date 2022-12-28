import { Button, Form, FormGroup, Label, Col, Container } from "reactstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

export default function RegisterPublication() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    axios.post("http://170.187.160.109:3001/api/pubs", data).then(() => {
      Swal.fire({
        title: "Publicación Registrada",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => reset());
    });
  };

  console.log(errors);
  return (
    <Container className="mt-4">
      <h3 className="my-4">Registrar Publicación</h3>
      <Form
        style={{
          maxWidth: "600px",
          textAlign: "left",
          margin: "0 auto",
          marginTop: "10px",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormGroup row>
          <Label sm={3}>Autores</Label>
          <Col sm={8}>
            <input
              className="form-control"
              id="autores"
              placeholder="Ingresar Autores"
              {...register("autores", { required: true })}
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
          <Label sm={3}>Fecha de publicacion</Label>
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
          <Col sm={2}>
            <input
              style={{ marginLeft: "70px", marginRight: "10px" }}
              className="form-check-input"
              type="checkbox"
              id="autoresExtranjeros"
              {...register("autoresExtranjeros")}
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
          Registrar
        </Button>
      </Form>
    </Container>
  );
}
