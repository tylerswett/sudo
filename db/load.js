db.Commands.insert
(
	{
		 "commandName"                     : "ls",
		 "commandDescription"              : "lists files in directory",
		 "dateStart"                       : new Date( parseInt( 1335200998000, 16 ) * 1000 ),
		 "dateEnd"                         : null,
		 "parameters"                      :
	         [
				{
					"parameterName"       : "-a, --all",
					"description"         : "do not hide entries starting with .",
					"link"                : "test.html",
					"averageSuccess"      : 90,
					"accessGroupID"       : "easy",
					"access_Level": 10,
					"dateStart"           : new Date( parseInt( 1335200998000, 16 ) * 1000 ),
					"dateEnd"             : null
				},
				{
					"parameterName"       : "-A, --almost-all",
					"description"         : "do not list implied . and ..",
					"link"                : "test.html",
					"averageSuccess"      : 80,
					"accessGroupID"       : "medium",
					"access_Level": 20,
					"dateStart"           : new Date( parseInt( 1335200998000, 16 ) * 1000 ),
					"dateEnd"             : null
				},
				{
					"parameterName"       : "--author",
					"description"         : "print the author of each file",
					"link"                : "test.html",
					"averageSuccess"      : 70,
					"accessGroupID"       : "hard",
					"access_Level": 30,
					"dateStart"           : new Date( parseInt( 1335200998000, 16 ) * 1000 ),
					"dateEnd"             : null
				}
			]
	}
);

db.Access.insert
(
	{
		"group_id"		: "Advance",
		"date_start"	: new Date( parseInt( 1335200998000, 16 ) * 1000 ),
		"date_end"		: null
	}
);
db.Access.insert
(
	{
		"group_id"		: "Hard",
		"date_start"	: new Date( parseInt( 1335200998000, 16 ) * 1000 ),
		"date_end"		: null
	}
);
db.Access.insert
(
	{
		"group_id"		: "Medium",
		"date_start"	: new Date( parseInt( 1335200998000, 16 ) * 1000 ),
		"date_end"		: null
	}
);
db.Access.insert
(
	{
		"group_id"		: "Easy",
		"date_start"	: new Date( parseInt( 1335200998000, 16 ) * 1000 ),
		"date_end"		: null
	}
);	
db.Access.insert
(
	{
		group_id		: "Beginner",
		date_start		: new Date( parseInt( 1335200998000, 16 ) * 1000 ),
		date_end		: null
	}
);

db.User_Information.insert
(
	{
		username				: "Avantio",
		password				: "unsecurePassword",
		first_name				: "Nick",
		last_name				: "Jo",
		email					: "test@example.com",
		profile_picture_link	: "avantio.jpg",
		date_start				: new Date( parseInt( 1335200998000, 16 ) * 1000 ),
		date_end				: null
	}
);

db.User_Progress.insert
(
	{
		user_id			: Avantio,
		user_level		: 15,
		score			: 1000,
		date_start		: new Date( parseInt( 13352009980, 16 ) * 1000 ),
		date_end		: new Date( parseInt( 1335200998000, 16 ) * 1000 )
	}
);

db.User_Progress.insert
(
	{
		user_id			: Avantio,
		user_level		: 18,
		score			: 1100,
		date_start		: new Date( parseInt( 1335200998000, 16 ) * 1000 ),
		date_end		: null
	}
);
