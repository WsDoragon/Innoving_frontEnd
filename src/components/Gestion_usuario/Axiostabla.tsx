import axios from 'axios';
//rut | nombre | apellido | correo | contraseña
type User = {
  rut: string
  nombre: string
  apellido: string
  correo:string
  pass: string
};

type GetUsersResponse = {
  data: User[];
};

async function getUsers() {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get<GetUsersResponse>(
      'http://170.187.160.109:3001/users/all',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null));

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}



export default function algo() {
    return (getUsers())
}