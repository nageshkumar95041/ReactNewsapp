import React, { useEffect, useState } from 'react'
import News from './News'
function NewsContainer(props) {
    
   let articles= [
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Iqtidar Ali",
        "title": "Can Tesla’s Otherworldly White Seats Really Stay Clean?",
        "description": "The unusual white upholstery is probably such a popular option among Tesla owners because it seems to match the automaker’s futuristic vibe. Much like the all-white interior of the spaceship in Stanley Kubrick’s epic film 2001, Tesla’s stark white interior ac…",
        "url": "https://cleantechnica.com/2022/03/12/can-teslas-otherworldly-white-seats-really-stay-clean/",
        "urlToImage": "https://cleantechnica.com/files/2016/04/Tesla-Model-X-3rd-row-seats-e1647103686336.jpg",
        "publishedAt": "2022-03-13T04:48:37Z",
        "content": "The unusual white upholstery is probably such a popular option among Tesla owners because it seems to match the automakers futuristic vibe. Much like the all-white interior of the spaceship in Stanle… [+2862 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Johnna Crider",
        "title": "Panasonic To Begin Mass Production Of Tesla 4680 Batteries In Fiscal Year April 2023",
        "description": "Panasonic plans to start the mass production of Tesla’s 4680 battery cells in the fiscal year April 2023, according to reports. There are also plans to set up two additional production lines and facilities at the company’s Wakayama factory. There’s also a rum…",
        "url": "https://cleantechnica.com/2022/03/12/panasonic-to-begin-mass-production-of-tesla-4680-batteries-in-fiscal-year-april-2023/",
        "urlToImage": "https://cleantechnica.com/files/2021/11/4680-panasonic-tesla-batteries.jpg",
        "publishedAt": "2022-03-13T04:20:03Z",
        "content": "Panasonic plans to start the mass production of Tesla’s 4680 battery cells in the fiscal year April 2023, according to reports. There are also plans to set up two additional production lines and faci… [+2720 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Steve Hanley",
        "title": "Tesla Prioritizing Deliveries Of Cars With FSD",
        "description": "Want a new Tesla but don't want to wait months and months to get it? Try ordering it with full self driving to get to the head of the line.",
        "url": "https://cleantechnica.com/2022/03/12/tesla-prioritizing-deliveries-of-cars-with-fsd/",
        "urlToImage": "https://cleantechnica.com/files/2021/06/Tesla-Autopilot-Watermarked.jpg",
        "publishedAt": "2022-03-13T04:01:19Z",
        "content": "Interest in electric cars is surging as the price of gasoline rises into the stratosphere as a result of Putin’s unprovoked assault on Ukraine. There are reports that demand for Tesla automobiles has… [+3059 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "/FILM"
        },
        "author": "Ethan Anderton",
        "title": "Linoleum Review: Jim Gaffigan Shines In A Perplexing But Beautiful Tapestry Of Life And Love [SXSW]",
        "description": "Attend enough film festivals, and you'll notice that many movies allow a variety of stand-up comics to stretch their acting muscles. While it's typically offbeat comedy that takes advantage of their humor skills, it's not uncommon to find comics showing their…",
        "url": "https://www.slashfilm.com/797254/linoleum-review-jim-gaffigan-shines-in-a-perplexing-but-beautiful-tapestry-of-life-and-love-sxsw/",
        "urlToImage": "https://www.slashfilm.com/img/gallery/linoleum-review-jim-gaffigan-shines-in-a-perplexing-but-beautiful-reflection-on-life-and-love-sxsw/l-intro-1647139072.jpg",
        "publishedAt": "2022-03-13T03:56:11Z",
        "content": "Alongside Cameron's story, we also spend a significant amount of time with Nora, who has coincidentally struck up a friendship with Marc (Gabriel Rush of \"Scary Stories to Tell in the Dark\"), the new… [+3047 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Guest Contributor",
        "title": "Tesla Model X Plaid Likes & Dislikes",
        "description": "This Tesla Model X Plaid review will be provided in a “he says, she says” format in order to show the points of view of both Sidney Ringold and Jim Ringold. Sometimes they are in complete alignment. Sometimes they aren’t. By Jim Ringold and Sidney Ringold, te…",
        "url": "https://cleantechnica.com/2022/03/12/tesla-model-x-plaid-likes-dislikes/",
        "urlToImage": "https://cleantechnica.com/files/2022/03/IMG_6635-e1647107651763.jpg",
        "publishedAt": "2022-03-13T03:02:22Z",
        "content": "This Tesla Model X Plaid review will be provided in a “he says, she says” format in order to show the points of view of both Sidney Ringold and Jim Ringold. Sometimes they are in complete alignment. … [+10739 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AiThority"
        },
        "author": "AIT News Desk",
        "title": "Infoblox Opens up Threat Research and Its DNS Security Service",
        "description": "Infoblox Inc., the leader in DNS management and security, is committing its top threat intelligence to GitHub to share its most relevant research with the broader security community as the invasion of ukraine has placed organizations around the world",
        "url": "https://aithority.com/security/infoblox-opens-up-threat-research-and-its-dns-security-service/",
        "urlToImage": "https://1382778335.rsc.cdn77.org/wp-content/uploads/2022/03/Infoblox-Opens-up-Threat-Research-and-Its-DNS-Security-Service.jpg",
        "publishedAt": "2022-03-13T02:43:00Z",
        "content": "Infoblox Inc., the leader in DNS management and security, is committing its top threat intelligence to GitHub to share its most relevant research with the broader security community as the invasion o… [+2895 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New York Post"
        },
        "author": "Charles Gasparino",
        "title": "Even ‘EV’ Elon Musk mocks Biden’s ‘green’ hucksters",
        "description": "When Tesla EV boss Elon Musk calls out the green-energy hucksterism of Vice President Kamala Harris and Transportation Secretary Pete Buttigieg, it’s clear Democrats are pushing a bad plan.",
        "url": "https://nypost.com/2022/03/12/even-ev-elon-musk-mocks-bidens-green-hucksters/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/03/newspress-collage-21510072-1647134583638.png?w=1024",
        "publishedAt": "2022-03-13T02:38:44Z",
        "content": "You know things are getting bad for Team Biden when Elon Musk is mocking its ludicrous push for everything green.  \r\nThats right. The dude who made his billions off the greening of America with his e… [+5621 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Thegatewaypundit.com"
        },
        "author": "Jordan Conradson",
        "title": "“Biden Won’t Do It Because He Does Not Have The Will To Stand Up To AOC” – President Trump On Elon Musk Calling For Increased Oil Production (VIDEO)",
        "description": "President Trump gave a shout out to Tesla CEO Elon Musk at his Save America rally in Florence, South Carolina on Saturday. On his first day in office, Joe Biden killed off 42,100 jobs by ending the construction of the Keystone XL Pipeline. The project would h…",
        "url": "https://www.thegatewaypundit.com/2022/03/biden-wont-not-will-stand-aoc-president-trump-elon-musk-calling-increased-oil-production-video/",
        "urlToImage": "https://www.thegatewaypundit.com/wp-content/uploads/AOC-angry.jpg",
        "publishedAt": "2022-03-13T01:50:38Z",
        "content": "President Trump gave a shout out to Tesla CEO Elon Musk at his Save America rally in Florence, South Carolina on Saturday.\r\nOn his first day in office, Joe Biden killed off 42,100 jobs by ending the … [+1590 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Daily Mail"
        },
        "author": "Caroline Graham",
        "title": "Elon Musk's out of this world love life... and why his child No8 is called 'Y'",
        "description": "Elon Musk (pictured with on-and-off girlfriend Grimes) has become a father for the eighth time, only serving to show his private life is just as colourful and futuristic as his professional one.",
        "url": "https://www.dailymail.co.uk/news/article-10606729/Elon-Musks-world-love-life-child-No8-called-Y.html",
        "urlToImage": "https://i.dailymail.co.uk/1s/2022/03/12/22/55278993-0-image-a-63_1647124858865.jpg",
        "publishedAt": "2022-03-12T22:52:45Z",
        "content": "He is the world's richest man with a £168billion fortune, a maverick genius whose Tesla electric cars have revolutionised the motor industry and who vows that, before the end of this decade, his Spac… [+10889 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ETCanada.com"
        },
        "author": "Melissa Romualdi",
        "title": "Thomas Brodie-Sangster And Elon Musk’s Ex Talulah Riley Seemingly Confirm Their Romantic Relationship",
        "description": "Thomas Brodie-Sangster and Talulah Riley seem to have made their red carpet debut as a couple. On Friday, the \"Queens Gambit\" actor and \"Westworld\" actress took the next step in their developing romance when they decided to hit the red carpet together during …",
        "url": "https://etcanada.com/news/875687/thomas-brodie-sangster-and-elon-musks-ex-talulah-riley-seemingly-confirm-their-romantic-relationship/",
        "urlToImage": "https://etcanada.com/wp-content/uploads/2022/03/shutterstock_editorial_12843309l.jpg?quality=80&strip=all&crop=0px%2C522px%2C3604px%2C2401px&resize=720%2C480",
        "publishedAt": "2022-03-12T22:39:57Z",
        "content": "By Melissa Romualdi.\r\n4 mins ago Thomas Brodie-Sangster and Talulah Riley seem to have made their red carpet debut as a couple.\r\nOn Friday, the “Queens Gambit” actor and “Westworld” actress took the … [+1630 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Wnd.com"
        },
        "author": "WND News Services",
        "title": "Biden's EV plans involve supporting human rights abuses, environmental threats",
        "description": "[Editor's note: This story originally was published by Real Clear Energy.] By Tom Harris Real Clear Harris In his State of the Union Address on Tuesday, President Joe Biden promoted electric vehicles (EVs), trumpeting his plans to establish “a national networ…",
        "url": "https://www.wnd.com/2022/03/bidens-ev-plans-involve-supporting-human-rights-abuses-environmental-threats/",
        "urlToImage": "https://www.wnd.com/wp-content/uploads/2022/03/electric-vehicles-charging-station.-Pixabay.jpg",
        "publishedAt": "2022-03-12T22:37:16Z",
        "content": "Electric vehicles at charging station (image courtesy Pixabay)\r\n[Editor's note: This story originally was published by Real Clear Energy.]\r\nBy Tom HarrisReal Clear Harris\r\nIn his State of the Union A… [+5859 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Newsazi.com"
        },
        "author": "Kemal Pasha",
        "title": "How the Pandemic Broke Silicon Valley’s Stranglehold on Tech Jobs - News Azi",
        "description": "Silicon Valley, make way for Silicon U.S.A.In a feedback loop that could transform the economic geography of the U.S., millions of Americans are moving, and companies are following them—tech companies in particular. In turn, this migration of compani",
        "url": "https://newsazi.com/how-the-pandemic-broke-silicon-valleys-stranglehold-on-tech-jobs/",
        "urlToImage": "https://images.wsj.net/im-503167/social",
        "publishedAt": "2022-03-12T22:07:06Z",
        "content": "Silicon Valley, make way for Silicon U.S.A.In a feedback loop that could transform the economic geography of the U.S., millions of Americans are moving, and companies are following themtech companies… [+11258 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Daily Mail"
        },
        "author": "Katie Hind",
        "title": "Elon Musk's ex-wife Talulah Riley and Thomas Brodie-Sangster dance at pre-Bafta party",
        "description": "Talulah Riley and her boyfriend Thomas Brodie-Sangster tried out at a pre-Bafta party on Friday during a dinner at the West End's swanky Londoner hotel.",
        "url": "https://www.dailymail.co.uk/tvshowbiz/article-10606495/Elon-Musks-ex-wife-Talulah-Riley-Thomas-Brodie-Sangster-dance-pre-Bafta-party.html",
        "urlToImage": "https://i.dailymail.co.uk/1s/2022/03/12/21/55277153-0-image-a-2_1647120867373.jpg",
        "publishedAt": "2022-03-12T22:02:16Z",
        "content": "They met on the set of the forthcoming drama about the Sex Pistols but there was nothing very punk about the dance moves Talulah Riley and her boyfriend Thomas Brodie-Sangster tried out at a pre-Baft… [+1413 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Seeking Alpha"
        },
        "author": "Chris Ciaccia",
        "title": "Microsoft, Apple among top tech stocks to buy amid sell-off: Wedbush",
        "description": "For the vast majority of 2022, tech stocks have been pummeled, due in part to rising rates and Russia's invasion of Ukraine, resulting in a \"risk off\" scenario",
        "url": "https://seekingalpha.com/news/3812728-microsoft-apple-among-top-tech-stocks-to-buy-amid-sell-off-wedbush",
        "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1310441327/image_1310441327.jpg?io=getty-c-w750",
        "publishedAt": "2022-03-12T21:05:00Z",
        "content": "Jean-Luc Ichard/iStock Editorial via Getty Images\r\nFor the vast majority of 2022, tech stocks have been pummeled, due in part to rising interest rates and Russia's invasion of Ukraine resulting in a … [+3069 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "John Koetsier, Senior Contributor, \n John Koetsier, Senior Contributor\n https://www.forbes.com/sites/johnkoetsier/",
        "title": "Fully Robotic Surgery May Depend On Elon Musk’s Mission To Mars",
        "description": "Fully robotic surgery may be a couple of decades away. But one thing could speed it up: billionaire engineer Elon Musk’s very public mission to Mars.",
        "url": "https://www.forbes.com/sites/johnkoetsier/2022/03/12/fully-robotic-surgery-may-depend-on-elon-musks-mission-to-mars/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/622cf182ed12c557288590a0/0x0.jpg?format=jpg&width=1200&fit=bounds",
        "publishedAt": "2022-03-12T19:24:47Z",
        "content": "Fully robotic surgery may be a couple of decades away. But one thing could speed it up: billionaire engineer Elon Musks very public mission to Mars.\r\nEarly this year a fully autonomous robot complete… [+6007 chars]"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "Bloomberg",
        "title": "Tesla may head for trial over Musk's '18 tweet",
        "description": "To fend off allegations that the missive was fraudulent, Musk repeated in a court filing last month what he explained three and a half years ago: Saudi Arabia's sovereign wealth fund had agreed to support his attempt to take the company private.",
        "url": "https://economictimes.indiatimes.com/news/international/business/tesla-may-head-for-trial-over-musks-18-tweet/articleshow/90176218.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-90176218,width-1070,height-580,imgsize-96402,overlay-economictimes/photo.jpg",
        "publishedAt": "2022-03-12T18:39:15Z",
        "content": "Elon Musk's assertion that his now-infamous 2018 tweet about taking Tesla private was true drew scepticism from a judge.\r\nThe billionaire and his electric-car company may soon be headed to trial in a… [+1880 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Boston Globe"
        },
        "author": "Adam Satariano",
        "title": "Shaming Apple and texting Musk, a Ukraine minister uses novel war tactics",
        "description": "After war began last month, President Volodymyr Zelenskyy of Ukraine turned to Mykhailo Fedorov, a vice prime minister, for a key role.",
        "url": "https://www.bostonglobe.com/2022/03/12/business/shaming-apple-texting-musk-ukraine-minister-uses-novel-war-tactics/",
        "urlToImage": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/aMgy5MMA91fBzPSh6wi-fXgE9QQ=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/YRMMF4Z3HJGMKT3DHMPS6SWATY.jpg",
        "publishedAt": "2022-03-12T18:18:06Z",
        "content": "The work has made Fedorov one of Zelenskyys most visible lieutenants, deploying technology and finance as modern weapons of war. In effect, Fedorov is creating a new playbook for military conflicts t… [+6657 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hollywood Life"
        },
        "author": "James Vituscka",
        "title": "Elon Musk’s Girlfriend Natasha Bassett Was ‘Fully Aware’ Of Baby No. 2 With Grimes",
        "description": "Elon Musk was 'completely honest' to girlfriend Natasha Bassett about his three-month-old daughter with Grimes.",
        "url": "https://hollywoodlife.com/2022/03/12/elon-musk-girlfriend-natasha-bassett-baby-grimes/",
        "urlToImage": "https://hollywoodlife.com/wp-content/uploads/2022/03/Natasha-Bassett-elon-musk-baby-shutter-ftr.jpg",
        "publishedAt": "2022-03-12T18:14:54Z",
        "content": "Elon Musk was ‘completely honest’ to girlfriend Natasha Bassett about his three-month-old daughter with Grimes.\r\nElon Musk‘s superstar singer ex-girlfriend Grimes, 33, shocked the known universe when… [+3511 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "OilPrice.com"
        },
        "author": "OilPrice.com",
        "title": "Higher Oil Prices Could Spark A Bull Run For Tesla",
        "description": "Tesla’s (NASDAQ: TSLA) share price began 2022 at a near-record $1,200 after record quarterly deliveries of its electric vehicles (EVs). However, rising inflation and Omicron worries saw it fall to $764 by 23 February. Then Russia began its invasion of Ukraine…",
        "url": "https://oilprice.com/Energy/Energy-General/Higher-Oil-Prices-Could-Spark-A-Bull-Run-For-Tesla.html",
        "urlToImage": "https://d32r1sh890xpii.cloudfront.net/article/718x300/2022-03-11_cf6kplqw4s.jpg",
        "publishedAt": "2022-03-12T18:00:00Z",
        "content": "The remarkable volatility in oil…\r\nChinese authorities have asked state…\r\nSwiss banking major Credit Suisse…\r\nBy City A.M - Mar 12, 2022, 12:00 PM CSTTesla’s (NASDAQ: TSLA) share price began 2022 at … [+4812 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Activistpost.com"
        },
        "author": "Activist Post",
        "title": "Why Are Leftists And Elitists So Happy About Skyrocketing Gas Prices?",
        "description": "There’s more than a few talking heads out there promoting the “expensive gas is good” idea.",
        "url": "https://www.activistpost.com/2022/03/why-are-leftists-and-elitists-so-happy-about-skyrocketing-gas-prices.html",
        "urlToImage": "https://www.activistpost.com/wp-content/uploads/2022/03/gas.jpg",
        "publishedAt": "2022-03-12T17:46:15Z",
        "content": "Op-Ed by Brandon Smith\r\nThere is a narrative being spread within leftist/socialist circles by media celebrities and White House cronies, and it is this: paying high prices for oil and gas is actually… [+13859 chars]"
        }
        ]

    const [val,setVal]=useState(articles);
    
    const fetchData=async()=>{
        
        try{
            let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.Category}&sourcres=cnn&sortBy=publishedAt&apiKey=7e4296f5178440008bd51b11ed83a030`
            const response= await fetch(url);
            const parseData=await response.json();
            console.log(parseData)
            setVal(parseData.articles);
            console.log(val)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        
        fetchData();
    },[]);
  
  return (
    <>
      <div className="row container my-3">
       {
         val.map((res)=>
         <div className="col-md-3" >
            <News title={res.title} description={res.description} urlToImage={res.urlToImage} url={res.url} />
        </div>
         )
       }
      
      </div>
    </>
  )
}

export default NewsContainer