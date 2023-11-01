import powers from "./data/powers";


export class Hero{
    constructor(
        public name:string,
        public powerId: number,
        public age:number
    ){}

    get power(): string{
        // console.log( powers.find( power => power.id === this.powerId ));
        // return 'eds';
        return powers.find( power => power.id === this.powerId )?.desc || 'Not found';
    }
}



