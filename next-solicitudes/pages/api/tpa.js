export default function clickup(req, res) {

    res.status(200).json(
        
    { 
        name: 'Auth',
        oauth2: req.query
    
    }
        )
    }