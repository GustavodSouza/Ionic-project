export class ConsumoAnimalModel {
    constructor(public id?: string,
                public ingestaoAnimal?: number,
                public pesoMedioAnimal?: number,
                public numeroAnimais?: number,
                public perdaPastejo?: number,
                public estacionalidade?: number,
                public resultadoConsumoAnimal?: number,
                public resultadoMsHec?: number,
                public resultadoMsAnoHec?: number,
                public tipo?: string,
                public dataCompleta?: string) {}
}