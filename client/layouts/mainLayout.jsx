import React from 'react';
import {Layout, Flex, Fixed} from 'react-layout-pane';
import '/public/css/base.css';

import '/node_modules/react-mdl/extra/material.css';
import '/node_modules/react-mdl/extra/material.js';

DocHead.setTitle('Banh Lien Hung');
export const MainLayout = ({content}) => (  
  <div>  
   
     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>   
     <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     
        <div>{content}</div>         
      
 </div>
);