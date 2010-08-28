!SLIDE center
# How to work with it #



!SLIDE center
# Define an app #

!SLIDE code
<pre class="sunburst">$ curl -XPOST <span class="Variable"><span class="Variable">$</span>HOST</span>/apps</pre>
<pre class="sunburst">$ <span class="String"><span class="String">`</span>beehive create<span class="String">`</span></span></pre>

!SLIDE center black

![beehive create](images/app_create.png)

!SLIDE center
# Deploy an app #

!SLIDE code
<pre class="sunburst">curl -i -XPOST
	-d <span class="String"><span class="String">&quot;</span>{‘name’:‘beehive’, ‘token’:‘token’}<span class="String">&quot;</span></span> <span class="Variable">
	<span class="Variable">$</span>HOST</span>/apps/beehive/deploy</pre>

!SLIDE center bullets incremental 
# Beehive will then... #

 * Check out and bundle the application, checking for errors
 * Start the application, if it can
 * Route requests to the newly deployed bee

!SLIDE center black
![deploy and app](images/deploy_app.png)

!SLIDE center ready_to_go
# Ready to go! #

!SLIDE center deploy_time
# Deploy time #
<h2>seconds<div class="smallest">after creating the app</div></h2>

## `git push` ##
