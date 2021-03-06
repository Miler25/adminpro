import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

  	

  	this.contar3().then(
  		// mensaje => console.log('Termino', mensaje)
  	)
  	.catch(error => console.error('Error en la promesa', error));

  }

  ngOnInit() {
  }

  contar3(): Promise<boolean>{

    return new Promise((resolve, reject) =>  {
    let contador = 0;

    let itervalo =  setInterval(()=>{

        contador+=1;

        if (contador === 3) {
          resolve();
          // reject('Simplemente un error');
          clearInterval(itervalo);
        }

      }, 1000);
    });

    
  }

}
