var generateMessage = (from,text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    };
};

var generateLocationMessage = (from,latitude,longitude) => {
    return{
        from,
        url:`htps://www,google.com/maps?q=${latitude},${longitude}`,
        createdAt: new Data().getTime()
    }
};

module.exports = {generateMessage,generateLocationMessage};