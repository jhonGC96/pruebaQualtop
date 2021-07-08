# pruebaQualtop
Creacion de 2 endpoints de alta y consulta de una bd de juguetes

1.- Para correr el proyecto descargue en zip, descomprima o clone directamente desde githug. Abra con el editor, en la consola teclear 'npm i' para que se instalen los modulos correspondientes

2.- Una vez instalado, abre el query que se llama 'DBprueba.sql' con sql server para crear la bd correspondiente.

3.- Correr en la consola del editor el servidor 'npm run dev'

3.- Para probar los endpoint utilice la herramienta PostMan

4.-Desde Postman mandar un POST a la ruta 'http://localhost:3000/alta' en el body enviará el siguiente json: 
    { 
        "descripcion": "Carro hot wheels",
        "precio": 35, 
        "tamano": "5 cm x 8 cm"
    }
    
5.- responderá con un 'alta exitosa' si todo se hace corrrectamente

6.-Para consultar lo que dimos de alta mandar un GET a la ruta 'http://localhost:3000/consulta' y obtendrá un json



