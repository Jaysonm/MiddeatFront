import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemRestaurantsService implements InMemoryDbService {
  createDb() {
    let specialities = [
      { id: 1, name: 'Italien' },
      { id: 2, name: 'Formule à volonté' },
      { id: 3, name: 'Toulousain' },
      { id: 4, name: 'Chaine de Restauration' },
      { id: 5, name: 'Tout' },
      { id: 6, name: 'Savoyarde et grillade' },
      { id: 7, name: 'Americain' }
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
    return {specialities};
  }
}
