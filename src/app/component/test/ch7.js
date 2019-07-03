// const Blog = ({ posts }) => {

//     const sidebar = 
//         <ul>
//             {posts.map((post, i) =>
//                 <li key={post.id}>
//                     {post.title}
//                 </li>)}
//         </ul>
    
//     const content = posts.map(post =>
//         <div key={post.id}>
//             <h3>{post.title}</h3>
//             <h3>{post.content}</h3>
//         </div>
//     )

//     return(
//         <div>
//             {sidebar}
//             <hr/>
//             {content}
//         </div>
//     ) 

// }
// const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
//   ];

ReactDOM.render(
    <Blog posts={posts}/>,
    document.getElementById('root')
)
