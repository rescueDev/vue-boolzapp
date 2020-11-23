var app = new Vue({
  el: "#app",
  data: {
    search: "",
    indexSelected: 0,
    contatti: [
      {
        name: "Michele",
        img: "img/avatar_3.jpg",
        lastMessage: "ok",
        isVisible: false,
        selected: false,
        lastAccess: "12/01/2020 16:58",
        sentMessages: "Ciao Michele cosa fai oggi?",
        receivedMessages: "Oggi devo fare la spesa, tu?",
      },
      {
        name: "Mario",
        img: "img/avatar_2.jpg",
        lastMessage: "ok",
        isVisible: false,
        selected: false,
        lastAccess: "21/08/2020 10:58",
        sentMessages: "Ciao Mario, come va la quarantena?",
        receivedMessages: "Insomma, devo fare un altro tampone fra 15 giorni",
      },
      {
        name: "Fabio",
        img: "img/avatar_1.jpg",
        lastMessage: "ok",
        isVisible: false,
        selected: false,
        lastAccess: "08/06/2019 09:20",
        sentMessages: "Ciao Fabio, sei sempre impegnato, non mi scrivi piu!!",
        receivedMessages:
          "Veramente ti ho scritto ieri, non è che hai sbagliato chat?",
      },
      {
        name: "Luisa",
        img: "img/avatar_6.jpg",
        lastMessage: "ok",
        isVisible: false,
        selected: false,
        lastAccess: "06/06/2020 15:20",
        sentMessages: "Scusami Luisa ma hai tagliato la barba?",
        receivedMessages: "Credi di essere simpatico vero? ",
      },
    ],
    isVisible: false,
    styleObject: {
      display: "block",
    },
  },
  computed: {
    itemsSearched: function () {
      var self = this;
      if (this.search == "") {
        return this.contatti;
      }
      return this.contatti.filter(function (item) {
        return item.name.toLowerCase().includes(self.search.toLowerCase());
      });
    },
  },
  methods: {
    selectContatto: function (item, index) {
      this.indexSelected = index;
      item.selected = !item.selected;
      item.isVisible = !item.isVisible;
      //   item.isVisible = !item.isVisible;
      /* item.selected = !item.selected;
      this.contatti.selected = !this.contatti.selected; */
    },
  },
});
