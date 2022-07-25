{
  canTriggerIfUnavailable: true,
  checkType: 'general',
  checkAndAct() {
    daapi.addGlobalAction({
      key: 'exit',
      action: {
        title: 'Exit The Game',
        icon: daapi.requireImage('/exit/exit.svg'),
        isAvailable: true,
        process: {
          event: '/exit/main',
          method: 'process'
        }
      }
    })
  },
  methods: {
    process() {
    	daapi.displayInteractionModal({
        title: 'Exit?',
        message: 'Do you want to exit the game?',
        image : daapi.requireImage('/exit/exit.svg'),
        options: [
          {
            text: 'Yes',
            action: {
              event: '/exit/main',
              method: 'exitGame',
              context: null
            }
          },
          {
            text: 'No',
            action: null
          }
        ]
      })
    },
    exitGame() {
      window.close()
    }
  }
}