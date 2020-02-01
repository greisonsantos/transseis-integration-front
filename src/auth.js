export const isAuth = () => {

  const token = localStorage.getItem('@TOKEN');

  if (token) {
    return true
  } else
    return false
}
