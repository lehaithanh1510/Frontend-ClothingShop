const INITIAL_STATE = {
  sections: [
    {
      title: 'paint',
      imageUrl:
        'https://cdn.dribbble.com/users/2181562/screenshots/14318336/media/f1736cb5024a6ced00f9b91c12fb7627.jpg?compress=1&resize=800x600',
      id: 1,
    },
    {
      title: 'shirt',
      imageUrl:
        'https://cdn.dribbble.com/users/6014521/screenshots/15480681/media/fa53ace0eac6854971979f49cd9b0e51.jpg?compress=1&resize=800x600',
      id: 2,
    },
    {
      title: 'accessory',
      imageUrl:
        'https://sneakerfits.com/wp-content/uploads/2017/06/sneaker-hook-hats.jpg',
      id: 3,
    },
  ],
  currentDirectory: {},
};

const directoryReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'SET_CURRENT_DIRECTORY': {
      return {
        ...state,
        currentDirectory: payload,
      };
    }
    default:
      return state;
  }
};

export default directoryReducer;
