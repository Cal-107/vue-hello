// Descrizione:
// Includere Vue nel proprio progetto.
// Doc Vue:  https://vuejs.org/v2/guide/
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data di Vue.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue({
    el: '#root',
    data: {
        message: 'Hello World, hello Vue!',
        image: 'https://blog.digitalbabylon.eu/wp-content/uploads/2015/05/hello_world.gif',
        image2: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsecure.meetupstatic.com%2Fphotos%2Fevent%2F7%2Fe%2F9%2F8%2Fhighres_458792408.jpeg&f=1&nofb=1',
    } 
});