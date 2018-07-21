let anup: string;
anup = "Random search";
class YouTube {


    public title: string;
    private channel: string;
    private views: number; 
    private likes: number;
    private dislikes: number;
    private shares: number;
    private reports: number;
    private quality: number;


    constructor(title: string, channel?: string, quality?: number) {
        this.title = title;
        this.channel = channel;
        this.quality = quality;
        this.views = 0;
        this.likes = 0;
        this.dislikes = 0;
        this.shares = 0;
        
        console.log("video named : " + title + " has been added");

    }

    getViews() {
        console.log("Views:"+this.views);
    }

    setViews() {
        return ++(this.views);
        }

    viewVideo(title?: string) {
        console.log("video named " + this.title + " is being viewed");
        this.setViews();
    }

    getLikes() {
        console.log(" Likes :" + this.likes);
    }

    setLikes() {
        return ++(this.likes);
    }

    likeVideo(title?: string) {
        console.log("video named " + this.title + " is liked");
        this.setLikes();
    }


    getDislikes() {
        console.log("Dislikes :"+this.dislikes);
    }

    setDislikes() {
        return ++(this.dislikes);
    }

    DislikeVideo(title?: string) {
        console.log("video named " + this.title + " is dis liked");
        this.setDislikes();
    }

    getShares() {
        console.log("Shares :"+this.shares);
    }

    setShares() {
        return ++(this.shares);
    }


    Sharevideo(title?: string) {
        console.log("video is being shared");
        this.setShares();
    }


    setReports() {
        return ++(this.reports);
    }

    Reportvideo() {
        console.log("this video is being reported for a reason");
        this.setReports();
    }


}


//new object followed by different operations

let video = new YouTube("types of students", "jordindian", 360);
video.viewVideo();
video.viewVideo();
video.viewVideo()
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


function Searchvideo(name ?: string) {

    // search by keywords
    console.log("List of videos related to " + name);
    
}


