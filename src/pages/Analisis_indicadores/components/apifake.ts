import { Ejes, IndicadoresResumidos } from "./interfaces"

export const ejes : Ejes[]= [
    {id: 1, nombre: "Armonización Curricular y Foco en Posgrados Tecnológicos"},
    {id: 2, nombre: "Alianzas Internacionales"},
    {id: 3, nombre: "Capital Humano y Gestión del Cambio"},
    {id: 4, nombre: "Comercialización de Tecnología y Emprendimiento"},
    {id: 5, nombre: "I+D Aplicado y vinculo industria"},
]

export const indicadoresResumidos: IndicadoresResumidos[] = [
    {    
        id: "M25",
        eje: "I+D Aplicado y vinculo industria",
        nombre: "Number of publications N° de publicaciones",
        descripcion: "Permite conocer la productividad científica, por medio, de los artículos científicos efectuados por los miembros de la Facultad de Ciencias de la Ingeniería e indexados en las bases de datos referenciales WOS y Scopus durante un determinado período.",
    },
    {    
        id: "M26",
        eje: "I+D Aplicado y vinculo industria",
        nombre: "Number of engineering related publications   N° de publicaciones relacionadas con la ingeniería.",
        descripcion: "Permite conocer el número de artículos científicos publicados por los miembros de la Facultad de Ciencias de la Ingeniería en revistas indexadas en el campo de la Ingeniería en las bases de datos Scopus y/o WOS (Web of Science) durante el año.",
    },
    {    
        id: "M49",
        eje: "Alianzas Internacionales",
        nombre: "Publications with foreign co-authors Publicaciones con coautores extranjeros",
        descripcion: "Permite conocer el porcentaje de artículos científicos realizados e indexadas en las bases de datos WOS y Scopus en los que participaron miembros de la FCI y otros coautores extranjeros con respecto al total de los artículos realizados en un período determinado.",
    },
    {    
        id: "1",
        eje: "Armonización Curricular y Foco en Posgrados Tecnológicos",
        nombre: "Fondos de I+D de fuentes públicas",
        descripcion: "Ingresos adjudicados para proyectos de Investigación, Desarrollo e Innovación adjudicados por miembros de la Facultad de Cs. de la Ingeniería desde fuentes de financiamiento públicas en un determinado año.",
    },
]


export const indicadores = [
    {
        nombre: "N° de publicaciones",
        fecha: 2022
    },
    {   
        nombre: "Fondos de I+D de instituciones extranjeras.",
        fecha: 2022,
    }
]
