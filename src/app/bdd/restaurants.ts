import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemRestaurantsService implements InMemoryDbService {
  createDb() {
    let resto = [
      { id: '1', name: 'Pizza de l\'ormeau', speciality : 'Italien', position : '345 Avenue Jean Rieux, 31000 Toulouse' },
      { id: '2', name: 'O\'cuiz\'in', speciality : 'Formule à volonté', position: '207, route de revel - 31400 toulouse' },
      { id: '3', name: 'Le cardito', speciality : 'Italien', position: '276 Avenue Saint-Exupéry, 31400 Toulouse' },
      { id: '4', name: 'Pizza de l\'ormeau', speciality : 'Toulousain', position: '180 Avenue Saint-Exupéry, 31000 Toulouse' },
      { id: '5', name: 'Ristorante del Arte', speciality : 'Italien', position: '5 Allée des Champs Pinsons, 31650 Saint-Orens-de-Gameville' },
      { id: '6', name: 'Burger King', speciality : 'Chaine de Restauration', position: '2 Allée des Champs Pinsons, 31650 Saint-Orens-de-Gameville' },
      { id: '7', name: 'Mc Donald', speciality : 'Chaine de Restauration', position: '2 Avenue Marcel Dassault, 31500 Toulouse' },
      { id: '8', name: 'Le bistronomique', speciality : 'Tout', position: '73 Route de Revel, 31500 Toulouse' },
      { id: '9', name: 'Chez Ingalls', speciality : 'Savoyarde et grillade', position: '164 Route de Revel, 31400 Toulouse' },
      { id: '10', name: 'Tommy\'s Diner', speciality : 'Americain', position: 'Avenue la Méridienne, 31670 Labège', contact : '06 61 00 29 00' }
    ];
    return {resto};
  }
}
