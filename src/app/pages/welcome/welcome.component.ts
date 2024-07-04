import { Component, OnInit } from '@angular/core';
import { CiudadanosComponent } from '../../ciudadanos/ciudadanos.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [CiudadanosComponent]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}