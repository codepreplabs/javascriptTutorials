import axios from 'axios';

export default class Search {

    constructor(query){
        this.query = query;
    }

    async getResults(){

        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'a18fc73fc0350f4ae3f18dc3e1a8d152';
    
        try {
            const result = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipies;
            console.log(result);
        } catch (error) {
            alert(error);
        }
    }
}