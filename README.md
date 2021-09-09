## What Is It?

A simple note-taking REST API using Knexjs and Faker to generate test data. Connected to Sqlite to push and pull.

## Services

-- **GET** - `GET ALL NOTES` `/notes`\
-- **POST** - `POST NEW NOTE` `/notes`\
-- **PUT** - `UPDATE A NOTE` `/notes/id`\
-- **DELETE** - `DELETE A NOTE` `/notes/id/`

### GET Example Payload

```javascript[
    {
        "id": 11,
        "title": "Voluptate reprehenderit in error. Numquam delectus velit molestiae illo dolorem at cupiditate. Sed eaque eos. Sunt optio aut earum aut dolore quos vel et sit.\n \rEa accusantium voluptatum sit atque voluptatem. Fugiat saepe voluptas dolor eum ducimus est. Labore at iste atque laudantium qui ex quia. Iste sunt doloremque aspernatur aut. Quibusdam distinctio quo voluptatem odio. Natus commodi ex quisquam excepturi.\n \rMaxime enim soluta fuga mollitia. Aut nihil possimus sit repellat perferendis numquam quia sequi. Enim optio reiciendis.",
        "description": "Facilis eos praesentium. Numquam voluptas expedita quisquam aut voluptatem. Sed nobis cumque accusantium officia omnis nihil vero totam. Eos in est.",
        "creationDate": 1631112681600,
        "modificationDate": 1631120999630
    },
    {
        "id": 12,
        "title": "voluptatem",
        "description": "Provident assumenda qui et quis. Laborum molestiae nostrum laudantium qui molestias delectus voluptatum nostrum numquam. Ipsum nesciunt quidem. Dicta nihil eos ut. Molestias fuga consequatur impedit velit delectus qui reprehenderit et. Enim eos autem distinctio voluptas voluptas quidem id.",
        "creationDate": 1631178441482,
        "modificationDate": 1631146234457
    },
    {
        "id": 13,
        "title": "Qui repellendus adipisci numquam laboriosam ut et.",
        "description": "Sapiente sed placeat id. Nam dolor enim officia ipsum. Est officiis perspiciatis non. Et pariatur in dolorem architecto quidem exercitationem ut.",
        "creationDate": 1631183575235,
        "modificationDate": 1631148927334
    }
]
```
