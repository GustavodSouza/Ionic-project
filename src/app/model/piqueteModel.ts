export class PiqueteModel {
    constructor(public id?: string,
                public periodoDescanso?: number,
                public periodoOcupacao?: number,
                public resultadoPiquete?: number,
                public dataCompleta?: string,
                public tipo?: string) {}
}