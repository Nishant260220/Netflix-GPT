export const validateData = (email, password, name) => {

    
  if (name && !/^[a-zA-Z\s]*$/.test(name)) {
    return "Enter valid name"; 
  }

  const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const isPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/.test(
      password
    );  


  if (!isEmail) return "Email is not valid";
  if (!isPassword) return "Password is not valid";

  return null;
}
