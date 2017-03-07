# GitHub API parallel function
## Morning challenge

Building on the [GitHub API workshop](https://github.com/emilyb7/workshop-APIs) we did earlier this week, in today's morning challenge we'll be making a more complex request to the API.

In index.js you'll find set up for you:
- The `request` function, which is a generic wrapper for XHR and can be used to make a GET request to a url
- The `getUser`function, which uses `request`to get details of a user from the GitHub API. This function takes 2 arguments: `username` (string) and `cb`(function). It returns an object with the following key/value pairs: `username`, `name` and `following` (which refers to the number of other users the user is following).

### Your task

#### Setup

You'll need a GitHub access token again. Refer back to Monday's workshop as to how to get one if you haven't saved yours.

#### Part 1:

Finish writing the `getAllUsers` function.

This takes an array of strings as its first argument (`githubHandles` is set up for you), and a callback as its second argument (`finalCallback` is also set up for you).

Your function needs to make use of the `getUser` function. It should call the function once for *every* username in your array.

The catch? finalCallback must not be executed until ALL the requests to the GitHub API have finished.

Open `index.html` to see the results of your function!

#### Part 2

Finish writing the `sortUsers` function. This should sort the array of users that your `getAllUsers` function passes into `finalCallback`. Update your callback so that the table on the DOM is sorted by the number of people the user is following (choose highest to lowest or lowest to highest).

#### Part 3

Get rid of `sortUsers` again. This time we want to make sure that the users in the table on the DOM are sorted in the same order as the original array.

How can you adapt the `getAllUsers` function in order to make sure this is the case?

#### Bonus points

... if you manage not to mutate any arrays or objects.


#### Solution

Suggested solutions can be found on another branch. These are definitely not a perfect implementation. If anyone has any suggestions for improvement feel free to make a PR :)
