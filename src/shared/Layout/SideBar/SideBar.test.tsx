import React from 'react';
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import SideBar from './SideBar';
import { enableFetchMocks } from 'jest-fetch-mock'

enableFetchMocks();''
describe('SideBar', ()=>{
    beforeEach(()=> {
        fetchMock.resetMocks();
    })
    test('Display profile data after fetching from api',async () => {
        const mockProfile = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          };

          fetchMock.mockResponseOnce(JSON.stringify(mockProfile))
          render(<SideBar />)

          await- waitFor(()=>{
            expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument()
          });
    })
})

export {};
