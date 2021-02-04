$(function(){


// *** APIs ***
// clima, previsão 12 horas e previsão 5 dias: https://developer.accuweather.com/apis
// pegar coordenadas geográficas pelo nome da cidade: https://docs.mapbox.com/api/
// pegar coordenadas do IP: http://www.geoplugin.net 
// gerar gráficos em JS: https://www.highcharts.com/demo

});

var apiKey = 'BIynJyTKS3KGaGLCNJmdP03f4UHB8WLb';

var mapboxTolken = "pk.eyJ1IjoidmluaWdhdmFwZXJlaXJhIiwiYSI6ImNra3B5NzFmNDB2azcydm52Nm56eDg2NXQifQ.VMawZ8Ya4EddjcqHqyHxiA";

var objetoClima = {
  
  estado: "",
  pais: "",
  temperatura: "",
  textoClima: "",
  iconeClima: "",


}



var diaSemana = ["Domingo", "Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado"]

// API's testes:




// API's:

function preencherClimaAgora(estado, pais, temperatura, texto_clima, icone_clima){
    var texto_local = estado + ", " + pais + ".";
    $("#texto_local").html(texto_local);
    $("#texto_climma").html(texto_clima);
    $("#texto_temperatura").html(temperatura + "&deg;");
    $("#icone_clima").css("background-image", "url('" + icone_clima + "')")


}

function clima(localCode){
  $.ajax({
      type: "GET",
      // Url correta, para fazer a busca, basa chamar a função clima()
      url: "http://dataservice.accuweather.com/currentconditions/v1/" + localCode + "?apikey=" + apiKey + "&language=PT-BR",
      datatype: "json",
      success: function(clima){

        objetoClima.temperatura = clima[0].Temperature.Metric.Value;
        objetoClima.textoClima = clima[0].WeatherText;

        var iconNumber = clima[0].WeatherIcon <= 9 ? "0" + String(clima[0].WeatherIcon) : String(clima[0].WeatherIcon);

        objetoClima.iconeClima = "https://developer.accuweather.com/sites/default/files/" + iconNumber  + "-s.png"
        preencherClimaAgora(objetoClima.estado, objetoClima.pais, objetoClima.temperatura, objetoClima.textoClima, objetoClima.iconeClima)
      },
      error: function(){
          console.log("Algo deu errado com o IP")
      }, 
  
  
  })
  
}


function localização(lat, long){

    $.ajax({
        type: "GET",
        url: "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" + apiKey + "&q=" + lat + "%2C" + long + "&language=PT-BR",
        datatype: "json",
        success: function(local){

          objetoClima.estado = local.AdministrativeArea.LocalizedName;
          objetoClima.pais = local.Country.LocalizedName;
          objetoClima.iconeClima = "" ;
          var local_code = local.Key;

          clima(local_code);
          proximosDias(local_code);
          pegarPrevisãoHoraAHora(local_code)
        },
        error: function(){
            console.log("Algo deu errado com a API' IP")
        }, 


    })
}

function pegarcordenadasdoIP(){

    $.ajax({
        type: "GET",
        url: "http://www.geoplugin.net/json.gp",
        datatype: "json",
        success: function(cidade){
          loader()
          localização(cidade.geoplugin_latitude, cidade.geoplugin_longitude)
  
        },
        error: function(){
            console.log("Algo deu errado com a cidade")
        }, 


    })

}

function pegarCordenadasDaPesquisa(input){
  input = encodeURI(input)
  $.ajax({
    type: "GET",
    url: "https://api.mapbox.com/geocoding/v5/mapbox.places/" + input + ".json?access_token=" + mapboxTolken + "",
    datatype: "json",
    success: function(cordenadas){
    
      let longitude = cordenadas.features[0].geometry.coordinates[0];
      let latitude = cordenadas.features[0].geometry.coordinates[1];
      loader()
      localização(latitude,longitude)
    },
    error: function(){
        console.log("Algo deu errado com a API das cordenadas")
    }, 


})

}

// pegarcordenadasdoIP()

function proximosDias(localCode){
  $.ajax({
    type: "GET",
    url:  "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + localCode + "?apikey=" +  apiKey  + "&language=PT-BR&metric=true",
    datatype: "json",
    success: function(clima){
      $("#texto_max_min").html(clima.DailyForecasts[0].Temperature.Minimum.Value.toFixed(0) + "° / " + clima.DailyForecasts[0].Temperature.Maximum.Value.toFixed(0) + "°" )

      let dia = new Date().getDay();
      let hora = new Date().getHours();
      let frontBaixo = $(".dayname");
      let minMax = $(".max_min_temp");
      let iconeBaixo = $(".daily_weather_icon");
      let z = 0

      
      for(let y = 0; y < clima.DailyForecasts.length; y++){

        let dia_semana = diaSemana[dia + y];
        
        $(minMax[y + 1]).html(clima.DailyForecasts[y].Temperature.Minimum.Value.toFixed(0) + "° / " + clima.DailyForecasts[y].Temperature.Maximum.Value.toFixed(0) + "°")

        if(dia_semana ==  undefined){
           dia_semana_paralelo = diaSemana[0 + z];
           $(frontBaixo[y]).html(dia_semana_paralelo);
           z++
        }else{
          $(frontBaixo[y]).html(dia_semana);
        }



        if(hora >= 18 && hora < 6){

          let iconNumber = clima.DailyForecasts[y].Night.Icon <= 9 ? "0" + String(clima.DailyForecasts[y].Night.Icon) : String(clima.DailyForecasts[y].Night.Icon);

          let iconeClima = "https://developer.accuweather.com/sites/default/files/" + iconNumber  + "-s.png"
           
          $(iconeBaixo[y]).css("background-image", "url(" + iconeClima + ")")
  
         }else{
          
          let iconNumber = clima.DailyForecasts[y].Day.Icon <= 9 ? "0" + String(clima.DailyForecasts[y].Day.Icon) : String(clima.DailyForecasts[y].Day.Icon);

          let iconeClima = "https://developer.accuweather.com/sites/default/files/" + iconNumber  + "-s.png"
           
          $(iconeBaixo[y]).css("background-image", "url(" + iconeClima + ")")
  
  
        }
        
       
        } 


    },
    error: function(){
        console.log("Algo deu errado com o próximos dias.")
    }, 


})
}


// Funções: 

function frontPrincipal(clima){

  $("#texto_temperatura").html(clima[0].Temperature.Metric.Value);
  $("#texto_clima").html(clima.WeatherText);
  $("#icone_clima").css("background-image", "url('https://developer.accuweather.com/sites/default/files/0" + clima[0].WeatherIcon  + "-s.png')");

}


function acrescentarOutrosDias(previsão){
  
   let hora = new Date;

  let tempMinima = previsão.DailyForecasts[0].Temperature.Minimum.Value;
  let tempMaxima = previsão.DailyForecasts[0].Temperature.Maximum.Value;
  let média = (tempMinima + tempMaxima) / 2;
  var semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  if(hora.getHours() >= 18){
    
    
    console.log("Noite");
    $("#icone_clima").css("background-image", "url('https://developer.accuweather.com/sites/default/files/" + previsão.DailyForecasts[0].Night.Icon  + "-s.png')");
    $("#texto_temperatura").html(calculo(previsão,0));
    //front_dias_seguintes('Night')


    
    $("#texto_max_min").html(((tempMinima - 32) * 5/9).toFixed(0) + "° / " + ((tempMaxima - 32) * 5/9).toFixed(0) + "°" );


  }else{
      console.log("Dia"); 
      $("#icone_clima").css("background-image", "url('https://developer.accuweather.com/sites/default/files/" + previsão.DailyForecasts[0].Day.Icon  + "-s.png')");
      $("#texto_temperatura").html(calculo(previsão,0))
     // front_dias_seguintes('Day')

      $("#texto_max_min").html(((tempMinima - 32) * 5/9).toFixed(0) + "° / " + ((tempMaxima - 32) * 5/9).toFixed(0) + "°" );

    }
 
}

function calculo(objeto,number){

  let tempMinima = objeto.DailyForecasts[number].Temperature.Minimum.Value;
  let tempMaxima = objeto.DailyForecasts[number].Temperature.Maximum.Value;
  let média = (tempMinima + tempMaxima) / 2;
 
  let calculo = (média - 32) * 5/9;
  return calculo.toFixed(0)

}

// Libere esta função para abrir o  Front-end principal: clima(frontPrincipal)



function acrescentarAtual(clima){

    let hora = new Date;    

    if(hora.getHours() >= 18){
        $("#texto_local").html(dados.geoplugin_city + ", " + dados.geoplugin_countryName);
        $("#texto_clima").html(ObjetoProvisório.DailyForecasts[0].Night.IconPhrase);
        $("#icone_clima").css("background-image", "url('https://developer.accuweather.com/sites/default/files/" + ObjetoProvisório.DailyForecasts[0].Night.Icon  + "-s.png')");
        $("#texto_temperatura").html(calculo(ObjetoProvisório,0));
        

        
        $("#texto_max_min_principal").html(((tempMinima - 32) * 5/9).toFixed(0) + "° / " + ((tempMaxima - 32) * 5/9).toFixed(0) + "°" );


    }else{
        $("#texto_local").html(dados.geoplugin_city + ", " + dados.geoplugin_countryName);
        $("#texto_clima").html(ObjetoProvisório.DailyForecasts[0].Day.IconPhrase);
        $("#icone_clima").css("background-image", "url('https://developer.accuweather.com/sites/default/files/" + ObjetoProvisório.DailyForecasts[0].Day.Icon  + "-s.png')");
        $("#texto_temperatura").html(calculo(ObjetoProvisório,0))
        
        $("#texto_max_min_principal").html(((tempMinima - 32) * 5/9).toFixed(0) + "° / " + ((tempMaxima - 32) * 5/9).toFixed(0) + "°" );

 

    }

    

}

function acrescentarOutrosDias(previsão){
  
  let hora = new Date;

  
  if(hora.getHours() >= 18){
    
    console.log("Noite");
    $("#icone_clima").css("background-image", "url('https://developer.accuweather.com/sites/default/files/" + ObjetoProvisório.DailyForecasts[0].Night.Icon  + "-s.png')");
    // Isso aqui tem que estar com a informação dos 'dados'
    $("#texto_temperatura").html(calculo(ObjetoProvisório,0));
    front_dias_seguintes('Night')


    
    $("#texto_max_min").html(((tempMinima - 32) * 5/9).toFixed(0) + "° / " + ((tempMaxima - 32) * 5/9).toFixed(0) + "°" );


}else{
    console.log("Dia"); 
    $("#icone_clima").css("background-image", "url('https://developer.accuweather.com/sites/default/files/" + ObjetoProvisório.DailyForecasts[0].Day.Icon  + "-s.png')");
    $("#texto_temperatura").html(calculo(ObjetoProvisório,0))
    front_dias_seguintes('Day')

    $("#texto_max_min").html(((tempMinima - 32) * 5/9).toFixed(0) + "° / " + ((tempMaxima - 32) * 5/9).toFixed(0) + "°" );



}

}



function front_dias_seguintes(string){

  let proximosDias = $(".dayname");

  let dia = new Date().getDay() + 1;

  var y = 0 


  for(var x = 0; x <= proximosDias.length ; x++ ){


    let dia_semana = semana[dia + x];

    let icones = $('.daily_weather_icon');
    let outras_temperaturas = $('.max_min_temp');
    
        


    if(dia_semana == undefined){
      
      dia_semana = semana[0 + y];
      $(proximosDias[x]).html(dia_semana);
      y += 1;   

    }else{

      let minimo_cinco_dias = Proximoscinco.DailyForecasts[x].Temperature.Minimum.Value;
      let máximo_cinco_dias = Proximoscinco.DailyForecasts[x].Temperature.Maximum.Value;



      $(proximosDias[x]).html(dia_semana);

      $(outras_temperaturas[1 + x]).html(((minimo_cinco_dias- 32) * 5/9).toFixed(0) + " / " + ((máximo_cinco_dias- 32) * 5/9).toFixed(0) )
      $(icones[x]).css('background-image', "url('https://developer.accuweather.com/sites/default/files/" + Proximoscinco.DailyForecasts[x][string].Icon  + "-s.png')")
    
    }
    
  }

}

// Tudo comentado abaixo:


function pegarPrevisãoHoraAHora(local_code){
  // Url: "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/45881?apikey=BIynJyTKS3KGaGLCNJmdP03f4UHB8WLb&language=PT-BR&metric=True"


  $.ajax({

    type: "GET", 
    url:  "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/" + local_code + "?apikey=" + apiKey + "&language=PT-BR&metric=True",
    datatype: "json",
    success: function(previsãoHora){

      let horários = [];
      let temperatura = [];

       for(let a = 0; a < previsãoHora.length; a++){
        
        let hora = new Date(previsãoHora[a].DateTime).getHours();

        horários.push(String(hora) + "h");

        temperatura.push(previsãoHora[a].Temperature.Value)

        gerar_graficos(horários,temperatura)


      }
 
    },
    error: function(){
      console.log("A api de pegar a previsão hora a hora deu errado!")

     },
  
  })    
}



function gerar_graficos(horas,temperaturas){

    Highcharts.chart('hourly_chart', {
      chart: {
          type: 'line'
      },
      title: {
          text: 'Temperatura hora a hora'
      },
      xAxis: {
          categories: horas
      },
      yAxis: {
          title: {
              text: 'Temperatura (°C)'
              
          }
      },
      plotOptions: {
          line: {
              dataLabels: {
                  enabled: true
              },
              enableMouseTracking: false
          }
      },
      series: [{
        // Aqui ainda precisa colocar de forma dinâmica 
          name: 'São Paulo',
          data: temperaturas
      }]
  });
}
 


pegarcordenadasdoIP();

$("#search-button").click(function(){
    var local = $("input#local").val();
  if(local){
    pegarCordenadasDaPesquisa(local);
  }else{
    alert("Local inválido")
  }
})

$("input#local").on('keypress',function(e){
  if(e.which == 13){

    var local = $("input#local").val();
    if(local){
      pegarCordenadasDaPesquisa(local);
    }else{
      alert("Local inválido")
    }
  }
})

function loader(){
  $(".refresh-loader").fadeIn()
      setInterval(function(){
      $(".refresh-loader").fadeOut()

  },2000)
}
