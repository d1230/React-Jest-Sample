// import React from "react";
// import { render, waitFor, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// //import axios from "axios"; 
// import ListItems from "./ListItems";

// jest.mock('axios');

// describe('ListItems', () => {
//   it('fetches data and renders it correctly', async () => {
//     // Mock the Axios get function
//     // axios.get.mockResolvedValue({
//     //   data: [
//     //     { name: 'name 1', category: 'category 1', price: 62, id: '1' },
//     //     { name: 'name 3', category: 'category 3', price: 32, id: '3' },
//     //     { name: 'name 10', category: 'category 10', price: 10, id: '10' }
//     //   ],
//     // });

//     // Render the component
//     render(<ListItems />);

//     // Wait for the component to fetch data
//     await waitFor(() => {
//       // Assert that the elements are in the document
//       expect(screen.getByText('name 1')).toBeInTheDocument();
//       //expect(screen.getByText('name 3')).toBeInTheDocument();
//     });
//     //console.log(axios.get.mock.calls);
//   });
// });



import React from 'react';
import { render, screen } from '@testing-library/react';

import ListItems from './ListItems';
jest.mock('axios');
import axios from 'axios';

describe('ListItem component', () => {
  it('renders data from API', async () => {
    const testData = {
      // Your test data here
    };
    axios.get.mockResolvedValueOnce({ data: testData });
    render(<ListItems />);
  });
});