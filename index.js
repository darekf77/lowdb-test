import { JSONFilePreset } from "lowdb/node";
async function start() {
    const post = { id: 1, title: 'lowdb is awesome', views: 100 };
    const db = await JSONFilePreset('db.json', {
        posts: [],
        config: {}
    });
    // In two steps
    db.data.posts.push(post);
    await db.write();
    db.data.config.debug = true;
    // Or in one
    await db.update(({ posts }) => posts.push(post));
    console.info('DONE');
    process.exit();
}
start();
process.stdin.resume();
