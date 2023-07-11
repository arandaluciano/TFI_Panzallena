let encabezado=`
<h1 class='visor_imagenes'>Panza Llena = Corazón Contento</h1>
        
        <nav>

       
        <input type="checkbox" id="check">
        <label for ="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                 <li><a href="recetas.html">Recetas</a></li>
                <li><a href="about.html">Sobre nosotros</a></li>
                <li><a href="contacto.html">Contacto</a></li>
                               
            </ul>
        </nav>

`

let piePagina=`
        <div class="social">
            <ul class="social-icons">
                  <li>Siguenos en:</li>
                    <li><a href="https://www.instagram.com"><i class="fab fa-instagram" style="color: #ffffff;"></i></a></li>
                  <li><a href="https://www.facebook.com"><i class="fab fa-facebook" style="color: #ffffff;"></i></a></li>
                  <li><a href="mailto:contacto@recetasjuntos.com.ar"><i class="fa-solid fa-envelope" style="color: #ffffff;"></i></a></li>
              </ul>
          </div>
        <p>Derechos reservados &copy; 2023 Recetas de Cocina</p>`


document.querySelector("header").innerHTML=encabezado
document.querySelector("footer").innerHTML=piePagina

document.getElementById('message').addEventListener('submit', function(event) {
  var message = document.getElementById('message').value.trim();

  if (email === '') {
    alert('Por favor, ingresa su correo.');
  }
  
  if (message === '') {
    alert('Por favor, ingresa un mensaje.');
  }
});







