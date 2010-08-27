!SLIDE center
# How it works #

!SLIDE center
# Define an app #

!SLIDE code
<pre class="sunburst">$ curl -XPOST <span class="Variable"><span class="Variable">$</span>HOST</span>/apps</pre>
<pre class="sunburst">$ <span class="String"><span class="String">`</span>beehive create<span class="String">`</span></span></pre>

!SLIDE center black

![git push](images/git_push.png)

!SLIDE center black

![beehive create](images/app_create.png)

!SLIDE center
# Deploy an app #

!SLIDE code
<pre class="sunburst">curl -i -XPOST
	-d <span class="String"><span class="String">&quot;</span>{‘name’:‘beehive’, ‘token’:‘token’}<span class="String">&quot;</span></span> <span class="Variable">
	<span class="Variable">$</span>HOST</span>/apps/beehive/deploy</pre>

!SLIDE center black
![deploy and app](images/deploy_app.png)

!SLIDE center ready_to_go
# Ready to go! #

!SLIDE center deploy_time
# Deploy time #

## seconds ##

<pre><code>git push</code></pre>
