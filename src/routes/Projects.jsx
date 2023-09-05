import Banner from "../components/banner/Banner";
import MyProjects from "../components/projects/Projects";
import { useEffect, useState } from 'react';

const Projects = () => {
  const [repo, setRepo] = useState([]);

  const url = 'https://api.github.com/users/richand05/repos';

  const fetchRepos = (url) => {
      fetch(url)
      .then(res => res.json())
      .then((data) =>{
          setRepo(data);
      })
      .catch(err => console.log(err))
  }

  useEffect(()=>{
      fetchRepos(url);
  }, [])

  return (
    <div>
      <Banner 
        text1="Projects 🧑‍💻💻" 
        text3="Some of my Github projects"
        button= {false} />
        <MyProjects repo={repo}/>
    </div>
  )
}

export default Projects