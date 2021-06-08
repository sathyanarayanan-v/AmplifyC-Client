export const validPan = (panNumber: string) => /[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(panNumber) && panNumber.length === 10
