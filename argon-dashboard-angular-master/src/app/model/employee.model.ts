export class EmployeeModel {
    idEmployee: string = null
    nameEmployee: string = null
    email: string = null
    password: string = null
    newPassword: string = null
    phone: string = null
    gender: boolean = null
    address: string = null
    birthday: number
    birthdayDisplay: string
    image: string = null
    roleId: string = null
    roleName: string = null
    roleDescription: string = null
    createDate: number = 0
    modifyDate: number = 0
    modifyBy: string = null
    isActive: boolean = true
    isDelete: boolean = false
    confirmPassword: string
  }