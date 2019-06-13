import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikdpb3ZhbmUgU2FudGlhZ28gTGVhY2luYSIsImVtYWlsIjoiZ2lvdmFuZWxlYWNpbmFAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTU1OTQyNjYxMCwiZXhwIjoxNTU5Njg1ODEwfQ.GGaURYQRqEtcvmFOTBGwhmgGWMjjd_aMFmtW4JAziRU'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')