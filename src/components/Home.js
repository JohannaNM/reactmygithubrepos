import '../components/Style.css';
import React, {useState, useEffect } from "react";

export default function Home(){

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/users/JohannaNM/repos`)
            .then(response => response.json())
            .then((data) => {
                setLoading(false);
                setRepos(data);
            })
            .catch(error=>console.error('Kunde inte läsa data', error));
    }, []);
    
    const myRepos = repos.map((myRepo) => {
        return(
            <div className='repocard' key={myRepo.id}>
                <h2 className='reponame'>{myRepo.name}</h2>
                <p className='language'>Språk: {myRepo.language}</p>
                <p className='description'>{myRepo.description}</p>
                <a href={myRepo.html_url}>{myRepo.html_url}</a>
            </div>
        )
    })

   return (
        <>
            <section className='repocontainer'>
                {loading && <p>Laddar...</p>}
                {!loading && <>
                    {myRepos}
                </>}
            </section>
        </>
   );
}