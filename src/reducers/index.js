const initialState = {
  dog: {
    picture: "https://images.dog.ceo/breeds/setter-irish/n02100877_1913.jpg"
  },
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type){
    default:
      return state;
  }
};