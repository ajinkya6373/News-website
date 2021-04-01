console.log("This is my js file");
// 02dae38087e84125aa020914322e5f7c
//news container

let apiKey = '02dae38087e84125aa020914322e5f7c'
let source = 'the-times-of-india';

// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

xhr.onload = function () {
    console.log("hello")
    if (this.status === 200) {
        let obj = JSON.parse(this.responseText)
        let articles = obj.articles;
        console.log(articles)
        let newsHtml = '';
        articles.forEach(function (element ,index) {
                console.log(element);
                let News = `<div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                    aria-expanded="false" aria-controls="collapse${index}">
                <b>Breaking News ${index + 1}:</b> ${element["title"]}
                </button>
                </h2>
                <span class="badge bg-dark text-light">${element["publishedAt"]}</span>
            </div>
            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
           
                <div class="card-body">  <div class="card-body">${element["description"]}</div>${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                <div><img src="${element['urlToImage']}" class="rounded mx-auto d-block img-responsive" alt="img"></div>
          
            </div>
            </div>`
                newsHtml += News;
            
            let newsAccordion = document.getElementById("newsAccordion");
            newsAccordion.innerHTML = newsHtml;
        });
    }
    else {

    }

}
xhr.send()

