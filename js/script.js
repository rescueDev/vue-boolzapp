var app = new Vue({
  el: "#app",
  data: {
    search: "",
    testoMessaggio: "",
    indexSelected: 0,
    contatti: [
      {
        name: "Michele",
        img: "img/avatar_3.jpg",
        lastMessage: "ok",
        isVisible: false,
        selected: false,
        lastAccess: "12/01/2020 16:58",
        /* sentMessages: "Ciao Michele cosa fai oggi?",
        receivedMessages: "Oggi devo fare la spesa, tu?",
        dataMessSent: "01/11/2020 09:50",
        dataMessRec: "01/11/2020 09:52", */
        messages: [
          {
            sentMessages: "Ciao Michele cosa fai oggi?",
            dataMessSent: "01/11/2020 09:50",
          },
          {
            receivedMessages: "Oggi devo fare la spesa, tu?",
            dataMessRec: "01/11/2020 09:52",
          },
        ],
      },
      {
        name: "Mario",
        img: "img/avatar_2.jpg",
        lastMessage: "ok",
        isVisible: false,
        selected: false,
        lastAccess: "21/08/2020 10:58",
        /* sentMessages: "Ciao Mario, come va la quarantena?",
        receivedMessages: "Insomma, devo fare un altro tampone fra 15 giorni",
        dataMessSent: "16/11/2020 11:50",
        dataMessRec: "12/01/2020 12:52", */
        messages: [
          {
            message: "Ciao Michele cosa fai oggi?",
            date: "16/11/2020 11:50",
            status: "sent",
          },
          {
            message: "Oggi devo fare la spesa, tu?",
            date: "12/01/2020 12:52",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        img: "img/avatar_1.jpg",
        lastMessage: "ok",
        isVisible: false,
        selected: false,
        lastAccess: "08/06/2019 09:20",
        /*         sentMessages: "Ciao Fabio, sei sempre impegnato, non mi scrivi piu!!",
        receivedMessages:
          "Veramente ti ho scritto ieri, non è che hai sbagliato chat?",
        dataMessSent: "12/01/2020 16:50",
        dataMessRec: "12/01/2020 16:52", */
        messages: [
          {
            message: "Ciao Fabio, sei sempre impegnato, non mi scrivi piu!!",
            date: "12/01/2020 16:50",
            status: "sent",
          },
          {
            message:
              "Veramente ti ho scritto ieri, non è che hai sbagliato chat?",
            date: "12/01/2020 16:52",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        img: "img/avatar_6.jpg",
        lastMessage: "ok",
        isVisible: false,
        selected: false,
        lastAccess: "06/06/2020 15:20",
        /*  sentMessages: "Scusami Luisa ma hai tagliato la barba?",
        receivedMessages: "Credi di essere simpatico vero? ",
        dataMessSent: "21/10/2020 11:50",
        dataMessRec: "21/10/2020 16:52", */
        messages: [
          {
            message: "Scusami Luisa ma hai tagliato la barba?",
            date: "21/10/2020 11:50",
            status: "sent",
          },
          {
            message: "Credi di essere simpatico vero? ",
            date: "21/10/2020 16:52",
            status: "received",
          },
        ],
      },
    ],
    isVisible: false,
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
      //   item.isVisible = !item.isVisible;
      /* item.selected = !item.selected;
      this.contatti.selected = !this.contatti.selected; */
    },
    sendMessage: function (item) {
      item.contatti.messaggio.push(this.testoMessaggio);
      console.log(this.contatti);
    },
  },
});
