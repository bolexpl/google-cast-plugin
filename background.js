chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({
        currentWindow: true,
        active: true
    }, function() {
        chrome.tabs.create({
            "url": "http://dev.opera.com"
        });
    });
});