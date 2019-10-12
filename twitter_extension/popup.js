chrome.webRequest.onBeforeRequest.addListener(
	function(details){
		if(details.url.includes("statuses/update.json"))
		{
			console.log(details.requestBody.formData.status[0]);	
		}
        return {cancel: details.requestBody};
    },
    {urls: ["<all_urls>"]},
    ["requestBody"]
);