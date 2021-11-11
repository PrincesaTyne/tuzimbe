import * as Yup from 'yup'
import { RequiredNumberSchema } from 'yup/lib/number'
import { RequiredStringSchema } from 'yup/lib/string'
import { AnyObject } from 'yup/lib/types'

export const capitalize = (string: string) => {
  return string.toUpperCase()
}
  
export const capitalizeFirstLetter = (string: string) => {
  return string?.charAt(0).toUpperCase() + string?.slice(1).toLowerCase()
}

export const validateFields = (fields: string[]) => {
  const obj={}
  fields.map((field: string) => {
    if(field == 'age' || field == 'price' || field == 'quantity'){
      obj[field] = Yup.number().required('Required Field')
    }else if(field == 'email'){
      obj[field] = Yup.string().email('Invalid email address').required('Required Field')
    }else {
      obj[field] = Yup.string().required('Required Field')
    }
  })
  return obj
}

export const roles = [
  'Builder',
  'Porter',
  'Manager',
  'Carpenter'
]

export const measurements = [
  'Kgs',
  'Tonnes',
  'Bags',
  'Liters',
]
