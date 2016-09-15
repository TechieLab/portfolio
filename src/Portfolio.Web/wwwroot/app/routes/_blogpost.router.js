
// 
import blogpost from '../models/blogPosts.model';

export default (app, router) => {

  // ## Recipe API Routes

  // Define routes for the `recipe` API

  router.route('/blogs')
    

     .get((req, res) => {

      // Use mongoose to get all blog items in the database
      blogpost.find((err, blogpost) => {
        console.log('result'+ blogpost);
        if(err)
          res.send(err);

        else
          res.json(blogpost);
      });
    });

    router.route('/blogs/:blog/upvote')

    .put((req,res) => {

        blogpost.upvote((err,result) =>{
             if(err){
                res.send(err);
             }else{
                  BlogPost.find((err, blogpost) => {
                  console.log('result'+ blogpost);
                  if(err)
                    res.send(err);
                  else
                    res.json(blogpost);
                });
             }
        })
    })

     router.route('/blogs/:blog/downvote')

    .put((req,res) => {

        blogpost.downvote(function(err,result){
             if(err){
                res.send(err);
             }else{
                  BlogPost.find((err, blogpost) => {
                  console.log('result'+ blogpost);
                  if(err)
                    res.send(err);
                  else
                    res.json(blogpost);
                });
             }
        })
    })
};
