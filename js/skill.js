$(document).ready(function () {
	var skillset = {
		"languages": [
			{
				"name": "HTML",
				"skill": 4
    },
			{
				"name": "CSS",
				"skill": 4
    },
			{
				"name": "JavaScript",
				"skill": 3.5
    },
			{
				"name": "PYTHON",
				"skill": 2.5
    }
  ],
		"frameworks": [
			{
				"name": "jQuery",
				"skill": 4
    },
			{
				"name": "Bootstrap",
				"skill": 4
		},
		{
			"name": "Vue",
			"skill": 3
		},
			{
				"name": "NodeJS",
				"skill": 3
    },
			{
				"name": "Paper.js",
				"skill": 2
		},
			{
				"name": "howler.js",
				"skill": 2 
			}
  ],
		"databases": [
			{
				"name": "MongoDB",
				"skill": 2
    },
],

/*
		"os": [
			{
				"name": "Windows",
				"skill": 5
    },
			{
				"name": "Android",
				"skill": 4
    },
			{
				"name": "macOS",
				"skill": 2
    },
			{
				"name": "iOS",
				"skill": 4
    }],
*/
		"tools": [
			{
				"name": "ChromeDevTools",
				"skill": 4
		    },
			{
				"name": "Git/Github",
				"skill": 3
		    },
			{
				"name": "Brackets",
				"skill": 4
		    },
			{
				"name": "VS code",
				"skill": 3
		    },
			{
				"name": "Jupyter Notebook",
				"skill": 3
		    }
  ]
	}



	for (var i in skillset.languages) {
		var percent = (skillset.languages[i].skill * 100) / 5
		var str = '<div class="skillbar-container"><div class="skillbar" style="background: #178fd6;" data-percent="' + percent + '%"><li>' + skillset.languages[i].name + '</div></div></li>';
		$(str).appendTo($('.languages'));
	}

	for (var i in skillset.frameworks) {
		var percent = (skillset.frameworks[i].skill * 100) / 5
		var str = '<div class="skillbar-container"><div class="skillbar" style="background: #178fd6;" data-percent="' + percent + '%"><li>' + skillset.frameworks[i].name + '</div></div></li>';
		$(str).appendTo($('.frameworks'));
	}
	for (var i in skillset.databases) {
		var percent = (skillset.databases[i].skill * 100) / 5
		var str = '<div class="skillbar-container"><div class="skillbar" style="background: #178fd6;" data-percent="' + percent + '%"><li>' + skillset.databases[i].name + '</div></div></li>';
		$(str).appendTo($('.databases'));
	}
	for (var i in skillset.os) {
		var percent = (skillset.os[i].skill * 100) / 5
		var str = '<div class="skillbar-container"><div class="skillbar" style="background: #178fd6;" data-percent="' + percent + '%"><li>' + skillset.os[i].name + '</div></div></li>';
		$(str).appendTo($('.os'));
	}

	for (var i in skillset.tools) {
		var percent = (skillset.tools[i].skill * 100) / 5
		var str = '<div class="skillbar-container"><div class="skillbar" style="background: #178fd6;" data-percent="' + percent + '%"><li>' + skillset.tools[i].name + '</div></div></li>';
		$(str).appendTo($('.tools'));
	}
	$('.skillbar').each(function () {
		$(this).animate({
			width: $(this).attr('data-percent')
		}, 2000);
	});
})