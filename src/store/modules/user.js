
const user = {
    state: {
      userInfo:{}
    },
    mutations: {
      upUserInfo(state,userInfo){
        state.userInfo = userInfo;
      }
    }
};

export default user;
