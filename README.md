# Bookshelf

> Bookshelf is a clone of an item page from https://goodreads.com. It includes 4 modules: the main book information, extra details, author details, and the reviews.


| intention     | request type  |  request url  | request body | side effect | response body |
| ------------- | ------------- | ------------- | -------------| ------------| ----------- |
| get reviews for a specific book  | GET | /books/:id/reviews | none | none | [
    {
        "id": 75,
        "user_id": 100,
        "book_id": 3,
        "date": "September 3, 2015",
        "review": "Ipsa autem iusto repellendus aut rerum eius officiis quo. Culpa voluptatem nam repellendus ut voluptas sunt sint. Et aut doloribus. Laboriosam rem et neque ut harum repellendus alias adipisci. Veritatis est autem minima quia tenetur error sunt mollitia aut. Suscipit debitis aut omnis doloribus eos.\n \rNisi debitis harum ratione accusantium officia. Autem voluptas sit rerum. Repellendus doloremque ut aut. Ex recusandae est sint vitae quas. Assumenda necessitatibus excepturi enim accusantium.\n \rUt eum eligendi non ratione ut vero dolorum sit. Hic sit perspiciatis quidem. Sit sit ea est cupiditate culpa.",
        "rating": 1,
        "likes": 0
    },
    {
        "id": 207,
        "user_id": 18,
        "book_id": 3,
        "date": "May 8, 1999",
        "review": "Et quis iste officia. Quae qui at omnis. Autem dolorum nemo blanditiis quidem vel molestiae quis assumenda voluptate.\n \rAssumenda accusamus qui. Laudantium et consequatur. Velit tempora a ipsum occaecati. Neque voluptatem quibusdam earum.\n \rVelit impedit sed et soluta sit delectus fuga. Voluptatem et et eaque dolor ducimus explicabo. Ipsa totam dolor fugit. Molestias inventore quia.",
        "rating": 2,
        "likes": 0
    },
    {
        "id": 289,
        "user_id": 26,
        "book_id": 3,
        "date": "February 15, 2009",
        "review": "Assumenda omnis labore deleniti vel quia et. Quia rem error iusto facilis minus nesciunt expedita. Fugiat eos corrupti enim magni.\n \rNostrum eum consectetur amet ducimus eligendi id eos atque. Sint tempore quia eos aut amet omnis vitae unde. Necessitatibus iste quis voluptas aut a. Quia iusto voluptatem velit earum.\n \rNecessitatibus sed vel asperiores possimus autem ducimus aperiam omnis. Eligendi nobis porro minus voluptas corporis corrupti debitis commodi. Consequatur nulla officiis pariatur magni quod exercitationem voluptatem numquam. Modi excepturi iure nihil omnis assumenda aliquid ut. Ipsa tempora quidem accusamus id soluta vel impedit cumque. Corrupti repudiandae pariatur quidem officiis cum recusandae veritatis omnis facilis.",
        "rating": 1,
        "likes": 0
    },
    {
        "id": 342,
        "user_id": 93,
        "book_id": 3,
        "date": "December 10, 2007",
        "review": "Quo ducimus omnis sed. Et vitae rerum sit cumque autem. Nam amet perferendis eveniet at animi tempore ea. Nobis sunt temporibus deleniti est.\n \rIusto cum fuga deleniti beatae velit quae ut quidem. Ipsam tempore qui laborum quas quis ab voluptatem vero. Reprehenderit qui odio quo nisi iure magni eligendi.\n \rSaepe aut voluptas. Laborum nam rerum. Accusantium corporis a mollitia repellendus sapiente in autem. Omnis itaque ipsam eos enim voluptatibus ea labore. Molestiae a necessitatibus laborum cumque ut. Cupiditate vitae ad quae necessitatibus magni debitis.",
        "rating": 1,
        "likes": 0
    },
    {
        "id": 378,
        "user_id": 15,
        "book_id": 3,
        "date": "March 1, 2016",
        "review": "Maiores nulla velit voluptates tempora dolor omnis et consequatur. Commodi molestiae eos et nostrum quasi eos et. Ipsum est quo ea. Et est eaque.\n \rArchitecto quas nisi officia natus sed. Et non eius reprehenderit sit dolorem unde maxime. Quia dolorem ipsum iure totam mollitia velit aut iure repellendus. Architecto ipsum distinctio. Maiores explicabo vitae.\n \rMolestiae ab quis ea. Itaque sed dolore expedita quae velit iste impedit iste. Sed vitae qui minima asperiores officia cumque voluptas amet. Dignissimos eius dolores nostrum sed eos eaque.",
        "rating": 2,
        "likes": 0
    },
    {
        "id": 403,
        "user_id": 65,
        "book_id": 3,
        "date": "October 8, 1998",
        "review": "Earum in accusantium ipsa dolor. Culpa voluptatibus iste quo dolores quod. At non nulla repellat sed quia qui. Dignissimos qui magni. Soluta aliquid odio repellendus dolor quis maxime suscipit occaecati.\n \rReiciendis quia est voluptas delectus ducimus nulla totam debitis aut. Nihil quia officia ab. Itaque alias et veniam quibusdam odit. Et et temporibus. Placeat minima omnis aliquam. Amet et earum voluptates culpa enim quo eligendi quis omnis.\n \rReiciendis aliquid et eligendi suscipit alias. Cum quos reiciendis consequatur. Rerum minima velit.",
        "rating": 4,
        "likes": 0
    },
    {
        "id": 448,
        "user_id": 2,
        "book_id": 3,
        "date": "May 15, 2001",
        "review": "Quidem ullam dolor iste inventore. Distinctio temporibus qui totam voluptatem at nemo ex est. Sit consequuntur ipsum amet dolores unde ducimus et ullam similique.\n \rEst laudantium ut. Accusantium aut consequatur dolorum harum placeat excepturi rerum ratione. Quo doloribus in cum officiis iusto. Cumque omnis consequatur dignissimos laborum tempora unde fuga odio. Ducimus et enim et dolorem dolorum et.\n \rEnim repudiandae deserunt molestiae fugiat mollitia qui vel repudiandae. Omnis est odit nesciunt distinctio dolores modi dolores. Omnis sed voluptatem ut tempore. Delectus quisquam sed nisi. Perferendis quidem nihil earum distinctio at incidunt non enim et. Eos quibusdam est excepturi eligendi enim aut aliquam veniam asperiores.",
        "rating": 5,
        "likes": 0
    },
    {
        "id": 480,
        "user_id": 52,
        "book_id": 3,
        "date": "August 14, 2006",
        "review": "Est quia delectus neque. Est maxime corrupti eaque maxime ab doloribus quos natus. Autem aut aliquam. Voluptatem aliquam inventore vel et tempore. Et voluptatum maxime aspernatur eaque. Atque labore mollitia sunt porro possimus veritatis magni facilis.\n \rNemo quia ipsum. Laudantium qui laboriosam. Fuga veritatis est.\n \rAut nihil nulla. Sunt soluta eum voluptatem reiciendis fugiat illum expedita recusandae iste. Fugit quisquam quod mollitia ut ea aut sed ad. Consectetur ut recusandae facilis consectetur. Recusandae culpa corporis rerum nesciunt voluptas. Cum autem rerum quaerat tempora.",
        "rating": 2,
        "likes": 0
    },
    {
        "id": 616,
        "user_id": 5,
        "book_id": 3,
        "date": "February 14, 2006",
        "review": "Reiciendis ut ullam eius ab velit et ut ducimus. Reprehenderit qui qui culpa quis mollitia quod et voluptatum. Totam commodi eligendi veniam totam dignissimos inventore. Alias voluptatem iste. Nulla consectetur ratione non possimus.\n \rEt dicta ab nam et. Ut molestiae consequuntur molestias eos voluptas et in autem omnis. Possimus molestiae tenetur provident explicabo et rerum.\n \rVeniam exercitationem ipsa eligendi quo reprehenderit ipsum. Qui quo odit sint qui a esse. Aut cum nemo. Rerum voluptatibus praesentium odit praesentium recusandae ipsa natus tempora.",
        "rating": 4,
        "likes": 0
    },
    {
        "id": 651,
        "user_id": 63,
        "book_id": 3,
        "date": "October 20, 2009",
        "review": "Debitis provident praesentium. Cumque enim cupiditate cum vitae maiores. Sit aut dolor rerum nisi neque officia.\n \rFugiat neque quis molestias rem maxime ea harum. Sunt et officiis qui deserunt aliquam eveniet dolorem est. Dolorum dolorem nulla quas eos. Totam accusantium quia quae. Ut possimus a. Qui numquam id iste.\n \rQui sit eos sint asperiores libero atque qui saepe. Eaque ad reiciendis et esse corporis non nemo. Adipisci et ut ut. Minima amet ullam voluptatem fugit culpa voluptatem sit quo culpa.",
        "rating": 3,
        "likes": 0
    }
] |
| add new review for book  | POST | /books/:id/reviews | {...book_id: 3, review: '...'} | creates entry in database | {...'book_id': 3, 'review': '...'} |
| increment likes for a review  | PUT | /books/:id/reviews | {...book_id: 3, likes: 0} | update column in database | {... 'book_id': 3, 'likes': 0} |
| delete review  | DELETE | /books/:id/reviews | {...book_id: 3, review: '...'} | delete row in database table | {... 'book_id': 3, 'review': '...} |


## Related Projects

  - https://github.com/hrr37-hermes-4/repo
  - https://github.com/hrr37-hermes-4/repo
  - https://github.com/hrr37-hermes-4/repo
  - https://github.com/hrr37-hermes-4/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development
Workflow and sprint management can be seen at: https://trello.com/b/sI4IwOWn/fec.

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### To Run
  - Run 'npm run start:dev' to start server. Nodemon should be installed on your machine.
  - Run 'npm run build:dev' to build files with Webpack and create bundle.js.
  - Run 'npm run seed-db' to seed the database.
  - Run 'npm test" to run tests.

