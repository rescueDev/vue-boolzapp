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
        filtered: true,
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
        filtered: true,
        lastAccess: "21/08/2020 10:58",
        messages: [
          {
            message: "Ciao Mario cosa fai oggi?",
            date: "16/11/2020 11:50",
            status: "sent",
          },
          {
            message: "Oggi devo fare il tampone dopo 15 giorni",
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
        filtered: true,
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
        filtered: true,
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
  /* retriveLastAccess() {
      var ultimoAccesso = this.contatti[this.indexSelected].messages
        .slice(-1)
        .forEach((element) => {
          console.log(element.date);
          var lastDate = element.date;
          console.log(lastDate);
          return lastDate;
        });
      console.log(ultimoAccesso);
    }, */
  methods: {
    selectContatto: function (item, index) {
      this.indexSelected = index;
      item.selected = !item.selected;
    },
    itemsSearched: function () {
      //ciclo la lista con forEach
      this.contatti.forEach((element) => {
        let stringa = this.search;
        let nome = element.name;
        //tutto in minuscolo
        nome = nome.toLowerCase();
        stringa = stringa.toLowerCase();

        //vedo se la stringa è contenuta nel nome
        if (nome.includes(stringa)) {
          element.filtered = true;
        } else {
          element.filtered = false;
        }
      });
    },
    sendMessage: function () {
      if (this.testoMessaggio !== "") {
        this.contatti[this.indexSelected].messages.push({
          message: this.testoMessaggio,
          status: "sent",
          date: this.actualDate(),
        });
        this.testoMessaggio = "";
        setTimeout(() => {
          this.contatti[this.indexSelected].messages.push({
            message: this.randomAnswers(),
            status: "received",
            date: this.actualDate(),
          });
        }, 1000);
      }
    },
    actualDate: function () {
      var today = new Date();
      let day = today.getDate();
      let month = today.getMonth() + 1;
      let year = today.getFullYear();
      let hour = today.getHours();
      let minutes = today.getMinutes();
      let date = day + "/" + month + "/" + year + " " + hour + ":" + minutes;
      console.log(date);
      return date;
    },
  },
  randomAnswers: function () {
    rand1 = [
      "certo!",
      "puzzi!",
      "usciamo insieme?",
      "bye, è stato bello!",
      "fatti sentire ogni tanto...",
      "Luca Giurato vive nei nostri cuori!",
      "Che odorino! Hai cucinato o...",
      "Non è che sei timido?",
      "Lasciami stare in pace!",
      "Live and let die!",
      "Ma sei sempre così simpatico?",
      "Perchè non ti dai all'ippica?",
      "Ave Cesare!",
    ];

    var random = rand1[Math.floor(Math.random() * rand1.length)];
    return random;
  },
});
