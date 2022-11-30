window.addEventListener('DOMContentLoaded', event => {


function cargarDatos(elem){
  
    let titulo = elem['title'];
    let director = elem['director'];
    let descripcion = elem['description'];
    let anioEstreno = elem['release_date'];
    let imagen = elem['image'];
         
    let plantilla = `<tr>
     
        <td>${titulo}</td>
        <td>${director}</td>
        <td>${descripcion}</td> 
        <td>${anioEstreno}</td>  
        <td><img src="${imagen}" width = "150" height = "180"></td>  
        </tr>`;
        tablaPeliculas.innerHTML += plantilla;
}


fetch("http://localhost:3000/Result")
.then(response => response.json())
.then(data => {    
    let  tablaPeliculas = document.getElementById('tablaPeliculas');
    let select = document.querySelector('div.selector > select');
    
    for(var elem of data){
        let titulo = elem['title'];
        let director = elem['director'];
        let descripcion = elem['description'];
        let anioEstreno = elem['release_date'];
        let imagen = elem['image'];
         
    let plantilla = `<tr>
     
        <td>${titulo}</td>
        <td>${director}</td>
        <td>${descripcion}</td>   
        <td>${anioEstreno}</td>
        <td><img src="${imagen}" width = "150" height = "180"></td>  
        </tr>`;
        tablaPeliculas.innerHTML += plantilla;
    

        let plantillaPeliculas = `<option value= "${director}">${director}</option>`;
    
        select.innerHTML += plantillaPeliculas;
        
    }            
    select.addEventListener("change",function(){
        tablaPeliculas.innerHTML = '';

        for(var elem of data){
            if(select.value == "Seleccionar película"){
                cargarDatos(elem);
            }
            else if(elem['director'] == select.value){
                let titulo = elem['title'];
                let director = elem['director'];
                let descripcion = elem['description'];
                let anioEstreno = elem['release_date'];
                let imagen = elem['image'];
                    
                let plantilla = `<tr>
     
                <td>${titulo}</td>
                <td>${director}</td>
                <td>${descripcion}</td> 
                <td>${anioEstreno}</td> 
                <td><img src="${imagen}" width = "150" height = "180"></td>        
                </tr>`;
                tablaPeliculas.innerHTML += plantilla;
            }
        }
    })
    
    }).catch(console.error);

});