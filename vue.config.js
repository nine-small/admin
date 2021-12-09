const url = 'https://mallapi.duyiedu.com/'
module.exports = {
    devServer:{
        proxy:{
            'passport':{
                target:url
            },
            'product':{
                target:url
            },
            'category':{
                target:url
            }
        }

    }
}