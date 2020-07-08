export class Language{
    public langCode: string;
    public LangDescription: string;

    constructor(code: string, description: string){
        this.langCode=code;
        this.LangDescription=description;
    }
}