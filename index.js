const boton_EL = document.querySelector('#boton-EL');

boton_EL.addEventListener("mouseover", el_over);
boton_EL.addEventListener("mouseout", el_out);


function el_over() {
  document.querySelector(".EL").innerHTML = `
           <li>Adoptó ideas y desarrolló creaciones de gran calidad, que incluían caracteres, entornos y otros objetos.</li>
           <li>Aplicó teoría del color y técnicas de iluminación a dibujos e ilustraciones para añadir intensidad a las creaciones.</li>
           <li>Determinó qué diseños serían los apropiados en pantalla, impresión, anuncios, etc.</li>
           `;
}

function el_out() {
  document.querySelector(".EL").innerHTML= "";
}

// .........................................

const boton_EL2 = document.querySelector('#boton-EL2');

boton_EL2.addEventListener("mouseover", el_2_over);
boton_EL2.addEventListener("mouseout", el_2_out);


function el_2_over() {
  document.querySelector(".EL-2").innerHTML = `
         <li>Experiencia con 2D y storyboards.</li>
         <li>Reunió información de diversos canales de contenidos y utilizó los datos para crear imágenes, gráficos e ilustraciones que respaldaran los objetivos de la empresa.</li>
         <li>Alto nivel de creatividad e innovación gráfica.</li>
     `;
}

function el_2_out() {
  document.querySelector(".EL-2").innerHTML= "";
}

// .....................................................

const boton_EL3 = document.querySelector('#boton-EL3');

boton_EL3.addEventListener("mouseover", el_3_over);
boton_EL3.addEventListener("mouseout", el_3_out);


function el_3_over() {
  document.querySelector(".EL-3").innerHTML = `
  <li>Con habilidades demostrables para desarrollar relaciones clave con los clientes y proporcionar soluciones de diseño.</li>
  <li>Dominio del paquete Adobe (Photoshop, Illustrator, InDesign).</li>
  <li>Desarrolló diseños de ilustraciones siguiendo las especificaciones del cliente, las normas corporativas y fórmulas matemáticas.</li>
`;
}

function el_3_out() {
  document.querySelector(".EL-3").innerHTML= "";
}