

Intro / About

Going to explore a new piece of work today while I re-do my personal website.

Introducing - Keystone JS!
I'll be documenting what I've gone through in this README file.

TOOLS

As a challenge to myself, rather than working locally on my computer, I'll be utilizing several new tools/libraries.
I'll cover what I use with this project, along with what I used to use to match, along with some Pros and Cons.

For this project:
- Atom.io (editor) with the Remote-FTP package to allow me to work on a server
- Yeoman (library) for scaffolding / Keystone: http://yeoman.io/
- KeystoneJS (library)
- Jade (javascript templating engine)
- Less (css pre-processor)
- Gulp (build scripts / automation)
- Cloudinary (images) - may not be needed
- Mandrill (emailing) - may not be needed
- Github (repo)
- Digital Ocean (server hosting)


SETUP
- Clone the repo from https://github.com/foreza/website-keystone
- Run "npm install"
- Run "node node_modules/unicode/install.js"
- Then run node keystone
- Navigate to port 3000 (for development)
...

Or run "bash install.sh"


Day 3: Planning / more learning:

Hi all. Took a pretty long break between yesterday and today's work.
The goal of today is to have a clear list of requirements of the site.
I sped along the process to get something to work with as a start, but now it's time to lock in what I am looking for in my site, and architect this out properly.
Basically, I'll be doing the discovery process with myself. Yay!

I need this website to accomplish, at a very high level, the following:
- A place for recruiters / employers to view my relevant work
- A place for recruiters / employers to contact me
- A place for individuals to learn about me and what I do
- A place for me to create content to showcase what I've learned

Let's stick to these 4 pillars, and arrange the current features of the site around these:

- Projects Page (view relevant work)
- Contact (contact me)
- Home (learn about me, what I do)
- Blog (create content)

I want to shuffle these in order of my priority. Hold on...

- Home (learn about me, what I do)
- Projects Page (view relevant work)
- Contact (contact me)
- Blog (create content)

Ok. My goal for today should be to then figure out the specifics I need for each page.
Story generation time! I am a project manager, after all.

- Home
	Users should be able to know who I am in less than a paragraph.
	Users should be able to know what I do for work in less than a paragraph.
	Users should be able to do in my spare time.
	Users should be able to see a simple image of me.
	Users should be able to see a logo / my personal brand.

- Projects
	Users should be able to view a list of the (public) projects I have contributed to / worked on.
	Users should be able to view a specific project and know what it is, and my role in the project.
	Users should be able to filter by a set of tags (The Portal, Game Development, In-progress, etc..) and view the projects that match
	Admin User(s) should be able to add a new project.
	Admin User(s)  should be able to modify/remove an existing project.

- Contact
	Users should be able to send me job requests, inquiries through a contact form
	Users should be able to view a public business email if they'd like to reach out
	Users should be able to view my business social media (linkedin, github)
	Users should be able to know the best ways to reach me / my response time & availability
	Admin User(s) should be able to view inquiries.

- Blog
	Admin User(s) should be able to create posts.
	Admin User(s) should be able to upload images with the posts.
	Admin User(s) should be able to manage/edit/remove posts.
	Users should be able to view any posts that are made publicly viewable.
	Users should be able to link to a particular post.

Pretty big list. These are just the top level stories with no added description. I fear that I'll get far too deep into the story generating process, so let's stop here for now and review.
The CMS installed already (Keystone) takes care of a pretty much the bulk of the stories for the Blog and Contact. We're really focusing on the custom features that makes the website mine.

I want to build the framework / skeleton for the custom content first. This means architecting out what the home page should be, what the project page should be, and putting in placeholders. The content can come later.

So let's start with the home page. My goal today will be to create a home page with placeholder content that is mine without a doubt!







Day 2: Let's make some changes!

TODO:
Make a quick bash script / installation guide so I can not be lazy later on (done)

Today's adventure (now that I have this all set up) is to get some basic edits in there, and familiarize myself with what keystone really has to offer.

I'll be making some minor front end changes, mocking up some pages, and also talking my way through what the goals of my site should, be, while exploring the feature set / how all of these technologies weave together.

The first place to look if we want to touch the front end is the /templates/views directory. Let's go there.
I see 5 files and a folder which contains a 404 (not found) and a 500 (internal server) error page.
We want to play around with the index page, don't we? Let's make a couple of edits.
But before we dive too deep, how are these being served?

Well, standard practice dictates it should be in the routes folder. Upon opening index.js, I see that the index page is served because that is what routes/views/index.js tells us.

More nosing around to figure out the basics. In templates/layouts/default.jade, I'm able to modify the website title, and presumably the header/footer.

I went ahead and hid 2 things - the "sign in" option, and the small "My site" link on the navbar.
Made some small changes to the footer as well.

Now, let's try to shift around the navigation / add new pages as we need.
Right now, we have a Home, Blog, Gallery, and Contact.

What we'd like to do is have the following:
Home, Projects, Blog, Contact

The "Projects" section will be by far the most complicated portion, but it would share some similarities with what the "Gallery" section accomplishes, We'll go ahead and revisit that later another day.

Let's do some renaming / order switching. The documentation states that we must mess around with routes/middleware.js.

I reordered the middleware like so:

:exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		{ label: 'Home', key: 'home', href: '/' },
		{ label: 'Projects', key: 'projects', href: '/projects' },
		{ label: 'Gallery', key: 'gallery', href: '/gallery' },
		{ label: 'Blog', key: 'blog', href: '/blog' },
		{ label: 'Contact', key: 'contact', href: '/contact' },
	];
	res.locals.user = req.user;
	next();
};

I do not expect this to work, given that I just blatantly threw in a "project" link.
Before I even run this - I expect the project to still run. It just will throw a 404 when i click on "projects"
And it did.

Alright, let's fix this!

I expect to have to make a new template (projects.jade), as a first step.
Then I'll have to edit the routes/index.js
Then I'll have to create a file (will mirror routes/ivews/index) and call it projects.js.
I'll then have to tie them together.

And done!

My next step is to begin some customization. After further thinking through it, I'd like to work on a quick first iteration of the site, as well as transition the projects page into more of a dashboard that I can display relevant information on other items.

Goals for the next time I revisit:

Decide exactly how I want the projects page formatted / viewed
Add some page content
Add Cloudinary API so I can add images / find my own solution
Learn some more Jade / switch to serving HTML/CSS instead










Day 1: Environment Setup/Installing Dependencies


9 AM:

Action Items:
- Setup remote working environment with Atom / Remote-FTP
- Setup Yeoman and Keystone on remote server

Wow, rough start. Ran into a lot of issues with node, when trying to install yeoman on my remote server.
I will give this another 10-20 minutes, then I'll see if switching to my own computer to generate the scaffold will be more successful.
In fact, I'll try that right now.
On the plus side, at least setting up a remote env to work in wasn't a hassle at all.

Action Items:
- Try to setup Yeoman and Keystone on my own computer to generate the project / diagnose issue
- Set up a git repository to enable versioning

Alright, running this with sudo !! seems to have installed this on my own computer. It appeared to be a permissions issue.
What I will probably do is generate the project, ensure that it runs locally, and then put this up on git so I can properly version this.

Ran into a permissions issue installing both keystone and yeoman; had to sudo !! my way out of both to get them to properly install. Noted for later.

Created a repo. https://github.com/foreza/website-keystone

Action items:
- Create project with "yo keystone" and run through the installation process

First thing I note is that it asks me to choose my templating engine. Oh boy, time to do some research!
I'm offered 4 choices:
*Jade*
Nunjucks
Twig
Handlebars

Some links I came upon:
https://strongloop.com/strongblog/compare-javascript-templates-jade-mustache-dust/
https://www.sitepoint.com/overview-javascript-templating-engines/

Right off the bat, I recognize Jade, Twig, and Handlebars. I am most familiar with Jade, and I know that out of the 4 it is probably the best supported / widely utilized. I'll go with that for the time being, but I'd like to revisit the other 3.

And then it asks me for my CSS pre-processor. I'm almost flattered that I have a menu to choose from.
*less*
sass
stylus

Some links I came upon:
https://code.tutsplus.com/tutorials/sass-vs-less-vs-stylus-preprocessor-shootout--net-24320

Again, I recognize less and sass as the big names out there. Doing ~1 minute of research reveals that stylus is far more different that its brethren. The default recommended one is less. The major difference between less and sass is possibly how the variables are declared (sass uses '@' versus '#' from less'). The fact that less can easily translated to sass and back is pretty neat too.

Next - it asks me if I want a blog. Well, I don't see why not. - Yes

And an image gallery? Oh, this is truly like a buffet. Slay me! I'll take it. - Yes

A contact form? You shouldn't have! - Yes

Oh, now something fascinating. It is asking me "What would you like to call the User model?"
I realized as a CMS, this must have some method of handling users. I'd like to put a spin on this just for giggles.

User (the default) -> Adventurer

I'm not very creative, but yes.

Now it wants me to specify the email of the first admin user. I'll give it one of my own emails - jforeza@gmail.com

Whoa! It's asking me now for a temp password. And it's saved in plain text. Kudos for being honest. I'll take the default ("admin") and change that ASAP.

Now finally, it's asking me about task automation. Gulp, Grunt, or none? Frankly, I'd like to go with the "none" option, but let's do our due diligence and have some research.
*Gulp*
Grunt
Neither/none


Some links I came upon:
http://www.hongkiat.com/blog/gulp-vs-grunt/

From what this quick research yielded, Grunt is the older of the two. But Gulp is on the rise. Beyond more low level items such as how Grunt writes to intermediary files while Gulp does things in-memory, it appears as if Gulp handles things much faster (for now).
Let's go with Gulp so we can add one of these build scripts to our knowledge base.


Now, do I want to create a new directory? I think not. This directory I'm in will be just fine.

"KeystoneJS integrates with Mandrill (from Mailchimp) for email sending."

Wow, just a bundle of surprises, eh? Let's pull out all the stops and put this in, too.
It requires an API Key. Let's do some research on Mandrill.

Some research on Mandrill:
http://www.mandrill.com/

Hmm, it doesn't seem like this is super important for what we need. Let's just include and forget. It also appears to be a paid service, and frankly, it's cutting into our time. By hitting enter, it'll use a temporary key. That sounds excellent.

'KeystoneJS integrates with Cloudinary for image upload, resizing and hosting.'
CloudinaryImage fields are used by the blog and gallery templates.

Some research on Cloudinary:
http://cloudinary.com/

Say what! More surprises. Let's go ahead and accept this for the time being as well. This may be more important, but if we are storing our images / etc on a 3rd party service (like imgur, google drive, facebook) I don't envision this being an issue.

'Finally, would you like to include extra code comments in your project? If you're new to Keystone, these may be helpful.'

Oh, slay me. You shouldn't have. Let's do that too.

Alright, that seems to be everything. Grabbing a quick cup of tea while I wait for this project creation step to finish.

Ah, and we're done!

Console:
Your KeystoneJS project is ready to go!
For help getting started, visit http://keystonejs.com/guide
We've included a test Mandrill API Key, which will simulate email
sending but not actually send emails. Please replace it with your own
when you are ready.
We've included a demo Cloudinary Account, which is reset daily.
Please configure your own account or use the LocalImage field instead
before sending your site live.
To start your new website, run "node keystone".

Sounds cool. Will note and use late.

Ran into a quick issue where I had to reconnect to the FTP instance. Apparently, I was writing this README on the server. Hilarious. Always make sure you are constantly saving, and constantly versioning. What can I say?

Action Items:
- Start the Project and play around with it!


You know what they say - the best thing to do in the learning phase is to jump right in. Fail fast, fail harder. Let's do this!

Alright, ran into an error. Mongo is not running, and
Cannot find module '../build/Release/bson".

I kickstarted mongo (sudo mongod) and tried again. Surprisingly, the project ran! (still got the bson error)

I killed the project, and did "npm install bson" to see if we could run this properly.

Still the same issue, but as I look closely, I see this:
Failed to load c++ bson extension, using pure JS version

Ok, so that's why it's running. Nothing to fear! Will have to revisit this, as we can't exactly be seeing this every time we launch the project..

http://stackoverflow.com/questions/21656420/failed-to-load-c-bson-extension

Well, slay me. It may just be because I'm utilizing a macbook at the very moment.
As long as we do not see these issues on our droplet, we should be good!


Action Items:
- Update project information with the technologies selected
- Put this up on git
- Be able to run the project on the remote server

First things first - some administrative matters before we dive deeper.

We've learned that Keystone drags a couple of big names together and throws them together. It makes you select a javascript templating engine, a CSS pre-processor, a build script, and allows you to throw in API keys for the 2 technologies it utilizes for the mail function and image function. This so far is pretty standard across all CMS's. No surprised beyond my exaggerated typed emotions. ("oh, SLAY me")

Updated the project information along with a quick description of what it's used for.

Pushed the project up onto git, and cloned it down onto the remote server.
Running NPM install to make sure we install all the dependencies.

MFW Npm install takes more than 30 seconds: http://www.relatably.com/m/img/memes-angry-face/Angry-Meme-Face-Png-15.png

Ok, I tried to run the project. No go. Let's start issue by issue.
Error: Cannot find module 'unicode/category/So'

A quick google search reveals:
https://github.com/keystonejs/generator-keystone/issues/129

How about: node node_modules/unicode/install.js
Something seemed to happen. Let's try to re-run.
It hung for a while, and then spat out different errors. One at a time, shall we?

/root/jason-personal/website-keystone/node_modules/keystone/fields/types/cloudinaryimage/CloudinaryImageType.js:40
		throw new Error(
		^
Error: Invalid Configuration

Ok, more research.
http://stackoverflow.com/questions/26179411/invalid-cloudinary-configuartion

Seems that if we set 	'cloudinary config': 'cloudinary://api_key:api_secret@cloud_name',
in keystone.js under the init options, that should fix it.


More errors.

KeystoneJS Configuration Error:
Please provide a `cookie secret` value for session encryption.

It also is worth noting that it takes a while to startup due to the

{ [Error: ENOENT: no such file or directory, open '.env'] errno: -2, code: 'ENOENT', syscall: 'open', path: '.env' }
[Error: /root/jason-personal/website-keystone/node_modules/bson/build/Release/bson.node: invalid ELF header]
js-bson: Failed to load c++ bson extension, using pure JS version

error that continues to show up. It doesn't stop the app from running though, so we'll look into this later.


Back to the cookie secret issue.
http://keystonejs.com/docs/getting-started/

Oh, slay me. It's a required parameter that somehow (what?!) was not included in what I had on my computer.
This is why we try things on servers early!

And at last, it runs!

Let's circle around to the bson error just to get an ease of mind.
https://github.com/keystonejs/keystone/issues/959

It appears that again, it does not impede development.
It looks like it's an upstream issue.
"It originates in the bson package itself, which the mongodb package depends on, which mongoose depends on. The error was corrected right around bson@4.20."

More support:
https://github.com/keystonejs/keystone/issues/3655
https://github.com/keystonejs/keystone/issues/1942
http://stackoverflow.com/questions/28651028/cannot-find-module-build-release-bson-code-module-not-found-js-bson

Trying one last thing (all answers allude to mongoose needing to be incremented).
I edited the package.json (which does not have mongoose specified) to instead utilize:
"mongoose": "~4.4"

Waiting for this all to to install. I did a rm -rf of the entire directory to see if we have better luck this time.
No gucci. Ah well, we tried! The alternative is to use the alpha version of keystone, and quite frankly that would not be worth sifting through all those new things without much support. (also, ~50+ waiting PRs? Good golly.)

Also, for you wisecracks, I've changed the password on the admin account. I didn't forget!

This concludes today's work session. I'll push this up as part of a separate commit.

TODO:
- Utilize PM2 for easy deployment / version management
- Create a project start instruction as well as a troubleshooting/faq to cover some of the issues I ran into
- Put this up on a domain for easier access / good practice before I move this over to the actual domain
- Conduct more research into Mandrill to see if more action is required
- Conduct more research into Cloudinary to see if more action is required
