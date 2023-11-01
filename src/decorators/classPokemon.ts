

function printToConsole( constructor: Function ){
    console.log( constructor );
}

const printToConsoleConditional = ( print:boolean = false ): Function => {
    if( print ){
        return printToConsole;
    }else{
        return () => {}
    }
}


const bloquearPrototipo = ( constructor: Function) => {
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}


function CheckValidPokemonId(){
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ){
        
        const originalMethod = descriptor.value;
        descriptor.value = ( id:number ) => {
            if( id < 1 || id > 800 ){
                return console.error('El ID del pokemon debe estar entre 1 y 800');
            } else {
                originalMethod( id );
            }
        }

    }
}

function readOnly( isWritable: boolean = true ): Function{
    return function( target: any, propertyKey: any ){
        const descriptor: PropertyDescriptor = {
            get(){
                return 'Edson';
            },
            set( this, val){
                Object.defineProperty( this, propertyKey, { 
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                 })
            }
        }

        return descriptor;
    }
}


@bloquearPrototipo
@printToConsoleConditional( false )
export class classPokemon{

    @readOnly()
    public publicApi: string = 'https://pokeapi.co/api/v2/pokemon/';

    constructor(
        public name: string
    ){}

    @CheckValidPokemonId()
    savePokemonToDb( id: number){
        console.log( 'Pokemon saved!!!! id: '+id );
    }
}




