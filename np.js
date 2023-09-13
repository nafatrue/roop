function recentPosts(e) {
    if (document.getElementById("recent-posts")) {
        for (var t, s, r = e.feed.entry, n = "", a = document.getElementById("recent-posts"), l = 0; l < numPosts; l++) {
            for (var c = 0; c < numPosts; c++)
                if ("alternate" == r[l].link[c].rel) {
                    s = r[l].link[c].href;
                    break
                }
            "media$thumbnail" in r[l] ? u = r[l].media$thumbnail.url.replace(/.*?:\/\//g, "//").replace(/\/s[0-9]+\-c/g, "/s90") : u = "https://1.bp.blogspot.com/-ygPrOtLU4Ew/YU9azMlDomI/AAAAAAAARyM/YTzRcc50FuYRJlEO0XDk74p6M4FOAb6ZwCLcBGAsYHQ/s1600/world-freeiptv-life-logo.webp";
            var t = r[l].title.$t;
            n += '<li class="most" id="most"><img class="lazyload loaded" src="' + u + '" alt="' + t + '"><h3 class="item-title fs-5 mb-3"><a  class="text-reset" href="' + s + '" title="' + t + '">' + t + "</a></h2></li><br/>"
        }
        a.innerHTML = n
    }
}
var rcp = document.createElement("script");
rcp.src = homePage + "/feeds/posts/summary?alt=json-in-script&orderby=published&max-results=" + numPosts + "&callback=recentPosts", document.getElementsByTagName("head")[0].appendChild(rcp);
