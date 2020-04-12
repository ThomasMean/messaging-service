const getData = (message: String) => {
    return {
        token: process.env.PUSHOVER_TOKEN,
        user: process.env.PUSHOVER_USER,
        message
    };
};

export default getData;