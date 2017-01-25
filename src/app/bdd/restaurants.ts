import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemRestaurantsService implements InMemoryDbService {
  createDb() {
    let restaurants = [
      { id: '1', name: 'Pizza de l\'ormeau', speciality : 'Italien', position : '345 Avenue Jean Rieux, 31000 Toulouse', contact : '05 61 34 86 23',
        rating : 4.9, website : 'pizzadelormeau.com', noon : [1,4,6], visited : [2,5,7], testimonials : [
        {id:1, id_restaurant:1, description:'Pizza succulentes prix très raisonnable pour la qualité des produits frais'},
        {id:2, id_restaurant:1, description:'Miam la savoyarde, la New-York et la foie gras !'},
        {id:3, id_restaurant:1, description:'Les meilleurs pizzas que j\'ai pu gouter!'}
      ]},
      { id: '2', name: 'O\'cuiz\'in', speciality : 'Formule à volonté', position: '207, route de revel - 31400 toulouse', contact : '05 62 16 18 18',
        rating : 4.5, website : 'ocuizin.fr', noon : [2,3,4], visited : [2,10,8], testimonials : [
        {id:4, id_restaurant:2, description:'Le cadre super sympa et une équipe très souriante accueillante que du bonheur'},
        {id:5, id_restaurant:2, description:'La confiture de Lait et la tarte noix de Pécan...'},
        {id:6, id_restaurant:2, description:'Un concept de cuisine maison en buffet à volonté très sympathique'}

      ]},
      { id: '3', name: 'Le cardito', speciality : 'Italien', position: '276 Avenue Saint-Exupéry, 31400 Toulouse', contact : '05 61 80 43 64',
        rating : 4.3, website : 'lecardito.com', noon : [6,5,9], visited : [7,4,3], testimonials : [
        {id:7, id_restaurant:3, description:'Serveurs très agréables, services rapide et très bon rapport qualité prix'},
        {id:8, id_restaurant:3, description:'Sinon, la salade aux queues de langoustines tièdes .....'},
        {id:9, id_restaurant:3, description:'La charcuterie italienne est excellente et les pâtes sont très bonne.'}
      ]},
      { id: '4', name: 'Pizza de l\'ormeau', speciality : 'Toulousain', position: '180 Avenue Saint-Exupéry, 31000 Toulouse', contact : '05 61 34 86 23',
        rating : 4.8, website : 'pizzadelormeau.com', noon : [8,6,5], visited : [3,1,7], testimonials : [
        {id:10, id_restaurant:4, description:'Pizza succulentes prix très raisonnable pour la qualité des produits frais'},
        {id:11, id_restaurant:4, description:'Miam la savoyarde, la New-York et la foie gras !'},
        {id:12, id_restaurant:4, description:'Les meilleurs pizzas que j\'ai pu gouter!'}
      ]},
      { id: '5', name: 'Ristorante del Arte', speciality : 'Italien', position: '5 Allée des Champs Pinsons, 31650 Saint-Orens-de-Gameville', contact : '05 61 00 23 15',
        rating : 3.6, website : 'delarte.fr', noon : [1,4,6], visited : [2,5,7], testimonials : [
        {id:13, id_restaurant:5, description:'Les salades sont aussi bonnes et copieuses.'},
        {id:14, id_restaurant:5, description:'Serveurs sympa cadre agréable'},
        {id:15, id_restaurant:5, description:'La serveuse est venu nous dire qu\'elle avait simplement oublié notre commande!!'}
      ]},
      { id: '6', name: 'Burger King', speciality : 'Chaine de Restauration', position: '2 Allée des Champs Pinsons, 31650 Saint-Orens-de-Gameville', contact : '05 82 60 02 54',
        rating : 4.1, website : 'burgerking.fr', testimonials : [
        {id:16, id_restaurant:6, description:'Super Burgers consistant et bonne frites ainsi que les desserts.'},
        {id:17, id_restaurant:6, description:'Pour preuve, Burger King mélange ses glaces.'},
        {id:18, id_restaurant:6, description:'C\'est un FastFood qui change de MacDo et KFC'}
      ]},
      { id: '7', name: 'Mc Donald', speciality : 'Chaine de Restauration', position: '2 Avenue Marcel Dassault, 31500 Toulouse', contact : '05 61 54 78 90',
        rating : 2.9, website : 'restaurants.mcdonalds.fr', testimonials : [
        {id:19, id_restaurant:7, description:'Bien mais pas au point sur certains sandwichs'},
        {id:20, id_restaurant:7, description:'Un qui est génial ; celui des arènes'},
        {id:21, id_restaurant:7, description:'Obligé de demander pour un geste commercial et en plus pas serviable!'}
      ]},
      { id: '8', name: 'Le bistronomique', speciality : 'Tout', position: '73 Route de Revel, 31500 Toulouse', contact : '05 61 20 67 05',
        rating : 'none', website : 'lebistronomique-toulouse.com', testimonials : [
        {id:22, id_restaurant:8, description:'Chaleureux, les assiettes sont copieuse prix raisonnable à essayer !!!!'},
        {id:23, id_restaurant:8, description:'Très belles salades copieuse, personnels agréables À recommander'},
        {id:24, id_restaurant:8, description:'Une table délicieuse, des plats copieux et vraiment très bien préparé !'},
      ]},
      { id: '9', name: 'Chez Ingalls', speciality : 'Savoyarde et grillade', position: '164 Route de Revel, 31400 Toulouse', contact : '05 62 47 14 71',
        rating : 4.0, website : 'restaurant-chezingalls.fr', testimonials : [
        {id:25, id_restaurant:9, description:'Chaleureux, les assiettes sont copieuse prix raisonnable à essayer !!!!'},
        {id:26, id_restaurant:9, description:'Très belles salades copieuse, personnels agréables À recommander'},
        {id:27, id_restaurant:9, description:'Une table délicieuse, des plats copieux et vraiment très bien préparé !'},
      ]},
      { id: '10', name: 'Tommy\'s Diner', speciality : 'Americain', position: 'Avenue la Méridienne, 31670 Labège', contact : '06 61 00 29 00',
        rating : 4.0, website : 'tommys-cafe.com', testimonials : [
        {id:28, id_restaurant:10, description:'Super déco, carte variée, serveurs sympas et ambiance cool'},
        {id:29, id_restaurant:10, description:'On a juste trouvé une araignée dans le burger de ma petite amie'},
        {id:30, id_restaurant:10, description:'Arrivés tôt (19h) Si vous ne voulez pas attendre 1h pour être installer.'},
      ]}
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
    let propositions = [
      { id: '1', id_restaurant:1, id_user:1, date:'2016-01-25T19:40:38.2424240+01:00', participants:[
        { id: '2', firstname: 'Jayson', lastname : 'Metivier', bu : 'TECHNO', poste : 'Développeur Angular2', profil:'app/images/img_profil/2.jpg',
          email : 'jayson.metivier@viseo.com', phone:'0618550656',address:'15 rue du pic de la Gela', city:'Tournefeuille', cp:'31170'
        }, { id: '5', firstname: 'Audrey', lastname : 'Boutet', bu : 'SAP', poste : 'Responsable', profil:'app/images/img_profil/3.jpg',
          email : 'audrey.boutey@viseo.com', phone:'0648569874',address:'17 rue de l\'Oratoire', city:'Colomiers', cp:'31770'
        }]
      },
      { id: '2', id_restaurant:8, id_user:6, date:'2016-01-25T19:40:38.2424240+01:00', participants:[
        { id: '6', firstname: 'Imane', lastname : 'Cherak', bu : 'SAP', poste : 'Stagiaire', profil:'app/images/img_profil/4.jpg',
          email : 'imane.cherak@viseo.com', phone:'0648569874',address:'17 rue de l\'Oratoire', city:'Colomiers', cp:'31770'
        }, { id: '7', firstname: 'Mohamed Tahar', lastname : 'Habhab', bu : 'TECHNO', poste : 'Développeur Java', profil:'app/images/img_profil/1.jpg',
          email : 'mohamed.tahar@viseo.com', phone:'0648569874',address:'17 rue de l\'Oratoire', city:'Colomiers', cp:'31770'
        }]
      }
    ];
    let testimonials = [
      {id:1, id_restaurant:1, description:'Pizza succulentes prix très raisonnable pour la qualité des produits frais'},
      {id:2, id_restaurant:1, description:'Miam la savoyarde, la New-York et la foie gras !'},
      {id:3, id_restaurant:1, description:'Les meilleurs pizzas que j\'ai pu gouter!'},
      {id:4, id_restaurant:2, description:'Le cadre super sympa et une équipe très souriante accueillante que du bonheur'},
      {id:5, id_restaurant:2, description:'La confiture de Lait et la tarte noix de Pécan...'},
      {id:6, id_restaurant:2, description:'Un concept de cuisine maison en buffet à volonté très sympathique'},
      {id:7, id_restaurant:3, description:'Serveurs très agréables, services rapide et très bon rapport qualité prix'},
      {id:8, id_restaurant:3, description:'Sinon, la salade aux queues de langoustines tièdes .....'},
      {id:9, id_restaurant:3, description:'La charcuterie italienne est excellente et les pâtes sont très bonne.'},
      {id:10, id_restaurant:4, description:'Pizza succulentes prix très raisonnable pour la qualité des produits frais'},
      {id:11, id_restaurant:4, description:'Miam la savoyarde, la New-York et la foie gras !'},
      {id:12, id_restaurant:4, description:'Les meilleurs pizzas que j\'ai pu gouter!'},
      {id:13, id_restaurant:5, description:'Les salades sont aussi bonnes et copieuses.'},
      {id:14, id_restaurant:5, description:'Serveurs sympa cadre agréable'},
      {id:15, id_restaurant:5, description:'La serveuse est venu nous dire qu\'elle avait simplement oublié notre commande!!'},
      {id:16, id_restaurant:6, description:'Super Burgers consistant et bonne frites ainsi que les desserts.'},
      {id:17, id_restaurant:6, description:'Pour preuve, Burger King mélange ses glaces.'},
      {id:18, id_restaurant:6, description:'C\'est un FastFood qui change de MacDo et KFC'},
      {id:19, id_restaurant:7, description:'Bien mais pas au point sur certains sandwichs'},
      {id:20, id_restaurant:7, description:'Un qui est génial ; celui des arènes'},
      {id:21, id_restaurant:7, description:'Obligé de demander pour un geste commercial et en plus pas serviable!'},
      {id:22, id_restaurant:8, description:'Chaleureux, les assiettes sont copieuse prix raisonnable à essayer !!!!'},
      {id:23, id_restaurant:8, description:'Très belles salades copieuse, personnels agréables À recommander'},
      {id:24, id_restaurant:8, description:'Une table délicieuse, des plats copieux et vraiment très bien préparé !'},
      {id:25, id_restaurant:9, description:'Chaleureux, les assiettes sont copieuse prix raisonnable à essayer !!!!'},
      {id:26, id_restaurant:9, description:'Très belles salades copieuse, personnels agréables À recommander'},
      {id:27, id_restaurant:9, description:'Une table délicieuse, des plats copieux et vraiment très bien préparé !'},
      {id:28, id_restaurant:10, description:'Super déco, carte variée, serveurs sympas et ambiance cool'},
      {id:29, id_restaurant:10, description:'On a juste trouvé une araignée dans le burger de ma petite amie'},
      {id:30, id_restaurant:10, description:'Arrivés tôt (19h) Si vous ne voulez pas attendre 1h pour être installer.'},
    ];

    let users = [
      { id: '1', firstname: 'Fabien', lastname : 'Escrive', bu : 'BI', poste : 'RH', profil:'app/images/img_profil/2.jpg',
        email : 'fabien.escrive@viseo.com', phone:'0648569874',address:'17 rue de l\'Oratoire', city:'Colomiers', cp:'31770'},
      { id: '2', firstname: 'Jayson', lastname : 'Metivier', bu : 'TECHNO', poste : 'Développeur Angular2', profil:'app/images/img_profil/2.jpg',
        email : 'jayson.metivier@viseo.com', phone:'0618550656',address:'15 rue du pic de la Gela', city:'Tournefeuille', cp:'31170'},
      { id: '3', firstname: 'Clément', lastname : 'Carretier', bu : 'TECHNO', poste : 'Développeur Java', profil:'app/images/img_profil/2.jpg',
        email : 'clement.carretier@viseo.com', phone:'0648569874',address:'17 rue de l\'Oratoire', city:'St Orens', cp:'31100'},
      { id: '4', firstname: 'Richard', lastname : 'Fagot', bu : 'TECHNO', poste : 'Chef de projet technique', profil:'app/images/img_profil/1.jpg',
        email : 'richard.fagot@viseo.com', phone:'0648569874',address:'17 rue de l\'Oratoire', city:'Cazerre', cp:'31980'},
      { id: '5', firstname: 'Audrey', lastname : 'Boutet', bu : 'SAP', poste : 'Responsable', profil:'app/images/img_profil/3.jpg',
        email : 'audrey.boutey@viseo.com', phone:'0648569874',address:'17 rue de l\'Oratoire', city:'Colomiers', cp:'31770'},
      { id: '6', firstname: 'Imane', lastname : 'Cherak', bu : 'SAP', poste : 'Stagiaire', profil:'app/images/img_profil/4.jpg',
        email : 'imane.cherak@viseo.com', phone:'0648569874',address:'17 rue de l\'Oratoire', city:'Colomiers', cp:'31770'},
      { id: '7', firstname: 'Mohamed Tahar', lastname : 'Habhab', bu : 'TECHNO', poste : 'Développeur Java', profil:'app/images/img_profil/1.jpg',
        email : 'mohamed.tahar@viseo.com', phone:'0648569874',address:'17 rue de l\'Oratoire', city:'Colomiers', cp:'31770'},
      { id: '8', firstname: 'Amine', lastname : 'Mouffoc', bu : 'BI', poste : 'Développeur', profil:'app/images/img_profil/2.jpg',
        email : 'amine.mouffoc@viseo.com', phone:'0648569874',address:'17 rue de l\'Oratoire', city:'Colomiers', cp:'31770'},
      { id: '9', firstname: 'Camille', lastname : 'Minard', bu : 'BI', poste : 'Chargé RH', profil:'app/images/img_profil/4.jpg',
        email : 'camille.minard@viseo.com', phone:'0648569874',address:'17 rue de l\'Oratoire', city:'Labège', cp:'31840'},
      { id: '10', firstname: 'Eric', lastname : 'Fernandez', bu : 'TECHNO', poste : 'Responsable BU Techno', profil:'app/images/img_profil/1.jpg',
        email : 'eric.fernandez@viseo.com', phone:'0648569874',address:'17 rue de l\'Oratoire', city:'Colomiers', cp:'31770'}
    ];
    return {restaurants, specialities, users, propositions};
  }
}
