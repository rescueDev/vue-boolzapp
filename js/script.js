var app = new Vue({
  el: "#app",
  data: {
    search: "",
    message: "",
    contatti: [
      {
        name: "Michele",
        img: "img/avatar_3.jpg",
        lastMessage: "ok",
        isVisible: false,
        selected: false,
        lastAccess: "12/01/2020 16:58",
      },
      {
        name: "Mario",
        img: "img/avatar_2.jpg",
        lastMessage: "ok",
        isVisible: false,
        selected: false,
        lastAccess: "21/08/2020 10:58",
      },
      {
        name: "Fabio",
        img: "img/avatar_1.jpg",
        lastMessage: "ok",
        isVisible: false,
        selected: false,
        lastAccess: "08/06/2019 09:20",
      },
      {
        name: "Luisa",
        img: "img/avatar_6.jpg",
        lastMessage: "ok",
        isVisible: false,
        selected: false,
        lastAccess: "06/06/2020 15:20",
      },
    ],
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
    selectContatto: function (item) {
      item.selected = !item.selected;
    },
  },
});
