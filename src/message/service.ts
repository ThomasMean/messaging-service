const getData = (token: String, message: String) => {
    return {
        token: token,
        user: process.env.PUSHOVER_USER,
        message
    };
};

export default getData;