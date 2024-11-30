import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recomendacion } from './schemas/recomendaciones.schema';

@Injectable()
export class RecomendacionesService {
    constructor(@InjectModel(Recomendacion.name) private recomendacionModel: Model<Recomendacion>) {}


    async guardarVarias(recomendaciones: any[], username: any): Promise<any> {
        const documentos = recomendaciones.map((recomendacion) => ({
          prendaId: recomendacion._id,
          nombre: recomendacion.nombre,
          formalidad: recomendacion.formalidad,
          edad: recomendacion.edad,
          userid: username,
        }));
      
        // Inserta todas las recomendaciones de una vez
        return await this.recomendacionModel.insertMany(documentos);
      }

      async getByUsuario(username: string, fechaInicio?: string, fechaFin?: string): Promise<Recomendacion[]> {
        const filter: any = { username };
    
        if (fechaInicio || fechaFin) {
          filter.fecha = {};
          if (fechaInicio) filter.fecha.$gte = new Date(fechaInicio);
          if (fechaFin) filter.fecha.$lte = new Date(fechaFin);
        }
    
        // Consulta a la base de datos
        const recomendaciones = await this.recomendacionModel.find(filter).exec();
    
        // Elimina duplicados basado en `prendaId`
        const uniqueRecomendaciones = recomendaciones.filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.prendaId === value.prendaId),
        );
    
        return uniqueRecomendaciones;
      }
      
}
