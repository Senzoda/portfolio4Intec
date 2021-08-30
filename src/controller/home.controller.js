const Contacts = require('../model/contact.model');


exports.homepage = (req, res) => {
    res.render("pages/index")
}

exports.portfolio = (req, res) => {
    const data1 = [
        {
        id:1,
        image:"https://img.icons8.com/color/96/000000/html-5--v1.png",
        description:"HTML Ricotta swiss pepper jack. Macaroni cheese cheese on toast lancashire airedale everyone loves emmental cheese on toast taleggio. Fondue cheese and wine parmesan brie fondue everyone loves squirty cheese roquefort. Hard cheese stinking bishop."
    },
    {
        id:2,
        image:"https://img.icons8.com/color/96/000000/css3.png",
        description:"CSS Ricotta swiss pepper jack. Macaroni cheese cheese on toast lancashire airedale everyone loves emmental cheese on toast taleggio. Fondue cheese and wine parmesan brie fondue everyone loves squirty cheese roquefort. Hard cheese stinking bishop."
    },
    {
        id:3,
        image:"https://img.icons8.com/color/96/000000/javascript--v1.png",
        description:"JAVASCRIPT Ricotta swiss pepper jack. Macaroni cheese cheese on toast lancashire airedale everyone loves emmental cheese on toast taleggio. Fondue cheese and wine parmesan brie fondue everyone loves squirty cheese roquefort. Hard cheese stinking bishop."
    },
    {
        id:4,
        image:"https://img.icons8.com/color/96/000000/bootstrap.png",
        description:"BOOTSTRAP Ricotta swiss pepper jack. Macaroni cheese cheese on toast lancashire airedale everyone loves emmental cheese on toast taleggio. Fondue cheese and wine parmesan brie fondue everyone loves squirty cheese roquefort. Hard cheese stinking bishop."
    }

]
    const data2 = [
    {
        id:5,
        image:"https://img.icons8.com/clouds/100/000000/api.png",
        description:"API Ricotta swiss pepper jack. Macaroni cheese cheese on toast lancashire airedale everyone loves emmental cheese on toast taleggio. Fondue cheese and wine parmesan brie fondue everyone loves squirty cheese roquefort. Hard cheese stinking bishop."
    },
    {
        id:6,
        image:"https://img.icons8.com/color/96/000000/nodejs.png",
        description:"NODE Ricotta swiss pepper jack. Macaroni cheese cheese on toast lancashire airedale everyone loves emmental cheese on toast taleggio. Fondue cheese and wine parmesan brie fondue everyone loves squirty cheese roquefort. Hard cheese stinking bishop."
    },
    {
        id:7,
        image:"https://img.icons8.com/color/96/000000/react-native.png",
        description:"REACT Ricotta swiss pepper jack. Macaroni cheese cheese on toast lancashire airedale everyone loves emmental cheese on toast taleggio. Fondue cheese and wine parmesan brie fondue everyone loves squirty cheese roquefort. Hard cheese stinking bishop."
    },
    {
        id:8,
        image:"https://img.icons8.com/color/96/000000/redux.png",
        description:"REDUX Ricotta swiss pepper jack. Macaroni cheese cheese on toast lancashire airedale everyone loves emmental cheese on toast taleggio. Fondue cheese and wine parmesan brie fondue everyone loves squirty cheese roquefort. Hard cheese stinking bishop."
    },
]


    res.render("pages/portfolio",{
        ligne1:data1,
        ligne2:data2
    })
}

exports.contact = (req, res) => {
    res.render("pages/contact")
}


exports.details = (req, res) => {
    
    const id = req.params.id; //récup de l'id
    

    const data = [
        {
        id:1,
        image:"https://img.icons8.com/color/96/000000/html-5--v1.png",
        description:"HTML Ricotta swiss pepper jack. Macaroni cheese cheese on toast lancashire airedale everyone loves emmental cheese on toast taleggio. Fondue cheese and wine parmesan brie fondue everyone loves squirty cheese roquefort. Hard cheese stinking bishop."
    },
    {
        id:2,
        image:"https://img.icons8.com/color/96/000000/css3.png",
        description:"CSS Ricotta swiss pepper jack. Macaroni cheese cheese on toast lancashire airedale everyone loves emmental cheese on toast taleggio. Fondue cheese and wine parmesan brie fondue everyone loves squirty cheese roquefort. Hard cheese stinking bishop."
    },
    {
        id:3,
        image:"https://img.icons8.com/color/96/000000/javascript--v1.png",
        description:"JAVASCRIPT Ricotta swiss pepper jack. Macaroni cheese cheese on toast lancashire airedale everyone loves emmental cheese on toast taleggio. Fondue cheese and wine parmesan brie fondue everyone loves squirty cheese roquefort. Hard cheese stinking bishop."
    },
    {
        id:4,
        image:"https://img.icons8.com/color/96/000000/bootstrap.png",
        description:"BOOTSTRAP Ricotta swiss pepper jack. Macaroni cheese cheese on toast lancashire airedale everyone loves emmental cheese on toast taleggio. Fondue cheese and wine parmesan brie fondue everyone loves squirty cheese roquefort. Hard cheese stinking bishop."
    },
    {
        id:5,
        image:"https://img.icons8.com/clouds/100/000000/api.png",
        description:"API Ricotta swiss pepper jack. Macaroni cheese cheese on toast lancashire airedale everyone loves emmental cheese on toast taleggio. Fondue cheese and wine parmesan brie fondue everyone loves squirty cheese roquefort. Hard cheese stinking bishop."
    },
    {
        id:6,
        image:"https://img.icons8.com/color/96/000000/nodejs.png",
        description:"NODE Ricotta swiss pepper jack. Macaroni cheese cheese on toast lancashire airedale everyone loves emmental cheese on toast taleggio. Fondue cheese and wine parmesan brie fondue everyone loves squirty cheese roquefort. Hard cheese stinking bishop."
    },
    {
        id:7,
        image:"https://img.icons8.com/color/96/000000/react-native.png",
        description:"REACT Ricotta swiss pepper jack. Macaroni cheese cheese on toast lancashire airedale everyone loves emmental cheese on toast taleggio. Fondue cheese and wine parmesan brie fondue everyone loves squirty cheese roquefort. Hard cheese stinking bishop."
    },
    {
        id:8,
        image:"https://img.icons8.com/color/96/000000/redux.png",
        description:"REDUX Ricotta swiss pepper jack. Macaroni cheese cheese on toast lancashire airedale everyone loves emmental cheese on toast taleggio. Fondue cheese and wine parmesan brie fondue everyone loves squirty cheese roquefort. Hard cheese stinking bishop."
    },
]
    // rendu style template pour page details
    console.log(data[id-1]);
    res.render("pages/details",{
        description:data[id-1].description,
        image: data[id-1].image
    })
}

// contact me : POST

exports.post = (req, res) => {
    
    const contact = new Contacts({...req.body});
    const values = [req.body.name, req.body.email, req.body.subject, req.body.message]
    console.log(req.body);
    contact.post(values,(err, data)=> {
        if(err) {
            result.status(500).send('error server');
        } 
    })
    
    
    
    res.render("pages/contact")
}