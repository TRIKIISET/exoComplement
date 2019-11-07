export class Personne
{
    public get etudiant() {
        return this._etudiant;
    }
    public set etudiant(value) {
        this._etudiant = value;
    }
    constructor(private _nom:string, private _age:number, private _etudiant)
    {}
}