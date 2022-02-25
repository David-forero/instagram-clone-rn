import {USERS} from './users';
export const POST = [
    {
        imgURL: 'https://res.cloudinary.com/nightcode/image/upload/v1645371910/clones-for-apps/insta-test1_r6ones.jpg',
        user: USERS[0].user,
        likes: 5436,
        caption: 'Programando con react native!',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: USERS[1].user,
                comment: '🔥🔥🔥'
            },
            {
                user: USERS[3].user,
                comment: 'Buena bro!'
            }
        ]
    },
    {
        imgURL: 'https://res.cloudinary.com/nightcode/image/upload/v1645371981/clones-for-apps/insta-test2_aptkan.jpg',
        user: USERS[5].user,
        likes: 126,
        caption: 'Día perfecto para disfrutar una bandeja degustación, 30-40 o 50 roles, escoge los roles de tu preferencia.',
        profile_picture: USERS[5].image,
        comments: [
            {
                user: 'jesuscarrillof',
                comment: 'excelente la recomiendo...'
            },
        ]
    },
    {
        imgURL: 'https://res.cloudinary.com/nightcode/image/upload/v1645388252/clones-for-apps/insta-test3_uwd0qd.jpg',
        user: 'sisnegez',
        likes: 46,
        caption: 'Subiendo al avila.',
        profile_picture: 'https://scontent-mia3-1.cdninstagram.com/v/t51.2885-19/170187062_786939222255018_894220299320094626_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-mia3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=1g9cMFbbTdoAX9lLA9I&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-3K4J8DFrfk127lEJ1KiECb3CZ8s-cqEriNjyCKaAYdQ&oe=6218BD40&_nc_sid=7bff83',
        comments: [
            {
                user: 'delavictori18',
                comment: 'nice!'
            },
        ]
    }
]