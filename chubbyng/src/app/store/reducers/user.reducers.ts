import { EUserActions } from './../actions/user.actions';
import { UserActions } from '../actions/user.actions';
import { initialUserState, IUserState } from '../state/user.state';

// export const userReducers = (
//   state = initialUserState,
//   action: UserActions
// ): IUserState => {
//   switch (action.type) {
//     case EUserActions.GetUsersSuccess: {
//       return {
//         ...state,
//         users: action.payload
//       };
//     }
//     case EUserActions.GetUserSuccess: {
//       return {
//         ...state,
//         selectedUser: action.payload
//       };
//     }

//     default:
//       return state;
//   }
// };

export function userReducers (
  state = initialUserState,
  action: UserActions
): IUserState  {
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload,
        loading: true
      };
    }
    case EUserActions.GetUsers: {
      return {
        ...state,
        loading: false
      };
    }
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }

    default:
      return state;
  }
};
