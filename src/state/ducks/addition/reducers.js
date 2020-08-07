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
      return {
        ...state,
        selectedList: state.selectedList.filter(
          ({data}) => data[0].id !== action.id,
        ),
      };
    case type.DELETE_ADDITION:
      return {
        ...state,
        sectionData: state.sectionData.slice(0, -1),
      };
    case type.SET_ADDITION:
      state.selectedList.map((item) => {
        item.data[0].isSelected = false;
        const parentIndex = item.data[0].sectionIndex;
        state.sectionData[parentIndex] = state.sectionData[parentIndex].filter(
          (section) => {
            return section.data[0].id !== item.data[0].id;
          },
        );
        return item;
      });
      // state.sectionData.filter(section =>)
      const newItem = [
        ...state.sectionData[action.index],
        ...state.selectedList,
      ];
      state.sectionData[action.index] = newItem;
      return {
        ...state,
        selectedList: [],
      };
    default:
      return state;
  }
};
export default addition;
