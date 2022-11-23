import React from 'react'

class HistorialIndicadores extends React.Component {    

  render(){
    const AStyle = {
        color: 'rgb(48, 147, 59)'
    };

    const DStyle = {
        color: 'rgb(170, 25, 25)'
    };

    return(
    <div>

    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Calificacion CORFO</th>
            <th>Número del indicador</th>
            <th>Misión Universitaria</th>
            <th>Nombre</th>
            <th>Tipo de indicador</th>
            <th>Eje</th>
            <th>Unidad de medida</th>
            <th>Fuente de información</th>
            <th>Responsable</th>
            <th>Frecuencia de medicion</th>
            <th>Tipo de solicitud</th>
            <th>Estado</th>
            <th>ㅤFechaㅤ</th>
        </tr>
        </thead>
        <tbody>
        {this.props.historial.map((historia : any) => (
            <tr>
            {this.props.indicadores.map((indicador : any) => (
                historia.id_imm === indicador.id && historia.tipo === 1?
                <>
                    {indicador.antiguaid === '0'?

                        <td>{indicador.id}</td>
                        :
                        <td>{indicador.antiguaid}</td>}
                    <td>{indicador.CalificacionCORFO}</td>
                    <td>{indicador.NumeroIndicador}</td>
                    <td>{indicador.MisionUniversitaria}</td>
                    <td>{indicador.nombre}</td>
                    <td>{indicador.TipoIndicador}</td>

                    {this.props.ejes.map((eje : any) => (
                        indicador.eje === eje.id?
                        <td>{eje.nombre}</td>
                        :
                        <></>
                    ))}

                    <td>{indicador.Unidad}</td>
                    <td>{indicador.FuenteInformacion}</td>
                    <td>{indicador.Responsable}</td>
                    <td>{indicador.Frecuencia}</td>
                    <td><b>{historia.solicitud}</b></td>
                    {historia.estado === 'Aprobado'?
                        <td style={AStyle}><b>{historia.estado}</b></td>
                        :
                        <td style={DStyle}><b>{historia.estado}</b></td>}
                    <td>{historia.fecha}</td>
                </>
                :
                <></>
                ))
            }
            </tr>
        ))
        }
        </tbody>
    </table>

    </div>
        );
  }
}

export default HistorialIndicadores;