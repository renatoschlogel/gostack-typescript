interface TechObject {
  title: string,
  experience: number
}

interface CreateUserData {
  name?: string, // ? para dizer que é opcional
  email: string,
  password: string,
  techs: Array<string | TechObject>
}

export default function createUserService ({name = '', email, password}: CreateUserData){
  const user = {
    name,
    email,
    password,
  }

  return user;
}