//create a few users with name,picture,and array of questionaire answers
let friends = [{
    name: 'Tom',
    photo: 'https://assets3.thrillist.com/v1/image/1299823/size/tl-horizontal_main_2x.jpg',
    scores: ['1','3','2','4','5','5','4','3','2','1']
},{
    name: 'Eric',
    photo: 'https://www.freegreatpicture.com/files/94/28271-business-people-stock.jpg',
    scores: ['5','5','5','5','5','5','5','5','5','5']
}, {
    name: 'Russell',
    photo: 'https://pixel.nymag.com/imgs/daily/vulture/2018/10/23/23-russell-crowe.w330.h412.jpg',
    scores: ['3','2','1','3','2','1','3','2','1','3']
}, {
    name: 'Wendy',
    photo: 'https://previews.123rf.com/images/sam74100/sam741001503/sam74100150300107/38081253-portrait-of-a-young-african-american-business-woman-black-people.jpg',
    scores: ['5','5','5','5','5','5','5','5','5','5']
}
]
//dont forget to export the friends as a module so it can be used as a dep!

module.exports=friends;