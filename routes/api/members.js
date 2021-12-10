const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');

//get All members rest API
router.get('/', (req, res) =>  res.json(members));

//get Single member
router.get('/:id', (req, res) => { 
    //res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){
        res.json( members.filter(member => member.id === parseInt(req.params.id)))
    }else{
        res.status(400).json({message: `Member with id of ${req.params.id} is not found`})
    }    
})

//Create a new member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg: "Please add name and email..."})
    }

    members.push(newMember);
    res.json(members);

    //Use with Template - Server render View 
    //res.redirect('/')  
})

//Updated member
router.put('/:id', (req, res) => { 
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        const updatedMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updatedMember.name? updatedMember.name: member.name;
                member.email = updatedMember.email? updatedMember.email: member.email;

                res.json({message: 'Member is updated', member: member})
            }
        })
    }else{
        res.status(400).json({message: `Member with id ${req.params.id} does not found`});
    }

})

//Delete member 
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id)); 
    if(found) {
        res.json({
                msg: "Member deleted successfully", 
                members:members.filter(member => member.id !== parseInt(req.params.id))
            })
    }else{
        res.status(400).json({message: `Member with id: ${req.params.id} not found`})
    }
})

module.exports = router;