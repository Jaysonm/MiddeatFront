import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemRestaurantsService implements InMemoryDbService {
  createDb() {
    let resto = [
      { id: '1', name: 'Pizza de l\'ormeau', speciality : 'Italien', position : '345 Avenue Jean Rieux, 31000 Toulouse', contact : '05 61 34 86 23',
        rating : 4.9, website : 'pizzadelormeau.com', testimonials : ['Pizza succulentes prix très raisonnable pour la qualité des produits frais',
        'Miam la savoyarde, la New-York et la foie gras !', 'Les meilleurs pizzas que j\'ai pu gouter!'], noon : [1,4,6], visited : [2,5,7] },

      { id: '2', name: 'O\'cuiz\'in', speciality : 'Formule à volonté', position: '207, route de revel - 31400 toulouse', contact : '05 62 16 18 18',
        rating : 4.5, website : 'ocuizin.fr', testimonials : ['Le cadre super sympa et une équipe très souriante accueillante que du bonheur',
        'La confiture de Lait et la tarte noix de Pécan...', 'Un concept de cuisine maison en buffet à volonté très sympathique']},

      { id: '3', name: 'Le cardito', speciality : 'Italien', position: '276 Avenue Saint-Exupéry, 31400 Toulouse', contact : '05 61 80 43 64',
        rating : 4.3, website : 'lecardito.com', testimonials : ['Serveurs très agréables, service rapide et très bon rapport qualité prix',
        'Sinon, la salade aux queues de langoustines tièdes .....', 'La charcuterie italienne est excellente et les pâtes sont très bonne.']},

      { id: '4', name: 'Pizza de l\'ormeau', speciality : 'Toulousain', position: '180 Avenue Saint-Exupéry, 31000 Toulouse', contact : '05 61 34 86 23',
        rating : 4.8, website : 'pizzadelormeau.com', testimonials : ['Pizza succulentes prix très raisonnable pour la qualité des produits frais',
        'Miam la savoyarde, la New-York et la foie gras !', 'Les meilleurs pizzas que j\'ai pu gouter!']},

      { id: '5', name: 'Ristorante del Arte', speciality : 'Italien', position: '5 Allée des Champs Pinsons, 31650 Saint-Orens-de-Gameville', contact : '05 61 00 23 15',
        rating : 3.6, website : 'delarte.fr', testimonials : ['Les salades sont aussi bonnes et copieuses.','Serveurs sympa cadre agréable',
        'La serveuse est venu nous dire qu\'elle avait simplement oublié notre commande!!']},

      { id: '6', name: 'Burger King', speciality : 'Chaine de Restauration', position: '2 Allée des Champs Pinsons, 31650 Saint-Orens-de-Gameville', contact : '05 82 60 02 54',
        rating : 4.1, website : 'burgerking.fr', testimonials : ['Super Burgers consistant et bonne frites ainsi que les desserts.','Pour preuve, Burger King mélange ses glaces.',
        'C\'est un FastFood qui change de MacDo et KFC']},

      { id: '7', name: 'Mc Donald', speciality : 'Chaine de Restauration', position: '2 Avenue Marcel Dassault, 31500 Toulouse', contact : '05 61 54 78 90',
        rating : 2.9, website : 'restaurants.mcdonalds.fr', testimonials : ['Bien mais pas au point sur certains sandwichs','Un qui est génial ; celui des arènes',
        'Obligé de demander pour un geste commercial et en plus pas serviable!']},

      { id: '8', name: 'Le bistronomique', speciality : 'Tout', position: '73 Route de Revel, 31500 Toulouse', contact : '05 61 20 67 05',
        rating : 'none', website : 'lebistronomique-toulouse.com', testimonials : ['Ça se la raconte un peu par contre on y mange bien','Le top, c\'est tout']},

      { id: '9', name: 'Chez Ingalls', speciality : 'Savoyarde et grillade', position: '164 Route de Revel, 31400 Toulouse', contact : '05 62 47 14 71',
        rating : 4.0, website : 'restaurant-chezingalls.fr', testimonials : ['Chaleureux, les assiettes sont copieuse prix raisonnable à essayer !!!!',
        'Très belles salades copieuse, personnels agréables À recommander', 'Une table délicieuse, des plats copieux et vraiment très bien préparé !']},

      { id: '10', name: 'Tommy\'s Diner', speciality : 'Americain', position: 'Avenue la Méridienne, 31670 Labège', contact : '06 61 00 29 00',
        rating : 4.0, website : 'tommys-cafe.com', testimonials : ['Super déco, carte variée, serveurs sympas et ambiance cool','On a juste trouvé une araignée dans le burger de ma petite amie',
        'Arrivés tôt (19h) Si vous ne voulez pas attendre 1h pour être installer.']}
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
    let persons = [
      { id: '1', firstname: 'Fabien', lastname : 'Escrive', bu : 'BI', poste : 'RH'},
      { id: '2', firstname: 'Jayson', lastname : 'Metivier', bu : 'TECHNO', poste : 'Développeur Angular2' },
      { id: '3', firstname: 'Clément', lastname : 'Carretier', bu : 'TECHNO', poste : 'Développeur Java' },
      { id: '4', firstname: 'Richard', lastname : 'Fagot', bu : 'TECHNO', poste : 'Chef de projet technique' },
      { id: '5', firstname: 'Audrey', lastname : 'Boutet', bu : 'SAP', poste : 'Responsable' },
      { id: '6', firstname: 'Imane', lastname : 'Cherak', bu : 'SAP', poste : 'Stagiaire' },
      { id: '7', firstname: 'Mohamed Tahar', lastname : 'Habhab', bu : 'TECHNO', poste : 'Développeur Java' },
      { id: '8', firstname: 'Amine', lastname : 'Mouffoc', bu : 'BI', poste : 'Développeur' },
      { id: '9', firstname: 'Camille', lastname : 'Minard', bu : 'BI', poste : 'Chargé RH' },
      { id: '10', firstname: 'Eric', lastname : 'Fernandez', bu : 'TECHNO', poste : 'Responsable BU Techno' }
    ];
    return {resto, specialities, persons};
  }
}
