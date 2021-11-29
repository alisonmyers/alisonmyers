import * as React from 'react'
import Layout from '../components/my-layout'
import Projects from '../components/project-cards'
import ProjectData from '../data/MyProjects.json'


function getObjects(obj, key, val) {
  var objects = [];
  for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] === 'object') {
          objects = objects.concat(getObjects(obj[i], key, val));    
      } else 
      //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
      if (i === key && obj[i] === val || i === key && val === '') { //
          objects.push(obj);
      } else if (obj[i] === val && key === ''){
          //only add if the object is not already in the array
          if (objects.lastIndexOf(obj) === -1){
              objects.push(obj);
          }
      }
  }
  return objects;
}

const AboutPage = () => {

  const projects = ProjectData.projects; 

  return (
    <Layout pageTitle="Sketching">

      
      
      <Projects projectData={getObjects(projects, "id", "ETEC512-1")}/>

      
    </Layout>
  )
}

export default AboutPage