import { Category, SearchResults } from '../types/search';
import { Album } from '../types/shared';

export const SEARCH_FILTERS = ['All', 'Artists', 'Songs', 'Albums', 'Playlists'];

export const SEARCH_CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Podcasts',
    color: '#ea580c',
    image: 'https://www.figma.com/api/mcp/asset/01c389bf-e26c-4b4a-9465-176568b4473b',
  },
  {
    id: '2',
    name: 'Made For You',
    color: '#4338ca',
    image: 'https://www.figma.com/api/mcp/asset/1ef6afca-3e5a-4699-a53c-f7e0bc87b620',
  },
  {
    id: '3',
    name: 'Charts',
    color: '#db2777',
    image: 'https://www.figma.com/api/mcp/asset/3d2cc370-6810-441e-a173-f20d07b4838b',
  },
  {
    id: '4',
    name: 'New Releases',
    color: '#9333ea',
    image: 'https://www.figma.com/api/mcp/asset/948d82e0-0fd1-45f3-b4a7-2e28ec360fd3',
  },
  {
    id: '5',
    name: 'Pop',
    color: '#059669',
    image: 'https://www.figma.com/api/mcp/asset/cf8adabe-f321-4712-98b3-beac430b0258',
  },
  {
    id: '6',
    name: 'Hip-Hop',
    color: '#f97316',
    image: 'https://www.figma.com/api/mcp/asset/222aaf0c-1138-4cc5-9bbd-732d429dbcdf',
  },
  {
    id: '7',
    name: 'Rock',
    color: '#dc2626',
    image: 'https://www.figma.com/api/mcp/asset/54cd4804-4ddb-4701-a7f6-4a0739b52825',
  },
  {
    id: '8',
    name: 'Dance',
    color: '#60a5fa',
    image: 'https://www.figma.com/api/mcp/asset/eb1e18f9-5db8-4eb5-bfa1-398db998f1fd',
  },
  {
    id: '9',
    name: 'Mood',
    color: '#c084fc',
    image: 'https://www.figma.com/api/mcp/asset/7bfa7649-6473-496f-9a58-6e258718b740',
  },
  {
    id: '10',
    name: 'Indie',
    color: '#3f6212',
    image: 'https://www.figma.com/api/mcp/asset/591e03cf-89c6-4751-ae8c-22d3358b9696',
  },
];

export const MOCK_SEARCH_RESULTS: SearchResults = {
  topResult: {
    name: 'The Weeknd',
    type: 'Artist',
    image: 'https://www.figma.com/api/mcp/asset/262b51a1-801b-4e2d-af7a-61073ae0e689',
  },
  songs: [
    {
      id: '1',
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      image: 'https://www.figma.com/api/mcp/asset/c9bbe63b-2230-4f2f-a53f-6358363b9989',
    },
    {
      id: '2',
      title: 'Save Your Tears',
      artist: 'The Weeknd',
      image: 'https://www.figma.com/api/mcp/asset/32f4dda6-7130-4485-9746-c8cbbf76f932',
    },
    {
      id: '3',
      title: 'Starboy',
      artist: 'The Weeknd, Daft Punk',
      image: 'https://www.figma.com/api/mcp/asset/e0af6a54-d6cb-46a9-8db5-5c28a5b514e3',
    },
  ],
};

export const MOCK_ALBUMS: Album[] = [
  {
    id: '1',
    title: 'After Hours',
    year: '2020',
    type: 'Album',
    image: 'https://www.figma.com/api/mcp/asset/3b1a83bf-2537-4b1e-aac4-1de52e6bea41',
  },
  {
    id: '2',
    title: 'Dawn FM',
    year: '2022',
    type: 'Album',
    image: 'https://www.figma.com/api/mcp/asset/947c13e2-1e89-49bd-aa0a-83e31e3e54b8',
  },
  {
    id: '3',
    title: 'Starboy',
    year: '2016',
    type: 'Album',
    image: 'https://www.figma.com/api/mcp/asset/7c0ee371-9332-4214-aa3f-7f053884ae5c',
  },
];
