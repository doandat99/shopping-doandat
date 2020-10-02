import mockupDataNewest from "../../data/mockupDataNewest";

/* type State = Array<{
  id: number,
  name: string,
  address: string,
  phoneNumber: string,
}>
*/
type Action = {
  type: string;
  number: number;
  name: string;
  address: string;
  phoneNumber: string;
  id: number;
};

/* const dataFriends = [
  {
    id: 1,
    name: 'Albert B Oliphant',
    address: '122  Drainer Avenue',
    phoneNumber: '712-341-8415',
  },
  {
    id: 2,
    name: 'Sharon E Garcia',
    address: '540  Jacobs Street',
    phoneNumber: '412-240-3536',
  },
  {
    id: 3,
    name: 'David H Olmos',
    address: '329  Emily Renzelli Boulevard',
    phoneNumber: '831-636-9428',
  },
  {
    id: 4,
    name: 'George L Pedroza',
    address: '287  Robinson Lane',
    phoneNumber: '740-210-2950',
  },
  {
    id: 5,
    name: 'Jose A Goforth',
    address: '1161  Stoney Lane',
    phoneNumber: '972-933-9459',
  },
] */

export const mockupDataCategory = (
  state = mockupDataNewest,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
