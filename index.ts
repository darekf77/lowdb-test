import { JSONFilePreset } from "lowdb/node"

async function start() {
    const post = { id: 1, title: 'lowdb is awesome', views: 100 };
    const db = await JSONFilePreset('db.json', { posts: [] as (typeof post)[] })

    // In two steps
    db.data.posts.push(post)
    await db.write()

    // Or in one
    await db.update(({ posts }) => posts.push(post))

}

start();
process.stdin.resume();