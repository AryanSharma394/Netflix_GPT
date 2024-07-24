export const validate = (email, password) => {
  const checkemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const checkpassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!checkemail) return "Email is not valid";
  if (!checkpassword) return "Password is not valid";

  return null;
};
