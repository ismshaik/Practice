var express=require('express');

var router=express.Router();

 var todoitems=[
		{id: 1, desc: 'ismail'},
		{id: 2,desc: 'Raj'},
		{id: 3,desc:'Ram'}
	];

router.get('/',function(require,response){
	//response.send('\express made my')
	//response.render('index');

	// load data from DB here

	response.render('index',{
		title:'My App',
		items: todoitems
	});
});

router.post('/add',function(req,res){
	var newItem=req.body.newItem;
	todoitems.push({
		id: todoitems.length + 1,
		desc: newItem
	});
	//console.log(newItem);
	res.redirect('/');
});

module.exports=router;