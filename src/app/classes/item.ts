export class Item {

    private name: String;
    private id: String;
    private category: String;


    constructor(id: String, name: String, category: String) {
        this.id = id;
        this.name = name;
        this.category = category;

    }

    getId(): String {
        return this.id;
    }
    setName(name: String) {
        this.name = name;
    }

    getName(): String {
        return this.name;
    }

    getCategory():String{
        return this.category;
    }

}