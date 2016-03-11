# autentiaFrontend

He detectado varios problemas en el objeto ng2-grid:

1. Una errata en un código de ejemplo de https://github.com/ceolter/ag-grid-ng2-example
   El evento onReady() esta incorrectamente escrito, en realidad tiene que ser onGridReady($event) para que funcione.
2. El objeto Datasource que hay que construir y pasarle al objeto Grid para que sepa manejar los datos en la paginación, tiene dos problemas:

   2.1 Al tener nosotros que crear un objeto Datasource en formato javascript para pasárselo en OnGridReady al objeto Grid, no podemos utilizar desde la función
       'getRows' que tenemos que implementar, llamadas a código de nuestro servicio de datos que hemos implementado en angular2-typescript , por tanto he tenido que usar una llamada ajax nativa de javascript. 

   2.2 Uno de los parámetros del datasource que tenemos que inicializar es 'rowCount' con la cantidad total de filas que existen actualmente. El problema es que este 
       dato no lo puedes ir actualizando en cada llamada de paginación. Solo se podría reiniciar el datasource completo si detectaramos que se han insertado mas registros desde otros navegadores pero perderiamos el estado de la paginación.