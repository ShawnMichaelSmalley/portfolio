# Mason & Company - Public website

Static website using basic HTML, CSS, some CDN links and jQuery plugins. Since only a few style overrides were used those were placed in the HEAD of the page rather than in a unique CSS file.

Base CSS is Materialize, icons are from Font Awesome, and the overall body font has been set to Lato to match the company logo. jQuery powers the Materialize activators such as dropdown menus, the contact form's date picker, scrollspy/pushpin for the fixed navbar on scroll past an anchor, a basic image carousel, and the more sophisticated LightCase image gallery util.

### Syncing w/ master branch
Checkout your local master branch:
```bash
git checkout master
```

Pull latest from server:
```bash
git pull origin master
```

### Feature branching
Follow the steps for pulling from master above ^^ before these steps

Cutting a branch:
```bash
git checkout -b my_branch
```

Adding/commiting changes to your branch:
```bash
git add .
```
```bash
git commit -m "i did things & stuff"
```

Pushing your new branch to the remote server:
```bash
git push origin my_branch
```

Then create a PR, and assign someone to that PR so it can be reviewed. 