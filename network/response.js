const statusMessage = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error',
};

exports.success = function (req, res, message, status) {
    let statusCode = status;
    let statusMessage = message;
    if (!status) {
        status = 200;
    }
    if (!message) {
        statusMessage = statusMessages[status];
    }
    res.status(status).send({
        error: '',
        body: statusMessage,
    });
};

exports.error = function (req, res, message, status = 500, details) {
    console.error('[response error]' + details);

    res.status(status).send({
        error: message,
        body: '',
    });
};
