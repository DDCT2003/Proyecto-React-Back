import { RecomendacionesService } from './recomendaciones.service';
export declare class RecomendacionesController {
    private recomendacionService;
    constructor(recomendacionService: RecomendacionesService);
    guardarRecomendaciones(data: {
        recomendaciones: any[];
    }, username: any): Promise<any>;
}
