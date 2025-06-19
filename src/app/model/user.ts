export class User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  admin: boolean;

  constructor(id: number = 0, email: string = '',
              password: string = '', firstName: string = '',
              lastName: string = '', admin: boolean = false
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.admin = admin;
  }
}
