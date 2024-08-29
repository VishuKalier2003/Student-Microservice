function adminSender(req, res, next) {
    const admin = req.body.name;
    const id = req.body.id;

    if(admin === "Vishu Kalier" && id === "18082003")
        next();
    else    res.status(403).json({error : "Access denied : Invalid Credentials !!"});
}

module.exports = adminSender;