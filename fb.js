var flagl = 0;
var flagc = 0;
var flags = 0;
var fb = /** @class */ (function () {
    function fb(name, birthDate, birthplace, gender, studied, marital) {
        this.name = name;
        this.birthDate = birthDate;
        this.birthplace = birthplace;
        this.gender = gender;
        this.friends = 0;
        this.studied = studied;
        this.privacy = "public";
        this.photo = 0;
        this.posts = new Array(100);
        this.likes = new Array(100);
        this.comments = new Array(100);
        this.shares = new Array(100);
    }
    fb.prototype.addPost = function (photoCap) {
        this.posts[this.photo] = photoCap;
        console.log("post has been added to timeline :" + photoCap);
        ++this.photo;
    };
    fb.prototype.likePic = function (photoCap, photo) {
        for (var i = 0; i < 100; ++i) {
            if (this.posts[i] == photoCap) {
                if (flagl == 0) {
                    this.likes[i] = 0;
                    flagl = 1;
                }
                this.likes[i] += 1;
                console.log("total likes for " + this.posts[i] + " is " + this.likes[i]);
                flagl = 1;
                break;
            }
        }
    };
    fb.prototype.commentPic = function (photoCap, photo) {
        for (var i = 0; i < 100; ++i) {
            if (this.posts[i] == photoCap) {
                if (flagc == 0) {
                    this.comments[i] = 0;
                    flagc = 1;
                }
                this.comments[i] += 1;
                console.log("total comments for " + this.posts[i] + " is " + this.comments[i]);
                flagc = 1;
                break;
            }
        }
    };
    fb.prototype.sharePic = function (photoCap, photo) {
        for (var i = 0; i < 100; ++i) {
            if (this.posts[i] == photoCap) {
                if (flags == 0) {
                    this.shares[i] = 0;
                    flags = 1;
                }
                this.shares[i] += 1;
                console.log("total shares for " + this.posts[i] + " is " + this.shares[i]);
                flags = 1;
                break;
            }
        }
    };
    fb.prototype.sendReq = function (friend) {
        console.log("Friend request has been sent by " + this.name + " to " + friend);
    };
    fb.prototype.respondReq = function (friend) {
        var input = prompt("Action on request:  1.accept 2.ignore 3.block", "");
        switch (input) {
            case '1': {
                console.log("request has been accepted....now ur friends with " + friend);
                ++this.friends;
                console.log("total friends:" + this.friends);
                break;
            }
            case '2':
                console.log("request has been ignored....enjoy surfing");
                break;
            case '3':
                console.log("anonymous user has been block");
                break;
            default:
                console.log("invalid input");
                break;
        }
    };
    return fb;
}());
var anup = new fb("aaron", "apr 8", "bgm");
console.log(anup);
anup.addPost("anj");
anup.likePic("anj");
anup.likePic("anj");
anup.commentPic("anj");
anup.commentPic("anj");
anup.sharePic("anj");
anup.sharePic("anj");
anup.addPost("josh");
var pam = new fb("pammy", "june 8", "pune");
pam.sendReq("anup");
anup.respondReq("pam");
