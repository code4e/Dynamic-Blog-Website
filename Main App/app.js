const port = 5000;
const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
var contactContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
var aboutContent = "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris gravida id eros euismod consequat. Curabitur elit felis, varius pulvinar bibendum in, auctor vel purus. Proin condimentum sagittis elit ut rutrum. Ut in risus placerat, pharetra arcu ac, ullamcorper tellus. Proin ultrices, ipsum vitae tincidunt fringilla, urna ante eleifend diam, vulputate tincidunt est neque et leo. Praesent vitae sem id mauris tincidunt varius. Maecenas mattis massa non erat volutpat, sit amet mattis enim hendrerit.";
var postsArr = [];

app.get('/' || '/posts', (req, res) => {
    return res.render('home', {
        posts: postsArr,
        head: '',
        content: '',
    });
});
app.get('/sent-link' || '/compose/sent-link', (req, res) => {
    if (req.query.link == 'contact') {
        return res.render('home', {
            head: 'Contact',
            content: contactContent,
            posts: ''
        });
    } else if (req.query.link == 'about') {
        return res.render('home', {
            head: 'About Us',
            content: aboutContent,
            posts: ''
        });
    }

});


app.get('/compose', (req, res) => {
    return res.render('form', {});
});



app.get('/readmore', (req, res) => {
    let index = req.query.index;
    return res.render('home', {
        head: postsArr[parseInt(index)].postTitle,
        content: postsArr[parseInt(index)].actualPost,
        posts: ''
    });
});

app.get('/posts/:post_title', (req, res) => {
    let newTitle = req.params.post_title.toLocaleLowerCase().replace(' ', '-');
    for (let [i, v] of postsArr.entries()) {
        let currentPost = v.postTitle.toLocaleLowerCase().replace(' ', '-');
        if (currentPost == newTitle) {
            return res.render('home', {
                head: v.postTitle,
                content: v.actualPost,
                posts: ''
            });
        }
        
    }


});

app.post('/compose/publish-post', (req, res) => {
    postsArr.push(req.body);

    return res.redirect('/');
});


app.listen(port, function (err) {
    if (err) {
        console.log('Cannot start server');
    } else {
        console.log('server has started');
    }
});