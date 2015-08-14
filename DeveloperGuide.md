

Setting up the development environment and work space for Struts 2 jQuery Project.

# Introduction #

Setting up the development environment and work space for Struts 2 jQuery Project.


# Details #

Setting up work space Struts 2 jQuery

Download eclipse-jee-helios-SR2-win32-x86\_64.zip note this is for a 64bit system if you use a 32bit OS please download the appropriate file.

Next download the maven2eclipse plugin. In eclipse goto Help-> Install New Software and enter as shown below:

![http://www.jgeppert.com/struts2-jquery/pic1.png](http://www.jgeppert.com/struts2-jquery/pic1.png)

As above enter the update site for maven2eclipse which is maven2eclipse - https://repository.sonatype.org/content/sites/forge-sites/m2eclipse-wtp/0.13.0/N/0.13.0.201105040943/
Note the URL for the update site this will avert some of the problems that you might in some maven plugins not been found in earlier releases(before 2011-05-04) of the maven2eclipse build.

Now install the latest Maven edition Maven 3.0.3 form the Maven site. Follow installation instructions present on the site. Now in Eclipse go to Windows-> Preferences. Select Maven → Installations
and point the installation to your installed version of  Maven:

![http://www.jgeppert.com/struts2-jquery/pic2.png](http://www.jgeppert.com/struts2-jquery/pic2.png)


Select your configuration settings. My Maven installation is in C:\programming-tools\apache-maven-3.0.3.

The last thing to be done is install a plugin for subversion. This can be Subclipse or Subversive. I installed Subclipse. Goto Help-> Install New Software and enter the url
subclipse - http://subclipse.tigris.org/update_1.6.x    See below:

![http://www.jgeppert.com/struts2-jquery/pic3.png](http://www.jgeppert.com/struts2-jquery/pic3.png)

Select all the options and install.

Choose SVN perspective. Next we need to enter the URL for subversion which is on the struts2-jquery site:

![http://www.jgeppert.com/struts2-jquery/pic4.png](http://www.jgeppert.com/struts2-jquery/pic4.png)

Checkout the project from the repository. After this create a new workspace and select File->Import the project as a Maven project:

![http://www.jgeppert.com/struts2-jquery/pic5.png](http://www.jgeppert.com/struts2-jquery/pic5.png)

Once you have imported The projects will appear in your workspace and you are ready to start working:)