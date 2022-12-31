
getLogin = (req, res) => {
    res.render('auth/login');
}
getRegistration = (req, res) => {
    res.render('auth/register');
}

saveRegistration = (req, res) => {
    console.log(req.body);
    return res.redirect('/login');
}

module.exports = {
    getLogin,
    getRegistration,
    saveRegistration
}