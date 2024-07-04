import { Injectable } from '@angular/core';
import { Doctor } from '../Models/Doctor.model';
import { Empresario } from '../Models/Empresario.model';
import { Granjero } from '../Models/Granjero.model';
import { Mecanico } from '../Models/Mecanico .model';
import { Policia } from '../Models/Policia.model';
import { Profesor } from '../Models/Profesor.model';
import { Taxista } from '../Models/Taxista.model';

@Injectable({
  providedIn: 'root'
})
export class CiudadanoService {
  ciudadano: Doctor;
  ciudadano1: Empresario;
  ciudadano2: Granjero;
  ciudadano3: Mecanico;
  ciudadano4: Policia;
  ciudadano5: Profesor;
  ciudadano6: Taxista;
  ciudadano7: Doctor;
  ciudadano8: Empresario;
  ciudadano9: Granjero;
  ciudadano10: Mecanico;
  ciudadano11: Policia;
  ciudadano12: Profesor;
  ciudadano13: Taxista;

  constructor() {
    this.ciudadano = new Doctor('Doctor 🧑‍⚕️', 'Ana Rodríguez', 45);
    this.ciudadano1 = new Empresario('Empresario 🧑‍💼', 'Carlos Gómez', 50);
    this.ciudadano2 = new Granjero('Granjero 🌾', 'Luis Martínez', 60);
    this.ciudadano3 = new Mecanico('Mecánico 🛠️', 'María López', 35);
    this.ciudadano4 = new Policia('Policía 👮', 'Jorge Pérez', 40);
    this.ciudadano5 = new Profesor('Profesor 👨‍🏫', 'Laura García', 30);
    this.ciudadano6 = new Taxista('Taxista 🚖', 'Pedro Sánchez', 55);
    this.ciudadano7 = new Doctor('Doctor 🧑‍⚕️', 'Elena Torres', 38);
    this.ciudadano8 = new Empresario('Empresario 🧑‍💼', 'Fernando Ruiz', 45);
    this.ciudadano9 = new Granjero('Granjero 🌾', 'Gabriel Fernández', 50);
    this.ciudadano10 = new Mecanico('Mecánico 🛠️', 'Andrea Morales', 28);
    this.ciudadano11 = new Policia('Policía 👮‍♀️', 'Sofía Herrera', 35);
    this.ciudadano12 = new Profesor('Profesor 👨‍🏫', 'Miguel Díaz', 55);
    this.ciudadano13 = new Taxista('Taxista 🚖', 'Lucía Vázquez', 40);  
  }

  getCiudadano(): Doctor {
    return this.ciudadano;
  }
  getCiudadano1(): Empresario {
    return this.ciudadano1;
  }
  getCiudadano2(): Granjero {
    return this.ciudadano2;
  }
  getCiudadano3(): Mecanico {
    return this.ciudadano3;
  }
  getCiudadano4(): Policia {
    return this.ciudadano4;
  }
  getCiudadano5(): Profesor {
    return this.ciudadano5;
  }
  getCiudadano6(): Taxista {
    return this.ciudadano6;
  }
  getCiudadano7(): Doctor {
    return this.ciudadano7;
  }
  getCiudadano8(): Empresario {
    return this.ciudadano8;
  }
  getCiudadano9(): Granjero {
    return this.ciudadano9;
  }
  getCiudadano10(): Mecanico {
    return this.ciudadano10;
  }
  getCiudadano11(): Policia {
    return this.ciudadano11;
  }
  getCiudadano12(): Profesor {
    return this.ciudadano12;
  }
  getCiudadano13(): Taxista {
    return this.ciudadano13;
  }

}
