var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Diego'
    };
    setTimeout(function() {
        callback(user);
    }, 3000);
};

getUser(31, (userObject) => {
    console.log(userObject);
});