$(document).ready(function() {
	
	// navlinks - get sections 
	$('.navlinks').eq(0).on('click', function() {
		// about section

		$('p#content').empty();
		$('p#thanku').empty();
		$('#ft').hide();

		// about text
		var $about = "About!<br/><br/>WELCOME to Sundrop Designs, an independent art store created and run by Flynn." 
		+ " Sundrop Designs began with the premise of making art that looks bubbly, soft, and striking!"
		 + " My goal is to create art that not only resonates with people but also inspires positive feelings and fresh insights."

		$('p#content').html($about);

	});

	$('.navlinks').eq(1).on('click', function() {
		// register section

		$('p#content').empty();
		$('p#thanku').empty();
		$('#ft').hide();

		// register form
		var $register = "Sign up!<br/><br/><form action='signup.php' method='post'>"
					+ "Username: <input type='text' name='user' required><br/><br/>"
					+ "Password: <input type='password' name='pw' required><br/><br/>"
					+ "<input id='submit' type='submit' name='signup'>     "
					+ "<input id='reset' type='reset' name='reset'>"
					+ "</form>"

		$('p#content').html($register);

		$('p#thanku').empty();

	});

	$('.navlinks').eq(2).on('click', function() {
		// login section

		$('p#content').empty();
		$('p#thanku').empty();
		$('#ft').hide();

		// login form
		var $login = "Login!<br/><br/><form action='login.php' method='post'>"
					+ "Username: <input type='text' name='luser' required><br/><br/>"
					+ "Password: <input type='password' name='lpw' required><br/><br/>"
					+ "<input id='submit' type='submit' name='login'>     "
					+ "<input id='reset' type='reset' name='reset'>"
					+ "</form>"

		$('p#content').html($login);

		$('p#thanku').empty();

	});

	$('.navlinks').eq(4).on('click', function() {
		// search section

		$('p#content').empty();
		$('p#thanku').empty();
		$('#ft').hide();

		// search area
		var $search = "Search!<br/><br/><form action='search.php' method='post'>"
					+ "<input id='searchkey' type='text' name='searchkey' required><br/><br/>"
					+ "<input id='search' type='submit' name='search'>"
					+ "</form>"

		$('p#content').html($search);

		$('p#thanku').empty();

	});

	$('a#title').on('click', function() {
		// click title - bring sun back

		$('p#content').empty();
		$('p#thanku').empty();
		$('#ft').delay(1000).fadeIn(1000);

		$('p#thanku').empty();
	});

});