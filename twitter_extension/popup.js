chrome.webRequest.onBeforeRequest.addListener(
	function(details){
		if(details.url.includes("statuses/update.json"))
		{
			var post_data = details.requestBody.formData.status[0]
			console.log(details.requestBody.formData.status[0]);
			return {postMade : post_data};
		}
		else
			return {postMade : details.requestBody};
        
    },
    {urls: ["<all_urls>"]},
    ["requestBody"]
);