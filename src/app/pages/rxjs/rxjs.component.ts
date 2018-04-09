import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() { 

  // 	this.regresaOservable()
  //   .retry()
  // 	.subscribe( 
  // 		numero => console.log('Subs', numero),
  // 		error => console.error('Error en el obs', error),
  // 		() => console.log('El observador termino')
  // 	);
  }

  ngOnInit() {
  }

  // regresaOservable(): Observable<number> {
  //   return new Observable( observer => {

  //     let contador = 1;
  //     let interval = setInterval( ()=> {

  //       contador += 1;
  //       let salida:any = {
  //         valor: contador
  //       };

  //       observer.next(salida);

  //       if (contador === 3) {
  //         clearInterval(interval);
  //         observer.complete();
  //       }

  //       if (contador === 2) {
  //         clearInterval(interval);
  //         observer.error('Auxilio!');
  //       }

  //     }, 1000);
  //   });

  //   // return obs;
  // }

}
