export type AuthType = {
  id: string
  name: string
  email: string
  isAuth: boolean
  token: string
}

export type AuthSigninType = {
  email: string
  password: string
}

export type AuthSignupType = {
  name: string
  email: string
  password: string
}

export type AuthLocalStoreType = {
  id: string
  name: string
  email: string
  token: string
}

export type AuthStoreType = {
  id: string
  name: string
  email: string
  isAuth: boolean

  registration: () => void
  login: () => void
  logout: () => void
  checkLoggedIn: () => void
  toJson: () => AuthLocalStoreType
}

export function createAuthStore(): AuthStoreType {
  return {
    id: '',
    name: '',
    email: '',
    isAuth: false,

    registration() {
      console.log( 'authStore: registration' )
    },
    login() {
      console.log( 'authStore: login' )
    },
    logout() {
      console.log( 'authStore: logout' )
    },
    checkLoggedIn() {
      console.log( 'authStore: checkLoggedIn' )
    },
    toJson() {
      const authLocalStateJson = localStorage.getItem( 'AUTH_STORE' )

      let token = ''

      if ( authLocalStateJson ) {
        const authLocalState =
          JSON.parse( authLocalStateJson ) as AuthLocalStoreType
        token = authLocalState.token
      }

      return {
        id: this.id,
        name: this.name,
        email: this.email,
        token: token,
      }
    },
  }
}
