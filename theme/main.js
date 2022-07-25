{
  canTriggerIfUnavailable: true,
  checkType: 'general',
  checkAndAct() {
    daapi.addGlobalAction({
      key: 'theme',
      action: {
        title: 'Select Theme',
        icon: daapi.requireImage('/theme/logo.svg'),
        isAvailable: true,
        process: {
          event: '/theme/main',
          method: 'process'
        }
      }
    })
  },
  methods: {
    process(log) {
    	daapi.displayInteractionModal({
        title: 'Select Theme',
        message: 'Select Color Theme ( ! Disable Dark Mode )',
        image : daapi.requireImage('/theme/logo.svg'),
        dropdowns: [{
          title: 'Theme',
          options: [
            {
              label: 'None',
              value: ''
            }, 
            {
              label: 'Green',
              value: 'baseGreen'
            },
            {
              label: 'Mono Mix',
              value: 'monoMix'
            },
            {
              label: 'Vestalia',
              value: 'vesta'
            }],
          onChange: {
            event: '/theme/main',
            method: 'selectTheme'
          }
        }],
        options: [{
          text: 'OK',
        }]
      })
    },
    selectTheme({option}) {
      let src = option.value || ''

      let ms = document.getElementById('myStyle')
      if(ms == null){
        ms = document.createElement('style')
        ms.setAttribute('id','myStyle')
      }
      if(src != ''){
        daapi.invokeMethod({
          event: '/theme/themes/'+src,
          method: 'apply'
        })
      }else{
        ms.innerHTML = ''
      }
    }
  }
}