import userServices from "../services/User";

const AuthenticateUser = async () => {
  const token: any = localStorage.getItem('english-token')
  if (token) {
    const user = await userServices.auth(token)
    if (user) {
      window.location.href="/"
      console.log('yes')
    }
  }
}
export default AuthenticateUser