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
        messages: [
          {
            message: "Ciao Michele cosa fai oggi?",
            date: "01/11/2020 09:50",
            status: "sent",
          },
          {
            message: "Oggi devo fare la spesa, tu?",
            date: "01/11/2020 09:52",
            status: "received",
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
    retriveLastAccess() {
      var ultimoAccesso = this.contatti[this.indexSelected].messages
        .slice(-1)
        .forEach((element) => {
          console.log(element.date);
          var lastDate = element.date;
          console.log(lastDate);
          return lastDate;
        });
      console.log(ultimoAccesso);
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
    sendMessage: function () {
      this.contatti[this.indexSelected].messages.push({
        message: this.testoMessaggio,
        status: "sent",
        date: "24/11/2020 16:50",
      });
      this.testoMessaggio = "";
      setTimeout(() => {
        this.contatti[this.indexSelected].messages.push({
          message: "Ok..",
          status: "received",
          date: "24/11/2020 16:52",
        });
      }, 1000);
    },
    /*     retriveLastAccess() {
      var ultimoAccesso = this.contatti[this.indexSelected].messages.length;
      console.log(ultimoAccesso);
      return ultimoAccesso;
    }, */
  },
});
