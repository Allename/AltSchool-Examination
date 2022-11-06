export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE": {
      return {
        count: state.count + 1,
      };
    }

    case "DECREASE": {
      if (state.count !== 0) {
        return {
          count: state.count - 1,
        };
      }

      return {
        count: 0
      }
    }

    case "RESET": {
      return {
        count: 0,
      };
    }

    default: {
      console.log('def')
    }
  }
};
