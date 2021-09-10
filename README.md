## What Is It?

A simple note-taking REST API using Knexjs and Faker to generate test data. Connected to Sqlite to push and pull.

## Services

-- **GET** - `GET ALL NOTES` `/notes`\
-- **POST** - `POST NEW NOTE` `/notes`\
-- **PUT** - `UPDATE A NOTE` `/notes/id`\
-- **DELETE** - `DELETE A NOTE` `/notes/id/`

#### GET Example Payload

```javascript[
     {
        "id": 1,
        "description": "Sunt quia laboriosam ut. Quia a eligendi voluptatem. Odio molestiae fugit enim iste.",
        "title": "quos et sit",
        "creationDate": 1631180800667,
        "modificationDate": 1631127609343,
        "owner_id": 2
    },
    {
        "id": 2,
        "description": "Fuga libero molestiae ipsam beatae ut quod et est. Quis cumque nesciunt asperiores. Accusamus omnis aut placeat porro doloremque.",
        "title": "Labore voluptas ratione consequatur omnis iste sequi consequatur. A fugit hic error et. Qui tenetur dolorum sint laudantium ipsum repellendus nobis mollitia aperiam. Veniam eos corrupti. Non quasi qui doloremque.",
        "creationDate": 1631148380660,
        "modificationDate": 1631128335173,
        "owner_id": 3
    },
    {
        "id": 3,
        "description": "Nostrum ut sed non eum blanditiis. Nostrum placeat recusandae suscipit enim totam. Saepe sed praesentium. Sit alias numquam incidunt voluptatem molestias eaque corrupti aut.",
        "title": "Et molestias ab aut quia. Et dolorem quis debitis maiores maxime architecto excepturi mollitia. Molestiae nihil perferendis rerum rerum vitae aut dignissimos est.",
        "creationDate": 1631139444301,
        "modificationDate": 1631162153116,
        "owner_id": 5
    },
]
```
