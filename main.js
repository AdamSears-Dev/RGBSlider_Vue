
new Vue({
    el: '#app',
    data: {
        message: 'RGB Slider!',
        counter: 0,
        repeatedMessage: '',
        x: 0,
        y: 0,
        isDragging: false
    },
  methods: {
        // Reverse Message
    reverseMessage: function () {
        this.message = this.message.split('').reverse().join('');
        },
        // Counter
        incrementCounter: function() {
            this.counter ++;
            this.repeatedMessage = Array(this.counter + 1).join(this.message + ' ');
        },
        // Mouse Events
        startDrag: function(event) {
          this.isDragging = true;
        },
        drag: function(event) {
          if (this.isDragging) {
            this.x = event.clientX - event.currentTarget.getBoundingClientRect().left;
            this.y = event.clientY - event.currentTarget.getBoundingClientRect().top;
            this.changeBackgroundColor();
          }
        },
        stopDrag: function() {
          this.isDragging = false;
        },
        changeBackgroundColor: function() {
          // RGB Calculation
          let r = Math.floor(this.x);
          let g = Math.floor(this.y);
          let b = 255 - Math.floor(this.x);
          document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }

  }
});