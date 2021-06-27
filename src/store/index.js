import { createStore } from 'vuex'

export default createStore({
  state: {
    list:
      [
        {title:"吃饭",
        complete:false,
      },
      {title:"睡觉",
      complete:false,
    }, 
    {title:"敲代码",
    complete:true,
  },
        
    ]
    
  },
  mutations: {
    add(state,payload) {
      state.list.push(payload);
    },
    del(state,payload){
      state.list.splice(payload,1);
    },
    clear(state,payload){
      state.list = (payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
