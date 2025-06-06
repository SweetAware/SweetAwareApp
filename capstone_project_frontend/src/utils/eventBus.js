import { ref } from 'vue'

class EventBus {
  constructor() {
    this.events = ref({})
  }

  emit(event, data) {
    if (this.events.value[event]) {
      this.events.value[event].forEach((callback) => callback(data))
    }
  }

  on(event, callback) {
    if (!this.events.value[event]) {
      this.events.value[event] = []
    }
    this.events.value[event].push(callback)
  }

  off(event, callback) {
    if (this.events.value[event]) {
      this.events.value[event] = this.events.value[event].filter((cb) => cb !== callback)
    }
  }
}

export default new EventBus()
