export const ACCOUNT_ROOT = 'auth'

export const myAccountAPI = {
  login: () => `${ACCOUNT_ROOT}/login`,
  getCurrentUser: () => `${ACCOUNT_ROOT}/principal`,
  fpCodeGen: (email: string) => `${ACCOUNT_ROOT}/forgot-password/send-mail?email=${email}`,
  validateFpCode: () => `${ACCOUNT_ROOT}/forgot-password/verify-email`,
  resetPassword: `${ACCOUNT_ROOT}/forgot-password/reset-password`
}
