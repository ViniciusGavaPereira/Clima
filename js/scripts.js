$(function(){


// *** APIs ***
// clima, previsão 12 horas e previsão 5 dias: https://developer.accuweather.com/apis
// pegar coordenadas geográficas pelo nome da cidade: https://docs.mapbox.com/api/
// pegar coordenadas do IP: http://www.geoplugin.net - FEITO
// gerar gráficos em JS: https://www.highcharts.com/demo

});

// API's testes:

var Proximoscinco = {
  "Headline": {
    "EffectiveDate": "2021-01-23T13:00:00-03:00",
    "EffectiveEpochDate": 1611417600,
    "Severity": 5,
    "Text": "Previsão de pancadas de chuva Sábado à tarde",
    "Category": "rain",
    "EndDate": "2021-01-23T19:00:00-03:00",
    "EndEpochDate": 1611439200,
    "MobileLink": "http://m.accuweather.com/pt/br/sao-paulo/45881/extended-weather-forecast/45881?lang=pt-br",
    "Link": "http://www.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?lang=pt-br"
  },
  "DailyForecasts": [
    {
      "Date": "2021-01-21T07:00:00-03:00",
      "EpochDate": 1611223200,
      "Temperature": {
        "Minimum": {
          "Value": 69,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 81,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 15,
        "IconPhrase": "Tempestades",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Night": {
        "Icon": 36,
        "IconPhrase": "Nuvens esparsas",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=1&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=1&lang=pt-br"
    },
    {
      "Date": "2021-01-22T07:00:00-03:00",
      "EpochDate": 1611309600,
      "Temperature": {
        "Minimum": {
          "Value": 68,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 80,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 17,
        "IconPhrase": "Parcialmente nublado, com tempestades",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Night": {
        "Icon": 35,
        "IconPhrase": "Parcialmente nublado",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=2&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=2&lang=pt-br"
    },
    {
      "Date": "2021-01-23T07:00:00-03:00",
      "EpochDate": 1611396000,
      "Temperature": {
        "Minimum": {
          "Value": 69,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 79,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 12,
        "IconPhrase": "Pancadas de chuva",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Heavy"
      },
      "Night": {
        "Icon": 35,
        "IconPhrase": "Parcialmente nublado",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=3&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=3&lang=pt-br"
    },
    {
      "Date": "2021-01-24T07:00:00-03:00",
      "EpochDate": 1611482400,
      "Temperature": {
        "Minimum": {
          "Value": 70,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 81,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 4,
        "IconPhrase": "Nuvens esparsas",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Night": {
        "Icon": 35,
        "IconPhrase": "Parcialmente nublado",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=4&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=4&lang=pt-br"
    },
    {
      "Date": "2021-01-25T07:00:00-03:00",
      "EpochDate": 1611568800,
      "Temperature": {
        "Minimum": {
          "Value": 69,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 81,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 6,
        "IconPhrase": "Predominantemente nublado",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Night": {
        "Icon": 38,
        "IconPhrase": "Predominantemente nublado",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=5&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=5&lang=pt-br"
    }
  ]
}


var ObjetoProvisório = {

    "Headline": {
      "EffectiveDate": "2021-01-23T13:00:00-03:00",
      "EffectiveEpochDate": 1611417600,
      "Severity": 5,
      "Text": "Previsão de pancadas de chuva Sábado à tarde",
      "Category": "rain",
      "EndDate": "2021-01-23T19:00:00-03:00",
      "EndEpochDate": 1611439200,
      "MobileLink": "http://m.accuweather.com/pt/br/sao-paulo/45881/extended-weather-forecast/45881?lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?lang=pt-br"
    },
    "DailyForecasts": [
      {
        "Date": "2021-01-20T07:00:00-03:00",
        "EpochDate": 1611136800,
        "Temperature": {
          "Minimum": {
            "Value": 69,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 80,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 17,
          "IconPhrase": "Parcialmente nublado, com tempestades",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate"
        },
        "Night": {
          "Icon": 41,
          "IconPhrase": "Parcialmente nublado com tempestades",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=1&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/sao-paulo/45881/daily-weather-forecast/45881?day=1&lang=pt-br"
      }
    ]
}



// API's
function IP(callback){

    $.ajax({
        type: "GET",
        url: "http://www.geoplugin.net/json.gp?",
        datatype: "json",
        success: function(dados){
            callback(dados)

        },
        error: function(){
            console.log("Algo deu errado com o IP")
        }, 


    })
}

function cidade(callback){

    $.ajax({
        type: "GET",
        url: "https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.js",
        datatype: "json",
        success: function(cidade){
            console.log(cidade)

        },
        error: function(){
            console.log("Algo deu errado com a cidade")
        }, 


    })

}

function clima(callback){

    $.ajax({
        type: "GET",
        // Url correta, para fazer a busca, basa chamar a função clima()
        url: "http://dataservice.accuweather.com/currentconditions/v1/45881?apikey=BIynJyTKS3KGaGLCNJmdP03f4UHB8WLb&language=PT-BR",
        datatype: "json",
        success: function(clima){
          callback(clima)

        },
        error: function(){
            console.log("Algo deu errado com o IP")
        }, 


    })
}


// Funções: 

  // Variáveis de controle:
    var tempMinima = ObjetoProvisório.DailyForecasts[0].Temperature.Minimum.Value;
    var tempMaxima = ObjetoProvisório.DailyForecasts[0].Temperature.Maximum.Value;
    var média = (tempMinima + tempMaxima) / 2;
    var semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];



function calculo(objeto,number){

  let tempMinima = objeto.DailyForecasts[number].Temperature.Minimum.Value;
  let tempMaxima = objeto.DailyForecasts[number].Temperature.Maximum.Value;
  let média = (tempMinima + tempMaxima) / 2;
 
  let calculo = (média - 32) * 5/9;
  return calculo.toFixed(0)

}


function acrescentarAtual(dados){

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

function acrescentarOutrosDias(dados){
  
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


function gerar_graficos(){

    Highcharts.chart('hourly_chart', {
      chart: {
          type: 'line'
      },
      title: {
          text: 'Temperatura dos próximos dias'
      },
      xAxis: {
          categories: [ semana[new Date(Proximoscinco.DailyForecasts[0].Date).getDay()], semana[new Date(Proximoscinco.DailyForecasts[1].Date).getDay()], semana[new Date(Proximoscinco.DailyForecasts[2].Date).getDay()], semana[new Date(Proximoscinco.DailyForecasts[3].Date).getDay()], semana[new Date(Proximoscinco.DailyForecasts[4].Date).getDay()]]
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
          data: [parseInt(calculo(Proximoscinco,0)), parseInt(calculo(Proximoscinco,1)), parseInt(calculo(Proximoscinco,2)), parseInt(calculo(Proximoscinco,3)), parseInt(calculo(Proximoscinco,4))]
      }]
  });
}

IP(acrescentarOutrosDias);
IP(acrescentarAtual);
gerar_graficos()







