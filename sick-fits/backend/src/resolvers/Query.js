/**
 * Currently returning static user
 * This is just for the purpose of having basic example working
 */

const Query = {
    me() {
        return {
            id: 1,
            name: 'Dustin'
        }
    }
};

module.exports = Query;
