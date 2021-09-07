import React from 'react'
import "./HomeScreen.css"
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import requests from './Request'

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav/>
            <Banner/>
            <Row title="NETFLIX ORIGINALS" FetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title="TRENDING" FetchUrl={requests.fetchTrending} />
            <Row title="TOP RATED" FetchUrl={requests.fetchTopRated}/>
            <Row title="Action MOVIES" FetchUrl={requests.fetchActionMovies}/>
            <Row title="COMEDY MOVIES" FetchUrl={requests.fetchComedyMovies}/>
            <Row title="HORROR MOVIES" FetchUrl={requests.fetchHorrorMovies}/>
            <Row title="ROMANCE MOVIES" FetchUrl={requests.fetchRomanceMovies}/>
            <Row title="DOCUMENTARIES" FetchUrl={requests.fetchDocumentaries}/>
        </div>
    );
}

export default HomeScreen
