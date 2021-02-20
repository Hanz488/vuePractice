const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    add(n) {
      this.counter+=n;
    },
    subtract(n) {
      this.counter-=n;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert('Submitted');
    },
    confirmName() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
