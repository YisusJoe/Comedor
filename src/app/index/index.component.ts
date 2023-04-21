import { Component } from '@angular/core';
import { DBService } from '../db.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  dataDB:any;

  constructor(private data:DBService){

    let datosCrudo = data.obtenerData()
    this.dataDB = datosCrudo;
  }

}
