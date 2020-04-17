exports.success=function(req, res, message, status = 200){
    //res.send('Primera respuesta')
    //res.send(message)
    
    // res.send({
    //     error:'',
    //     body: message
    // })

    res.status(status).send({
        error:'',
        body: message
    })
}

exports.error=function (req, res, message, status = 500){
    res.status(status).send({
        error: message,
        body: ''
    })
}