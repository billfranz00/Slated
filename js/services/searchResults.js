app.factory('searchResults', ['$http', function($http) {
	// the%20wa
    var service = {}
        
    service.api = function(searchInput) {
        var baseUrl = 'http://www.slated.com/films/autocomplete/profiles/?term=',
            finalUrl

        finalUrl = baseUrl + searchInput
        var theFinalUrl = finalUrl.replace(/ /g, "%20")
        console.log(theFinalUrl)
        return $http.get(theFinalUrl)
            .success(function(data) { 
                console.log(data)
                for(i = 0; i < data.length; i++) {
                    var image = $.parseHTML(data[i].image_code),
                        link = $.parseHTML(data[i].link_code),
                        shortDescription = data[i].description.substring(0, 25) + "..."
                    console.log(link)
                    console.log(link[0].attributes.href.nodeValue)
                    // console.log(image)
                    data[i].image_code = image[0]
                    data[i].description = shortDescription
                    data[i].label = data[i].label.substring(0, 20)
                    data[i].link_code = link[0].attributes.href.nodeValue
                }
                return data 
            })
            .error(function(err) {
                return err
            })
    }

    return service
}])