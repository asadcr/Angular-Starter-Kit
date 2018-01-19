export class CategoryModel {

    public Id: number = 0;
    public Date: Date;
    public Name: string = '';
    public Description: string = '';
    public Breadcrumb: string = '';

    constructor(id: number, Name : string, Description: string) {
        this.Id = id;
        this.Name = Name;
        this.Description = Description;
        this.Date = new Date();
    }
}
