const ACCOUNT_ROOT = 'account'

export const myAccountAPI = {
  login: () => `${ACCOUNT_ROOT}/login`,
  getCurrentUser: () => `${ACCOUNT_ROOT}`
}
