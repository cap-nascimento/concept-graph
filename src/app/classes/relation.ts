export class Relation{

    constructor(
        public relevance: number,
        public connector: string,
        public conceptU: string,
        public conceptV: string
    ){

    }

}