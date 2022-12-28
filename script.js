


//03
const showPosts = document.querySelector('.postData');
const post = document.querySelector('.btn1').addEventListener('click', () => {
    getPosts();
});



const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            let data1 = "";
            data.map((value) => {
                data1 += `<div class="card">
                    <p class="userId">Id :-
                     ${value.id}</p>
                    <p class="title">Title :- 
                    ${value.title}</p>
                    <p class="body">Body :-
                     ${value.body}</p>
                </div>`
            });
            document.querySelector('.cards').innerHTML = data1;
        })
}


const showAlbums = document.querySelector('.postData');
const albums = document.querySelector('.btn2').addEventListener('click', () => {
    getAlbums();

});

const getAlbums = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            let data1 = "";
            data.map((value) => {
                data1 += `<div class="card">
                    <p class="userId">Id :- ${value.id}</p>
                    <p class="title">Title :- ${value.title}</p>
                </div>`
            });
            document.querySelector('.cards').innerHTML = data1;
        })

};