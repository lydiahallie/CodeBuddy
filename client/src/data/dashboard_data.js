import React from 'react';
import { ConnectRequestIcon, ProfileViewIcon, MessagesIcon } from '../assets/icons.js';

export const BOX_INFO = [
  { value: 931, name: 'Profile Views', icon: <ProfileViewIcon /> },
  { value: 12, name: 'New Messages', icon: <MessagesIcon /> },
  { value: 5, name: 'Contact Requests', icon: <ConnectRequestIcon /> },
];

export const CHART_DATA = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "Requested Contact",
			fillColor: "rgba(220,220,220,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [65, 59, 80, 81, 56, 55, 40]
		},
		{
			label: "Contact Requests",
			fillColor: "rgba(151,187,205,0.2)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [28, 48, 40, 19, 86, 27, 90]
		}
	]
};

export const BAR_CHART_DATA = {
	labels: ["JavaScript", "CSS", "HTML", "Ruby"],
	datasets: [
		{
			label: "Requested Contact",
			fillColor: "rgba(0,180,150,0.2)",
			strokeColor: "rgba(0,180,150,1)",
			pointColor: "rgba(0,180,150,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(0,180,150,1)",
			data: [85, 70, 90, 60]
		},
	]
};


export const MESSAGES_DATA = [
  { 
    author: 'Sarah Green', 
    imgURL: 'https://randomuser.me/api/portraits/women/68.jpg',
    message: 'Hey eveyrone! Long time no see!', 
    publishTime: '4m'
  },
  { 
    author: 'John Doe', 
    imgURL: 'https://randomuser.me/api/portraits/men/33.jpg',
    message: 'Working on a great new project! Does anyone have experience with GraphQL?',
    publishTime: '6m'
  },
  { 
    author: 'Harry Red', 
    imgURL: 'https://randomuser.me/api/portraits/men/17.jpg',
    message: 'Can\'t wait until our app goes live! Exciting times! Thanks team!',
    publishTime: '11m'
  },
  { 
    author: 'Vanessa Adams', 
    imgURL: 'https://randomuser.me/api/portraits/women/11.jpg',
    message: 'Anyone here who could help out with RoR?',
    publishTime:'2m'
  },
  { 
    author: 'Sarah Green', 
    imgURL: 'https://randomuser.me/api/portraits/women/68.jpg',
    message: 'Hey eveyrone! Long time no see!', 
    publishTime: '13m'
  },
  { 
    author: 'John Doe', 
    imgURL: 'https://randomuser.me/api/portraits/men/33.jpg',
    message: 'Working on a great new project! Does anyone have experience with GraphQL?',
    publishTime:'19m'
  },
  { 
    author: 'Harry Red', 
    imgURL: 'https://randomuser.me/api/portraits/men/17.jpg',
    message: 'Can\'t wait until our app goes live! Exciting times! Thanks team!' ,
    publishTime: '44m'
  },
  { 
    author: 'Vanessa Adams', 
    imgURL: 'https://randomuser.me/api/portraits/women/11.jpg',
    message: 'Anyone here who could help out with RoR?',
    publishTime: '1m'
  },
];