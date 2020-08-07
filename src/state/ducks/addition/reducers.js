import type from './types';
const INITIAL_STATE = {
  loader: false,
  error: '',
  data: [],
  sectionData2: [
    {
      title: 'Burger',
      data: [
        {
          isSelected: false,
          count: '3',
          title: 'Burgers',
          tickets: [
            {
              count: 3,
              price: 100,
              title: 'Burger Chicken',
            },
            {
              count: 5,
              price: 200,
              title: 'waffle',
            },
            {
              count: 5,
              price: 200,
              title: 'cola',
            },
            {
              count: 5,
              price: 200,
              title: 'bread',
            },
            {
              count: 5,
              price: 200,
              title: 'water',
            },
          ],
          price: '100',
        },
      ],
    },
    {
      title: 'Soup',
      data: [
        {
          isSelected: false,
          count: '3',
          title: 'Burgers',
          tickets: [
            {
              count: 3,
              price: 100,
              title: 'Burger Chicken',
            },
            {
              count: 5,
              price: 200,
              title: 'waffle',
            },
            {
              count: 5,
              price: 200,
              title: 'cola',
            },
            {
              count: 5,
              price: 200,
              title: 'bread',
            },
            {
              count: 5,
              price: 200,
              title: 'water',
            },
          ],
          price: '100',
        },
      ],
    },

    {
      title: 'Burger',
      data: [
        {
          isSelected: false,
          count: '3',
          title: 'Burgers',
          tickets: [
            {
              count: 3,
              price: 100,
              title: 'Burger Chicken',
            },
            {
              count: 5,
              price: 200,
              title: 'waffle',
            },
            {
              count: 5,
              price: 200,
              title: 'cola',
            },
            {
              count: 5,
              price: 200,
              title: 'bread',
            },
            {
              count: 5,
              price: 200,
              title: 'water',
            },
          ],
          price: '100',
        },
      ],
    },
    {
      title: 'Burger',
      data: [
        {
          isSelected: false,
          count: '3',
          title: 'Burgers',
          tickets: [
            {
              count: 3,
              price: 100,
              title: 'Burger Chicken',
            },
            {
              count: 5,
              price: 200,
              title: 'waffle',
            },
            {
              count: 5,
              price: 200,
              title: 'cola',
            },
            {
              count: 5,
              price: 200,
              title: 'bread',
            },
            {
              count: 5,
              price: 200,
              title: 'water',
            },
          ],
          price: '100',
        },
      ],
    },
  ],
  sectionData: [
    [
      {
        title: 'Burger',
        data: [
          {
            isSelected: false,
            count: '3',
            title: 'Burgers',
            tickets: [
              {
                count: 3,
                price: 100,
                title: 'Burger Chicken',
              },
              {
                count: 5,
                price: 200,
                title: 'waffle',
              },
              {
                count: 5,
                price: 200,
                title: 'cola',
              },
              {
                count: 5,
                price: 200,
                title: 'bread',
              },
              {
                count: 5,
                price: 200,
                title: 'water',
              },
            ],
            price: '100',
            id: 0,
          },
        ],
      },
      {
        title: 'Soup',
        data: [
          {
            isSelected: false,
            id: 1,
            count: '3',
            title: 'Burgers',
            tickets: [
              {
                count: 3,
                price: 100,
                title: 'Burger Chicken',
              },
              {
                count: 5,
                price: 200,
                title: 'waffle',
              },
              {
                count: 5,
                price: 200,
                title: 'cola',
              },
              {
                count: 5,
                price: 200,
                title: 'bread',
              },
              {
                count: 5,
                price: 200,
                title: 'water',
              },
            ],
            price: '100',
          },
        ],
      },
    ],
    [
      {
        title: 'Burger',
        data: [
          {
            isSelected: false,
            count: '3',
            title: 'Burgers',
            id: 2,
            tickets: [
              {
                count: 3,
                price: 100,
                title: 'Burger Chicken',
              },
              {
                count: 5,
                price: 200,
                title: 'waffle',
              },
              {
                count: 5,
                price: 200,
                title: 'cola',
              },
              {
                count: 5,
                price: 200,
                title: 'bread',
              },
              {
                count: 5,
                price: 200,
                title: 'water',
              },
            ],
            price: '100',
          },
        ],
      },
      {
        title: 'Burger',
        data: [
          {
            isSelected: false,
            id: 3,
            count: '3',
            title: 'Burgers',
            tickets: [
              {
                count: 3,
                price: 100,
                title: 'Burger Chicken',
              },
              {
                count: 5,
                price: 200,
                title: 'waffle',
              },
              {
                count: 5,
                price: 200,
                title: 'cola',
              },
              {
                count: 5,
                price: 200,
                title: 'bread',
              },
              {
                count: 5,
                price: 200,
                title: 'water',
              },
            ],
            price: '100',
          },
        ],
      },
    ],
  ],
  selectedList: [],
};

INITIAL_STATE.sectionData2.map((data) => console.log('data', data));

const addition = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.ADDITION:
      return {
        ...state,
        loader: true,
      };
    case type.ADDITION_SUCCESS:
      return {
        ...state,
        loader: false,
        data: action.data,
      };
    case type.ADDITION_FAILED:
      return {
        ...state,
        loader: false,
        error: action.error,
      };
    case type.ADD_ADDITION:
      return {
        ...state,
        sectionData: [...state.sectionData, []],
      };
    case type.SELECT_ADDITION:
      return {
        ...state,
        selectedList: [...state.selectedList, action.payload],
      };
    case type.UNSELECT_ADDITION:
      const newAddition = state.selectedList.filter((addition) => {
        if (addition.id === action.payload.id) {
        }
        console.log('addition', addition);
        console.log('action.payload', action.payload);
      });
      return {
        ...state,
        selectedList: state.selectedList.filter(
          ({id}) => id !== action.payload.id,
        ),
      };
    case type.DELETE_ADDITION:
      return {
        ...state,
        sectionData: state.sectionData.slice(0, -1),
      };
    default:
      return state;
  }
};
export default addition;
