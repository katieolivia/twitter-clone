$(document).ready(function() {
	$("#tweet-controls").css("display", "none");

	tweetActions();


	$(".tweet-compose").on("click", function() {
		$(this).css('height', '5em')
		$("#tweet-controls").show();
	})

	var lengthAllowed = 140;
	$(".tweet-compose").keyup(function () {
		var charSoFar = $(this).val().length;
		var remaining = lengthAllowed - charSoFar;
		$("#char-count").text(remaining);
		if(remaining < 0) {
			$("#tweet-submit").prop("disabled", true);

		}
		else if(remaining <=10) {
			$("#char-count").css("color", "red");
			$("#tweet-submit").prop("disabled", false);


		}
		else{
			$("#char-count").css("color", "black");
			$("#tweet-submit").prop("disabled", false);

		}

		if(remaining < 0) {
			$("#tweet-submit").prop("disabled");
		}


});

	
	
	$("#tweet-submit").on('click', function() {
		var newTweet = $(".tweet-compose").val();
		var currentTime = $.timeago(new Date());
		var myFavNum = 0;
		$(this).find(".icon action-favorite").on('click', function() {
			myFavNum += 1;
		})


		$('#stream').prepend(function() {
			return '<div class="tweet"><div class="content"><img class="avatar" src="img/mypic.jpg" /><strong class="fullname">Katie Olivia</strong><span class="username">@katieolivia</span><p class="tweet-text">' + newTweet+ '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">70</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">'+ myFavNum + '</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/jennyshen.jpg" /><img src="img/damenleeturks.jpg" /></div></div><div class="time">' + currentTime + '</div></div><div class="reply"><img class="avatar" src="img/mypic.jpg" /><textarea class="tweet-compose" placeholder="Reply to @katieolivia"/></textarea></div></div></div>'
		})
		tweetActions();
	})

	
	function tweetActions() {
	$(".tweet-actions").hide();
	$(".tweet").hover(function() {
		$(this).find(".tweet-actions").show();
	}, function() {
		$(this).find(".tweet-actions").hide();
	});
	// $(".stats").hide();
	// $(".tweet").on('click', function() {
	// 	$(this).find(".stats").toggle();
	// })
}



$('[data-toggle="tooltip"]').tooltip(); 

	






});