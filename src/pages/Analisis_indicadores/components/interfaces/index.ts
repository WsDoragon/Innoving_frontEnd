//Modelo de datos frontend.

//Indicadores
export interface Indicadores {
    id: string,
    eje: string,
    nombre: string,
    descripcion: string,
    meta: any,
    resultado: any,
    fecha: string,
}

export interface Evidencias {
    id: string,
    fecha: number,
    evidencia: any[]
}

//Valores para crear la navbar, y el home.
export interface IndicadoresResumidos {
    id: string,
    eje: string,
    nombre: string,
    descripcion: string,
}

export interface Ejes {
    id: number,
    nombre: string
}