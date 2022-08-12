// alert('hello');

let data = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://images.unsplash.com/photo-1651473670044-b0b55012a3db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://images.unsplash.com/photo-1659574087501-92ef4aa7b2d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://images.unsplash.com/photo-1619360142632-031d811d1678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://images.unsplash.com/photo-1659342313448-3f5115622e83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://images.unsplash.com/photo-1659039288596-45cf0fbaee51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://images.unsplash.com/photo-1658227447239-96229b791218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"
    }]

    let postInfo = document.getElementById("postInfo");

    let result = "";
    data.forEach((post)=> {
        result += `<div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <figure class="post">
                    <img src="${post.url}" alt="img1" class="img-fluid">
                    <figcaption>
                        <p>${post.title}</p>
                    </figcaption>
                        <span class="id">${post.id}</span>
                        <span class="albumId">${post.albumId}</span>
                </figure>
            </div>
        </div>
    </div>`
    })
    postInfo.innerHTML = result;
