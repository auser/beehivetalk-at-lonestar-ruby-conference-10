!SLIDE center black
# Basics #

!SLIDE
<pre class="sunburst"><span class="Comment"><span class="Comment">#</span> First, get a token</span>&#x000A;HOST=localhost:8080&#x000A;TOKEN=<span class="String"><span class="String">`</span>curl -i -XPOST -d '{&quot;email&quot;\:&quot;root@getbeehive.com&quot;,
	&quot;password&quot;: &quot;test&quot;}' $HOST/auth.json<span class="String">`</span></span></pre>

!SLIDE
<pre class="sunburst"><span class="Comment"><span class="Comment">#</span> Now, we have a token for future requests</span>&#x000A;<span class="Comment"><span class="Comment">#</span> Add a user</span>&#x000A;curl -i -XPOST -d<span class="String"><span class="String">&quot;</span>{<span class="Constant">\&quot;</span>email<span class="Constant">\&quot;</span>:<span class="Constant">\&quot;</span>arilerner@mac.com<span class="Constant">\&quot;</span>,<span class="Constant">
	\&quot;</span>password<span class="Constant">\&quot;</span>:<span class="Constant">\&quot;</span>myuniquepassword<span class="Constant">\&quot;</span>, <span class="Constant">\&quot;</span>level<span class="Constant">\&quot;</span>:<span class="Constant">\&quot;</span>1<span class="Constant">\&quot;</span>,
	<span class="Constant">\&quot;</span>token<span class="Constant">\&quot;</span>:<span class="Variable"><span class="Variable">$</span>TOKEN</span>}<span class="String">&quot;</span></span> <span class="Variable"><span class="Variable">$</span>HOST</span>/users/new.json</pre>

!SLIDE
<pre class="sunburst"><span class="Comment"><span class="Comment">#</span> Let's add an application</span>&#x000A;curl -i -XPOST -d<span class="String"><span class="String">&quot;</span>{<span class="Constant">\&quot;</span>name<span class="Constant">\&quot;</span>:<span class="Constant">\&quot;</span>beehive<span class="Constant">\&quot;</span>,
	<span class="Constant">\&quot;</span>url<span class="Constant">\&quot;</span>:<span class="Constant">\&quot;</span>git://github.com/auser/getbeehive.com.git<span class="Constant">\&quot;</span>,
	<span class="Constant">\&quot;</span>token<span class="Constant">\&quot;</span>:<span class="Variable"><span class="Variable">$</span>TOKEN</span>, <span class="Constant">\&quot;</span>template<span class="Constant">\&quot;</span>:<span class="Constant">\&quot;</span>rack<span class="Constant">\&quot;</span>}<span class="String">&quot;</span></span> <span class="Variable"><span class="Variable">$</span>HOST</span>/apps.json</pre>

!SLIDE 
<pre class="sunburst"><span class="Comment"><span class="Comment">#</span> How about one that will fail?</span>&#x000A;curl -i -XPOST -d<span class="String"><span class="String">&quot;</span>{<span class="Constant">\&quot;</span>name<span class="Constant">\&quot;</span>:<span class="Constant">\&quot;</span>fake<span class="Constant">\&quot;</span>,
	<span class="Constant">\&quot;</span>url<span class="Constant">\&quot;</span>:<span class="Constant">\&quot;</span>http://github.com/auser/doesnt_exist.git<span class="Constant">\&quot;</span>, 
	<span class="Constant">\&quot;</span>token<span class="Constant">\&quot;</span>:<span class="Variable"><span class="Variable">$</span>TOKEN</span>, <span class="Constant">\&quot;</span>template<span class="Constant">\&quot;</span>:<span class="Constant">\&quot;</span>rails<span class="Constant">\&quot;</span>}<span class="String">&quot;</span></span> <span class="Variable"><span class="Variable">$</span>HOST</span>/apps.json&#x000A;&#x000A;<span class="Comment"><span class="Comment">#</span> Let's fix that</span>&#x000A;curl -i -XPUT -d<span class="String"><span class="String">&quot;</span>{<span class="Constant">\&quot;</span>name<span class="Constant">\&quot;</span>:<span class="Constant">\&quot;</span>fake<span class="Constant">\&quot;</span>,
	<span class="Constant">\&quot;</span>url<span class="Constant">\&quot;</span>:<span class="Constant">\&quot;</span>http://github.com/auser/getbeehive.com.git<span class="Constant">\&quot;</span>,
	<span class="Constant">\&quot;</span>token<span class="Constant">\&quot;</span>:<span class="Variable"><span class="Variable">$</span>TOKEN</span>, <span class="Constant">\&quot;</span>template<span class="Constant">\&quot;</span>:<span class="Constant">\&quot;</span>rails<span class="Constant">\&quot;</span>}<span class="String">&quot;</span></span> <span class="Variable"><span class="Variable">$</span>HOST</span>/apps/fake.json</pre>

!SLIDE 
<pre class="sunburst"><span class="Comment"><span class="Comment">#</span> Check on the application</span>&#x000A;curl -i <span class="Variable"><span class="Variable">$</span>HOST</span>/apps.json</pre>

!SLIDE 
<pre class="sunburst"><span class="Comment"><span class="Comment">#</span> Update the app</span>&#x000A;curl -i -XPOST -d<span class="String"><span class="String">&quot;</span>{<span class="Constant">\&quot;</span>name<span class="Constant">\&quot;</span>:<span class="Constant">\&quot;</span>beehive<span class="Constant">\&quot;</span>, 
	<span class="Constant">\&quot;</span>token<span class="Constant">\&quot;</span>:<span class="Variable"><span class="Variable">$</span>TOKEN</span>}<span class="String">&quot;</span></span> <span class="Variable"><span class="Variable">$</span>HOST</span>/apps/beehive/deploy.json&#x000A;&#x000A;<span class="Comment"><span class="Comment">#</span> Expand the app</span>&#x000A;curl -i -XPOST -d<span class="String"><span class="String">&quot;</span>{<span class="Constant">\&quot;</span>name<span class="Constant">\&quot;</span>:<span class="Constant">\&quot;</span>beehive<span class="Constant">\&quot;</span>,
	<span class="Constant">\&quot;</span>token<span class="Constant">\&quot;</span>:<span class="Variable"><span class="Variable">$</span>TOKEN</span>}<span class="String">&quot;</span></span> <span class="Variable"><span class="Variable">$</span>HOST</span>/apps/beehive/expand.json&#x000A;</pre>

!SLIDE
<pre class="sunburst">&#x000A;<span class="Comment"><span class="Comment">#</span> Delete the app we added</span>&#x000A;curl -i -XDELETE -d<span class="String"><span class="String">&quot;</span>{<span class="Constant">\&quot;</span>token<span class="Constant">\&quot;</span>:<span class="Variable"><span class="Variable">$</span>TOKEN</span>}<span class="String">&quot;</span></span> <span class="Variable"><span class="Variable">$</span>HOST</span>/apps/beehive.json</pre>
