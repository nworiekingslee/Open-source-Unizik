# What do I need to know to help?
If you are looking to help to with a code contribution our project uses  React. If you don't feel ready to make a code contribution yet, no problem! There may be some open issues related to documentation or design. You can also propose improvements by opening a new issue. <!-- You can also check out the documentation issues [link to the docs label or tag on your issue tracker] or the design issues that we have [link to design label or tag on issue tracker if your project tracks design issues].-->


## How do I make a contribution?
Never made an open source contribution before? Wondering how contributions work in in our project? Here's a quick rundown!

1.  Fork the repository  to your account. This means that you will have a copy of the repository under your-GitHub-username/repository-name.
1. Clone the repository to your local machine using git clone https://github.com/github-username/repository-name.git.
1. Create a new branch for your fix using git checkout -b branch-name-here.
1. Open the project in a code editor and navigate to the `members.js` file. The path within the project is `Open-source-unizik\src\utils\members.js`.
1.Read the comment in the top of the file and follow the instructions.
1. Setup the project in your local by following the steps listed in the [readme](https://github.com/nworiekingslee/Open-source-Unizik#npm-start) file
1. Use `git add .` to add the file contents of the changed files to the "snapshot" git uses to manage the state of the project, also known as the index.
1. Use `git commit -m "Insert a short message of the changes made here"` to store the contents of the index with a descriptive message.
1. Push the changes to the remote repository using `git push origin branch-name-here`.
1. Submit a pull request to the upstream repository.
1. Title the pull request with a short description of the changes you made . For example, you can title an issue like so "Added John Doe to the project".
 In the description of the pull request, be sure to explain the changes that you made and any questions you have for the maintainer. It's OK if your pull request is not perfect (no pull request is), the reviewer will be able to help you fix any problems and improve it!
1. Wait for the pull request to be reviewed by a maintainer.
1. Make changes to the pull request if the reviewing maintainer recommends them.
1. Celebrate your success after your pull request is merged! 🎉


## Adding a New Status Code

- Please addd the steps to add their names in the members.js file.
- Include what to look out for.
- ......

- What you will add to the file should look like this:

```js
 {
    name: "John Doe",
    role: "A frontend Software Engineer",
    github_username: "john-'doe",
    skills: ["React", "Javascript", "HTML", "CSS"]
}
```

Note the code, title and description (which is used for [image alt text](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt) are all required. The title should match the title on https://httpstatuses.com/ for that particular status code.


## Where can I go for help?
- If you need help, you can ask questions directly in the pull request or issue. 

## What does the Code of Conduct mean for me?
- Our [Code of Conduct](CODE_OF_CONDUCT.md) means that you are responsible for treating everyone on the project with respect and courtesy regardless of their identity. If you are the victim of any inappropriate behavior or comments as described in our Code of Conduct, we are here for you and will do the best to ensure that the abuser is reprimanded appropriately, per our code.

Portions of this contributing.md file are based off of Safia Abdalla's [template for creating open source contributor guidelines](https://opensource.com/life/16/3/contributor-guidelines-template-and-tips)
