var githubHandles = [
    "Akin909",
    "alexis-l8",
    "antoniotrkdz",
    "bo-bok",
    "ConchobarMacNessa",
    "finnhodgkin",
    "joeylouise",
    "lucyrose93",
    "majakudlicka",
    "oliverjam",
    "pbywater",
    "PiotrBerebecki",
    "Samatar26",
    "smarthutza",
    "yvonne-liu",
    "ZooeyMiller"
];

// TO DO: put your github access token here
var access_token = "?access_token=4a699e03827e7850d3b7111cfc44aeb0419186a6";

function createTableRow(user) {
    var tr = document.createElement("tr");
    var values = Object.keys(user);
    var cols = values.map(function(v) {
        var td = document.createElement("td");
        td.innerHTML = user[v];
        return td;
    });
    cols.forEach(function(c) {
        tr.appendChild(c);
    });
    return tr;
}

// generic request function takes a url and a callback
function request(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            cb(null, xhr.responseText);
        } else {
            console.log("waiting for response");
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}
// callback: returns an object containing username, full name and number of people following
function getUser(username, cb) {
    var url = "https://api.github.com/users/" + username + access_token;
    request(url, function(error, data) {
        if (error) {
            console.log(error);
        } else {
            var userObject = JSON.parse(data);
            return cb({
                username: username,
                name: userObject.name,
                following: userObject.following,
            });
        }
    });
}

// TO DO: write a function "getAllUsers" which returns details of all your users
// this function should only return something when all the data has been retrieved from the API!

function getAllUsers(arr, cb) {
    // your function here!
    var array = [];

    arr.forEach(function(element) {
        (getUser(element, function(object) {
            array.push(object);
            if (array.length === arr.length) {
                return cb(array);
            }
        }));

    });

}

// TO DO: bonus - make sure the users are sorted in order of the number people they're following
// adapt the final callback below to include this new function!
function sortUsers(arr) {
    // return sorted array!
}

// called when all the data has been retrieved
function finalCallback(arr) {
    var rows = arr.map(createTableRow);
    rows.forEach(function(r) {
        document.querySelector("table").appendChild(r);
    });
}


getAllUsers(githubHandles, finalCallback);
//getAllUsers(githubHandles, finalCallback());
