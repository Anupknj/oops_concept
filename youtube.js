var anup;
anup = "Random search";
var YouTube = /** @class */ (function () {
    function YouTube(title, channel, quality) {
        this.title = title;
        this.channel = channel;
        this.quality = quality;
        this.views = 0;
        this.likes = 0;
        this.dislikes = 0;
        this.shares = 0;
        console.log("video named : " + title + " has been added");
    }
    YouTube.prototype.getViews = function () {
        console.log("Views:" + this.views);
    };
    YouTube.prototype.setViews = function () {
        return ++(this.views);
    };
    YouTube.prototype.viewVideo = function (title) {
        console.log("video named " + this.title + " is being viewed");
        this.setViews();
    };
    YouTube.prototype.getLikes = function () {
        console.log(" Likes :" + this.likes);
    };
    YouTube.prototype.setLikes = function () {
        return ++(this.likes);
    };
    YouTube.prototype.likeVideo = function (title) {
        console.log("video named " + this.title + " is liked");
        this.setLikes();
    };
    YouTube.prototype.getDislikes = function () {
        console.log("Dislikes :" + this.dislikes);
    };
    YouTube.prototype.setDislikes = function () {
        return ++(this.dislikes);
    };
    YouTube.prototype.DislikeVideo = function (title) {
        console.log("video named " + this.title + " is dis liked");
        this.setDislikes();
    };
    YouTube.prototype.getShares = function () {
        console.log("Shares :" + this.shares);
    };
    YouTube.prototype.setShares = function () {
        return ++(this.shares);
    };
    YouTube.prototype.Sharevideo = function (title) {
        console.log("video is being shared");
        this.setShares();
    };
    YouTube.prototype.setReports = function () {
        return ++(this.reports);
    };
    YouTube.prototype.Reportvideo = function () {
        console.log("this video is being reported for a reason");
        this.setReports();
    };
    return YouTube;
}());
//new object followed by different operations
var video = new YouTube("types of students", "jordindian", 360);
video.viewVideo();
video.viewVideo();
video.viewVideo();
video.getViews();
video.likeVideo();
video.likeVideo();
video.getLikes();
video.DislikeVideo();
video.getDislikes();
video.Sharevideo();
video.Sharevideo();
video.Sharevideo();
video.getShares();
video.Reportvideo();
Searchvideo(anup);
function Searchvideo(name) {
    // search by keywords
    console.log("List of videos related to " + name);
}
