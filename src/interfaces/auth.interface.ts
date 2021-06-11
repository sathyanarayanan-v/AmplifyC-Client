export interface ILoginRequestDto {
  username: string
  password: string
  redirectUri?: string
}
export interface ILoginResponseDto {
  username: string
  token: string
}
