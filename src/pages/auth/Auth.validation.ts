export const name = (name: string) => {
    switch (true) {
        case !name || name.trim() === '':
            return "Name cannot be empty";

        case name.length < 2:
            return "Name must be at least 2 characters long";

        case name.length > 20:
            return "Name cannot exceed 20 characters";

        case /\d/.test(name):
            return "Name cannot contain numbers";

        case /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(name):
            return "Name cannot contain special characters";

        case !/^[a-zA-ZÀ-ÿ\s.'-]+$/.test(name) && name.trim() !== '':
            return "Name can only contain (a-z|A-Z|'|-|.) letters, spaces, apostrophes, hyphens and dots";


        default:
            return '';
    }
}

export function email(email: string): string {
    const trimmedEmail = email.trim();

    switch (true) {
        case !trimmedEmail:
            return ("Email cannot be empty");

        case !/@/.test(trimmedEmail):
            return ("Email must contain @ symbol");

        case trimmedEmail.indexOf('@') === 0:
            return ("Email cannot start with @");

        case trimmedEmail.indexOf('@') === trimmedEmail.length - 1:
            return ("Email cannot end with @");

        case trimmedEmail.split('@').length - 1 > 1:
            return ("Email can only contain one @ symbol");

        case !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail):
            return ("Email format is invalid");

        case trimmedEmail.length > 254:
            return ("Email cannot exceed 254 characters");

        case trimmedEmail.split('@')[0].length > 64:
            return ("Email username cannot exceed 64 characters");

        case /\.{2,}/.test(trimmedEmail):
            return ("Email cannot contain consecutive dots");

        case /^\./.test(trimmedEmail.split('@')[0]):
            return ("Email username cannot start with a dot");

        case /\.$/.test(trimmedEmail.split('@')[0]):
            return ("Email username cannot end with a dot");

        case /[!"#$%&'*+/=?^_`{|}~]/.test(trimmedEmail.split('@')[0]):
            return ("Email username contains invalid special characters");

        case !/^[a-zA-Z0-9.-]+$/.test(trimmedEmail.split('@')[0]):
            return ("Email username contains invalid characters");

        case !/^[a-zA-Z0-9.-]+$/.test(trimmedEmail.split('@')[1].split('.')[0]):
            return ("Email domain contains invalid characters");

        case trimmedEmail.split('@')[1].split('.').length < 2:
            return ("Email domain must contain a top-level domain");

        case trimmedEmail.split('@')[1].split('.')[1].length < 2:
            return ("Top-level domain must be at least 2 characters");

        case /^(admin|root|administrator|postmaster|webmaster|hostmaster|abuse)/i.test(trimmedEmail.split('@')[0]):
            return ("This email username is reserved");

        case /\.(test|example|invalid|localhost)$/i.test(trimmedEmail):
            return ("This domain is not allowed");

        case /\s/.test(trimmedEmail):
            return ("Email cannot contain spaces");

        case /^(temp|test|demo)/i.test(trimmedEmail.split('@')[0]):
            return ("Email is valid (consider using a permanent email)");

        case /!(@gmail\.com|@yahoo\.com|@outlook\.com|@hotmail\.com|@icloud\.com|@aol\.com|@protonmail\.com|@zoho\.com|@yandex\.com|@gmx\.com|@mail\.com|@fastmail\.com|@tutanota\.com|@live\.com|@msn\.com|@rediffmail\.com|@inbox\.com|@hushmail\.com|@rocketmail\.com|@aim\.com|@me\.com|@mac\.com|@qq\.com|@163\.com|@126\.com|@sina\.com|@naver\.com|@daum\.net|@nate\.com|@web\.de|@gmx\.net|@email\.com|@usa\.net|@lycos\.com|@cox\.net|@att\.net|@verizon\.net|@comcast\.net|@optimum\.net|@charter\.net|@juno\.com|@earthlink\.net|@bellsouth\.net|@windstream\.net|@frontier\.com|@centurylink\.net|@cableone\.net|@roadrunner\.com|@netzero\.net|@peoplepc\.com|@wowway\.com|@googlemail\.com|@google\.com|@apple\.com|@microsoft\.com|@facebook\.com|@amazon\.com|@netflix\.com|@twitter\.com|@linkedin\.com|@instagram\.com|@github\.com|@stackoverflow\.com|@digitalocean\.com|@heroku\.com|@aws\.com|@ibm\.com|@oracle\.com|@intel\.com|@dell\.com|@hp\.com|@lenovo\.com|@asus\.com|@acer\.com|@samsung\.com|@lg\.com|@sony\.com|@canon\.com|@nikon\.com|@siemens\.com|@bosch\.com|@philips\.com|@ge\.com|@shell\.com|@exxonmobil\.com|@chevron\.com|@bp\.com|@toyota\.com|@volkswagen\.com|@bmw\.com|@ford\.com|@honda\.com|@nissan\.com|@hyundai\.com|@kia\.com|@renault\.com|@peugeot\.com|@ferrari\.com|@lamborghini\.com|@porsche\.com|@jaguar\.com|@landrover\.com|@mclaren\.com|@harley-davidson\.com|@yamaha-motor\.com|@suzuki\.com|@kawasaki\.com|@ktm\.com|@trek\.com|@specialized\.com|@cannondale\.com|@scott-sports\.com|@cervelo\.com|@pinarello\.com|@bianchi\.com|@canyon\.com|@santacruzbicycles\.com|@tencent\.com|@alibaba\.com|@baidu\.com|@bytedance\.com|@jd\.com|@tmall\.com|@taobao\.com|@alipay\.com|@wechat\.com|@weibo\.com|@douyin\.com|@bilibili\.com|@youtube\.com|@vimeo\.com|@twitch\.tv|@dailymotion\.com|@periscope\.tv|@azure\.com|@googlecloud\.com|@oraclecloud\.com|@alibabacloud\.com|@digitalocean\.com|@linode\.com|@vultr\.com|@hetzner\.com|@ovh\.com|@godaddy\.com|@namecheap\.com|@bluehost\.com|@hostgator\.com|@siteground\.com|@dreamhost\.com|@hostinger\.com|@ionos\.com|@shopify\.com|@freshbooks\.com|@waveapps\.com|@hootsuite\.com|@slack\.com|@trello\.com|@asana\.com|@basecamp\.com|@monday\.com|@clickup\.com|@notion\.so|@atlassian\.com|@jira\.com|@confluence\.com|@bitbucket\.org|@github\.com|@gitlab\.com|@ubuntu\.com|@redhat\.com|@debian\.org|@centos\.org)$/i.test(trimmedEmail):
            return ("This email domain isn't allowed");

        default:
            return '';
    }
}

export const password = (password: string):string => {
    switch (true) {
        case !password || password.trim() === '':
            return ("Password cannot be empty");

        case password.length < 8:
            return ("Password must be at least 8 characters long");

        case password.length > 128:
            return ("Password cannot exceed 128 characters");

        case !/[a-z]/.test(password):
            return ("Password must contain at least one lowercase letter");

        case !/[A-Z]/.test(password):
            return ("Password must contain at least one uppercase letter");

        case !/\d/.test(password):
            return ("Password must contain at least one number");

        case !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password):
            return ("Password must contain at least one special character");

        case /\s/.test(password):
            return ("Password cannot contain spaces");

        case /(.)\1{2,}/.test(password):
            return ("Password cannot contain 3 or more identical characters in a row");

        case /(123|234|345|456|567|678|789|890)/.test(password):
            return ("Password cannot contain sequential numbers");

        case /(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i.test(password):
            return ("Password cannot contain sequential letters");

        case /password|123456|admin|qwerty/i.test(password):
            return ("Password is too common or weak");

        case new RegExp('^' + password.substring(0, 3), 'i').test(password.substring(3)):
            return ("Password contains repeating patterns");

        default:
            return '';
    }
}
