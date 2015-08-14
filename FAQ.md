

## Overview ##

### Why Struts2 jQuery Plugin ###

  * The Struts2 jQuery Plugin give you an easy integration of ajax and widgets.
  * The current Struts2 Dojo Plugin is deprecated.
  * jQuery is one of the most used javascript frameworks. See [Google Trends](http://www.google.com/trends?q=javascript+jquery%2C+javascript+dojo%2C+javascript+prototype&ctab=0&geo=all&date=all&sort=0)

### Why Struts2 jQuery Plugin instead of plain jQuery Programming ###

Let us take a normal real World Example, a AJAX Call to an Action with Indicator and Effect.

The Code without Struts2 jQuery Plugin:

```
<div id="result">Result Div</div>
<s:url var="ajax" value="/ajax1.action"/>
<a id="ajaxlink" href="javascript:void(0)">
  Run AJAX Action
</a>
<img id="indicator" src="images/indicator.gif" alt="Loading..." style="display:none"/>
<script type="text/javascript">
$("#ajaxlink").click(function()
{
 $("#indicator").show();
 $("#result").load("<s:property value="ajax"/>", { }, function(){
	 $("#indicator"").hide();
	 $("#result").effect("highlight", {}, 2000);
 });
});
</script>
```

The Code with Struts2 jQuery Plugin:

```
<div id="result">Result Div</div>
<s:url var="ajax" value="/ajax1.action"/>
<sj:a id="ajaxlink" href="%{ajax}" indicator="indicator" targets="result" effect="highlight">
  Run AJAX Action
</sj:a>
<img id="indicator" src="images/indicator.gif" alt="Loading..." style="display:none"/>
```

  * save a lot off boilerplate code
  * make your JSP better readable
  * benefit from Community feedback
  * use best practice and widely proven code
  * support for AJAX form validation

### Which jQuery Version is currently used? ###

| **Plugin Version** | [jQuery](http://jquery.com/) | [jQuery UI](http://jqueryui.com/) | [Form Plugin](http://jquery.malsup.com/form/) | [BBQ](http://benalman.com/projects/jquery-bbq-plugin/) (History) | [jqGrid](http://www.trirand.com/blog/) |
|:-------------------|:-----------------------------|:----------------------------------|:----------------------------------------------|:-----------------------------------------------------------------|:---------------------------------------|
| **3.7.1**          | 1.11.0                       | 1.10.4                            | 3.50                                          | 1.2.1                                                            | 4.6.0                                  |
| **3.7.0**          | 1.10.2                       | 1.10.3                            | 3.48                                          | 1.2.1                                                            | 4.5.4                                  |
| **3.6.1**          | 1.10.2                       | 1.10.3                            | 3.38                                          | 1.2.1                                                            | 4.5.2                                  |
| **3.6.0**          | 1.10.0                       | 1.10.3                            | 3.35                                          | 1.2.1                                                            | 4.5.2                                  |
| **3.5.1**          | 1.8.3                        | 1.9.2                             | 3.25                                          | 1.2.1                                                            | 4.4.2                                  |
| **3.5.0**          | 1.8.3                        | 1.9.2                             | 3.23                                          | 1.2.1                                                            | 4.4.1                                  |
| **3.4.0**          | 1.8.2                        | 1.8.24                            | 3.18                                          | 1.2.1                                                            | 4.4.1                                  |
| **3.3.3**          | 1.7.2                        | 1.8.21                            | 3.09                                          | 1.2.1                                                            | 4.4.0                                  |
| **3.3.2**          | 1.7.2                        | 1.8.21                            | 3.09                                          | 1.2.1                                                            | 4.4.0                                  |
| **3.3.1**          | 1.7.2                        | 1.8.20                            | 3.09                                          | 1.2.1                                                            | 4.3.2                                  |
| **3.3.0**          | 1.7.1                        | 1.8.18                            | 2.95                                          | 1.2.1                                                            | 4.3.1                                  |
| **3.2.1**          | 1.6.4                        | 1.8.16                            | 2.86                                          | 1.2.1                                                            | 4.2.0                                  |
| **3.2.0**          | 1.6.4                        | 1.8.16                            | 2.86                                          | 1.2.1                                                            | 4.2.0                                  |
| **3.1.1**          | 1.5.2                        | 1.8.14                            | 2.82                                          | 1.2.1                                                            | 4.1.2                                  |
| **3.1.0**          | 1.5.2                        | 1.8.14                            | 2.82                                          | 1.2.1                                                            | 4.1.1                                  |
| **3.0.2**          | 1.5.2                        | 1.8.13                            | 2.77                                          | 1.2.1                                                            | 4.0.0                                  |
| **3.0.0**          | 1.5.2                        | 1.8.12                            | 2.69                                          | 1.2.1                                                            | 4.0.0                                  |
| **2.5.3**          | 1.4.4                        | 1.8.9                             | 2.63                                          | 1.2.1                                                            | 3.8.2                                  |
| **2.5.2**          | 1.4.4                        | 1.8.9                             | 2.63                                          | 1.2.1                                                            | 3.8.2                                  |
| **2.5.1**          | 1.4.4                        | 1.8.8                             | 2.52                                          | 1.2.1                                                            | 3.8.2                                  |
| **2.5.0**          | 1.4.3                        | 1.8.6                             | 2.49                                          | 1.2.1                                                            | 3.8.1                                  |
| **2.4.1**          | 1.4.2                        | 1.8.5                             | 2.45                                          | 1.2.1                                                            | 3.7.2                                  |
| **2.4.0**          | 1.4.2                        | 1.8.4                             | 2.45                                          | 1.2.1                                                            | 3.7.2                                  |
| **2.3.0**          | 1.4.2                        | 1.8.2                             | 2.43                                          | 1.2.1                                                            | 3.7.2                                  |
| **2.2.0**          | 1.4.2                        | 1.8.2                             | 2.43                                          | 1.2.1                                                            | 3.6.5                                  |
| **2.1.1**          | 1.4.2                        | 1.8.1                             | 2.43                                          | 1.2.1                                                            | 3.6.5                                  |
| **2.1.0**          | 1.4.2                        | 1.8.1                             | 2.43                                          | 1.2.1                                                            | 3.6.4                                  |
| **2.0.0**          | 1.4.2                        | 1.8.0                             | 2.43                                          | 1.2.1                                                            | 3.6.4                                  |
| **1.8.3**          | 1.3.2                        | 1.7.2                             | 2.36                                          | 1.1                                                              | 3.6.2                                  |
| **1.8.2**          | 1.3.2                        | 1.7.2                             | 2.36                                          | 1.1                                                              | 3.6.2                                  |
| **1.8.1**          | 1.3.2                        | 1.7.2                             | 2.36                                          | 1.0.3                                                            | 3.6.2                                  |
| **1.8.0**          | 1.3.2                        | 1.7.2                             | 2.36                                          | 1.0.2                                                            | 3.6.1                                  |
| **1.7.0**          | 1.3.2                        | 1.7.2                             | 2.36                                          | 1.0.2                                                            |                                        |
| **1.6.0**          | 1.3.2                        | 1.7.2                             | 2.33                                          | 1.0.2                                                            |                                        |


## Installation ##

### How can I use the Plugin? ###

  1. [Download](http://code.google.com/p/struts2-jquery/downloads/list) the struts2-jquery-plugin-x.x.x.jar
  1. Put it into your Classpath (WEB-INF/lib)
  1. Add the Tag-Lib to your JSP `<%@ taglib prefix="sj" uri="/struts-jquery-tags"%>`
  1. Place the [Head Tag](HeadTag.md) inside your html head tags

### How can I use the Plugin from Maven? ###

Since version 1.8.3 the plugin is found in the central Maven repository. Just add to your dependencies section:
```
<dependencies>
    ...
    <dependency>
        <groupId>com.jgeppert.struts2.jquery</groupId>
        <artifactId>struts2-jquery-plugin</artifactId>
        <version>3.7.1</version>
    </dependency>
    <dependency>
        <groupId>com.jgeppert.struts2.jquery</groupId>
        <artifactId>struts2-jquery-grid-plugin</artifactId>
        <version>3.7.1</version>
    </dependency>
    <dependency>
        <groupId>com.jgeppert.struts2.jquery</groupId>
        <artifactId>struts2-jquery-richtext-plugin</artifactId>
        <version>3.7.1</version>
    </dependency>
    <dependency>
        <groupId>com.jgeppert.struts2.jquery</groupId>
        <artifactId>struts2-jquery-tree-plugin</artifactId>
        <version>3.7.1</version>
    </dependency>
    <dependency>
        <groupId>com.jgeppert.struts2.jquery</groupId>
        <artifactId>struts2-jquery-mobile-plugin</artifactId>
        <version>3.7.1</version>
    </dependency>
    ...
</dependencies>
```
To access SNAPSHOT builds, you need to declare the snapshot repository lookup in your pom.xml:
```
...
<repositories>
    ...
    <repository>
        <id>sonatype.oss.snapshots</id>
        <name>Sonatype OSS Snapshot Repository</name>
        <url>http://oss.sonatype.org/content/repositories/snapshots</url>
        <releases>false</releases>
        <snapshots>true</snapshots>
    </repository>
</repositories>
...
```

Previous versions are not found in the central Maven repository. To access them, you have to declare the project's internal staging or snapshot repository to your project's pom.xml:
```
...
<repositories>
    ...
    <repository>
        <id>struts2-jquery.staging</id>
        <name>Struts 2 jQuery Plugin Staging Repository</name>
        <url>http://struts2-jquery.googlecode.com/svn/maven/staging</url>
    </repository>
</repositories>
...
```
If you want to be able to reference historic snapshot builds, you would extend the setup as follows:
```
...
<repositories>
    ...
    <repository>
        <id>struts2-jquery.staging</id>
        <name>Struts 2 jQuery Plugin Staging Repository</name>
        <url>http://struts2-jquery.googlecode.com/svn/maven/staging</url>
        <releases>true</releases>
        <snapshots>false</snapshots>
    </repository>
    <repository>
        <id>struts2-jquery.snapshots</id>
        <name>Struts 2 jQuery Plugin Snapshots and Test Builds Repository</name>
        <url>http://struts2-jquery.googlecode.com/svn/maven/snapshots</url>
        <releases>false</releases>
        <snapshots>true</snapshots>
    </repository>
</repositories>
...
```
**Please note that all versions of the plugin after 1.8.3 will not be distributed to the project's internal Maven repository any more, since they are now found in the central repository**

### Can I use my own Theme? ###

Yes, see Details about Theming in the [Head Tag Wiki](HeadTag.md).

## Performance ##

### Can I use Google as CDN? ###

Yes, just set the **loadFromGoogle** Attribute in the [Head Tag](HeadTag.md) to **true**.

## Development ##

### How can I make a Contribution? ###

Struts2 jQuery Plugin is Open Source Software, which means anyone can use it and contribute.
It also means community support is important to make it a really solid and long-lasting project.

Any help and feedback is welcome, either on the [issue site](http://code.google.com/p/struts2-jquery/issues/list), or on the [user group](http://groups.google.com/group/struts2-jquery).

### I like to overwrite a default JavaScript Handler ###

Following link explains you how to extend or replace the existing Implementation.

http://www.jgeppert.com/2011/02/how-to-overwrite-functions-in-struts2-jquery-plugin/


### Does a User Group exist? ###

For Questions around the Plugin you can use this [User Group](http://groups.google.com/group/struts2-jquery)

&lt;wiki:gadget url="http://markmail.org/gadgets/markmailmini.xqy?l=com.googlegroups.struts2-jquery" width="500" height="300"/&gt;

### How can a project committer trigger a Maven repository deployment? ###

#### One-Time Setup ####
##### Configure Repository Credentials #####
To be able to deploy a current snapshot or release build to the SVN based Maven repository, you will need to add the following lines to your local Maven settings, usually found in $HOME/.m2/settings.xml:
```
...
    <servers>
        <server>
            <id>struts2-jquery.staging</id>
            <username>[Sonatype OSS Nexus Username]</username>
            <password>[Sonatype OSS Nexus Password]</password>
        </server>
        <server>
            <id>struts2-jquery.snapshots</id>
            <username>[Sonatype OSS Nexus Username]</username>
            <password>[Sonatype OSS Nexus Password]</password>
        </server>
    </servers>
...
```
##### Configure Code Signing Key #####
The release process requires to sign the artifacts with a valid GnuPG key. The following steps assume that you have not setup a local GnuPG infrastructure yet.
  1. Get GnuPG. On Linux, your package management tool will offer it as _gpg_ or _gnupg_. See http://gnupg.org/download/index.en.html for downloadable binaries for MacOS and Windows.
  1. If you already have a GnuPG key, you can [import it](http://www.dewinter.com/gnupg_howto/english/GPGMiniHowto-3.html#ss3.3) now and skip the next steps. This is also needed if you want to enable more machines for deployment.
  1. If you don't have a key yet, generate a public/private key pair: `gpg --gen-key`. Be sure to chose a safe password and to backup the key pair afterwards (see `--export` and `--export-secret-keys` [here](http://gnupg.org/documentation/manuals/gnupg/Operational-GPG-Commands.html#Operational-GPG-Commands))
  1. If you haven't already, upload your public key to http://pgp.mit.edu. The ASCII version needed for uploading can be generated with the command line `gpg --export --armor <ID>`

#### Deployment Process ####
The deployment is triggered with the following command:
```
mvn -Drelease
```
This will activate the release profile, including the code signing procedure and executing the the _deploy_ goal. During the deployment process you will be asked to provide your private key password which will be needed for signing the artifacts.

If you have more than one key in your private GnuPG key ring, you will also have to provide the id which you want to use for signing:
```
mvn -Drelease -Dgpg.keyname=<your key ID>
```
If you want to invoke custom goals, this can easily be done:
```
mvn -Drelease clean deploy
```

If the release is a SNAPSHOT version, you are done at this point.

If it is an official release, you need to review the artifacts now staged at [Sonatype OSS Nexus](http://oss.sonatype.org/index.html) and promote them to the central Maven repository as described in the ["Promoting staged Artifacts"](http://nexus.sonatype.org/oss-repository-hosting.html#6) section of the Sonatype OSS documentation.

**Please note that this will not work unless you have sufficient credentials at Sonatype OSS Nexus**