import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [
        {
            "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Manish Singh",
            "title": "India's Physics Wallah raises $210M at $2.8B valuation even as edtech funding remains scarce | TechCrunch",
            "description": "An Indian edtech startup has secured $210 million in fresh financing amid a tough funding environment for edtech companies in the country.",
            "url": "https://techcrunch.com/2024/09/19/indias-physics-wallah-raises-210m-at-2-8b-valuation-even-as-edtech-funding-remains-scarce/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/09/Alakh-Prateek-3.jpg?resize=1200,800",
            "publishedAt": "2024-09-20T06:36:20Z",
            "content": "Physics Wallah, an Indian edtech startup, has secured $210 million in fresh financing amid a tough funding environment for edtech companies in the country following the collapse of Byju’s, once the b… [+4233 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Connie Loizos",
            "title": "John Mulaney skewers San Francisco at Dreamforce | TechCrunch",
            "description": "Attendees of the giant, annual Dreamforce conference in San Francisco love being the butt of the joke. Last year, Seth Myers entertained them during a",
            "url": "https://techcrunch.com/2024/09/19/john-mulaney-skewers-san-francisco-at-dreamforce/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/09/Screen-Shot-2024-09-19-at-10.30.34-PM.png?resize=1200,682",
            "publishedAt": "2024-09-20T05:28:45Z",
            "content": "Attendees of the giant, annual Dreamforce conference in San Francisco love being the butt of the joke. Last year, Seth Myers entertained them during a 40-minute set that poked fun at the tech industr… [+799 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Manish Singh",
            "title": "Indian filmmaker abandons human musicians for AI-generated music",
            "description": "Indian filmmaker Ram Gopal Varma is ditching human musicians for artificial intelligence, saying he'll use only AI-generated tunes in future projects.",
            "url": "https://techcrunch.com/2024/09/19/indian-filmmaker-ram-gopal-varma-abandons-human-musicians-for-ai-generated-music/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/09/GettyImages-533153966.jpg?resize=1200,872",
            "publishedAt": "2024-09-20T05:01:43Z",
            "content": "Indian filmmaker Ram Gopal Varma is ditching human musicians for artificial intelligence, saying he’ll use only AI-generated tunes in future projects, a move that underscores AI’s growing reach in cr… [+2124 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Maxwell Zeff",
            "title": "Here is what's illegal under California's 8 (and counting) new AI laws | TechCrunch",
            "description": "California Governor Gavin Newsom is currently considering 38 AI-related bills, including the highly contentious SB 1047, which the state's legislature",
            "url": "https://techcrunch.com/2024/09/19/here-is-whats-illegal-under-californias-8-and-counting-new-ai-laws/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/09/GettyImages-2159615518.jpg?resize=1200,800",
            "publishedAt": "2024-09-19T23:44:19Z",
            "content": "California Governor Gavin Newsom is currently considering 38 AI-related bills, including the highly contentious SB 1047, which the state’s legislature sent to his desk for final approval. These bills… [+3987 chars]"
        }
    
    ];

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        };
    }

    render() {
        return (
            <div className='container'>
                <h2>Breaking News</h2>
                <div className='row'>
                    {this.state.articles.map((element, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <NewsItem 
                                    title={element.title} 
                                    description={element.description} 
                                    imageurl={element.urlToImage} // Accessing urlToImage correctly
                                    newsurl={element.url}   // Assuming you want to pass the article URL as well
                                     
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default News;
