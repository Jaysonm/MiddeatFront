import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemRestaurantsService implements InMemoryDbService {
  createDb() {
    let resto = [
      { id: '1', name: 'Pizza de l\'ormeau', speciality : 'Italien', position : '345 Avenue Jean Rieux, 31000 Toulouse', contact : '05 61 34 86 23' },
      { id: '2', name: 'O\'cuiz\'in', speciality : 'Formule à volonté', position: '207, route de revel - 31400 toulouse', contact : '05 62 16 18 18' },
      { id: '3', name: 'Le cardito', speciality : 'Italien', position: '276 Avenue Saint-Exupéry, 31400 Toulouse', contact : '05 61 80 43 64' },
      { id: '4', name: 'Pizza de l\'ormeau', speciality : 'Toulousain', position: '180 Avenue Saint-Exupéry, 31000 Toulouse', contact : '05 61 34 86 23' },
      { id: '5', name: 'Ristorante del Arte', speciality : 'Italien', position: 'ZAC de l\'Hers, Avenue la Méridienne, 31670 Labège', contact : '05 61 14 04 69' },
      { id: '6', name: 'Burger King', speciality : 'Chaine de Restauration', position: '2 Allée des Champs Pinsons, 31650 Saint-Orens-de-Gameville', contact : '05 82 60 02 54' },
      { id: '7', name: 'Mc Donald', speciality : 'Chaine de Restauration', position: '2 Avenue Marcel Dassault, 31500 Toulouse', contact : '05 61 54 78 90' },
      { id: '8', name: 'Le bistronomique', speciality : 'Tout', position: '73 Route de Revel, 31500 Toulouse', contact : '05 61 20 67 05' },
      { id: '9', name: 'Chez Ingalls', speciality : 'Savoyarde et grillade', position: '164 Route de Revel, 31400 Toulouse', contact : '05 62 47 14 71' },
      { id: '10', name: 'Tommy\'s Diner', speciality : 'Americain', position: 'Avenue la Méridienne, 31670 Labège', contact : '06 61 00 29 00' }
    ];
    let specialities = [
      { id: '1', name: 'Italien' },
      { id: '2', name: 'Formule à volonté' },
      { id: '3', name: 'Toulousain' },
      { id: '4', name: 'Chaine de Restauration' },
      { id: '5', name: 'Tout' },
      { id: '6', name: 'Savoyarde et grillade' },
      { id: '7', name: 'Americain' }
    ];
    return {resto, specialities};
  }
}
