{
  canTriggerIfUnavailable: true,
  checkType: 'general',
  checkAndAct() {
    daapi.addGlobalAction({
      key: 'openDevTools',
      action: {
        title: 'Open Developer Tools',
        icon: daapi.requireImage('/openDevTools/dev.svg'),
        isAvailable: true,
        process: {
          event: '/openDevTools/main',
          method: 'process'
        }
      }
    })
  },
  methods: {
    process() {
    	daapi.openDevTools()
    }
  }
}