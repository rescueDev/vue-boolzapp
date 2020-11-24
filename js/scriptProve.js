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
      },
      {
        name: "Mario",
        img: "img/avatar_2.jpg",
        lastMessage: "ok",
        isVisible: false,
      },
      {
        name: "Fabio",
        img: "img/avatar_1.jpg",
        lastMessage: "ok",
        isVisible: false,
      },
      {
        name: "Luisa",
        img: "img/avatar_6.jpg",
        lastMessage: "ok",
        isVisible: false,
      },
    ],
    styleObject: {
      display: "block",
    },
    selected: false,
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
    selectContatto: function () {
      this.selected = !this.selected;
    },
  },
});
