var article = document.querySelectorAll('.demo');
// console.log(article);
article.forEach(function Truncate(trunk, index) {
    // console.log(trunk.textContent.length);
    console.log(typeof trunk.textContent);
    if (trunk.textContent.length > 100) {
        let trunkatedText = trunk.textContent.substr(0, 100);
        trunk.textContent = trunkatedText + '...';
    }
});
