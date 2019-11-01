// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

const lambdaObject = axios.get("https://lambda-times-backend.herokuapp.com/articles").then( (response) => {
    console.log(response.data);
    // function to create cards.
    Object.keys(response.data.articles).forEach( (key) => {
        response.data.articles[key].forEach( (articleInfo) => {
            cardContainer.appendChild(createCard(articleInfo.headline, articleInfo.authorPhoto, articleInfo.authorName));
        })
    })
})

function createCard(headline, photo, name) {
    const card = document.createElement('div'),
    cardHeadline = document.createElement('div'),
    cardAuthor = document.createElement('div'),
    cardImgDiv = document.createElement('div'),
    cardImg = document.createElement('img');
    cardSpan = document.createElement('span');

    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    cardImgDiv.classList.add('img-container');

    cardHeadline.textContent = headline;
    cardSpan.textContent = `By ${name}`;
    cardImg.src = photo;

    cardAuthor.appendChild(cardSpan);
    cardImgDiv.appendChild(cardImg);
    cardAuthor.appendChild(cardImgDiv);
    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);

    return card;
}