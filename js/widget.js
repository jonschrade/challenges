$(function() {
    getWorldNews()
    setInterval(() => {
        getWorldNews()
    },
    30000)
})

function getWorldNews() {
    let widget = $("#widget-box")
    $.get({
        url: "https://www.reddit.com/r/worldnews.json",
        success: function(response) {
            widget.children().remove()
            let children = response.data.children.slice(0,5)
            $.each(children, function(index, currentItem) {
                let data = currentItem.data
                widget.append($("<div>").attr("class", "card")
                                .append($("<div>").attr("class", "card-header")
                                    .append($("<label>").attr("class","widget-title").attr("title", data.title).text(data.title))
                                )
                                .append($("<div>").attr("class", "card-body")
                                    .append($("<span>").text("Score: ")
                                        .append($("<span>").attr("class","text-orange").text(data.score))
                                    )
                                    .append($("<a>").attr("class","card-link").attr("href", data.url).attr("title", data.url).text(data.domain))
                                )
                            )
            })
            if (widget.height() > 580) {
                widget.children().addClass("card-shrink")
            }
        }
    })
}