export class UserModel {

    public Id: number = 0;
    public Name: string = '';
    public Username: string = '';
    public Password: string = '';
    public Email: string = '';
    public Phone: string = '';
    public IsTempPassword:boolean = false;
    public VerificationCode: string = '';

    constructor(id: number = 0, Name: string= '', Email: string= '') {
        this.Id = id;
        this.Name = Name;
        this.Email = Email;
    }
}