let flagl = 0;
let flagc = 0;
let flags = 0;
class fb {

    name: string;
    birthDate: string;
    birthplace: string;
    studied: string;
    marital: string;
    gender: string;
    friends: number;
    photo: number;
    photoCap: any;
    posts: string[];
    private privacy: any;
    likes: any[];
    comments: any[];
    shares: any[];

    constructor(name: string, birthDate?: string, birthplace?: string, gender?: string, studied?: string, marital?: string) {
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

    addPost(photoCap: string) {


        this.posts[this.photo] = photoCap;

        console.log("post has been added to timeline :" + photoCap);
        ++this.photo;

    }

    likePic(photoCap: string, photo?: number) {

        for (let i = 0; i < 100; ++i) {
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

    }

    commentPic(photoCap: string, photo?: number) {

        for (let i = 0; i < 100; ++i) {
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

    }

    sharePic(photoCap: string, photo?: number) {

        for (let i = 0; i < 100; ++i) {
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

    }


    sendReq(friend: string) {
        console.log("Friend request has been sent by " + this.name + " to " + friend);
    }

    respondReq(friend: string) {
        let input = prompt("Action on request:  1.accept 2.ignore 3.block", "");

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

    }

}

let anup = new fb("aaron", "apr 8", "bgm");

console.log(anup);
anup.addPost("anj");
anup.likePic("anj");
anup.likePic("anj");
anup.commentPic("anj");
anup.commentPic("anj");
anup.sharePic("anj");
anup.sharePic("anj");


anup.addPost("josh");

let pam = new fb("pammy", "june 8", "pune");

pam.sendReq("anup");

anup.respondReq("pam");

