const NEWSAPP = {
    getNewsData: () => {
        const url = './articles.json';

        fetch(url, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                NEWSAPP.renderNews(data);
            })
            .catch((err) => {
                throw err;
            });
    },
    renderNews: (data) => {
        data.forEach((news) => {
            if (news.url !== "") {
                const feedStr = `<div class="news-wrapper">
            <div class="card">
                
                <div class="row">
                <div class="col"></div>
                
                <h5 class="card-title title">${news.title}        
                </h5>
                <div class="col"></div>
                </div>
                <div class="row">
                    <div class="col-3"></div>
                    <img src="${news.urlToImage}" class="col-6 card-img-top" alt="...">
                    <div class="col-3"></div>
                </div>
                <div class="row">
                   
                    <div class="card-body">
                        <p class="card-text">
                        <div class="row container">
                           <div class="desc">${news.description}</div>
                        </div>
                        <div class="author">${news.author}</div>
                        </p>
                        <p class="card-text"><a href="${news.url}" target="_blank">Read More</a></p>
                    </div>
                  
                </div>
            </div>
            <br>
        </div>`;
                document
                    .querySelector("#newsfeed")
                    .appendChild(NEWSAPP.getView(feedStr));
            }
        });
    },
    getView: (str) => {
        const temp = document.createElement("template");
        temp.innerHTML = str;
        return temp.content;
    },
};
