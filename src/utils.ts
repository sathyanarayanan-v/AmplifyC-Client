export const validPan = (panNumber: string) => /[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(panNumber) && panNumber.length === 10
export const stateCodeMapping = [
  { c: '35', n: 'Andaman and Nicobar Islands', u: 'Y', m: 'M2' },
  { c: '37', n: 'Andhra Pradesh', u: 'N', m: 'M2' },
  { c: '12', n: 'Arunachal Pradesh', u: 'N', m: 'M2' },
  { c: '18', n: 'Assam', u: 'N', m: 'M2' },
  { c: '10', n: 'Bihar', u: 'N', m: 'M2' },
  { c: '04', n: 'Chandigarh', u: 'Y', m: 'M2' },
  { c: '22', n: 'Chhattisgarh', u: 'N', m: 'M2' },
  { c: '26', n: 'Dadra and Nagar Haveli and Daman and Diu', u: 'Y', m: 'M2' },
  { c: '07', n: 'Delhi', u: 'N', m: 'M2' },
  { c: '30', n: 'Goa', u: 'N', m: 'M1' },
  { c: '24', n: 'Gujarat', u: 'N', m: 'M2' },
  { c: '06', n: 'Haryana', u: 'N', m: 'M1' },
  { c: '02', n: 'Himachal Pradesh', u: 'N', m: 'M2' },
  { c: '01', n: 'Jammu and Kashmir', u: 'N', m: 'M2' },
  { c: '20', n: 'Jharkhand', u: 'N', m: 'M2' },
  { c: '29', n: 'Karnataka', u: 'N', m: 'M1' },
  { c: '32', n: 'Kerala', u: 'N', m: 'M1' },
  { c: '38', n: 'Ladakh', u: 'Y', m: 'M2' },
  { c: '31', n: 'Lakshadweep', u: 'Y', m: 'M2' },
  { c: '23', n: 'Madhya Pradesh', u: 'N', m: 'M2' },
  { c: '27', n: 'Maharashtra', u: 'N', m: 'M2' },
  { c: '14', n: 'Manipur', u: 'N', m: 'M2' },
  { c: '17', n: 'Meghalaya', u: 'N', m: 'M2' },
  { c: '15', n: 'Mizoram', u: 'N', m: 'M2' },
  { c: '13', n: 'Nagaland', u: 'N', m: 'M2' },
  { c: '21', n: 'Odisha', u: 'N', m: 'M2' },
  { c: '97', n: 'Other Territory', u: 'N', m: 'M2' },
  { c: '34', n: 'Puducherry', u: 'N', m: 'M2' },
  { c: '03', n: 'Punjab', u: 'N', m: 'M2' },
  { c: '08', n: 'Rajasthan', u: 'N', m: 'M2' },
  { c: '11', n: 'Sikkim', u: 'N', m: 'M1' },
  { c: '33', n: 'Tamil Nadu', u: 'N', m: 'M1' },
  { c: '36', n: 'Telangana', u: 'N', m: 'M2' },
  { c: '16', n: 'Tripura', u: 'N', m: 'M2' },
  { c: '09', n: 'Uttar Pradesh', u: 'N', m: 'M2' },
  { c: '05', n: 'Uttarakhand', u: 'N', m: 'M2' },
  { c: '19', n: 'West Bengal', u: 'N', m: 'M2' }
]
const gstinregx = /[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9A-Za-z]{1}[Zz1-9A-Ja-j]{1}[0-9a-zA-Z]{1}/,
  uinregx = /[0-9]{4}[A-Z]{3}[0-9]{5}[UO]{1}[N][A-Z0-9]{1}/,
  nrid = /[0-9]{4}[a-zA-Z]{3}[0-9]{5}[N][R][0-9a-zA-Z]{1}/,
  oidar_reg_ex = /[9][9][0-9]{2}[a-zA-Z]{3}[0-9]{5}[O][S][0-9a-zA-Z]{1}/,
  tdsregx = /[0-9]{2}[a-zA-Z]{4}[a-zA-Z0-9]{1}[0-9]{4}[a-zA-Z]{1}[1-9A-Za-z]{1}[D]{1}[0-9a-zA-Z]{1}/,
  tcsregx = /[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9A-Za-z]{1}[C]{1}[0-9a-zA-Z]{1}/,
  aridregx = /[0-9]{12}[A][R][0-9a-zA-Z]{1}/

export const validateGST = (data: string) =>
  gstinregx.test(data) ||
  uinregx.test(data) ||
  nrid.test(data) ||
  oidar_reg_ex.test(data) ||
  tcsregx.test(data) ||
  tdsregx.test(data) ||
  aridregx.test(data)
