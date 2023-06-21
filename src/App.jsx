import React, { useState, Component } from "react";
import { v4 as uuidv4 } from "uuid";
import {BrowserRouter as Router, Route} from "react-router-dom";
 

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails"

import './App.css';


const App = () => {
  //  let message = 'Hello World';
  const [tasks, setTasks] = useState([
  {
    id: 1,
    title: 'Maroc',
    completed: false,

  },
  {
    id: 2,
    title: 'Uruguai',
    completed: true,
  },{
    id: '3',
    title: 'Aruba',
    completed: false,

  },{
    id: '4',
    title: 'Afghanistan',
    completed: false,

  },{
    id: '5',
    title: 'Angola',
    completed: false,

  },{
    id: '6',
    title: 'Anguilla',
    completed: false,

  },{
    id: '7',
    title: 'Åland Islands',
    completed: false,

  },{
    id: '8',
    title: 'Albania',
    completed: false,

  },{
    id: '9',
    title: 'Andorra',
    completed: false,

  },{
    id: '10',
    title: 'United Arab Emirates',
    completed: false,

  },{
    id: '11',
    title: 'Argentina',
    completed: false,

  },{
    id: '12',
    title: 'Armenia',
    completed: false,

  },{
    id: '13',
    title: 'American Samoa',
    completed: false,

  },{
    id: '14',
    title: 'Antarctica',
    completed: false,

  },{
    id: '15',
    title: 'French Southern Territories',
    completed: false,

  },{
    id: '16',
    title: 'Antigua and Barbuda',
    completed: false,

  },{
    id: '17',
    title: 'Australia',
    completed: false,

  },{
    id: '18',
    title: 'Austria',
    completed: false,

  },{
    id: '19',
    title: 'Azerbaijan',
    completed: false,

  },{
    id: '20',
    title: 'Burundi',
    completed: false,

  },{
    id: '21',
    title: 'Belgium',
    completed: false,

  },{
    id: '22',
    title: 'Benin',
    completed: false,

  },{
    id: '23',
    title: 'Bonaire, Sint Eustatius and Saba',
    completed: false,

  },{
    id: '24',
    title: 'Burkina Faso',
    completed: false,

  },{
    id: '25',
    title: 'Bangladesh',
    completed: false,

  },{
    id: '26',
    title: 'Bulgaria',
    completed: false,

  },{
    id: '27',
    title: 'Bahrain',
    completed: false,

  },{
    id: '28',
    title: 'Bahamas',
    completed: false,

  },{
    id: '29',
    title: 'Bosnia and Herzegovina',
    completed: false,

  },{
    id: '30',
    title: 'Saint Barthélemy',
    completed: false,

  },{
    id: '31',
    title: 'Belarus',
    completed: false,

  },{
    id: '32',
    title: 'Belize',
    completed: false,

  },{
    id: '33',
    title: 'Bermuda',
    completed: false,

  },{
    id: '34',
    title: 'Bolivia, Plurinational State of',
    completed: false,

  },{
    id: '35',
    title: 'Brazil',
    completed: false,

  },{
    id: '36',
    title: 'Barbados',
    completed: false,

  },{
    id: '37',
    title: 'Brunei Darussalam',
    completed: false,

  },{
    id: '38',
    title: 'Bhutan',
    completed: false,

  },{
    id: '39',
    title: 'Bouvet Island',
    completed: false,

  },{
    id: '40',
    title: 'Botswana',
    completed: false,

  },{
    id: '41',
    title: 'Central African Republic',
    completed: false,

  },{
    id: '42',
    title: 'Canada',
    completed: false,

  },{
    id: '43',
    title: 'Cocos (Keeling) Islands',
    completed: false,

  },{
    id: '44',
    title: 'Switzerland',
    completed: false,

  },{
    id: '45',
    title: 'Chile',
    completed: false,

  },{
    id: '46',
    title: 'China',
    completed: false,

  },{
    id: '47',
    title: 'Côte dIvoire',
    completed: false,

  },{
    id: '48',
    title: 'Cameroon',
    completed: false,

  },{
    id: '49',
    title: 'Congo, The Democratic Republic of the',
    completed: false,

  },{
    id: '50',
    title: 'Congo',
    completed: false,

  },{
    id: '51',
    title: 'Cook Islands',
    completed: false,

  },{
    id: '52',
    title: 'Colombia',
    completed: false,

  },{
    id: '53',
    title: 'Comoros',
    completed: false,

  },{
    id: '54',
    title: 'Cabo Verde',
    completed: false,

  },{
    id: '55',
    title: 'Costa Rica',
    completed: false,

  },{
    id: '56',
    title: 'Cuba',
    completed: false,

  },{
    id: '57',
    title: 'Curaçao',
    completed: false,

  },{
    id: '58',
    title: 'Christmas Island',
    completed: false,

  },{
    id: '59',
    title: 'Cayman Islands',
    completed: false,

  },{
    id: '60',
    title: 'Cyprus',
    completed: false,

  },{
    id: '61',
    title: 'Czechia',
    completed: false,

  },{
    id: '62',
    title: 'Germany',
    completed: false,

  },{
    id: '63',
    title: 'Djibouti',
    completed: false,

  },{
    id: '64',
    title: 'Dominica',
    completed: false,

  },{
    id: '65',
    title: 'Denmark',
    completed: false,

  },{
    id: '66',
    title: 'Dominican Republic',
    completed: false,

  },{
    id: '67',
    title: 'Algeria',
    completed: false,

  },{
    id: '68',
    title: 'Ecuador',
    completed: false,

  },{
    id: '69',
    title: 'Egypt',
    completed: false,

  },{
    id: '70',
    title: 'Eritrea',
    completed: false,

  },{
    id: '71',
    title: 'Western Sahara',
    completed: false,

  },{
    id: '72',
    title: 'Spain',
    completed: false,

  },{
    id: '73',
    title: 'Estonia',
    completed: false,

  },{
    id: '74',
    title: 'Ethiopia',
    completed: false,

  },{
    id: '75',
    title: 'Finland',
    completed: false,

  },{
    id: '76',
    title: 'Fiji',
    completed: false,

  },{
    id: '77',
    title: 'Falkland Islands (Malvinas)',
    completed: false,

  },{
    id: '78',
    title: 'France',
    completed: false,

  },{
    id: '79',
    title: 'Faroe Islands',
    completed: false,

  },{
    id: '80',
    title: 'Micronesia, Federated States of',
    completed: false,

  },{
    id: '81',
    title: 'Gabon',
    completed: false,

  },{
    id: '82',
    title: 'United Kingdom',
    completed: false,

  },{
    id: '83',
    title: 'Georgia',
    completed: false,

  },{
    id: '84',
    title: 'Guernsey',
    completed: false,

  },{
    id: '85',
    title: 'Ghana',
    completed: false,

  },{
    id: '86',
    title: 'Gibraltar',
    completed: false,

  },{
    id: '87',
    title: 'Guinea',
    completed: false,

  },{
    id: '88',
    title: 'Guadeloupe',
    completed: false,

  },{
    id: '89',
    title: 'Gambia',
    completed: false,

  },{
    id: '90',
    title: 'Guinea-Bissau',
    completed: false,

  },{
    id: '91',
    title: 'Equatorial Guinea',
    completed: false,

  },{
    id: '92',
    title: 'Greece',
    completed: false,

  },{
    id: '93',
    title: 'Grenada',
    completed: false,

  },{
    id: '94',
    title: 'Greenland',
    completed: false,

  },{
    id: '95',
    title: 'Guatemala',
    completed: false,

  },{
    id: '96',
    title: 'French Guiana',
    completed: false,

  },{
    id: '97',
    title: 'Guam',
    completed: false,

  },{
    id: '98',
    title: 'Guyana',
    completed: false,

  },{
    id: '99',
    title: 'Hong Kong',
    completed: false,

  },{
    id: '100',
    title: 'Heard Island and McDonald Islands',
    completed: false,

  },{
    id: '101',
    title: 'Honduras',
    completed: false,

  },{
    id: '102',
    title: 'Croatia',
    completed: false,

  },{
    id: '103',
    title: 'Haiti',
    completed: false,

  },{
    id: '104',
    title: 'Hungary',
    completed: false,

  },{
    id: '105',
    title: 'Indonesia',
    completed: false,

  },{
    id: '106',
    title: 'Isle of Man',
    completed: false,

  },{
    id: '107',
    title: 'India',
    completed: false,

  },{
    id: '108',
    title: 'British Indian Ocean Territory',
    completed: false,

  },{
    id: '109',
    title: 'Ireland',
    completed: false,

  },{
    id: '110',
    title: 'Iran, Islamic Republic of',
    completed: false,

  },{
    id: '111',
    title: 'Iraq',
    completed: false,

  },{
    id: '112',
    title: 'Iceland',
    completed: false,

  },{
    id: '113',
    title: 'Israel',
    completed: false,

  },{
    id: '114',
    title: 'Italy',
    completed: false,

  },{
    id: '115',
    title: 'Jamaica',
    completed: false,

  },{
    id: '116',
    title: 'Jersey',
    completed: false,

  },{
    id: '117',
    title: 'Jordan',
    completed: false,

  },{
    id: '118',
    title: 'Japan',
    completed: false,

  },{
    id: '119',
    title: 'Kazakhstan',
    completed: false,

  },{
    id: '120',
    title: 'Kenya',
    completed: false,

  },{
    id: '121',
    title: 'Kyrgyzstan',
    completed: false,

  },{
    id: '122',
    title: 'Cambodia',
    completed: false,

  },{
    id: '123',
    title: 'Kiribati',
    completed: false,

  },{
    id: '124',
    title: 'Saint Kitts and Nevis',
    completed: false,

  },{
    id: '125',
    title: 'Korea, Republic of',
    completed: false,

  },{
    id: '126',
    title: 'Kuwait',
    completed: false,

  },{
    id: '127',
    title: 'Lao Peoples Democratic Republic',
    completed: false,

  },{
    id: '128',
    title: 'Lebanon',
    completed: false,

  },{
    id: '129',
    title: 'Liberia',
    completed: false,

  },{
    id: '130',
    title: 'Libya',
    completed: false,

  },{
    id: '131',
    title: 'Saint Lucia',
    completed: false,

  },{
    id: '132',
    title: 'Liechtenstein',
    completed: false,

  },{
    id: '133',
    title: 'Sri Lanka',
    completed: false,

  },{
    id: '134',
    title: 'Lesotho',
    completed: false,

  },{
    id: '135',
    title: 'Lithuania',
    completed: false,

  },{
    id: '136',
    title: 'Luxembourg',
    completed: false,

  },{
    id: '137',
    title: 'Latvia',
    completed: false,

  },{
    id: '138',
    title: 'Macao',
    completed: false,

  },{
    id: '139',
    title: 'Saint Martin (French part)',
    completed: false,

  },{
    id: '140',
    title: 'Morocco',
    completed: false,

  },{
    id: '141',
    title: 'Monaco',
    completed: false,

  },{
    id: '142',
    title: 'Moldova, Republic of',
    completed: false,

  },{
    id: '143',
    title: 'Madagascar',
    completed: false,

  },{
    id: '144',
    title: 'Maldives',
    completed: false,

  },{
    id: '145',
    title: 'Mexico',
    completed: false,

  },{
    id: '146',
    title: 'Marshall Islands',
    completed: false,

  },{
    id: '147',
    title: 'North Macedonia',
    completed: false,

  },{
    id: '148',
    title: 'Mali',
    completed: false,

  },{
    id: '149',
    title: 'Malta',
    completed: false,

  },{
    id: '150',
    title: 'Myanmar',
    completed: false,

  },{
    id: '151',
    title: 'Montenegro',
    completed: false,

  },{
    id: '152',
    title: 'Mongolia',
    completed: false,

  },{
    id: '153',
    title: 'Northern Mariana Islands',
    completed: false,

  },{
    id: '154',
    title: 'Mozambique',
    completed: false,

  },{
    id: '155',
    title: 'Mauritania',
    completed: false,

  },{
    id: '156',
    title: 'Montserrat',
    completed: false,

  },{
    id: '157',
    title: 'Martinique',
    completed: false,

  },{
    id: '158',
    title: 'Mauritius',
    completed: false,

  },{
    id: '159',
    title: 'Malawi',
    completed: false,

  },{
    id: '160',
    title: 'Malaysia',
    completed: false,

  },{
    id: '161',
    title: 'Mayotte',
    completed: false,

  },{
    id: '162',
    title: 'Namibia',
    completed: false,

  },{
    id: '163',
    title: 'New Caledonia',
    completed: false,

  },{
    id: '164',
    title: 'Niger',
    completed: false,

  },{
    id: '165',
    title: 'Norfolk Island',
    completed: false,

  },{
    id: '166',
    title: 'Nigeria',
    completed: false,

  },{
    id: '167',
    title: 'Nicaragua',
    completed: false,

  },{
    id: '168',
    title: 'Niue',
    completed: false,

  },{
    id: '169',
    title: 'Netherlands',
    completed: false,

  },{
    id: '170',
    title: 'Norway',
    completed: false,

  },{
    id: '171',
    title: 'Nepal',
    completed: false,

  },{
    id: '172',
    title: 'Nauru',
    completed: false,

  },{
    id: '173',
    title: 'New Zealand',
    completed: false,

  },{
    id: '174',
    title: 'Oman',
    completed: false,

  },{
    id: '175',
    title: 'Pakistan',
    completed: false,

  },{
    id: '176',
    title: 'Panama',
    completed: false,

  },{
    id: '177',
    title: 'Pitcairn',
    completed: false,

  },{
    id: '178',
    title: 'Peru',
    completed: false,

  },{
    id: '179',
    title: 'Philippines',
    completed: false,

  },{
    id: '180',
    title: 'Palau',
    completed: false,

  },{
    id: '181',
    title: 'Papua New Guinea',
    completed: false,

  },{
    id: '182',
    title: 'Poland',
    completed: false,

  },{
    id: '183',
    title: 'Puerto Rico',
    completed: false,

  },{
    id: '184',
    title: 'Korea, Democratic Peoples Republic of',
    completed: false,

  },{
    id: '185',
    title: 'Portugal',
    completed: false,

  },{
    id: '186',
    title: 'Paraguay',
    completed: false,

  },{
    id: '187',
    title: 'Palestine, State of',
    completed: false,

  },{
    id: '188',
    title: 'French Polynesia',
    completed: false,

  },{
    id: '189',
    title: 'Qatar',
    completed: false,

  },{
    id: '190',
    title: 'Réunion',
    completed: false,

  },{
    id: '191',
    title: 'Romania',
    completed: false,

  },{
    id: '192',
    title: 'Russian Federation',
    completed: false,

  },{
    id: '193',
    title: 'Rwanda',
    completed: false,

  },{
    id: '194',
    title: 'Saudi Arabia',
    completed: false,

  },{
    id: '195',
    title: 'Sudan',
    completed: false,

  },{
    id: '196',
    title: 'Senegal',
    completed: false,

  },{
    id: '197',
    title: 'Singapore',
    completed: false,

  },{
    id: '198',
    title: 'South Georgia and the South Sandwich Islands',
    completed: false,

  },{
    id: '199',
    title: 'Saint Helena, Ascension and Tristan da Cunha',
    completed: false,

  },{
    id: '200',
    title: 'Svalbard and Jan Mayen',
    completed: false,

  },{
    id: '201',
    title: 'Solomon Islands',
    completed: false,

  },{
    id: '202',
    title: 'Sierra Leone',
    completed: false,

  },

  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ... task, completed: !task.completed};
      
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ... tasks,
      {
        title: taskTitle,
        id: uuidv4,
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

const handleTaskDeletion = (taskId) => {
      const newTasks = tasks.filter(task => task.id !== taskId)
      setTasks(newTasks);
  };

const onSelectOption = (e) => {
    setTasks (() => ({
      value: e,
      suggestions: [],
    }
    ));
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/"
               exact 
               render={() => (
                <>
                  <AddTask handleTaskAddition={handleTaskAddition} 
                           tasks={tasks}
                           handleTaskClick={handleTaskClick}
                           handleTaskDeletion = {handleTaskDeletion}
                  />
                  {/* <Tasks 
                        tasks={tasks}
                        handleTaskClick={handleTaskClick}
                        handleTaskDeletion = {handleTaskDeletion} 
                  /> */}
                </>
            )}
        />
        <Route
            path="/:taskTitle"
            exact
            component={TaskDetails}
        >

        </Route>
        </div>
    </ Router>

  );
};

export default App;
