import { Button } from "../components/modal/modalClass/button";
import { Textbox } from "../components/modal/modalClass/textBox";

export class modalItem{
    title: string;
    subtitle: string;
    confirm: Button;
    undo : Button;
    showPhotoAdd : boolean;
    textboxs : Textbox[];

    constructor(title: string, subtitle : string = "", confirm : Button= null, undo: Button = null, showPhotoAdd = null, textboxs :Textbox[]){
        this.title = title;
        this.subtitle = subtitle;
        this.confirm = confirm;
        this.undo = undo;
        this.showPhotoAdd = showPhotoAdd;
        this.textboxs = textboxs;
    
    }

    setSubtitle(value : string){
        this.subtitle = this.subtitle;
    }
    
}