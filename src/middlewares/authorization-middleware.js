const authPage = (permissions) => {
    return (req,res,next) => {
        const userRole = req.user.role
        if (permissions.includes(userRole)){
            next()
        }else{
            return res.status(401).json({
                success: false,
                message: "Access Denied"
            })
        }
    }
}


module.exports = {authPage}