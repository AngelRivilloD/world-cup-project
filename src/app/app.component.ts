import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'your-team-adidas-project';
  squad: any[] = [
    {
      "id": 18959,
      "name": "Robert Lynch Sánchez",
      "age": 26,
      "number": 1,
      "position": "Goalkeeper",
      "photo": "https://media-3.api-sports.io/football/players/18959.png"
    },
    {
      "id": 19465,
      "name": "David Raya Martin",
      "age": 28,
      "number": 13,
      "position": "Goalkeeper",
      "photo": "https://media.api-sports.io/football/players/19465.png"
    },
    {
      "id": 47270,
      "name": "Unai Simón Mendibil",
      "age": 26,
      "number": 23,
      "position": "Goalkeeper",
      "photo": "https://media.api-sports.io/football/players/47270.png"
    },
    {
      "id": 128,
      "name": "Jordi Alba",
      "age": 34,
      "number": 18,
      "position": "Defender",
      "photo": "https://media.api-sports.io/football/players/128.png"
    },
    {
      "id": 2280,
      "name": "César Azpilicueta",
      "age": 34,
      "number": 2,
      "position": "Defender",
      "photo": "https://media-3.api-sports.io/football/players/2280.png"
    },
    {
      "id": 161928,
      "name": "Alejandro Balde",
      "age": 20,
      "number": 14,
      "position": "Defender",
      "photo": "https://media.api-sports.io/football/players/161928.png"
    },
    {
      "id": 733,
      "name": "Dani Carvajal",
      "age": 31,
      "number": 20,
      "position": "Defender",
      "photo": "https://media.api-sports.io/football/players/733.png"
    },
    {
      "id": 46815,
      "name": "Pau Torres",
      "age": 26,
      "number": 4,
      "position": "Defender",
      "photo": "https://media.api-sports.io/football/players/46815.png"
    },
    {
      "id": 619,
      "name": "Eric García",
      "age": 22,
      "number": 3,
      "position": "Defender",
      "photo": "https://media-3.api-sports.io/football/players/619.png"
    },
    {
      "id": 919,
      "name": "Hugo Guillamón",
      "age": 23,
      "number": 15,
      "position": "Defender",
      "photo": "https://media-3.api-sports.io/football/players/919.png"
    },
    {
      "id": 622,
      "name": "Aymeric Laporte",
      "age": 29,
      "number": 24,
      "position": "Defender",
      "photo": "https://media.api-sports.io/football/players/622.png"
    },
    {
      "id": 144,
      "name": "Sergio Busquets",
      "age": 35,
      "number": 5,
      "position": "Midfielder",
      "photo": "https://media-3.api-sports.io/football/players/144.png"
    },
    {
      "id": 133609,
      "name": "Pedri",
      "age": 21,
      "number": 26,
      "position": "Midfielder",
      "photo": "https://media.api-sports.io/football/players/133609.png"
    },
    {
      "id": 44,
      "name": "Rodri",
      "age": 27,
      "number": 16,
      "position": "Midfielder",
      "photo": "https://media.api-sports.io/football/players/44.png"
    },
    {
      "id": 753,
      "name": "Marcos Llorente",
      "age": 28,
      "number": 6,
      "position": "Midfielder",
      "photo": "https://media-3.api-sports.io/football/players/753.png"
    },
    {
      "id": 1323,
      "name": "Dani Olmo",
      "age": 25,
      "number": 21,
      "position": "Midfielder",
      "photo": "https://media-3.api-sports.io/football/players/1323.png"
    },
    {
      "id": 296667,
      "name": "Gavi",
      "age": 19,
      "number": 9,
      "position": "Midfielder",
      "photo": "https://media.api-sports.io/football/players/296667.png"
    },
    {
      "id": 184226,
      "name": "Yeremy Pino",
      "age": 21,
      "number": 17,
      "position": "Midfielder",
      "photo": "https://media.api-sports.io/football/players/184226.png"
    },
    {
      "id": 50,
      "name": "Koke",
      "age": 31,
      "number": 8,
      "position": "Midfielder",
      "photo": "https://media.api-sports.io/football/players/50.png"
    },
    {
      "id": 2056,
      "name": "Pablo Sarabia",
      "age": 31,
      "number": 22,
      "position": "Midfielder",
      "photo": "https://media-3.api-sports.io/football/players/2056.png"
    },
    {
      "id": 930,
      "name": "Carlos Soler",
      "age": 26,
      "number": 19,
      "position": "Midfielder",
      "photo": "https://media.api-sports.io/football/players/930.png"
    },
    {
      "id": 746,
      "name": "Marco Asensio Willemsen",
      "age": 27,
      "number": 10,
      "position": "Attacker",
      "photo": "https://media.api-sports.io/football/players/746.png"
    },
    {
      "id": 135775,
      "name": "Ansu Fati",
      "age": 21,
      "number": 25,
      "position": "Attacker",
      "photo": "https://media.api-sports.io/football/players/135775.png"
    },
    {
      "id": 59,
      "name": "Álvaro Borja Morata Martín",
      "age": 31,
      "number": 7,
      "position": "Attacker",
      "photo": "https://media.api-sports.io/football/players/59.png"
    },
    {
      "id": 931,
      "name": "Ferran Torres García",
      "age": 23,
      "number": 11,
      "position": "Attacker",
      "photo": "https://media-3.api-sports.io/football/players/931.png"
    },
    {
      "id": 183799,
      "name": "Nico Williams",
      "age": 21,
      "number": 12,
      "position": "Attacker",
      "photo": "https://media.api-sports.io/football/players/183799.png"
    }
  ];
  teams: any[] = [
    {
      "team": {
        "id": 1,
        "name": "Belgium",
        "code": "BEL",
        "country": "Belgium",
        "founded": 1895,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/1.png"
      },
      "venue": {
        "id": 173,
        "name": "Stade Roi Baudouin",
        "address": "Avenue de Marathon 135/2",
        "city": "Brussel",
        "capacity": 50093,
        "surface": "grass",
        "image": "https://media-3.api-sports.io/football/venues/173.png"
      }
    },
    {
      "team": {
        "id": 2,
        "name": "France",
        "code": "FRA",
        "country": "France",
        "founded": 1919,
        "national": true,
        "logo": "https://media.api-sports.io/football/teams/2.png"
      },
      "venue": {
        "id": 631,
        "name": "Stade de France",
        "address": "Rue Jules Rimet",
        "city": "Saint-Denis",
        "capacity": 81338,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/631.png"
      }
    },
    {
      "team": {
        "id": 3,
        "name": "Croatia",
        "code": "CRO",
        "country": "Croatia",
        "founded": 1912,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/3.png"
      },
      "venue": {
        "id": 412,
        "name": "Stadion Maksimir",
        "address": "Maksimirska cesta 128",
        "city": "Zagreb",
        "capacity": 37168,
        "surface": "grass",
        "image": "https://media-3.api-sports.io/football/venues/412.png"
      }
    },
    {
      "team": {
        "id": 6,
        "name": "Brazil",
        "code": "BRA",
        "country": "Brazil",
        "founded": 1914,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/6.png"
      },
      "venue": {
        "id": 204,
        "name": "Estadio Jornalista Mário Filho (Maracanã)",
        "address": "Rua Professor Eurico Rabelo, Maracanã",
        "city": "Rio de Janeiro, Rio de Janeiro",
        "capacity": 78838,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/204.png"
      }
    },
    {
      "team": {
        "id": 7,
        "name": "Uruguay",
        "code": "URU",
        "country": "Uruguay",
        "founded": 1900,
        "national": true,
        "logo": "https://media.api-sports.io/football/teams/7.png"
      },
      "venue": {
        "id": 1624,
        "name": "Estadio Centenario",
        "address": "Avenida Dr. Alfredo Navarro y Dr. Américo Ricaldoni, Parque Batlle",
        "city": "Montevideo",
        "capacity": 60235,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1624.png"
      }
    },
    {
      "team": {
        "id": 9,
        "name": "Spain",
        "code": "SPA",
        "country": "Spain",
        "founded": 1913,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/9.png"
      },
      "venue": {
        "id": 1456,
        "name": "Estadio Santiago Bernabéu",
        "address": "Avenida de Concha Espina 1, Chamartín",
        "city": "Madrid",
        "capacity": 85454,
        "surface": "grass",
        "image": "https://media-3.api-sports.io/football/venues/1456.png"
      }
    },
    {
      "team": {
        "id": 10,
        "name": "England",
        "code": "ENG",
        "country": "England",
        "founded": 1863,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/10.png"
      },
      "venue": {
        "id": 489,
        "name": "Wembley Stadium",
        "address": "Stadium Way, Wembley, Brent",
        "city": "London",
        "capacity": 90000,
        "surface": "grass",
        "image": "https://media-3.api-sports.io/football/venues/489.png"
      }
    },
    {
      "team": {
        "id": 12,
        "name": "Japan",
        "code": "JAP",
        "country": "Japan",
        "founded": 1921,
        "national": true,
        "logo": "https://media.api-sports.io/football/teams/12.png"
      },
      "venue": {
        "id": 951,
        "name": "National Olympic Stadium",
        "address": "10-2, Kasumigaoka-machi, Shinjuku",
        "city": "Tokyo",
        "capacity": 57363,
        "surface": "grass",
        "image": "https://media-3.api-sports.io/football/venues/951.png"
      }
    },
    {
      "team": {
        "id": 13,
        "name": "Senegal",
        "code": "SEN",
        "country": "Senegal",
        "founded": 1960,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/13.png"
      },
      "venue": {
        "id": 1405,
        "name": "Stade Léopold Sédar Senghor",
        "address": "Route de l’Aéroport de Yoff",
        "city": "Dakar",
        "capacity": 80000,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1405.png"
      }
    },
    {
      "team": {
        "id": 14,
        "name": "Serbia",
        "code": "SER",
        "country": "Serbia",
        "founded": 1919,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/14.png"
      },
      "venue": {
        "id": 1406,
        "name": "Stadion Rajko Mitić",
        "address": "Ljutice Bogdana 1a",
        "city": "Beograd",
        "capacity": 51862,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1406.png"
      }
    },
    {
      "team": {
        "id": 15,
        "name": "Switzerland",
        "code": "SWI",
        "country": "Switzerland",
        "founded": 1895,
        "national": true,
        "logo": "https://media.api-sports.io/football/teams/15.png"
      },
      "venue": {
        "id": 1530,
        "name": "St. Jakob-Park",
        "address": "Sankt Jakob-Strasse 395",
        "city": "Basel",
        "capacity": 38512,
        "surface": "grass",
        "image": "https://media-3.api-sports.io/football/venues/1530.png"
      }
    },
    {
      "team": {
        "id": 16,
        "name": "Mexico",
        "code": "MEX",
        "country": "Mexico",
        "founded": 1927,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/16.png"
      },
      "venue": {
        "id": 1069,
        "name": "Estadio Azteca",
        "address": "Calzada de Tlalpan 3665, Coyoacán",
        "city": "D.F.",
        "capacity": 106187,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1069.png"
      }
    },
    {
      "team": {
        "id": 17,
        "name": "South Korea",
        "code": "SOU",
        "country": "South-Korea",
        "founded": 1933,
        "national": true,
        "logo": "https://media.api-sports.io/football/teams/17.png"
      },
      "venue": {
        "id": 1002,
        "name": "Seoul World Cup Stadium",
        "address": "515 Seongsan-dong, Mapo-gu, Sangam",
        "city": "Seoul",
        "capacity": 68476,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1002.png"
      }
    },
    {
      "team": {
        "id": 20,
        "name": "Australia",
        "code": "AUS",
        "country": "Australia",
        "founded": 1961,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/20.png"
      },
      "venue": {
        "id": 122,
        "name": "ANZ Stadium",
        "address": "Edwin Flack Avenue",
        "city": "Sydney",
        "capacity": 83600,
        "surface": "grass",
        "image": "https://media-3.api-sports.io/football/venues/122.png"
      }
    },
    {
      "team": {
        "id": 21,
        "name": "Denmark",
        "code": "DEN",
        "country": "Denmark",
        "founded": 1889,
        "national": true,
        "logo": "https://media.api-sports.io/football/teams/21.png"
      },
      "venue": {
        "id": 11600,
        "name": "Parken",
        "address": "Øster Allé 50",
        "city": "København",
        "capacity": 38065,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/11600.png"
      }
    },
    {
      "team": {
        "id": 22,
        "name": "Iran",
        "code": "IRA",
        "country": "Iran",
        "founded": 1920,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/22.png"
      },
      "venue": {
        "id": 845,
        "name": "Azadi Stadium",
        "address": "Azadi Stadium Boulevard",
        "city": "Teheran",
        "capacity": 100000,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/845.png"
      }
    },
    {
      "team": {
        "id": 23,
        "name": "Saudi Arabia",
        "code": "SAU",
        "country": "Saudi-Arabia",
        "founded": 1956,
        "national": true,
        "logo": "https://media.api-sports.io/football/teams/23.png"
      },
      "venue": {
        "id": 1361,
        "name": "King Fahd International Stadium",
        "address": "Al-Amir Bandar Ibn Abdul Aziz Street",
        "city": "Riyadh",
        "capacity": 68752,
        "surface": "grass",
        "image": "https://media-3.api-sports.io/football/venues/1361.png"
      }
    },
    {
      "team": {
        "id": 24,
        "name": "Poland",
        "code": "POL",
        "country": "Poland",
        "founded": 1919,
        "national": true,
        "logo": "https://media.api-sports.io/football/teams/24.png"
      },
      "venue": {
        "id": 1245,
        "name": "Stadion Narodowy",
        "address": "Aleja Księcia J. Poniatowskiego 1",
        "city": "Warszawa",
        "capacity": 58145,
        "surface": "grass",
        "image": "https://media-3.api-sports.io/football/venues/1245.png"
      }
    },
    {
      "team": {
        "id": 25,
        "name": "Germany",
        "code": "GER",
        "country": "Germany",
        "founded": 1900,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/25.png"
      },
      "venue": {
        "id": 694,
        "name": "Olympiastadion Berlin",
        "address": "Olympischer Platz 3",
        "city": "Berlin",
        "capacity": 77116,
        "surface": "grass",
        "image": "https://media-3.api-sports.io/football/venues/694.png"
      }
    },
    {
      "team": {
        "id": 26,
        "name": "Argentina",
        "code": "ARG",
        "country": "Argentina",
        "founded": 1893,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/26.png"
      },
      "venue": {
        "id": 31,
        "name": "Estadio Monumental Antonio Vespucio Liberti",
        "address": "Avenida Presidente José Figueroa Alcorta 7597, Núñez",
        "city": "Capital Federal, Ciudad de Buenos Aires",
        "capacity": 65645,
        "surface": "grass",
        "image": "https://media-3.api-sports.io/football/venues/31.png"
      }
    },
    {
      "team": {
        "id": 27,
        "name": "Portugal",
        "code": "POR",
        "country": "Portugal",
        "founded": 1914,
        "national": true,
        "logo": "https://media.api-sports.io/football/teams/27.png"
      },
      "venue": {
        "id": 1262,
        "name": "Estádio Nacional",
        "address": null,
        "city": "Jamor, Oeiras",
        "capacity": 38000,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1262.png"
      }
    },
    {
      "team": {
        "id": 28,
        "name": "Tunisia",
        "code": "TUN",
        "country": "Tunisia",
        "founded": 1957,
        "national": true,
        "logo": "https://media.api-sports.io/football/teams/28.png"
      },
      "venue": {
        "id": 1564,
        "name": "Stade Olympique de Radès",
        "address": "Cité Olympique du 7 novembre",
        "city": "Radès",
        "capacity": 65000,
        "surface": "grass",
        "image": "https://media-3.api-sports.io/football/venues/1564.png"
      }
    },
    {
      "team": {
        "id": 29,
        "name": "Costa Rica",
        "code": "COS",
        "country": "Costa-Rica",
        "founded": 1921,
        "national": true,
        "logo": "https://media.api-sports.io/football/teams/29.png"
      },
      "venue": {
        "id": 392,
        "name": "Estadio Nacional de Costa Rica",
        "address": "Avenida Las Americas, La Sabana",
        "city": "San José",
        "capacity": 35100,
        "surface": "grass",
        "image": "https://media-3.api-sports.io/football/venues/392.png"
      }
    },
    {
      "team": {
        "id": 31,
        "name": "Morocco",
        "code": "MOR",
        "country": "Morocco",
        "founded": 1955,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/31.png"
      },
      "venue": {
        "id": 1099,
        "name": "Stade Mohamed V",
        "address": "Rue Ali Abderrazak, Bouskoura, Maarif",
        "city": "Casablanca",
        "capacity": 45891,
        "surface": "grass",
        "image": "https://media-3.api-sports.io/football/venues/1099.png"
      }
    },
    {
      "team": {
        "id": 767,
        "name": "Wales",
        "code": "WAL",
        "country": "Wales",
        "founded": 1876,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/767.png"
      },
      "venue": {
        "id": 1969,
        "name": "Principality Stadium",
        "address": "Westgate Street",
        "city": "Caerdydd",
        "capacity": 74500,
        "surface": "grass",
        "image": "https://media-3.api-sports.io/football/venues/1969.png"
      }
    },
    {
      "team": {
        "id": 1118,
        "name": "Netherlands",
        "code": "NET",
        "country": "Netherlands",
        "founded": 1889,
        "national": true,
        "logo": "https://media.api-sports.io/football/teams/1118.png"
      },
      "venue": {
        "id": 1117,
        "name": "Johan Cruijff Arena",
        "address": "ArenA Boulevard 1",
        "city": "Amsterdam",
        "capacity": 54990,
        "surface": "grass",
        "image": "https://media-3.api-sports.io/football/venues/1117.png"
      }
    },
    {
      "team": {
        "id": 1504,
        "name": "Ghana",
        "code": "GHA",
        "country": "Ghana",
        "founded": 1957,
        "national": true,
        "logo": "https://media.api-sports.io/football/teams/1504.png"
      },
      "venue": {
        "id": 759,
        "name": "Ohene Djan Sports Stadium",
        "address": "Malam Awudu Road",
        "city": "Accra",
        "capacity": 35000,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/759.png"
      }
    },
    {
      "team": {
        "id": 1530,
        "name": "Cameroon",
        "code": "CAM",
        "country": "Cameroon",
        "founded": 1959,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/1530.png"
      },
      "venue": {
        "id": 308,
        "name": "Stade Omnisport Ahmadou Ahidjo",
        "address": null,
        "city": "Yaoundé",
        "capacity": 38509,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/308.png"
      }
    },
    {
      "team": {
        "id": 1569,
        "name": "Qatar",
        "code": "QAT",
        "country": "Qatar",
        "founded": 1960,
        "national": true,
        "logo": "https://media.api-sports.io/football/teams/1569.png"
      },
      "venue": {
        "id": 1297,
        "name": "Khalifa International Stadium",
        "address": "Sports City Street, Ar-Rayyan",
        "city": "Doha",
        "capacity": 50000,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/1297.png"
      }
    },
    {
      "team": {
        "id": 2382,
        "name": "Ecuador",
        "code": "ECU",
        "country": "Ecuador",
        "founded": 1925,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/2382.png"
      },
      "venue": {
        "id": 465,
        "name": "Estadio Olímpico Atahualpa",
        "address": "Avenida 6 de Diciembre y Avenida Naciones Unidas",
        "city": "Quito",
        "capacity": 40958,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/465.png"
      }
    },
    {
      "team": {
        "id": 2384,
        "name": "USA",
        "code": "USA",
        "country": "USA",
        "founded": 1913,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/2384.png"
      },
      "venue": {
        "id": 2855,
        "name": "Robert F. Kennedy Memorial Stadium",
        "address": "2400 East Capitol Street Southeast",
        "city": "Washington, District of Columbia",
        "capacity": 56692,
        "surface": "grass",
        "image": "https://media.api-sports.io/football/venues/2855.png"
      }
    },
    {
      "team": {
        "id": 5529,
        "name": "Canada",
        "code": "CAN",
        "country": "Canada",
        "founded": 1912,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/5529.png"
      },
      "venue": {
        "id": 312,
        "name": "BMO Field",
        "address": "170 Princes’ Boulevard",
        "city": "Toronto, Ontario",
        "capacity": 36045,
        "surface": "grass",
        "image": "https://media-3.api-sports.io/football/venues/312.png"
      }
    }
  ];

  constructor(private _dataService: DataService) { }
  ngOnInit() {
    // this._dataService.getTeams().subscribe(resp => {

    //   if (resp.response) {
    //     this.teams = resp.response;
    //     this.teams.forEach(team => {
    //       console.log(team);
    //     })
    //   }
    console.log(this.teams);
    console.log(this.squad);
    // })
  }

  selectTeam(team: any) {
    console.log(team);
    // this._dataService.getSquad(team.id).subscribe(resp => {
    //   console.log(resp.response[0].players);
    //   this.squad = resp.response[0].players;
    // })

  }
}
