class Model{
    constructor(){
        this.store = null;
    }

    getStore(){
        return this.store;
    }

    setStore(store){
        this.store = store;
    }
}

export default new Model();