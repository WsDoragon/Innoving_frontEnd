import React from 'react'

class HistorialMetas extends React.Component<any,any>{    

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
                <th>ID del Indicador</th>
                <th>Nombre del Indicador</th>
                <th>Año</th>
                <th>Meta propuesta</th>
                <th>Tipo de solicitud</th>
                <th>Estado</th>
                <th>ㅤFechaㅤ</th>
            </tr>
            </thead>
            <tbody>
            {this.props.historial.map((historia : any) => (
                <tr>
                {this.props.metas.map((meta : any) => (
                    historia.id_imm === meta.id && historia.tipo === 2?
                    <>
                        {meta.antiguaid === '0'?
                            <>
                            {this.props.indicadores.map((indicador : any) => (
                                indicador.id === meta.idindicador ?
                                <td>{indicador.id}</td>
                                :
                                <></>
                            ))}
                            </>

                            :

                            <>
                            {this.props.indicadores.map((indicador : any) => (
                                indicador.id === meta.antiguaid && indicador.antiguaid === '0'?
                                <td>{indicador.id}</td>
                            
                                :
                                indicador.id === meta.antiguaid?
                                    <td>{indicador.antiguaid}</td>
                                    :
                                    <></>
                                
                            ))}
                            </>

                        }
                            
                        {meta.antiguaid === '0'?
                            <>
                            {this.props.indicadores.map((indicador : any ) => (
                                indicador.id === meta.idindicador ?
                                <td>{indicador.nombre}</td>
                                :
                                <></>
                            ))}
                            </>

                            :

                            <>
                            {this.props.indicadores.map((indicador : any) => (
                                indicador.id === meta.antiguaid && indicador.antiguaid === '0'?
                                <td>{indicador.nombre}</td>
                            
                                :
                                indicador.id === meta.antiguaid?
                                    <td>{indicador.nombre}</td>
                                    :
                                    <></>
                                
                            ))}
                            </>

                        }

                        <td>{meta.fecha}</td>
                        <td>{meta.cantidad}</td>
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

export default HistorialMetas;