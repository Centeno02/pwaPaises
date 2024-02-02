
var opt_Mexico = new Array("-", "Hidalgo", "Guanajuato", "Cancun");
var opt_Italia = new Array("-", "Bolzano", "Milan", "Varese");
var opt_Alemania = new Array("-", "Baviera", "Sajonia", "Berlin");

var municipios_Hidalgo = new Array("-", "Pachuca", "Tulancingo", "Tula");
var municipios_Guanajuato = new Array("-", "Leon", "Guanajuato", "Celaya");
var municipios_Cancun = new Array("-", "Cancun", "Playa del Carmen", "Tulum");
var municipios_Bolzano = new Array("-", "Bolzano", "Laives", "Merano");
var municipios_Milan = new Array("-", "Milano", "Monza", "Brescia");
var municipios_Varese = new Array("-", "Varese", "Busto", "Gallarate");
var municipios_Baviera = new Array("-", "Munich", "Nuremberg", "Augsburg");
var municipios_Sajonia = new Array("-", "Dresden", "Leipzig", "Chemnitz");
var municipios_Berlin = new Array("-", "Berlin", "Mitte", "Friedrichshain");


var localidades_Pachuca = new Array("-", "Centro", "Zona Plateada", "Plutarco Elías Calles");
var localidades_Tulancingo = new Array("-", "Centro", "San Javier", "Huapalcalco");
var localidades_Tula = new Array("-", "San Marcos", "El Carmen", "Monte alegre");

var localidades_Leon = new Array("-", "Centro", "Las Joyas", "San Miguel de Allende");
var localidades_Guanajuato = new Array("-", "Centro", "León", "San Francisco del Rincón");
var localidades_Celaya = new Array("-", "Centro", "Villagrán", "Cortázar");

var localidades_Cancun_Centro = new Array("-", "Centro", "Playacar", "Zona Hotelera");
var localidades_Playa_del_Carmen = new Array("-", "Centro", "Akumal", "Xcaret");
var localidades_Tulum = new Array("-", "Centro", "Xel-Há", "Coba");

var localidades_Bolzano = new Array("-", "Centro", "Bolzano Sud", "Bolzano Nord");
var localidades_Laives = new Array("-", "Centro", "Laives Sud", "Laives Nord");
var localidades_Merano = new Array("-", "Centro", "Merano Sud", "Merano Nord");

var localidades_Milano = new Array("-", "Centro", "Milano Sud", "Milano Nord");
var localidades_Monza = new Array("-", "Centro", "Monza Sud", "Monza Nord");
var localidades_Brescia = new Array("-", "Centro", "Brescia Sud", "Brescia Nord");

var localidades_Varese = new Array("-", "Centro", "Varese Sud", "Varese Nord");
var localidades_Busto = new Array("-", "Centro", "Busto Arsizio Sud", "Busto Arsizio Nord");
var localidades_Gallarate = new Array("-", "Centro", "Gallarate Sud", "Gallarate Nord");

var localidades_Munich = new Array("-", "Centro", "Munich Sur", "Munich Norte");
var localidades_Nuremberg = new Array("-", "Centro", "Nuremberg Sur", "Nuremberg Norte");
var localidades_Augsburg = new Array("-", "Centro", "Augsburg Sur", "Augsburg Norte");

var localidades_Dresden = new Array("-", "Centro", "Dresden Sur", "Dresden Norte");
var localidades_Leipzig = new Array("-", "Centro", "Leipzig Sur", "Leipzig Norte");
var localidades_Chemnitz = new Array("-", "Centro", "Chemnitz Sur", "Chemnitz Norte");

var localidades_Berlin = new Array("-", "Centro", "Berlin Sur", "Berlin Norte");
var localidades_Mitte = new Array("-", "Centro", "Mitte Sur", "Mitte Norte");
var localidades_Friedrichshain = new Array("-", "Centro", "Friedrichshain-Kreuzberg Sur", "Friedrichshain-Kreuzberg Norte");

function cambioPais() {
  var pais = document.getElementById("pais").value;
  const estado = document.getElementById("estado");
  const municipio = document.getElementById("municipio");
  const localidad = document.getElementById("localidad");
  const res = document.getElementById("res");

  if (pais != 0) {
    // Elegir un nuevo estado
    estado.length = 1;
    estado.options[0].value = "-";
    estado.options[0].text = "-";
    estado.disabled = true;
    localidad.length = 1;
    localidad.options[0].value = "-";
    localidad.options[0].text = "-";
    localidad.disabled = true;
    municipio.disabled = true;
    res.disabled = true;

    // Cunado eligue un estado
    var estados = eval("opt_" + pais);
    estado.length = estados.length;
    for (i = 0; i < estados.length; i++) {
      estado.options[i].value = estados[i];
      estado.options[i].text = estados[i];
    }
    estado.disabled = false;
  }else{
    estado.length = 1;
estado.options[0].value = "-";
estado.options[0].text = "-";
estado.disabled = true;
localidad.length = 1;
localidad.options[0].value = "-";
localidad.options[0].text = "-";
localidad.disabled = true;
  }
}

function cambioEstado() {
  var estado = document.getElementById("estado").value;
  const municipio = document.getElementById("municipio");

  if (estado != "-") {
    var municipios = eval("municipios_" + estado);

    municipio.length = municipios.length;
    for (i = 0; i < municipios.length; i++) {
      municipio.options[i].value = municipios[i];
      municipio.options[i].text = municipios[i];
    }
    municipio.disabled = false;
  } else {
    municipio.length = 1;
    municipio.options[0].value = "-";
    municipio.options[0].text = "-";
    municipio.disabled = true;
  }
}

function cambioMunicipio() {
  var municipio = document.getElementById("municipio").value;
  const localidad = document.getElementById("localidad");
  const res = document.getElementById("res");

  if (municipio != "-") {
    var localidades = eval("localidades_" + municipio);

    localidad.length = localidades.length;
    for (i = 0; i < localidades.length; i++) {
      localidad.options[i].value = localidades[i];
      localidad.options[i].text = localidades[i];
    }
    localidad.disabled = false;
    res.disabled = false;
  } else {
    localidad.length = 1;
    localidad.options[0].value = "-";
    localidad.options[0].text = "-";
    localidad.disabled = true;
    res.disabled = true;
  }
}function enviar() {
  
  // Obtenemos los valores de los select
  var pais = document.getElementById("pais").value;
  var estado = document.getElementById("estado").value;
  var municipio = document.getElementById("municipio").value;
  var localidad = document.getElementById("localidad").value;

  // Creamos el contenido que se va a mostrar
  var contenido = `
    <p>País: ${pais}</p>
    <p>Estado: ${estado}</p>
    <p>Municipio: ${municipio}</p>
    <p>Localidad: ${localidad}</p>
  `;

  // Reemplazamos el contenido del div "resultados"
  var resultados = document.getElementById("resultados");
  resultados.innerHTML = contenido;

  event.preventDefault();
}

